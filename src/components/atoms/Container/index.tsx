import React from 'react';

import styles from './styles';

import { View } from '@/components/molecules/Themed';

type ContainerProps = {
  children: React.ReactNode;
};
const Container = ({ children }: ContainerProps) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;
