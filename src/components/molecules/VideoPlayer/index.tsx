import React, { useEffect } from 'react';
import { View } from 'react-native';

import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';
import { Skeleton } from 'moti/skeleton';

import styles from './styles';

import { useGetStorage } from '@/hooks/useStorage';
import { LazyEpisode } from '@/models';

type VideoPlayerProps = {
  episode: LazyEpisode;
  videoRef: React.RefObject<Video>;
  videoStatus: [
    AVPlaybackStatus | undefined,
    React.Dispatch<React.SetStateAction<AVPlaybackStatus | undefined>>,
  ];
};
const VideoPlayer = ({ episode, videoRef, videoStatus }: VideoPlayerProps) => {
  const [status, setStatus] = videoStatus;
  const { data: posterUrl } = useGetStorage(episode.poster, episode);
  const { data: videoUrl, loading: loadingVideo } = useGetStorage(
    episode.video,
    episode,
  );

  useEffect(() => {
    if (!videoUrl) {
      return;
    }
    (async () => {
      await videoRef.current?.unloadAsync();
      await videoRef.current?.loadAsync({ uri: videoUrl }, status, false);
      await videoRef.current?.playAsync();
    })();
    () => videoRef.current?.unloadAsync();
  }, [videoUrl]);
  return (
    <View style={styles.container}>
      <Skeleton show={loadingVideo}>
        {videoUrl ? (
          <Video
            ref={videoRef}
            style={styles.video}
            source={{
              uri: videoUrl,
            }}
            posterSource={{
              uri: posterUrl,
            }}
            posterStyle={{
              resizeMode: ResizeMode.COVER,
            }}
            usePoster={
              !status?.isLoaded || !status.isPlaying || status.didJustFinish
            }
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        ) : null}
      </Skeleton>
    </View>
  );
};

export default VideoPlayer;
