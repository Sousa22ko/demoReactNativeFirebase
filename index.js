/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import bgNotification from './bgNotification';

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgNotification);
