import { StyleProp, ViewStyle } from 'react-native';

import { Icon, IconTypes } from '@/components/atoms/Icon';

export function makeIcon(name: IconTypes) {
  return (props: {
    focused?: boolean;
    style?: StyleProp<ViewStyle>;
    color: string;
  }) => <TabBarIcon name={name} {...props} />;
}

const TabBarIcon = ({
  focused,
  ...props
}: {
  name: IconTypes;
  focused?: boolean;
  color: string;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <Icon
      style={[{ width: 22, height: 22 }, props.style]}
      {...props}
      name={props.name}
      fill={focused ? 'red' : props.color}
    />
  );
};

export default TabBarIcon;
