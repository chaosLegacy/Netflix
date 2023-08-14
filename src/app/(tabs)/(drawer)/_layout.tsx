import {
  createDrawerNavigator,
  DrawerNavigationOptions,
} from '@react-navigation/drawer';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createDrawerNavigator();

export const Drawer = withLayoutContext<
  DrawerNavigationOptions,
  typeof Navigator
>(Navigator);

export default function Layout() {
  return (
    <Drawer
      screenOptions={
        {
          // API Reference: https://reactnavigation.org/docs/drawer-navigator#options
        }
      }
    />
  );
}
