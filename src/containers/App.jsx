import React from 'react';

import '../assets/sass/app.styles.scss';
import { RecoilRoot } from 'recoil';

const App = () => (
  <RecoilRoot>
    <div className="app-container">
      Webpack 5 boilerplate for react using babel, sass, with a hot dev server
      and an optimized production build.
    </div>
  </RecoilRoot>
);

export default App;
