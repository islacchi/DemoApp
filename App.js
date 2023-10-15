import * as React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { AvatarC } from './src/compAvatar';
import { bottomSheet } from './src/compBottomSheet';
import { Ratings } from './src/compRating';


//MY HOME <3
function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.intrologocont}>
      <Image
        style={styles.wew}
        source={require('./assets/rnlogo.gif')}
      />
      </View> 
      <Text style={{fontSize:'25px', textAlign:'center'}}>REACT NATIVE DEMO APP</Text>
      <br/>
      <View style={styles.buttoncont}>
        <Button
          title="BROWSE"
          onPress={() => navigation.navigate('COMPONENTS')}
        /> 
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

function HeaderLogo() {
  return (
    <View style={styles.headerlogocont}>
      <Image
        style={styles.logo}
        source={require('./assets/JAYCE_LOGO.png')}
      />
      <Text style={{color: 'white', padding: 5, fontSize: 22, marginLeft:'18px', fontWeight:'bold'}}>HOME</Text>
    </View>
  );
}

//SUDLANAN SA MGA COMPONENTS
function ComponentScreen({ navigation: { navigate }}) {
  return (
    <View style={styles.container}>
      <View style={styles.componentcont}>
        <View style={styles.button}>
          <Button style={{}}  title="Avatar Component" onPress={() => navigate('Avatar')}/>
        </View>
        <View style={styles.button}>
          <Button  title="BottomSheet Component" onPress={() => navigate('Bottom Sheet')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Rating Component" onPress={() => navigate('Rating')}/>
        </View>
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}







const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
          headerStyle: {
            backgroundColor: 'black',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerTitle: () => <HeaderLogo /> }}
          />
        <Stack.Screen name="COMPONENTS" component={ComponentScreen} />
        <Stack.Screen name="Avatar" component={AvatarC} />
        <Stack.Screen name="Bottom Sheet" component={bottomSheet} />
        <Stack.Screen name="Rating" component={Ratings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerlogocont:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  logo:{
    width: 30,
    height: 32,
  },
  wew:{
    width: 380,
    height: 380,
  },
  buttoncont:{
    marginLeft:40,
    marginRight:40,
    marginTop:10,
  },
  intrologocont:{
    justifyContent:'center',
    alignItems:'center'
  },
  componentcont:{
    flex:1,
    margin:40,
  },
  button:{
    margin:10,
  },
});