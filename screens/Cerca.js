import React, { Component } from 'react'
import { Text, View, TouchableWithoutFeedback, ScrollView, StyleSheet, TextInput, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA3 = [
    {
      idg: '1',
      image: 'https://www.denofgeek.com/wp-content/uploads/2020/09/Enola-Holmes-poster-cropped.jpg',
      title: "Enola Holmes"
    },
    {
      idg: '2',
      image: 'https://upload.wikimedia.org/wikipedia/en/6/61/Peppa_Pig.png',
      title: "Peppa Pig"
    },
    {
      idg: '3',
      image: 'https://i1.wp.com/www.geektown.co.uk/wp-content/uploads/2020/07/ratched.jpg',
      title: "Ratched"
    },
    {
      idg: '4',
      image: 'https://img.cinemablend.com/filter:scale/quill/f/5/2/7/f/8/f527f8e67ac1c1b93e2a05bcc70f3bed59f51d2e.jpg',
      title: "The Social Dilemma"
    },
    {
      idg: '5',
      image: 'https://occ-0-999-1009.1.nflxso.net/art/eb16e/0c481664285dcbf449ee7a8edf7155f67b9eb16e.jpg',
      title: "Minions"
    },
    {
      idg: '6',
      image: 'https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/0DW6CdE4gYtYx8iy3aj8gs9WtXE/AAAABYeT-oyl75qdwwJAgurrt23apcUqpdiVuaCP2M8k7UJxei8GKdUbZ_4lAtEu41KdHyePdW9UMJGQUMM1SBJ2ApCQwev5POXQzvVj6_VG4ZizfA6mhImVLLYVj-b8cg.jpg',
      title: "The Fall"
    },
];


export default class Cerca extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "black"}}>
                <View style={{flexDirection: 'row',backgroundColor: "#404040",alignItems: "center", borderColor: "black", borderWidth: 5}}>
                    <Ionicons style={{padding: 10}} name="ios-search" size={25} color="#fff"/>
                    <TextInput
                        style={{
                            color: "white", 
                            flex:1
                        }} 
                        placeholder="Cerca una serie, un film, un genere..."
                        placeholderTextColor="#fff"
                        autoFocus={true} />
                    <Ionicons style={{padding: 10}} name="mic" size={25} color="#fff"/>
                </View>
                <ScrollView>
                <Text style={{color: "white", fontWeight: "bold", fontSize: 25, marginVertical: 10}}>I piu cercati</Text>
                {DATA3.map(data => {
                        return (
                        <TouchableWithoutFeedback onPress={() => alert(data.title)} key={data.title}>
                            <View style={{borderRadius: 4,flexDirection: "row", alignItems:"center", backgroundColor: "#404040", justifyContent:"space-between", borderColor: "black", borderWidth: 2}}>
                                <Image
                                    style={{width:150 ,height: 70, borderRadius: 4}}
                                    source={{
                                        uri: data.image,
                                    }}
                                    key={data.image}
                                />
                                <Text style={{color: "white", fontWeight: "bold", fontSize: 15}} key={data.title}>{data.title}</Text>
                                <Ionicons name="play" size={30} color="white"/>
                            </View>
                        </TouchableWithoutFeedback>
                        
                        )})
                    }
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  });
