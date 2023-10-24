import React from 'react';
import {Avatar} from 'react-native-elements';
import { View, Button,Text } from 'react-native';

export function AvatarC(){
  return( 
  <View>
    <Text style={{textAlign:'center',fontWeight:'bold',fontSize:30,padding:20}}>IMAGE AVATAR</Text>
    <View style={{flex:1,alignItems:'center',flexDirection:'row',justifyContent:'space-evenly',padding:20}}>
      <Avatar 
        size={60}
        rounded
        title="Carloes"
        source={{ uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/387337699_1314749989412428_8974982702905279239_n.jpg?stp=dst-jpg_p403x403&_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_eui2=AeEuGdRiKXCT_mG2g9SvM5GOltMJu4FKH-KW0wm7gUof4mKdZcq9qTWp5fLQ6KjBOAI9AV5jADKhmrG6rZn-kmol&_nc_ohc=N3mKQMDhftsAX9Y2m6k&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS4G692aG66lnOMFkEW9GeY11MXKl3R1uCTdUR8LUwwEw&oe=6552D300" }}
      />
      <Avatar 
        size={60}
        rounded
        title="Carloes2"
        source={{ uri: "https://scontent.xx.fbcdn.net/v/t1.15752-9/361137802_823332279467195_2106222920481781698_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_eui2=AeHBlk77VSc6774KdIjL3tK1W_dTewx80w5b91N7DHzTDv38mJZZb2MLBS8HxX83A7ZVLwMj73KD42WcNFdPsaHt&_nc_ohc=YcU1aIZfdHwAX9Mlpsx&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTdy8YNinLpv8FtZ0JIwMrAy82vOz-WDhgELOSUsC-UHA&oe=6552ED0D" }}
      />
      <Avatar 
        size={60}
        rounded
        title="gojo"
        source={{ uri: "https://i1.sndcdn.com/artworks-BHEasHl6FyIklvPe-EUScaQ-t500x500.jpg" }}
      />
      <Avatar 
        size={60}
        rounded
        title="Crushiecakes"
        source={{ uri: "https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/375021034_6796842080409118_6228409176377630753_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFFN416-wCbiKCeGEzbTA1BoDi5ESymnPqgOLkRLKac-qTaUX9BBHXgyoyCMvgPyqhundRyJvuulFiaGgD_e66R&_nc_ohc=EhUlKmcHSwIAX9CxMzE&_nc_ht=scontent.fceb6-1.fna&oh=03_AdQ_eaCDkib6Ny5DsHNmMlGNACkHgtnkXJO_5RQklyVd7A&oe=6552E23F" }}
      />
    </View>
</View>
  );
}
