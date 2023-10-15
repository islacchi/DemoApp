import React, { useState } from 'react';
import { BottomSheet, Button, ListItem } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

function BackButton() {
  const navigation = useNavigation();
  return (
    <Button
      title="Return"
      style={{}}
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
  <SafeAreaProvider>
    <Button
      title="Open Bottom Sheet"
      onPress={() => setIsVisible(true)}
      buttonStyle={styles.button}
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
    <BackButton />
  </SafeAreaProvider>
);
};

const styles = StyleSheet.create({
button: {
  margin: 50,
},
});
