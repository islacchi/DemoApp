import React, { useState } from 'react';
import { Button ,Dialog, CheckBox, ListItem, Avatar } from '@rneui/themed';
import { View, Text, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function DialogsC() {
const [visible1, setVisible1] = useState(false);
const [visible2, setVisible2] = useState(false);
const [visible3, setVisible3] = useState(false);
const [visible4, setVisible4] = useState(false);
const [visible5, setVisible5] = useState(false);
const [visible6, setVisible6] = useState(false);
const [checked, setChecked] = useState(1);

const toggleDialog1 = () => {
  setVisible1(!visible1);
};
const toggleDialog2 = () => {
  setVisible2(!visible2);
};
const toggleDialog3 = () => {
  setVisible3(!visible3);
};
const toggleDialog4 = () => {
  setVisible4(!visible4);
};
const toggleDialog5 = () => {
  setVisible5(!visible5);
};
const toggleDialog6 = () => {
  setVisible6(!visible6);
};

const userlist = [
    {
        name: 'John Carlo Namor',
        avatar_url: 'https://lh3.googleusercontent.com/a/ACg8ocKoWMwG6wUQVPTF9KnXylAA7-LnrNWinxk6aWdfuypbVCY=s360-c-no',
        subtitle:'carlokun1999@gmail.com'
      },
      {
        name: 'Kim Soo-Hyun',
        avatar_url:
          'https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/383401177_1540894562981186_1555230180187690399_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeECv14yCc2yPDUs1linf1KWK0kSY73hzj8rSRJjveHOP1ySRyH8VBF6SPYNijZERjuC5sAAsOi4bp8NAbItcz04&_nc_ohc=ZahFUTjdgVsAX-c9ReB&_nc_ht=scontent.fceb6-1.fna&oh=00_AfDTH_-zktQO7IFXzHnk8mf3ACfImtj6gYwNAyPFAd_0zA&oe=6531C9D8',
        subtitle:'johncarlo.namor@bisu.edu.ph'
      },
      {
        name: 'John Carlo Namor',
        avatar_url: 'https://lh3.googleusercontent.com/a/ACg8ocK-0W35WeO5xxEy5W_mI5PDjeqyF64CriXYkSo48BEI_Q=s360-c-no',
        subtitle:'namorjohncarlo@gmail.com'
      },
      {
        name: 'John Carlo Namor',
        avatar_url: 'https://lh3.googleusercontent.com/a/ACg8ocKSPC8_MjZlUJS5665mmtgDcxwsiqpP62Pi8x0OrY9QiA=s360-c-no',
        subtitle:'jayceenamor949@gmail.com'
      },
];

return (
  <View>
    <View style={styles.buttonContainer}>
      <Button
        title="Open Simple Dialog"
        onPress={toggleDialog1}
        buttonStyle={styles.button}
      />
      <Button
        title="Open Mutli Action Dialog"
        onPress={toggleDialog2}
        buttonStyle={styles.button}
      />
      <Button
        title="Open Loading Dialog"
        onPress={toggleDialog3}
        buttonStyle={styles.button}
      />
      <Button
        title="Open Buttonless Dialog"
        onPress={toggleDialog4}
        buttonStyle={styles.button}
      />
      <Button
        title="Open Custom Dialog 1"
        onPress={toggleDialog5}
        buttonStyle={styles.button}
      />
      <Button
        title="Open Custom Dialog 2"
        onPress={toggleDialog6}
        buttonStyle={styles.button}
      />
    </View>
    <Dialog
      isVisible={visible1}
      onBackdropPress={toggleDialog1}
    >
      <Dialog.Title title="Rizzed"/>
      <Text>My lines aren't smooth but my lips are</Text>
    </Dialog>
    <Dialog
      isVisible={visible2}
      onBackdropPress={toggleDialog2}
    >
      <Dialog.Title title="Be Mine?"/>
      <Text>It seems that all pick up lines are taken, but are u tho?</Text>
      <Dialog.Actions>
        <Dialog.Button title="YES NAMAN" onPress={() => console.log('Primary Action Clicked!')}/>
        <Dialog.Button title="YES" onPress={() => console.log('Secondary Action Clicked!')}/>
      </Dialog.Actions>
    </Dialog>
    <Dialog isVisible={visible3} onBackdropPress={toggleDialog3}>
      <Dialog.Loading />
    </Dialog>
    <Dialog
      isVisible={visible4}
      onBackdropPress={toggleDialog4}
    >
      <Dialog.Title title="Card Rizz"/>
      <Text>I wasn't playing cards but I still picked a Queen</Text>
    </Dialog>
    <Dialog
      isVisible={visible5}
      onBackdropPress={toggleDialog5}
    >
      <Dialog.Title title="Select your love language"/>
      {['Words of affirmation', 'Quality time', 'Acts of services', 'Gifts', 'Physical touch'].map((l, i) => (
        <CheckBox
          key={i}
          title={l}
          containerStyle={{ backgroundColor: 'white', borderWidth: 0 }}
          checkedIcon={
            <FontAwesome
            name="dot-circle-o"
            type="font-awesome"
            size={18}
        />}
          uncheckedIcon={
            <FontAwesome
            name="circle-o"
            type="font-awesome"
            size={18}
        />}
          checked={checked === i + 1}
          onPress={() => setChecked(i + 1)}
        />
      ))}

      <Dialog.Actions>
        <Dialog.Button title="CANCEL" onPress={toggleDialog5} />
        <Dialog.Button
          title="CONFIRM"
          onPress={() => {
            console.log(`Option ${checked} was selected!`);
            toggleDialog5();
          }}
        />
      </Dialog.Actions>
    </Dialog>
    <Dialog
      isVisible={visible6}
      onBackdropPress={toggleDialog6}
    >
      <Dialog.Title title="Choose Account"/>
      {userlist.map((l, i) => (
        <ListItem
          key={i}
          containerStyle={{
            marginHorizontal: -10,
            borderRadius: 8,
          }}
          onPress={toggleDialog6}
        >
          <Avatar rounded source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title style={{ fontWeight: '700' }}>
              {l.name}
            </ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </Dialog>
  </View>
);
};

const styles = StyleSheet.create({
button: {
  borderRadius: 6,
  width: 220,
  margin: 20,
},
buttonContainer: {
  margin: 20,
  justifyContent: 'center',
  alignItems: 'center',
},
});
