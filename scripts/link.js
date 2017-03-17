

const execSync = require('child_process').execSync;
const process = require('process');

// TODO (Ivan): Read native dependencies from package.json
const nativeDependencies = [
  'react-native-spinkit',
  'react-native-linear-gradient',
];

const reactNativeLocalCli = 'node node_modules/react-native/local-cli/cli.js';
const linkCommands = nativeDependencies.map(dependency => `${reactNativeLocalCli} link ${dependency}`);

console.log('[react-native-button-component] - linking native dependencies');

execSync(linkCommands.join(' && '), (error, stdout, stderr) => {
  console.log(stdout);
  console.log(stderr);
  if (error !== null) {
    console.log(`Linking error: ${error}`);
    process.exit(1);
  }
  console.log('[react-native-button-component] - native dependencies linked');
});
