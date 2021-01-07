import { put, select } from 'redux-saga/effects';
import { isString } from 'lodash';
import GitHubRedux, { GithubSelectors } from '../redux/GithubRedux';
import DebugConfig from '../config/DebugConfig';

// exported to make available for tests
export const { selectAvatar } = GithubSelectors;

// process STARTUP actions
export function* startup() {
  if (DebugConfig.useReactotron && console.tron) {
    // straight-up string logging
    console.tron.log('Hello, I\'m an example of how to log via Reactotron.');

    // logging an object for better clarity
    console.tron.log({
      message: 'pass objects for better logging',
      someGeneratorFunction: selectAvatar,
    });

    // fully customized!
    const subObject = { a: 1, b: [1, 2, 3], c: true };
    subObject.circularDependency = subObject; // osnap!
    console.tron.display({
      name: '🔥 DRIVERS APP 🔥',
      preview: 'You should totally expand this',
      value: {
        '💃': 'Welcome to the future!',
        subObject,
        someInlineFunction: () => true,
        someGeneratorFunction: startup,
        someNormalFunction: selectAvatar,
      },
    });
  }
  const avatar = yield select(selectAvatar);
  // only get if we don't have it yet
  if (!isString(avatar)) {
    yield put(GitHubRedux.userRequest('marcesdan'));
  }
}
