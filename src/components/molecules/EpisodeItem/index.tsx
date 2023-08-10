import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';

import { Feather } from '@expo/vector-icons';
import { Skeleton } from 'moti/skeleton';

import { View } from '../Themed';

import styles from './styles';

import { Text } from '@/components/atoms/Text';
import { useGetStorage } from '@/hooks/useStorage';
import { LazyEpisode } from '@/models';

type EpisodeProps = {
  episode: LazyEpisode;
  onPress: (episode: LazyEpisode) => void;
};
const EpisodeItem = ({ episode, onPress }: EpisodeProps) => {
  const { data: posterUrl, loading } = useGetStorage(episode.poster);
  return (
    <View style={styles.container}>
      <View style={styles.rowRoot}>
        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={() => onPress(episode)}>
            <Skeleton
              show={loading}
              width={styles.cover.width}
              height={styles.cover.height}>
              {posterUrl ? (
                <Image style={styles.cover} source={{ uri: posterUrl }} />
              ) : null}
            </Skeleton>
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
