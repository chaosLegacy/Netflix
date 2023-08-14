import { Platform } from 'react-native';

import TabBarItem from '../TabBarItem';
import { View } from '../Themed';

import cssStyles from '@/styles/root-layout.module.scss';

import { Text } from '@/components/atoms/Text';
import { cns, useWidth } from '@/utils';

const SideBarTabItem = ({
  children,
  icon,
  name,
}: {
  children: never;
  icon: (props: { focused?: boolean; color: string }) => JSX.Element;
  name: string;
}) => {
  const isLarge = useWidth(1265);

  return (
    <TabBarItem
      name={name}
      id={name}
      //   accessibilityHasPopup="menu"
      style={{
        paddingVertical: 4,
        width: '100%',
      }}>
      {({ focused, hovered }: { focused: boolean; hovered: boolean }) => (
        <View
          style={[
            {
              padding: 12,
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 999,
              //   transitionProperty: ['background-color', 'box-shadow'],
              //   transitionDuration: '200ms',
            },
            hovered && {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          ]}>
          <View
            style={[
              {
                transitionTimingFunction: 'cubic-bezier(0.17, 0.17, 0, 1)',
                // transitionProperty: ['transform'],
                // transitionDuration: '150ms',
              },
              hovered && {
                transform: [{ scale: 1.1 }],
              },
            ]}>
            {icon({
              focused,
              color: '#000',
            })}
          </View>

          <Text
            style={[
              {
                color: '#000',
                fontSize: 16,
                marginLeft: 16,
                marginRight: 16,
                lineHeight: 24,
              },
              ...Platform.select({
                default: [
                  {
                    display: isLarge ? 'flex' : 'none',
                  } as const,
                ],
                web: [cns(cssStyles.sideBarTabItemText)],
              }),
              focused && {
                fontWeight: 'bold',
              },
            ]}>
            {children}
          </Text>
        </View>
      )}
    </TabBarItem>
  );
};

export default SideBarTabItem;
