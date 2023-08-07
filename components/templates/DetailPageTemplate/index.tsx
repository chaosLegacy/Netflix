import React from 'react';
import { Image, useColorScheme } from 'react-native';
import ViewMoreText from 'react-native-view-more-text';

import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';

import styles from './styles';

import movie from '@/assets/data/movie';
import AgeRating from '@/components/atoms/AgeRating';
import { Button } from '@/components/atoms/Button';
import Container from '@/components/atoms/Container';
import Resolution from '@/components/atoms/Resolution';
import { Text } from '@/components/atoms/Text';
import { View } from '@/components/molecules/Themed';
import Colors from '@/constants/Colors';
import { DetailScreenRouteType } from '@/types';

const DetailPageTemplate = () => {
  const theme = useColorScheme() ?? 'light';
  const reverseTheme = theme === 'light' ? 'dark' : 'light';

  const { params } = useRoute<DetailScreenRouteType>();
  const { id } = params;
  const firstEpisode = movie.seasons.items[0].episodes.items[0];

  const onPlayPress = () => {
    console.log('Play...');
  };
  return (
    <View style={styles.container}>
      <Image style={styles.cover} source={{ uri: firstEpisode.poster }} />
      <Container>
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
          label="Play"
          onPress={onPlayPress}
          childrenPosition="left"
          size="large"
          style={styles.button}>
          <FontAwesome5
            name="play"
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
      </Container>
    </View>
  );
};

export default DetailPageTemplate;
