import React, {FC, useState} from 'react';
import {Pressable} from 'react-native';
import {StyleSheet} from 'react-native';
import {View, Button, Modal} from 'react-native';
import {Text, TextInput} from '../components/Themed';
import {SafeAreaView} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const UserPage = (props: {
  changePlaylistID: (arg0: string) => void;
  navigation: {navigate: (arg0: string) => void};
}) => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [playlistId, setPlaylistId] = useState<string>('');

  const handleInputPlaylistId = () => {
    props.changePlaylistID(playlistId);
    props.navigation.navigate('songList');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>Kolkata, India</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20} />
          <Text style={{color: '#777777', marginLeft: 20}}>
            john_doe@email.com
          </Text>
        </View>
      </View>

     
    </SafeAreaView>
  );
};

// <View style = {styles.container}>
//     <Text>Playlist App</Text>
//     <Text>
//         An Application for People Share and Contribute Playlist from multiple Source.
//         Currently We Support Youtube and SoundCloud
//       </Text>
//       <Button onPress={() => props.navigation.navigate("Login")} title = "Login To Access your Playlists"/>
//       <Button onPress = {()=>""} title = "Search For Playlist"/>
//       <Button title = "Contribute to Playlist with ID" onPress = {() => setModalVisible(true)}/>
//       <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => {
//         setModalVisible(!modalVisible);
//       }}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//             <Text>Playlist ID:</Text>
//           <TextInput style ={styles.playlistIdInput} onChangeText = {setPlaylistId} value={playlistId}/>
//           <Pressable
//             style={[styles.button, styles.buttonClose]}
//             onPress={handleInputPlaylistId}
//           >
//             <Text style={styles.textStyle}>Contribute</Text>
//           </Pressable>startPage
// </View>

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
