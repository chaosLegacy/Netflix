import { Platform, useWindowDimensions } from 'react-native';

const cns = (
  ...classes: (string | false | undefined | null)[]
): Record<string, unknown> => ({
  $$css: true,
  _: classes.filter(Boolean).join(' ') as unknown as string[],
});

const useWidth = (size: number) => {
  if (typeof window === 'undefined') {
    return true;
  }
  const { width } = useWindowDimensions();
  if (Platform.OS === 'ios' || Platform.OS === 'android') {
    return false;
  }
  return width >= size;
};

export { cns, useWidth };
