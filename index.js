/**
 * @format
 */

import { Navigation } from "react-native-navigation";
import CenterComponent from './components/center.component.js';
import SideComponent from './components/side.component.js';

Navigation.registerComponent(`SideComponent`, () => SideComponent);
Navigation.registerComponent(`CenterComponent`, () => CenterComponent);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      sideMenu: {
        left: {
          component: {
            name: 'SideComponent',
          }
        },
        center: {
          stack: {
            children: [{
              component: {
                name: 'CenterComponent',
              }
            }],
            options: {
              topBar: {
                visible: true,
                title: {
                  text: 'Test RNN SideMenu',
                },
              }
            }
          }
        }
      }
    }
  });
});
