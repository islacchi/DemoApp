import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, } from 'react-native';

export function FormsC () {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');
  const [uploadedID, setUploadedID] = useState(null);

  const handleNameChange = (text) => {
    setName(text);
  };
  const handleEmailChange = (text) => {
    setEmail(text);
  };
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const handleDOBChange = (text) => {
    setDob(text);
  };
  const handleIDUpload = () => {
    // You can implement a file upload logic here
  };

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Date of Birth:', dob);
    console.log('Uploaded ID:', uploadedID);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Full Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your full name"
        value={name}
        onChangeText={handleNameChange}
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={handleEmailChange}
        keyboardType="email-address"
      />

      <Text style={styles.label}>Password:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />

      <Text style={styles.label}>Date of Birth:</Text>
      <TextInput
        style={styles.input}
        placeholder="MM/DD/YYYY"
        value={dob}
        onChangeText={handleDOBChange}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Upload ID:</Text>
      
      <View style={{padding:30}}>
      <Button title="Upload ID Document" onPress={handleIDUpload}/>
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'center',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
  },
});