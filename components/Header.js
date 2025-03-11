import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity style={styles.profileContainer}>
        <Image source={require('../assets/profile.png')} style={styles.profileIcon} />
      </TouchableOpacity>
      <TouchableOpacity>
<View style={styles.add}>
<MaterialIcons name="add-circle" size={20} color="44bd80" />
    <Text>Add Vehicle</Text>
</View>
</TouchableOpacity>
      <View style={styles.iconContainer}>
        <TouchableOpacity>
          <MaterialIcons name="account-balance-wallet" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="notifications-outline" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="share-social-outline" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#44bd80',
    padding: 15,
    paddingTop: 40,
    position:'static'
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 8,
  },
  add:{
    width:'80%',
    flexDirection:'row',
    borderRadius:10,
    backgroundColor:'#fff',
    justifyContent:"center",
    alignItems:"center",
    gap:2,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
  },
});

export default Header;
