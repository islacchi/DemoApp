import React from 'react';
import { ScrollView } from 'react-native';
import { PricingCard } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export function PricingC () {
return (
  <>
  <FontAwesome/>
    <ScrollView>
      <PricingCard
        color={'#0F5298'}
        title="Free"
        price="₱0"
        info={[ 'Basic Pangumusta' ]}
        button={{ title: ' GET STARTED', icon: {name:"check", type:'font-awesome', color:'white'} }}
      />
      <PricingCard
        color={'purple'}
        title="Taking Stage"
        price="₱1000"
        info={['Good Morning & Goodnight Greetings','No Commitment', 'Basic Support', 'Unli Kilig']}
        button={{ title: ' GET STARTED', icon: {name:"check", type:'font-awesome', color:'white'} }}
      />
      <PricingCard
        color={'#ffbf00'}
        title="Jowa Premium"
        price="₱3500"
        info={['100% Assurance','Good Morning & Goodnight VM Greetings with MwaMwa','Full updates', 'Full Emotional Support', 'Princess Treatment','Unli Kilig', 'Unli Lambing', 'Unli Myday', 'Unli Cuddles']}
        button={{ title: ' GET STARTED', icon: {name:"check", type:'font-awesome', color:'white'}}}
      />
    </ScrollView>
  </>
);
};
