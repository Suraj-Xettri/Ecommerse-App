import { View,Pressable, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from '../../constants/Colors'
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../../assets/images/start.jpg")}
          style={styles.image}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}> Ready to dive into Anime World?</Text>
        <Text style={styles.text2}>Discover the latest anime news here and  share your own information.</Text>
      
        <Pressable style={styles.pressable}>
            <Text style={styles.pressableText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:Colors.BACKGROUND
    },
    imageContainer: {
      width: '100%',
      height: 500,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    textContainer:{
        padding:15,
        display:'flex',
        alignItems:'center'
    },
    text:{
        fontFamily:'outfit-bold',
        fontSize:24,
        textAlign:'center'
    },
    text2:{
        textDecorationColor:Colors.GRAY,
        padding:10,
        fontFamily:'outfit',
        fontSize:15,
        textAlign:'center'
    },
    pressable:{
        marginTop:60,
        paddingHorizontal:50,
        paddingVertical:20,
        backgroundColor:Colors.SECONDARY,
        borderRadius:20
    },
    pressableText:{
        fontFamily:'outfit-medium'
    }
  });
export default LoginScreen;
