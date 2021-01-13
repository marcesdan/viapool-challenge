export default {
  useReactotron: process.env.NODE_ENV === 'development' && false,
  useMirage: process.env.NODE_ENV === 'development',
};
