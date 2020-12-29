import { atom, selector } from 'recoil';

export default atom({
  key: 'domains',
  default: {},
});

export const enabledDomains = selector({
  key: 'enabledDomains',
  get: ({ get }) => get(),
});
