import React, { useEffect, useRef, useState } from 'react';
import { useColorScheme } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ViewMoreText from 'react-native-view-more-text';

import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { AVPlaybackStatus, Video } from 'expo-av';

import pickerSelectStyles from './pickerSelectStyles';
import styles from './styles';

import movie from '@/assets/data/movie';
import AgeRating from '@/components/atoms/AgeRating';
import { Button } from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Resolution from '@/components/atoms/Resolution';
import { Text } from '@/components/atoms/Text';
import { View } from '@/components/molecules/Themed';
import VideoPlayer from '@/components/molecules/VideoPlayer';
import EpisodesList from '@/components/organisms/EpisodesList';
import Colors from '@/constants/Colors';
import { DetailScreenRouteType, Episode, Season } from '@/types';

const DetailPageTemplate = () => {
  const theme = useColorScheme() ?? 'light';
  const reverseTheme = theme === 'light' ? 'dark' : 'light';
  const { params } = useRoute<DetailScreenRouteType>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id } = params;

  const firstSeason = movie.seasons.items[0];
  const firstEpisode = firstSeason.episodes.items[0];
  const availableSeasons = movie.seasons.items.map(({ id, name }) => ({
    label: name,
    value: id,
  })); // movie.seasons.items.map((season) => season.name);

  const [currentEpisode, setCurrentEpisode] = useState<Episode>();
  const [selectedSeason, setSelectedSeason] = useState<Season>();
  const [status, setStatus] = useState<AVPlaybackStatus>();

  useEffect(() => {
    setSelectedSeason(firstSeason);
    setCurrentEpisode(firstEpisode);
  }, []);
  const videoRef = useRef<Video>(null);
  const isVideoPlaying = status?.isLoaded && status.isPlaying;
  const onPlayPress = () => {
    if (status?.isLoaded) {
      status.isPlaying
        ? videoRef.current?.pauseAsync()
        : videoRef.current?.playAsync();
    }
  };
  const playSelectedEpisode = (episode: Episode) => {
    videoRef.current?.stopAsync();
    setCurrentEpisode(episode);
    videoRef.current?.playAsync();
  };

  if (!selectedSeason) return <View />;
  return (
    <View style={styles.container}>
      <VideoPlayer
        episode={currentEpisode}
        videoRef={videoRef}
        setVideoStatus={setStatus}
      />
      {/* <Image style={styles.cover} source={{ uri: firstEpisode.poster }} /> */}
      <Container>
        <EpisodesList
          onPress={playSelectedEpisode}
          episodesList={selectedSeason.episodes.items}
          headerComponent={
            <View>
              <Text fontWeight="bold" fontSize="3xl">
                {movie.title}
              </Text>
              <View style={styles.rowContainer}>
                <Text style={styles.match} fontWeight="bold" fontSize="xl">
                  98% match
                </Text>
                <Text style={styles.item} color="secondary">
                  {movie.year}
                </Text>
                <AgeRating style={styles.item} category="12" />
                <Text style={styles.item} color="secondary">
                  {movie.seasons.items.length} Seasons
                </Text>
                <Resolution style={styles.item} category="hd" size={33} />
              </View>
              <Button
                label={isVideoPlaying ? 'Play' : 'Pause'}
                onPress={onPlayPress}
                childrenPosition="left"
                size="large"
                style={styles.button}>
                <FontAwesome5
                  name={isVideoPlaying ? 'play' : 'pause'}
                  size={18}
                  color={Colors[reverseTheme].primary.text}
                />
              </Button>
              <Button
                label="Download"
                onPress={onPlayPress}
                childrenPosition="left"
                type="outline"
                size="large"
                style={styles.button}>
                <FontAwesome5
                  name="download"
                  size={18}
                  color={Colors[theme].secondary.text}
                />
              </Button>
              <View style={styles.detailsContainer}>
                <ViewMoreText
                  numberOfLines={3}
                  renderViewMore={(onPress) => (
                    <Text onPress={onPress}>View more</Text>
                  )}
                  renderViewLess={(onPress) => (
                    <Text onPress={onPress}>View less</Text>
                  )}>
                  <Text fontSize="xl">{movie.plot}</Text>
                </ViewMoreText>
                <View style={styles.detailsContainer}>
                  <ViewMoreText
                    numberOfLines={1}
                    renderViewMore={(onPress) => (
                      <Text onPress={onPress}>View more</Text>
                    )}
                    renderViewLess={(onPress) => (
                      <Text onPress={onPress}>View less</Text>
                    )}>
                    <Text color="secondary">Cast: {movie.cast}</Text>
                  </ViewMoreText>
                  <Text color="secondary">Creator: {movie.creator}</Text>
                </View>
              </View>
              <View style={styles.rowContainer}>
                <Button
                  label="My List"
                  onPress={onPlayPress}
                  type="link"
                  size="small"
                  textColor={Colors[theme].secondary.text}
                  childrenPosition="bottom"
                  style={styles.buttonHorizontal}>
                  <FontAwesome5
                    name="plus"
                    size={24}
                    color={Colors[theme].secondary.text}
                  />
                </Button>

                <Button
                  label="Rate"
                  onPress={onPlayPress}
                  type="link"
                  size="small"
                  textColor={Colors[theme].secondary.text}
                  childrenPosition="bottom"
                  style={styles.buttonHorizontal}>
                  <Feather
                    name="thumbs-up"
                    size={24}
                    color={Colors[theme].secondary.text}
                  />
                </Button>

                <Button
                  label="Share"
                  onPress={onPlayPress}
                  type="link"
                  size="small"
                  textColor={Colors[theme].secondary.text}
                  childrenPosition="bottom"
                  style={styles.buttonHorizontal}>
                  <FontAwesome5
                    name="share"
                    size={24}
                    color={Colors[theme].secondary.text}
                  />
                </Button>
              </View>

              <RNPickerSelect
                placeholder={{
                  label: 'Select a season',
                  value: null,
                }}
                onValueChange={(value) => {
                  if (!value) {
                    return;
                  }
                  setSelectedSeason(
                    movie.seasons.items.find((item) => item.id === value),
                  );
                }}
                style={pickerSelectStyles}
                useNativeAndroidPickerStyle={false}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                //@ts-ignore
                textInputProps={{ color: Colors[theme].secondary.text }}
                items={availableSeasons}
                // Bug in Icon type, change from Icon?: React.ReactNode; to Icon?: React.FC;
                Icon={() => (
                  <Ionicons
                    name="chevron-down"
                    size={21}
                    color={Colors[theme].secondary.text}
                  />
                )}
              />
            </View>
          }
        />
      </Container>
    </View>
  );
};

export default DetailPageTemplate;
