import { call, put } from 'redux-saga/effects';
import DriversRedux from '../redux/DriversRedux';

export function* registerDriver(api, action) {
  const { data } = action;
  // make the call to the api
  const response = yield call(api.register, data);
  if (response.ok) {
    yield put(DriversRedux.driversRegisterSuccess());
  } else {
    yield put(DriversRedux.driversFailure());
  }
}

export function* getEnabledDomains(api) {
  // make the call to the api
  const response = yield call(api.getEnabledDomains);
  if (response.ok) {
    console.tron.log(response);
    // do data conversion here if needed
    yield put(DriversRedux.enabledDomainsSuccess(response.data));
  } else {
    console.tron.log(response);
    yield put(DriversRedux.driversFailure());
  }
}
