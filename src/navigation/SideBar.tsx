import { Platform } from 'react-native';

import cssStyles from '@/styles/root-layout.module.scss';

import HeaderLogo from '@/components/molecules/HeaderLogo';
import SideBarTabItem from '@/components/molecules/SideBarTabItem';
import { makeIcon } from '@/components/molecules/TabBarIcon';
import { View } from '@/components/molecules/Themed';
import { NAV_MEDIUM_WIDTH } from '@/constants';
import { jsStyles } from '@/constants/StyleGlobal';
import { cns, useWidth } from '@/utils';

const SideBar = ({ visible }: { visible: boolean }) => {
  const isLarge = useWidth(1265);

  return (
    <View
      style={[
        jsStyles.sideBar,
        ...Platform.select({
          default: [
            !visible &&
              ({
                display: 'none',
              } as const),
            isLarge && {
              minWidth: NAV_MEDIUM_WIDTH,
            },
          ],
          web: [cns(cssStyles.largeVisible, cssStyles.sideBar)],
        }),
      ]}>
      <View
        style={[
          jsStyles.sidebarInner,
          ...Platform.select({
            default: [
              isLarge &&
                ({
                  width: NAV_MEDIUM_WIDTH,
                  minWidth: NAV_MEDIUM_WIDTH,
                  alignItems: 'flex-start',
                } as const),
            ],
            web: [cns(cssStyles.sideBarInner)],
          }),
        ]}>
        <View
          style={[
            jsStyles.sidebarInner2,
            ...Platform.select({
              default: [
                !isLarge &&
                  ({
                    alignItems: 'center',
                  } as const),
              ],
              web: [cns(cssStyles.sideBarHeader)],
            }),
          ]}>
          <HeaderLogo />

          <View style={{ gap: 4, flex: 1 }}>
            <SideBarTabItem name="index" icon={makeIcon('HomeIcon')}>
              Home
            </SideBarTabItem>
            <SideBarTabItem name="explore" icon={makeIcon('ExploreIcon')}>
              Explore
            </SideBarTabItem>
            {/* Divider */}
          </View>
          <View>
            <SideBarTabItem name="/more" icon={makeIcon('MoreIcon')}>
              More
            </SideBarTabItem>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SideBar;
