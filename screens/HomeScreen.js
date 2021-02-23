import React, { Component } from 'react'
import { Text, View, Animated, ScrollView, StyleSheet, Image, FlatList, TouchableWithoutFeedback } from 'react-native'
import Card from '../components/Card'

const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Avengers',
      pic: "https://images.immediate.co.uk/production/volatile/sites/3/2019/04/Avengers-Endgame-Banner-2-de7cf60.jpg"
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Spider-man',
      pic: "https://cdn.vox-cdn.com/thumbor/EUufQk5os51t53YCPtfQO89ruM4=/104x0:3104x2000/1400x1050/filters:focal(104x0:3104x2000):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/45660742/spiderman.0.0.jpg"
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Batman',
      pic: "https://miro.medium.com/max/3000/1*_4NAA663ODeJu9u7M2f63A.jpeg"
    },
];
  
const DATA2 = [
    {
      idg: '1',
      genre: 'COMIC',
      color: "orange"
    },
    {
      idg: '2',
      genre: 'HORROR',
      color: "blue"
    },
    {
      idg: '3',
      genre: 'FANTASY',
      color: "brown"
    },
    {
      idg: '4',
      genre: 'ROMANCE',
      color: "green"
    },
    {
      idg: '5',
      genre: 'THRILLER',
      color: "pink"
    },
    {
      idg: '6',
      genre: 'DRAMA',
      color: "red"
    },
];

export default class HomeScreen extends Component {
    render() {
        const scrollY = new Animated.Value(0)
        const diffClamp = Animated.diffClamp(scrollY,0,70)
        const translateY = diffClamp.interpolate({
        inputRange:[0,70],
        outputRange:[0,-70]
        })
        return (
            <View style={{flex: 1, backgroundColor: "black"}}>
                <Animated.View
                style={{
                    transform:[
                    {translateY:translateY }
                    ],
                    elevation:4,
                    zIndex:100,
                }}>
                    <View style={styles.header}>
                        <Image
                            style={{width:30 ,height: 50}}
                            source={{
                                uri: 'https://pngimg.com/uploads/netflix/netflix_PNG15.png',
                            }}
                        />
                        <Text style={{color: "white", fontSize: 17}}>Serie TV</Text>
                        <Text style={{color: "white", fontSize: 17}}>Film</Text>
                        <Text style={{color: "white", fontSize: 17}}>La mia lista</Text>
                    </View>
                </Animated.View>
                <ScrollView onScroll={(e)=>{
                    scrollY.setValue(e.nativeEvent.contentOffset.y) 
                }}>
                    <Text style={styles.text2}>TOP 3 in Italia</Text>
                    <View style={{height: 100, justifyContent: "center" ,marginTop: 20}}>
                        <FlatList
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                            data={DATA}
                            key={DATA.id}
                            renderItem={({item})=><Card item={item}/>}
                        />
                    </View>
                    <Text style={styles.text3}>Scegli il genere:</Text>
                    <View style={{flexDirection: "row", flexWrap: "wrap"}}>
                    {DATA2.map(data => {
                        return (
                        <TouchableWithoutFeedback onPress={() => alert(data.genre)} key={data.genre}>
                            <View style={[styles.container2,{backgroundColor: data.color}]} key={data.color}>
                                <Text style={styles.text4} key={data.genre}>{data.genre}</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        )})
                    }
                    </View>
                    
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    header: {
      position: "absolute",
      top:0,
      left:0,
      right:0,
      height:70,
      backgroundColor:"black",
      elevation:4,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    text2: {
        color: "white",    
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 70
      },
    text3: {
        color: "white",    
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 5
      },
      container2: {
        borderRadius: 7,
        margin: 10,
        width: 100, 
        height: 130,
        flexDirection: "column-reverse"
      },
      text4: {
        color: "white", 
        fontSize: 15, 
        fontWeight: "bold", 
        margin: 10
    },
  });
