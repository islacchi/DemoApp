import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Text, Tile } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function TileC() {
return (
  <>
    <View style={{ alignItems: 'center' }}>
      <ScrollView style={{ paddingVertical: 10 }}>
      <Text style={styles.subHeader}>Featured Tile</Text>
        <Tile
          imageSrc={{
            uri:
              'https://images.unsplash.com/photo-1436891620584-47fd0e565afb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGdhbGF4eXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
          }}
          title="In her eyes, I saw a galaxy of dreams, where stars of hope twinkled in the vast expanse of her soul."
          titleStyle={{ fontSize: 15 }}
          featured
          caption="Carloes"
          activeOpacity={1}
          width={310}
        />
        <Text style={styles.subHeader}>Featured Tile with Icon</Text>
        <View>
        <FontAwesome/>
          <Tile
            imageSrc={{
              uri:
                'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/375021034_6796842080409118_6228409176377630753_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeFFN416-wCbiKCeGEzbTA1BoDi5ESymnPqgOLkRLKac-qTaUX9BBHXgyoyCMvgPyqhundRyJvuulFiaGgD_e66R&_nc_ohc=EhUlKmcHSwIAX9CxMzE&_nc_ht=scontent.fceb6-1.fna&oh=03_AdQ_eaCDkib6Ny5DsHNmMlGNACkHgtnkXJO_5RQklyVd7A&oe=6552E23F',
            }}
            
            icon={{
                name: 'heart',
                type: 'font-awesome',
                size: 150,
                color: 'white',   
              }}
            featured
            activeOpacity={0.8}
            onPress={() => {
              'Tile pressed';
            }}
            width={310}
          />
        </View>
        <View style={{ paddingTop: 20, paddingBottom: 100 }}>
          <Tile
            imageSrc={{
              uri:
                'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            }}
            title="Shibuya, Japan"
            titleStyle={{ fontSize: 20, textAlign: 'center', paddingBottom: 5 }}
            activeOpacity={1}
            width={310}
            contentContainerStyle={{ height: 70 }}
            style={{ paddingBottom: 20 }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ color: 'green' }}>Visit</Text>
              <Text style={{ color: '#397af8' }}>Find out More</Text>
            </View>
          </Tile>
        </View>
      </ScrollView>
    </View>
  </>
);
};

const styles = StyleSheet.create({
subHeader: {
  backgroundColor : "#B22222",
  color : "white",
  textAlign : "center",
  paddingVertical : 5,
  marginBottom : 10,
  marginTop : 20
}
});