import React from 'react';
import { View, FlatList, Image, StyleSheet, Text } from 'react-native';

const data = [
    { id: '1', title: 'Mayor', imageUrl: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/383954838_1708672359612985_7977862160834774724_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUEqnkCxCbtXSjWs_OqCfJyE8b5CZTIWDITxvkJlMhYO_zx6kfpvD1CXxEWMMeK3toB8n7YmU4j1eaFJIazXId&_nc_ohc=i-9IiZTTx3gAX-A6Yqw&_nc_ht=scontent.fceb6-1.fna&oh=00_AfCIkAuHzwV-D8OtSXUDH4XtH1CLtIFjJHlU0OeC-LY4Sg&oe=65320A1E' },
    { id: '2', title: 'Vice-Mayor', imageUrl: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/383401177_1540894562981186_1555230180187690399_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECv14yCc2yPDUs1linf1KWK0kSY73hzj8rSRJjveHOP1ySRyH8VBF6SPYNijZERjuC5sAAsOi4bp8NAbItcz04&_nc_ohc=ZahFUTjdgVsAX-c9ReB&_nc_ht=scontent.fceb6-1.fna&oh=00_AfDTH_-zktQO7IFXzHnk8mf3ACfImtj6gYwNAyPFAd_0zA&oe=6531C9D8' },
    { id: '3', title: 'Secretary', imageUrl: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/394550393_343487908164811_4978127827271885446_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEHmnGOHy6_sx-HHA4Ol0Z2i2CO_IlnRQuLYI78iWdFCzwwF2ufmuWzr4pgRbzDN6OmltYGruvHQ_y0apzC5D1c&_nc_ohc=OSJhFwk92WEAX9KnrQD&_nc_ht=scontent.fceb6-1.fna&oh=03_AdTdlxXBIMpKCy7HBJ_64MmdeCiRRy-7k0_1jA5OiYPB8A&oe=655B1149' },
    { id: '4', title: 'Treasurer', imageUrl: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/387578285_288718577312990_4976892081847766572_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeG6uEaX9-F-jc5YHNpXAEnkB_IwBflGbUsH8jAF-UZtS4e45z7pIk-MtvwH5oZJTFFOewfV2qDjw-HG2gyhl5vN&_nc_ohc=lyY77DZ3dR4AX9lqttO&_nc_ht=scontent.fceb6-1.fna&oh=03_AdQIrgIZQkxCUHBobj48J92ljhY5N2GgGR4hmVRM4xTt0A&oe=655431AF' },
    { id: '5', title: 'Auditor', imageUrl: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/385397425_1334849187123229_3065871111047569042_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG4tHVnkUuiB1Rup2KckD0ywdMgjYOxBe7B0yCNg7EF7nZQ1Kad0p1X2li7qUou9in_vAoY41JEiTqIm0v_W9tL&_nc_ohc=FRyhwhU_0bUAX9I3iKp&_nc_ht=scontent.fceb6-1.fna&oh=00_AfD8pmchdOYu-wKYJhOrs68CBnsHX6wEBG2SXfBrrBU7Rg&oe=65313C88' },
    { id: '6', title: 'Public Information Officer', imageUrl: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/341870110_605787237890260_6167068231840673326_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF1VhznHLB1TOLM7Uu1w_JE8VLDdiR0KivxUsN2JHQqK8p88s8CvIQxolvs4gJpnTRIpJkB14KbM3GX40_2K5wx&_nc_ohc=4boSHb4_r10AX9jB243&_nc_ht=scontent.fceb6-1.fna&oh=00_AfA0PqMafqGulIKeggZVGDsQWrKd-0bB8z64dNIZTGtBow&oe=65316E36' },
    // Add more objects as needed
  ];

  const ItemList = ({ data }) => {
    const renderItem = ({ item }) => (
      <View style={styles.item}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
        <Text style={styles.title}>{item.title}</Text>
      </View>
    );
  
    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    );
  };
  
  export function fList() {
    return (
      <View style={styles.container}>
        <ItemList data={data} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    item: {
      padding:20,
    },
    image: {
      width: 350, // Adjust as needed
      height: 350, // Adjust as needed
    },
    title: {
      fontSize: 18,
      fontWeight:'bold'
    },
  });