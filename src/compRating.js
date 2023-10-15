import React from 'react';
import { StyleSheet, View, ScrollView,Button } from 'react-native';
import { AirbnbRating } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

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
    <View style={styles.container}>
      <ScrollView style={styles.viewContainer}>
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
      <BackButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
  },
});