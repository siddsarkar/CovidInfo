module.exports = {
  root: true,
  extends: ['@react-native-community'],
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'react-native/no-inline-styles': 'off',
    'prettier/prettier': 'off',
    'no-alert': 'off',
    eqeqeq: 'off',
  },
};
