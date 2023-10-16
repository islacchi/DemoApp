import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from 'react-native-elements';

const users = [
  {
    name: 'Karl',
    avatar: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/383954838_1708672359612985_7977862160834774724_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGUEqnkCxCbtXSjWs_OqCfJyE8b5CZTIWDITxvkJlMhYO_zx6kfpvD1CXxEWMMeK3toB8n7YmU4j1eaFJIazXId&_nc_ohc=i-9IiZTTx3gAX-A6Yqw&_nc_ht=scontent.fceb6-1.fna&oh=00_AfCIkAuHzwV-D8OtSXUDH4XtH1CLtIFjJHlU0OeC-LY4Sg&oe=65320A1E',
  },
  {
    name: 'Kim Soo-Hyun',
    avatar:
      'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/383401177_1540894562981186_1555230180187690399_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECv14yCc2yPDUs1linf1KWK0kSY73hzj8rSRJjveHOP1ySRyH8VBF6SPYNijZERjuC5sAAsOi4bp8NAbItcz04&_nc_ohc=ZahFUTjdgVsAX-c9ReB&_nc_ht=scontent.fceb6-1.fna&oh=00_AfDTH_-zktQO7IFXzHnk8mf3ACfImtj6gYwNAyPFAd_0zA&oe=6531C9D8',
  },
  {
    name: 'Marjo',
    avatar: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/393438282_860475655578693_8017054937818735963_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeGcGCL7wHV5OFMz-ZNvz-MXo65OXqe5TM-jrk5ep7lMzxo-Ap2yVdWp9JGyOSuG0w6K9z_u3apOfE_Fqb_5Z_Ao&_nc_ohc=OBFF8aTRY-IAX9EnCr7&_nc_ht=scontent.fceb6-1.fna&oh=03_AdSdr1RegPet7Blq46lE7F8EBWtMjy09aUfLSNBr6rSmTw&oe=65543ECC',
  },
  {
    name: 'Rea',
    avatar: 'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/382321432_859203298924852_3836420718608101561_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEItUlt4oUgAWj0v7DEdftkcmtul7W3TdRya26XtbdN1Cmr3XlKj51kYPLf34gmJOagDp40t-Y26Qbl6qGr3Fue&_nc_ohc=lXOBrRjQK6EAX9q8GmW&_nc_ht=scontent.fceb6-1.fna&oh=03_AdSCIaXgcgvcU3c_QCwbA6341839WcqLxg8QhZUSbgt1pw&oe=65542FA3',
  },
  {
    name: 'Peter',
    avatar:
      'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/341870110_605787237890260_6167068231840673326_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF1VhznHLB1TOLM7Uu1w_JE8VLDdiR0KivxUsN2JHQqK8p88s8CvIQxolvs4gJpnTRIpJkB14KbM3GX40_2K5wx&_nc_ohc=4boSHb4_r10AX9jB243&_nc_ht=scontent.fceb6-1.fna&oh=00_AfA0PqMafqGulIKeggZVGDsQWrKd-0bB8z64dNIZTGtBow&oe=65316E36',
  },
  {
    name: 'Jeeve',
    avatar:
      'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/381183836_1885510315153805_5663840141620575976_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEiBU87yGmx-RBH_bsSjWbA9Li_bHdMlIn0uL9sd0yUiX_V5-3VON7Nx3xN8Q0KZ6vLgnq1z49wLRntOB_KFrej&_nc_ohc=-FvZLb_dZ1gAX8K7Rv6&_nc_ht=scontent.fceb6-1.fna&oh=03_AdSY7hejcLmT-ybZ2TB-Xwgf3SW68EiVivIM7qymSxexCQ&oe=65542640',
  },
  {
    name: 'Dave',
    avatar:
      'https://scontent.fceb6-1.fna.fbcdn.net/v/t1.15752-9/385516036_708511717486878_3128835620313838807_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_eui2=AeEZlDN4CQ2PzmZY-ysChVJ1aAsiDKT5VjFoCyIMpPlWMRScmtflNPGzJb0TNOG0JY8TpC3iEYZkByd9oHo0GNJI&_nc_ohc=y8izOOP0NbsAX9aBl3U&_nc_ht=scontent.fceb6-1.fna&oh=03_AdQDEtT62-OSOW_ZUJyTJ59sZ4Odt_jK_xyo85RDaifrJA&oe=65542FA7',
  },
  {
    name: 'Nikko',
    avatar:
      'https://cdn.fbsbx.com/v/t59.2708-21/392594174_1702473046914145_5678119093698215685_n.gif?stp=dst-gif_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=cf94fc&_nc_eui2=AeFmRFr0PPeIMAgFXE6bT4Rzeq8ZE9PFaUB6rxkT08VpQHKVmovdo5Uk2ojbFUQCv06eSu6YxDolj0AIB61Cqryo&_nc_ohc=UZnYtxoGPlcAX8IEi-D&_nc_ht=cdn.fbsbx.com&oh=03_AdT5fikI89H8I_fEAR8eagl3szcoiR-LZ1qID_9Qa6UrZw&oe=652E910C',
  },
  {
    name: 'Mae Flor',
    avatar:
      'https://scontent.fmnl9-4.fna.fbcdn.net/v/t39.30808-6/342048531_736407028223144_7264735137759974958_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGt_YqnCCmNy78WtjY2lurMQr5ZOfpDmhFCvlk5-kOaEU3DIGmtEPOArohZ66FRKoHzVMKPrNlDqC95ZlfC2qA3&_nc_ohc=V7jrjpBEks0AX_ugen2&_nc_ht=scontent.fmnl9-4.fna&oh=00_AfCNplfWuKZliug3zelJ9em0JV_F9nRKO5W1fTg7-fsm9g&oe=6531550E',
  },
  {
    name: 'Rowena',
    avatar:
      'https://scontent.fmnl9-2.fna.fbcdn.net/v/t39.30808-6/342634687_211512118261446_5508798835123845852_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFgaNBe7-5M5AgBAud34-z1paZh92wRgrilpmH3bBGCuDzohR6NHcbMBGsOusbBgbU51GaMglFuSp02bfF_lvbB&_nc_ohc=cKvSn9YK2T4AX88llDS&_nc_ht=scontent.fmnl9-2.fna&oh=00_AfBWkZQGQthxoPIgZyyMPTVMwQfmoXF9Z6cuHenF31V3lQ&oe=65326300',
  },
];

export function CardC() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Card.Title>CARD WITH DIVIDER</Card.Title>
          <Card.Divider />
          {users.map((u, i) => {
            return (
              <View key={i} style={styles.user}>
                <Image
                  style={styles.image}
                  resizeMode="cover"
                  source={{ uri: u.avatar }}
                />
                <Text style={styles.name}>{u.name}</Text>
              </View>
            );
          })}
        </Card>
        <Card containerStyle={{ marginTop: 15 }}>
          <Card.Title>FONTS</Card.Title>
          <Card.Divider />
          <Text style={styles.fonts} h1>
            h1 Heading
          </Text>
          <Text style={styles.fonts} h2>
            h2 Heading
          </Text>
          <Text style={styles.fonts} h3>
            h3 Heading
          </Text>
          <Text style={styles.fonts} h4>
            h4 Heading
          </Text>
          <Text style={styles.fonts}>Normal Text</Text>
        </Card>
        <Card>
          <Card.Title>EMPANADA</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://assets.epicurious.com/photos/5761d20e42e4a5ed66d1df48/master/w_1000,h_667,c_limit/empanada-dough.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            I believe in empanada supremacyyy.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              backgroundColor:'#B22222',
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  fonts: {
    marginBottom: 8,
  },
  user: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    marginTop: 5,
  },
});
