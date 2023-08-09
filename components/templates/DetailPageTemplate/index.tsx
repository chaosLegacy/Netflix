import React, { useEffect, useRef, useState } from 'react';
import { useColorScheme } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import ViewMoreText from 'react-native-view-more-text';

import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { AVPlaybackStatus, Video } from 'expo-av';
import { Skeleton } from 'moti/skeleton';

import pickerSelectStyles from './pickerSelectStyles';
import styles from './styles';

import AgeRating from '@/components/atoms/AgeRating';
import { Button } from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Resolution from '@/components/atoms/Resolution';
import { Text } from '@/components/atoms/Text';
import { View } from '@/components/molecules/Themed';
import VideoPlayer from '@/components/molecules/VideoPlayer';
import EpisodesList from '@/components/organisms/EpisodesList';
import Colors from '@/constants/Colors';
import { useGetEpisodes } from '@/hooks/useEpisode';
import { useGetMovieByID } from '@/hooks/useMovie';
import { useGetSeasons } from '@/hooks/useSeason';
import { LazyEpisode, LazySeason } from '@/models';
import { DetailScreenRouteType } from '@/types';

const DetailPageTemplate = () => {
  const theme = useColorScheme() ?? 'light';
  const reverseTheme = theme === 'light' ? 'dark' : 'light';
  const { params } = useRoute<DetailScreenRouteType>();
  const { id } = params;
  const [seasons, setSeasons] = useState<LazySeason[]>();
  const [currentSeason, setCurrentSeason] = useState<LazySeason>();
  const [currentEpisode, setCurrentEpisode] = useState<LazyEpisode>();
  const videoStatus = useState<AVPlaybackStatus>();

  const availableSeasons = seasons?.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  const { data: movie, loading: loadingMovie } = useGetMovieByID(id);
  const { data: movieSeasons, loading: loadingMovieSeasons } =
    useGetSeasons(id);
  const { data: movieEpisodes, loading: loadingMovieEpisodes } = useGetEpisodes(
    currentSeason?.id,
  );

  useEffect(() => {
    setSeasons(movieSeasons);
    if (movieSeasons?.length) {
      setCurrentSeason(movieSeasons[0]);
    }
  }, [movieSeasons]);

  useEffect(() => {
    if (movieEpisodes?.length) setCurrentEpisode(movieEpisodes[0]);
  }, [movieEpisodes]);

  const videoRef = useRef<Video>(null);
  const currentVideoStatus = videoStatus[0];
  const onPlayPress = () => {
    if (currentVideoStatus?.isLoaded) {
      currentVideoStatus.isPlaying
        ? videoRef.current!.pauseAsync()
        : videoRef.current!.playAsync();

      if (
        currentVideoStatus.durationMillis === currentVideoStatus.positionMillis
      ) {
        console.log('videos finished: should replay');
        // videoRef.current!.replayAsync();
        videoRef.current!.stopAsync();
        videoRef.current!.playAsync();
      }
    }
  };
  const isVideoPlaying =
    currentVideoStatus?.isLoaded && currentVideoStatus.isPlaying;
  const playSelectedEpisode = (episode: LazyEpisode) => {
    videoRef.current!.stopAsync();
    setCurrentEpisode(episode);
    // if (currentVideoStatus?.isLoaded) videoRef.current?.playAsync();
  };

  return (
    <View style={styles.container}>
      <Skeleton show={loadingMovieEpisodes}>
        {currentEpisode ? (
          <VideoPlayer
            episode={currentEpisode}
            videoRef={videoRef}
            videoStatus={videoStatus}
          />
        ) : null}
      </Skeleton>
      <Container>
        <EpisodesList
          onPress={playSelectedEpisode}
          episodesList={movieEpisodes}
          headerComponent={
            <View>
              <Skeleton show={loadingMovie}>
                {movie ? (
                  <Text fontWeight="bold" fontSize="3xl">
                    {movie.title}
                  </Text>
                ) : null}
              </Skeleton>
              <View style={styles.rowContainer}>
                <Text style={styles.match} fontWeight="bold" fontSize="xl">
                  98% match
                </Text>
                <Skeleton show={loadingMovie}>
                  {movie ? (
                    <Text style={styles.item} color="secondary">
                      {movie.year}
                    </Text>
                  ) : null}
                </Skeleton>
                <AgeRating style={styles.item} category="12" />
                <Skeleton show={loadingMovieSeasons}>
                  {seasons ? (
                    <Text style={styles.item} color="secondary">
                      {seasons.length} Seasons
                    </Text>
                  ) : null}
                </Skeleton>
                <Resolution style={styles.item} category="hd" size={33} />
              </View>
              <Button
                label={
                  !currentVideoStatus?.isLoaded
                    ? 'Play'
                    : isVideoPlaying
                    ? 'Pause'
                    : 'Play'
                }
                onPress={onPlayPress}
                childrenPosition="left"
                size="large"
                style={styles.button}>
                <FontAwesome5
                  name={
                    !currentVideoStatus?.isLoaded
                      ? 'play'
                      : isVideoPlaying
                      ? 'pause'
                      : 'play'
                  }
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
                  <Skeleton show={!movie}>
                    {movie ? <Text fontSize="xl">{movie.plot}</Text> : null}
                  </Skeleton>
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
                    <Skeleton show={!movie}>
                      {movie ? (
                        <Text color="secondary">Cast: {movie.cast}</Text>
                      ) : null}
                    </Skeleton>
                  </ViewMoreText>
                  <Skeleton show={!movie}>
                    {movie ? (
                      <Text color="secondary">Creator: {movie.creator}</Text>
                    ) : null}
                  </Skeleton>
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

              <Skeleton show={loadingMovieSeasons}>
                {seasons && currentSeason ? (
                  <RNPickerSelect
                    placeholder={{
                      label: 'Select a season',
                      value: null,
                    }}
                    onValueChange={(value) => {
                      if (!value) {
                        return;
                      }
                      setCurrentSeason(
                        seasons.find((item) => item.id === value),
                      );
                    }}
                    style={pickerSelectStyles}
                    value={currentSeason.id}
                    useNativeAndroidPickerStyle={false}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    //@ts-ignore
                    textInputProps={{ color: Colors[theme].secondary.text }}
                    items={availableSeasons!}
                    // Bug in Icon type, change from Icon?: React.ReactNode; to Icon?: React.FC;
                    Icon={() => (
                      <Ionicons
                        name="chevron-down"
                        size={21}
                        color={Colors[theme].secondary.text}
                      />
                    )}
                  />
                ) : null}
              </Skeleton>
            </View>
          }
        />
      </Container>
    </View>
  );
};

export default DetailPageTemplate;
