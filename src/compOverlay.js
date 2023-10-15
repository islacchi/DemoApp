import React, { useState } from 'react';
import { Button, Overlay } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

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

export function Overlays () {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button
        title="Open Overlay"
        onPress={toggleOverlay}
        buttonStyle={styles.button}
      />
      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text style={styles.prim}>CONTEXT HERE</Text>
        <Text style={styles.sec}>
          Welcome to my life
        </Text>
        <Button
          icon={
            <FontAwesome
              name="heart"
              type="font-awesome"
              color="red"
              size={25}
              style={{marginLeft:5, marginRight:5}}
            />
          }
          title="Start Discovering"
          onPress={toggleOverlay}
        />
      </Overlay>
      <View style={{padding:20}}>
      <BackButton />
    </View> 
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 50,
  },
  prim: {
    margin: 20,
    textAlign: 'center',
    fontSize: 40,
  },
  sec: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: 20,   
  },
});