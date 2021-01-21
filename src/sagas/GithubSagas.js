import { call, put } from 'redux-saga/effects';
import { get } from 'lodash';
import GithubRedux from 'stores/GithubRedux';

export default function* getUserAvatar(api, action) {
  const { username } = action;
  // make the call to the api
  const response = yield call(api.getUser, username);
  if (response.ok) {
    const firstUser = get(response, 'data.items')[0];
    const avatar = firstUser.avatar_url;
    // do data conversion here if needed
    yield put(GithubRedux.userSuccess(avatar));
  } else {
    yield put(GithubRedux.userFailure());
  }
}
