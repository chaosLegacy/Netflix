import { Text as DefaultText } from 'react-native';

import { Text } from '@/components/atoms/Text';

export function MonoText(props: DefaultText['props']) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return <Text {...props} style={[props.style, { fontFamily: 'SpaceMono' }]} />;
}
