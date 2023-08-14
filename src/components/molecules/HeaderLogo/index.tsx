import { Platform, Pressable, useColorScheme } from 'react-native';

import { Link } from 'expo-router';

import { View } from '../Themed';

import cssStyles from '@/styles/root-layout.module.scss';

import { Icon } from '@/components/atoms/Icon';
import { Colors } from '@/constants';
import { jsStyles } from '@/constants/StyleGlobal';
import { cns, useWidth } from '@/utils';

const HeaderLogo = () => {
  const colorScheme = useColorScheme() ?? 'light';
  const isLargeHorizontal = useWidth(1264);
  const isSmallHorizontal = useWidth(768);

  return (
    <Link
      style={[
        { paddingVertical: 20, alignItems: 'flex-start' },
        ...Platform.select({
          default: [
            isSmallHorizontal &&
              !isLargeHorizontal &&
              ({
                paddingTop: 0,
                minHeight: 96,
                marginTop: 12,
                paddingBottom: 23,
                height: 96,
              } as const),
          ],
          web: [cns(cssStyles.headerLink)],
        }),
      ]}
      href="/"
      asChild>
      <Pressable>
        {({ hovered }) => (
          <View
            style={[
              jsStyles.headerLogo,
              {
                backgroundColor: hovered
                  ? Colors[colorScheme].primary.background
                  : 'transparent',
              },
            ]}>
            <Icon
              style={Platform.select({
                default: [!isLargeHorizontal && { display: 'none' }],
                web: [cns(cssStyles.wideVisible)],
              })}
              name="LogoIcon"
              fill={Colors[colorScheme].primary.tint}
            />
            <Icon
              style={Platform.select({
                default: [isLargeHorizontal && { display: 'none' }],
                web: [cns(cssStyles.wideHidden)],
              })}
              name="LogoSmallIcon"
              fill={Colors[colorScheme].primary.tint}
            />
          </View>
        )}
      </Pressable>
    </Link>
  );
};

export default HeaderLogo;
