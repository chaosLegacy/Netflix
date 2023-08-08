import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';

import { Feather } from '@expo/vector-icons';

import { View } from '../Themed';

import styles from './styles';

import { Text } from '@/components/atoms/Text';
import { Episode } from '@/types';

type EpisodeProps = {
  episode: Episode;
};
const EpisodeItem = ({ episode }: EpisodeProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowRoot}>
        <View style={styles.rowContainer}>
          <TouchableOpacity>
            <Image style={styles.cover} source={{ uri: episode.poster }} />
            <View style={styles.buttonContainer} />
            <Feather
              name="play-circle"
              size={50}
              color="white"
              style={styles.buttonIcon}
            />
          </TouchableOpacity>
          <View style={styles.episodeDetail}>
            <Text fontWeight="600">{episode.title}</Text>
            <Text color="secondary" fontSize="sm">
              {episode.duration}
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          <Feather name="download" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <ViewMoreText
        numberOfLines={3}
        renderViewMore={(onPress) => <Text onPress={onPress}>View more</Text>}
        renderViewLess={(onPress) => <Text onPress={onPress}>View less</Text>}>
        <Text color="secondary">Cast: {episode.plot}</Text>
      </ViewMoreText>
    </View>
  );
};

export default EpisodeItem;
