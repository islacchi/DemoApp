import React from 'react';
import { SpeedDial, Button } from '@rneui/themed';
import { View } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



export function SD() {
  const [open, setOpen] = React.useState(false);

  return (
    <View style={{flex:1,}}>
        <SpeedDial
            isOpen={open}
            icon={
                <FontAwesome
                name="pencil"
                type="font-awesome"
                color="#fff"
                size={25}
            />}
            openIcon={
                <FontAwesome
                name="close"
                type="font-awesome"
                color="#fff"
                size={25}
                />}
            onOpen={() => setOpen(!open)}
            onClose={() => setOpen(!open)}
            >
            <SpeedDial.Action
                icon={
                    <FontAwesome
                    name="plus"
                    type="font-awesome"
                    color="#fff"
                    size={15}
                />}
                title="Add"
             onClick={() => console.log('Add Something')}
            />
            <SpeedDial.Action
                icon={
                    <FontAwesome
                    name="trash-o"
                    type="font-awesome"
                    color="#fff"
                    size={15}
                />}
                title="Delete"
                onClick={() => console.log('Delete Something')}
            />
        </SpeedDial>
    </View>
  );
};