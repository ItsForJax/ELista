import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import colors from './colors';

const Card = (props) => {
  return (
    <Pressable style={styles.card} onPress={() => props.navigation.navigate('Utang', props.prop)}>
      <Image source={require('../assets/PlaceHolder.png')} resizeMode='contain' style={styles.icon}/>
      <View style={styles.nameSection}>
        <Text style={styles.name}>{props.prop.name}</Text>
        <Text style={styles.total}>Utang: {props.prop.utang}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '95%',
    backgroundColor: colors.card,
    padding: 5,
    borderRadius: 15,
    flexDirection: 'row',
    gap: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
  },
  total: {
    fontSize: 12,
    color: colors.text,
  },
  nameSection: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  icon: {
    height: 45, 
    width: 45,
    marginVertical: 5,
    marginStart: 5
  }
});

export default Card;
