import React from 'react';
import { Text, View, Button, ScrollView, StyleSheet } from 'react-native';
import { Avatar, Badge, withBadge } from '@rneui/themed';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

const BadgedIcon = withBadge(90)(Ionicons);

export function Badges(){
  return (
    <View>
    <ScrollView>
      <Text style={styles.subHeader}>Standard Badge</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <Badge value="3" status="success" />
        <Badge value="99+" status="error" />
        <Badge value="500" status="primary" />
        <Badge value="10" status="warning" />
      </View>
      <Text style={styles.subHeader}>Mini Badge</Text>
      <Text style={{ textAlign: 'center' }}>
        This type of badge shows when no value prop is provided. This form is effective for showing statuses.
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="primary" />
        <Badge status="warning" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginBottom: 20,
        }}
      >
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>Success</Text>
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>Error</Text>
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>Primary</Text>
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>Warning</Text>
      </View>

      <Text style={styles.subHeader}>Badge as Indicator</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
          marginBottom: 40,
        }}
      >
        <View>
          <Avatar
            rounded
            source={{
              uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/387337699_1314749989412428_8974982702905279239_n.jpg?stp=dst-jpg_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEuGdRiKXCT_mG2g9SvM5GOltMJu4FKH-KW0wm7gUof4mKdZcq9qTWp5fLQ6KjBOAI9AV5jADKhmrG6rZn-kmol&_nc_ohc=N3mKQMDhftsAX9Y2m6k&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS4G692aG66lnOMFkEW9GeY11MXKl3R1uCTdUR8LUwwEw&oe=6552D300',
            }}
            size="medium"
          />
          <Badge
            status="success"
            containerStyle={{ position: 'absolute', top: 5, left: 40 }}
          />
        </View>
        <BadgedIcon 
            type="ionicon" 
            name="chatbubble-ellipses-outline"
            size={40} />
        <View>
          <Avatar
            rounded
            source={{
              uri: 'https://scontent.xx.fbcdn.net/v/t1.15752-9/361137802_823332279467195_2106222920481781698_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHBlk77VSc6774KdIjL3tK1W_dTewx80w5b91N7DHzTDv38mJZZb2MLBS8HxX83A7ZVLwMj73KD42WcNFdPsaHt&_nc_ohc=YcU1aIZfdHwAX9Mlpsx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTdy8YNinLpv8FtZ0JIwMrAy82vOz-WDhgELOSUsC-UHA&oe=6552ED0D',
            }}
            size="large"
          />
          <Badge
            status="primary"
            value={10}
            containerStyle={{ position: 'absolute', top: 5, left: 60 }}
          />
        </View>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  subHeader: {
    backgroundColor: '#2089dc',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    padding:6,  
  },
});
