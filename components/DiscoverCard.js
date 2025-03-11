import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const DiscoverCard = ({ title, icon }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '20%',
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    padding: 10,
    margin: 5,
    elevation: 3,
  },
  icon: { width: 30, height: 30, marginBottom: 5 },
  text: { fontSize: 10, fontWeight: '400', textAlign:'center' },
});

export default DiscoverCard;
