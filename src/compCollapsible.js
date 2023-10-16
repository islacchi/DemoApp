import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
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
      title: 'Fast refresh',
      content: (
        <Text style={styles.textSmall}>
          See your changes as soon as you save.
          With the power of JavaScript, React Native lets you iterate at
          lightning speed.
        </Text>
      ),
    },
    {
      title: 'Cross-platform',
      content: (
        <>
          <Text style={styles.textSmall}>
            React components wrap existing native code
            and interact with native APIs via React's declarative UI paradigm
            and JavaScript. This enables native app development for whole new teams
            of developers
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
    backgroundColor: '#2089dc',
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






