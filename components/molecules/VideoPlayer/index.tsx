import React from 'react';
import { View } from 'react-native';

import { AVPlaybackStatus, ResizeMode, Video } from 'expo-av';

import styles from './styles';

import { Episode } from '@/types';

type VideoPlayerProps = {
  episode?: Episode;
  videoRef: React.RefObject<Video>;
  setVideoStatus: React.Dispatch<
    React.SetStateAction<AVPlaybackStatus | undefined>
  >;
};
const VideoPlayer = ({
  episode,
  videoRef,
  setVideoStatus,
}: VideoPlayerProps) => {
  console.log(episode);
  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        style={styles.video}
        source={{
          uri: episode.video,
        }}
        posterSource={{
          uri: episode.poster,
        }}
        posterStyle={{
          resizeMode: ResizeMode.COVER,
        }}
        usePoster
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={(status) => setVideoStatus(() => status)}
      />
      {/* {status?.isLoaded && (
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying
              ? videoRef.current?.pauseAsync()
              : videoRef.current?.playAsync()
          }
        />
      )} */}
    </View>
  );
};

export default VideoPlayer;
