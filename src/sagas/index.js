import { all, takeLatest } from 'redux-saga/effects';
import { DriversTypes } from 'stores/DriversRedux';
import GitHubSrv from 'services/GitHubService';
import DriversSrv from 'services/DriversService';
// import DebugConfig from '../config/DebugConfig';
/* ------------- Types ------------- */
import { StartupTypes } from 'stores/StartupRedux';
import { GithubTypes } from 'stores/GithubRedux';

/* ------------- Sagas ------------- */
import { startup } from 'sagas//StartupSagas';
import getUserAvatar from 'sagas/GithubSagas';
import { getEnabledDomains, registerDriver } from 'sagas/DriversSagas';

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : DriversService.create();
// const driversSrv = DebugConfig.useFixtures ? FixtureDrivers : DriversSrv.create();
const driversSrv = DriversSrv.create();
const gitHubSrv = GitHubSrv.create();

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // some sagas only receive an action
    takeLatest(StartupTypes.STARTUP, startup),
    // some sagas receive extra parameters in addition to an action
    takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, gitHubSrv),
    takeLatest(DriversTypes.ENABLED_DOMAINS_REQUEST, getEnabledDomains, driversSrv),
    takeLatest(DriversTypes.DRIVERS_REGISTER_REQUEST, registerDriver, driversSrv),
  ]);
}
