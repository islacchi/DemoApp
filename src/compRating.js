import React from 'react';
import { View, ScrollView, Button, Platform } from 'react-native';
import { AirbnbRating } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { Rating } from '@rneui/themed';

function BackButton() {
    const navigation = useNavigation();
    return (
      <Button
        title="BACK"
        onPress={() => {
          navigation.goBack();
        }}
      />
    );
  }

export function Ratings () {
  const ratingCompleted = (rating) => {
    console.log('Rating is: ' + rating);
  };
  return (
    <View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <AirbnbRating />
          <AirbnbRating
            count={11}
            reviews={[
              'Terrible',
              'Bad',
              'Meh',
              'OK',
              'Good',
              'Hmm...',
              'Very Good',
              'Wow',
              'Amazing',
              'Unbelievable',
              'Jesus',
            ]}
            defaultRating={11}
            size={20}
          />
        </View>
    </ScrollView>
      
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 30,
          }}
        >
          <Rating
            showRating
            imageSize={40}
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          <Rating
            showRating
            type="star"
            fractions={1}
            startingValue={3.6}
            readonly
            imageSize={40}
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type="custom"
            ratingColor="#3498db"
            ratingCount={10}
            imageSize={30}
            onFinishRating={ratingCompleted}
            showRating
            style={{ paddingVertical: 10 }}
          />
          <Rating
            type="heart"
            ratingCount={3}
            fractions={2}
            startingValue={1.57}
            imageSize={40}
            onFinishRating={ratingCompleted}
            showRating
          />
        </View>
      <View style={{padding:20}}>
        <BackButton />
      </View> 
    </View>
  );
};

