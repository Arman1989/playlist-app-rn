import React, {FC, useState} from 'react';
import {Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import {View, Button, Modal} from 'react-native';
import {Text, TextInput} from '../components/Themed';
import {SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const startPage = (props) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [playlistId, setPlaylistId] = useState<string>("");

  const handleInputPlaylistId = () => {
      props.changePlaylistID(playlistId);
      props.navigation.navigate("songList");
  }
return (
 <SafeAreaView style={styles.container}>

   <View style={styles.userInfoSection}>
     <View style={{ flexDirection: 'row', marginTop: 15 }}>

       <View style={{ marginLeft: 20 }}>
         <Text style={[styles.title, {
           marginTop: 15,
           marginBottom: 5,
         }]}>Jean Vandam</Text>
         <Text style={styles.Text}>@j_vandam</Text>
       </View>
     </View>
   </View>

   <View style={styles.userInfoSection}>
     <View style={styles.row}>
       <Icon name="map-marker-radius" color="#777777" size={20} />
       <Text style={{ color: "#777777", marginLeft: 20 }}>Stockholm, Sweden</Text>
     </View>
     <View style={styles.row}>
       <Icon name="phone" color="#777777" size={20} />
       <Text style={{ color: "#777777", marginLeft: 20 }}>+46-765434456454545</Text>
     </View>
     <View style={styles.row}>
       <Icon name="email" color="#777777" size={20} />
       <Text style={{ color: "#777777", marginLeft: 20 }}>jean_vandam@email.com</Text>
     </View>
   </View>

   <View style={styles.infoBoxWrapper}>
     <View style={[styles.infoBox, {
       borderRightColor: '#dddddd',
       borderRightWidth: 1
     }]}>
      
       <Text>Edit Profile</Text>
     </View>
     <View style={styles.infoBox}>
       <Text>Playlists</Text>
     </View>
   </View>



export default UserPage;

const styles = StyleSheet.create({
  //------
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Text: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  }, //--------------------
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    height: 150,
    width: 300,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 40,
    width: 150,
    margin: 15,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  playlistIdInput: {
    marginTop: 10,
    width: 200,
    height: 40,
    borderWidth: 2,
    borderRadius: 15,
  },
});
