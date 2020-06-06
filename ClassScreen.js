import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';

export default class ClassScreen extends Component{
    constructor(){
        super();
        this.state = {
            student_name : "",
            class : "",
            section : "",
            roll_number : "" ,
            current_subject : "",
            current_teacher : "",
            text : ""
        }
    }

    render(){
        return(
            <View style = {styles.container}>
                <MyHeader
                title = "CLASS"
                />
                <Text style = {styles.header}>subject. {this.state.current_subject} </Text>
                 <Text style = {styles.header}>teacher. {this.state.current_teacher}</Text>
                 <TextInput
                 style={styles.textInput}
                 placeholder={"type your message.."}
                 onChangeText={(text) => {
                   this.setState({
                     text : text,
                   });
                 }}
                 />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : '#B4F8C8',
        padding : 90
    },
    header : {
        fontSize : RFValue(30),
        fontWeight : 'bold',
        color : '#FFAEBC',
        padding : 5
    },
    textInput : {
        width: 290,
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:3,
        borderTopColor:'#ffffff',
        borderBottomColor:'#ffffff',
        paddingTop:RFValue(10),
        marginLeft:RFValue(20),
        marginBottom:RFValue(14),
        borderRightColor : '#B4F8C8',
        borderLeftColor : '#B4F8C8',
        marginTop : 300
    }
})