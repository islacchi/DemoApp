import React, { useState } from 'react';
import { Switch } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';


export function SwitchC () {
  const [checked, setChecked] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleSwitch = () => {
    setChecked(!checked);
    // Change the background color when the switch is toggled
    setBackgroundColor(checked ? 'white' : 'lightgreen');
  };

  return (
    <View style={[styles.view, { backgroundColor }]}>
      <Switch
        value={checked}
        onValueChange={(value) => toggleSwitch(value)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
    padding: 10,
  },
});
