import { AppRegistry } from 'react-native';
import App from './App'; // ✅ Already includes <Provider store={store}>
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App); // ✅ good
