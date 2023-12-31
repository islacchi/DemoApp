import * as React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { AvatarC } from './src/compAvatar';
import { BS } from './src/compBottomSheet';
import { Ratings } from './src/compRating';
import { Badges } from './src/compBadge';
import { Overlays } from './src/compOverlay';
import { SD } from './src/compSpeedDial';
import { Collapse } from './src/compCollapsible';
import { SpinnerC } from './src/compSpinner';
import { fList } from './src/compFlatList';
import { FormsC } from './src/compForms';
import { CardC } from './src/compCards';
import { DialogsC } from './src/compDialog';
import { DividerC } from './src/compDivider';
import { TileC } from './src/compTiles';
import { CarouselC } from './src/compCarousel';
import { TabC } from './src/compTab';
import { SliderC } from './src/compSlider';
import { ButtonGroupC } from './src/compButtonGroup';
import { PricingC } from './src/compPricing';
import { SwitchC } from './src/compSwitch';



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
      <Text style={{fontSize:'25px', textAlign:'center', marginBottom:10, marginTop:10, fontWeight:'bold'}}>REACT NATIVE DEMO APP</Text>
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
          <Button style={{}}  title="Avatar" onPress={() => navigate('Avatar')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Bottom Sheet" onPress={() => navigate('Bottom Sheet')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Rating" onPress={() => navigate('Rating')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Badge" onPress={() => navigate('Badge')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Overlay" onPress={() => navigate('Overlay')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Speed Dial" onPress={() => navigate('Speed Dial')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Collapsible" onPress={() => navigate('Collapsible')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Spinner" onPress={() => navigate('Spinner')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Flat List" onPress={() => navigate('Flat List')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Forms" onPress={() => navigate('Forms')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Cards" onPress={() => navigate('Cards')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Dialogs" onPress={() => navigate('Dialogs')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Divider" onPress={() => navigate('Divider')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Tiles" onPress={() => navigate('Tiles')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Carousel" onPress={() => navigate('Carousel')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Tab" onPress={() => navigate('Tab')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Slider" onPress={() => navigate('Slider')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Button Group" onPress={() => navigate('Button Group')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Pricing" onPress={() => navigate('Pricing')}/>
        </View>
        <View style={styles.button}>
          <Button  title="Switch" onPress={() => navigate('Switch')}/>
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
        <Stack.Screen name="COMPONENTS" component={ComponentScreen}/>
        <Stack.Screen name="Avatar" component={AvatarC}/>
        <Stack.Screen name="Bottom Sheet" component={BS}/>
        <Stack.Screen name="Rating" component={Ratings}/>
        <Stack.Screen name="Badge" component={Badges}/>
        <Stack.Screen name="Overlay" component={Overlays}/>
        <Stack.Screen name="Speed Dial" component={SD}/>
        <Stack.Screen name="Collapsible" component={Collapse}/>
        <Stack.Screen name="Spinner" component={SpinnerC}/>
        <Stack.Screen name="Flat List" component={fList}/>
        <Stack.Screen name="Forms" component={FormsC}/>
        <Stack.Screen name="Cards" component={CardC}/>
        <Stack.Screen name="Dialogs" component={DialogsC}/>
        <Stack.Screen name="Divider" component={DividerC}/>
        <Stack.Screen name="Tiles" component={TileC}/>
        <Stack.Screen name="Carousel" component={CarouselC}/>
        <Stack.Screen name="Tab" component={TabC}/>
        <Stack.Screen name="Slider" component={SliderC}/>
        <Stack.Screen name="Button Group" component={ButtonGroupC}/>
        <Stack.Screen name="Pricing" component={PricingC}/>
        <Stack.Screen name="Switch" component={SwitchC}/>
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
    marginTop:50,
    marginBotom:50,
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
    height:'auto',
    marginLeft:40,
    marginRight:40,
  },
  button:{
    margin:8,
  },
});