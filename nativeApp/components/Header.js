import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Svg } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header__wrapper}>
         
          <Text style={styles.header__logo}>Сервис по поиску вакансий</Text>
          
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#252525',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  header__wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 20,
    marginTop: 20,
    marginBottom:-5,
    // backgroundColor: "#fff"
  },
  header__img: {
    marginLeft: 30,
    alignItems: 'center',
    position: 'relative',
    flexDirection: 'row'
  },
  header__logo: {
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    marginLeft: 5,
  },
  header__profileWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header__profile: {
    color: '#ffffff',
  },
  header__spacer: {
    fontSize: 16,
  },
  cardContainer: {
    flex: 1,
    marginTop: 15,
    paddingHorizontal: 16,
  },
});

export default Header;