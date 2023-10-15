import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import { StyleSheet, View } from 'react-native';
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

export function bottomSheet() {
const [isVisible, setIsVisible] = useState(false);
const list = [
  { title: 'Content 1' },
  { title: 'Content 2' },
  { title: 'Content 3' },
  { title: 'Content 4' },
  { title: 'Content 5' },
  {
    title: 'Cancel',
    containerStyle: { backgroundColor: 'darkred' },
    titleStyle: { color: 'white' },
    onPress: () => setIsVisible(false),
  },
];
return (
  <View>
    <Button
      title="Open Sheet"
      onPress={() => setIsVisible(true)}
      buttonStyle={{margin: 50,}}
    />
    <BottomSheet modalProps={{}} isVisible={isVisible}>
      {list.map((j, c) => (
        <ListItem
          key={c}
          containerStyle={j.containerStyle}
          onPress={j.onPress}
        >
          <ListItem.Content>
            <ListItem.Title style={j.titleStyle}>{j.title}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </BottomSheet>
    <View style={{padding:20}}>
      <BackButton/>
    </View> 
  </View>
);
};
