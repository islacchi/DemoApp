import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Button} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export function FormsC() {
  const [currency, setCurrency] = useState('US Dollar');
  return (
    <View >
      <View>
        <View style={styles.login}>
            <Text style={styles.text} > Login </Text>
            <TextInput 
                style={styles.ti} 
                placeholder="Email" />
            <TextInput
                style={styles.ti} 
                secureTextEntry={true}
                placeholder="Password"
            />
        </View>
        <View>
            <Picker
                selectedValue={currency}
                onValueChange={currentCurrency => setCurrency(currentCurrency)}>
            <Picker.Item label="USD" value="US Dollars" />
            <Picker.Item label="EUR" value="Euro" />
            <Picker.Item label="PHP" value="Peso" />
            <Picker.Item label="JPY" value="Yen" />
            </Picker>
            <Text>
                Selected: {currency}
            </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  login:{
    padding:20,
  },
  text:{
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
  },
  ti:{
    fontSize:15,
  }
});