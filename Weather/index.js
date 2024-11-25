/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { Provider } from 'react-redux';
import { name as appName } from './app.json';
import { RootSiblingParent } from 'react-native-root-siblings';
import store from './src/component/store';

const Root = () => (
    <RootSiblingParent>
        <Provider store={store}>
            <App />
        </Provider>
    </RootSiblingParent>
)
AppRegistry.registerComponent(appName, () => Root);
