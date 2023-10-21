import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text,View ,Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Accordion from 'react-native-collapsible/Accordion';

export function Collapse() {
  const [activeSections, setActiveSections] = useState([]);
  const sections = [
    {
      title: 'May joke ako',
      content: (
        <Text style={styles.textSmall}>
          Pero baka sa'kin sa sumaya
        </Text>
      ),
    },
    {
      title: 'Can you be my bill of rights Article 3 Section 9?',
      content: (
        <Text style={styles.textSmall}>
          Private property shall not be taken for public use without just compensation.
        </Text>
      ),
    },
    {
        title: 'STOP!',
        content: (
          <Text style={styles.textSmall}>
            Look, listen and love me.
          </Text>
        ),
      },
      {
        title: 'NDRRMC: orange rainfall warning',
        content: (
          <Text style={styles.textSmall}>
            Nag babanta ang pagbuhos ng pagmamahal ko sayo, ingat ka love you mwa mwa.
          </Text>
        ),
      },
      {
        title: 'Maikli ang buhay',
        content: (
          <Text style={styles.textSmall}>
            Pls sayangin mo na sakin yan.
          </Text>
        ),
      }, 
    {
      title: 'Article 1156',
      content: (
        <>
          <Text style={styles.textSmall}>
            An Obligation is a juridical necessity to give, to do and love me too.
          </Text>
          <View style={styles.seperator}></View>
          <Button title="See More" />
        </>
      ),
    },
  ];

  function renderHeader(section, _, isActive) {
    return (
      <View style={styles.accordHeader}>
        <Text style={styles.accordTitle}>{section.title}</Text>
        <Icon
          name={isActive ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#bbb"
        />
      </View>
    );
  }

  function renderContent(section, _, isActive) {
    return (
      <View style={styles.accordBody}>{section.content}</View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.container}
      >
        <Accordion
          align="bottom"
          sections={sections}
          activeSections={activeSections}
          renderHeader={renderHeader}
          renderContent={renderContent}
          onChange={(sections) => setActiveSections(sections)}
          sectionContainerStyle={styles.accordContainer}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  accordContainer: {
    paddingBottom: 4,
  },
  accordHeader: {
    padding: 12,
    backgroundColor: '#B22222',
    color: '#eee',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  accordTitle: {
    fontSize: 20,
    fontWeight:'bold',  
    color:'white'
  },
  accordBody: {
    padding: 12,
  },
  textSmall: {
    fontSize: 16,
  },
  seperator: {
    height: 12,
  },
});






