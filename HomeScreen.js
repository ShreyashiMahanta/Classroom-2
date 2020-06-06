import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize';

//import firebase from 'firebase';

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            student_name : "",
            class : "",
            section : "",
            roll_number : ""
        }
    }
    render(){
        return(
            <ScrollView style={styles.scrollview}>
            <View style = {styles.view}>
                <MyHeader
                title = "Home"
                style = {{width : 200}}
                />
              
                <Image
               source = {
                require("../assets/home.jpg")
            }
            style = {{
                width : 180,
                height : 180,
                alignSelf : 'center',
                borderRadius : 5
            }}
                />
                <Text style = {styles.text}>Your schedule today.</Text>            
                <View style = {styles.view2}> 
                
                <View style = {styles.view3}>
                    <Text style = {styles.viewText2}>Biology</Text>
                    </View>
                <View style = {styles.view4}><Text style = {styles.viewText2}>History</Text></View>
                <View style = {styles.view5}><Text style = {styles.viewText}>Assamese</Text></View>
                <View style = {styles.view6}><Text style = {styles.viewText2}>Mathematics</Text></View>
                </View>
                <ScrollView style={styles.scrollview}>
                <View style = {styles.container}>
                <Text style = {styles.nb}>Notice Board</Text>
                <View style = {styles.nbv}><Text>ABC</Text></View>
                <View style = {styles.nbv2}><Text>xyz</Text></View>
                </View>
                </ScrollView>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        backgroundColor : '#ffffff',
        padding : 25
    },
    view2 : {
        flex : 1,
        backgroundColor : '#C0C9CC',
        padding : 10,
        borderRadius : 15,
        height : 490,
        marginTop : 20,
        marginLeft : 10,
        marginRight : 10
        
    },
    view3 : {
        backgroundColor : '#B5E5CF',
        borderRadius : 25,
        height : 100,
        width : 230
        
    },
    view4 : {
        backgroundColor : '#FAD02C',
        borderRadius : 25,
        height : 100,
        width : 230,
        marginTop : 20
        
    },
    view5 : {
        backgroundColor : '#333652',
        borderRadius : 25,
        height : 100,
        width : 230,
        marginTop : 20
        
    },
    view6 : {
        backgroundColor : '#E6C2BF',
        borderRadius : 25,
        height : 100,
        width : 230,
        marginTop : 20
        
    },
    text : {
        fontSize : RFValue(25),
        fontWeight : 'bold',
        color : '#C15B78',
        fontFamily : 'sans-serif',
        marginTop : 30,
        
    },
    button : {
        backgroundColor : '#FEFCFF',
        borderRadius : 8,
        width : RFValue(200),
        height : 50,
        justifyContent: "center",
         alignItems: "center",
         shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    },
    buttonText : {
        fontSize : RFValue(20),
        fontWeight : '300',
        color : '#313E61',
        margin : 3
    },
    scrollview : {
        flex: 1,
        backgroundColor: "#fff"
    },
    viewText : {
        fontSize : 20,
        color : '#ffffff',
        paddingTop : 70,
        fontFamily : 'serif',
        paddingLeft : 20
    },
    viewText2 : {
        fontSize : 20,
        color : '#282120',
        paddingTop : 70,
        fontFamily : 'serif',
        paddingLeft : 20
    },
    time : {
        fontSize : 15,
        color : '#ffffff',
        marginTop : -70,
        fontFamily : 'serif',
        paddingLeft : 120
    },
    container : {
        flex : 1,
        backgroundColor : '#183A50',
        padding : 10,
        borderRadius : 15,
        height : 200,
        marginTop : 20,
        marginLeft : 10,
        marginRight : 10
    },
    nb : {
        fontSize : 25,
        color : '#ffffff',
        paddingTop : 5,
        fontFamily : 'serif',
        paddingLeft : 10,
        fontWeight : '300'
    },
    nbv : {
        backgroundColor : '#BB616C',
        borderRadius : 25,
        height : 50,
        width : 150,
        marginTop : 20
    },
    nbv2 : {
        backgroundColor : '#CDBDB2',
        borderRadius : 25,
        height : 50,
        width : 150,
        marginTop : 20,
        marginLeft : 80
    }
})