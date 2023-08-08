/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { FlashList } from '@shopify/flash-list';

import styles from './styles';

import EpisodeItem from '@/components/molecules/EpisodeItem';
import { View } from '@/components/molecules/Themed';
import { Episode } from '@/types';

type EpisodesListProps = {
  episodesList: Episode[];
  headerComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null
    | undefined;
};
const EpisodesList = ({ episodesList, headerComponent }: EpisodesListProps) => {
  return (
    <View style={styles.container}>
      <FlashList
        data={episodesList}
        renderItem={({ item }) => <EpisodeItem episode={item} />}
        estimatedItemSize={200}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
      />
    </View>
  );
};

export default EpisodesList;
