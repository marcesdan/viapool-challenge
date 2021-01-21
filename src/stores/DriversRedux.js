import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  driversRegisterRequest: ['data'],
  driversRegisterSuccess: null,
  driversFailure: null,
  enabledDomainsRequest: null,
  enabledDomainsSuccess: ['data'],
});

export const DriversTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: null,
  error: null,
  enabledDomains: [],
});

/* ------------- Selectors ------------- */

export const DriversSelectors = {
  enabledDomains: (state) => state.drivers.enabledDomains,
};

/* ------------- Reducers ------------- */

// request the avatar for a drivers
export const request = (state) => state.merge({ fetching: true, error: null });

// successful avatar lookup
export const success = (state) => state.merge({ fetching: false, error: null });

// successful avatar lookup
export const domainsSuccess = (state, action) => {
  const { data } = action;
  return state.merge({ fetching: false, error: null, enabledDomains: data });
};

// failed to get the avatar
export const failure = (state) => state.merge({ fetching: false, error: true, avatar: null });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.DRIVERS_REGISTER_REQUEST]: request,
  [Types.DRIVERS_REGISTER_SUCCESS]: success,
  [Types.DRIVERS_FAILURE]: failure,
  [Types.ENABLED_DOMAINS_REQUEST]: request,
  [Types.ENABLED_DOMAINS_SUCCESS]: domainsSuccess,
});
