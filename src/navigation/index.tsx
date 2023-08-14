import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabRouter } from '@react-navigation/native';
import { Navigator } from 'expo-router';

import TabBar from './TabBar';

import cssStyles from '@/styles/root-layout.module.scss';

import { Icon } from '@/components/atoms/Icon';
import { View } from '@/components/molecules/Themed';
import { Colors } from '@/constants';
import { jsStyles } from '@/constants/StyleGlobal';
import { cns, useWidth } from '@/utils';

const AppHeader = ({ visible }: { visible: boolean }) => {
  const { top } = useSafeAreaInsets();
  const height = 60 + top;
  return (
    <>
      <View style={{ height }} />
      <View
        style={[
          Platform.select({
            default: [
              !visible &&
                ({
                  display: 'none',
                } as const),
            ],
            web: [cns(cssStyles.smallVisible)],
          }),
          { height, paddingTop: top },
          jsStyles.appHeader,
        ]}>
        <Icon name="LogoIcon" fill={Colors.light.primary.tint} />
      </View>
    </>
  );
};

export function TabbedNavigator(props: React.ComponentProps<typeof Navigator>) {
  return <Navigator {...props} router={TabRouter} />;
}

const ResponsiveNavigator = () => {
  const isRowLayout = useWidth(768);

  return (
    // <TabbedNavigator
    //   screenOptions={{
    //     tabBarShowLabel: false,
    //     headerShown: false,
    //     tabBarActiveTintColor: 'black',
    //   }}>
    <View
      style={[
        jsStyles.flex1,
        Platform.select({
          default: {
            flexDirection: isRowLayout ? 'row' : 'column',
          },
          web: cns(cssStyles.container),
        }),
      ]}>
      {/* <SideBar visible={isRowLayout} /> */}
      {/* <AppHeader visible={!isRowLayout} /> */}
      {/* <TabbedNavigator.Slot /> */}
      <TabBar visible={!isRowLayout} />
    </View>
    // </TabbedNavigator>
  );
};

export default ResponsiveNavigator;
