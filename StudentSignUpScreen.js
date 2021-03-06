import React,{Component} from 'react';
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';

export default class StudentSignUpScreen extends Component{
    constructor(){
        super();
    this.state = {
      emailId: "",
      password: "",
      student_name: "",
      class : "",
      section : "",
      roll_no: "",
      confirmPassword: "",
      school_name : ""
      
    };
    }
    /*
    userSignUp = (emailId, password, confirmPassword) => {
        if (password !== confirmPassword) {
          return Alert.alert("Password doesn't match\nCheck your password.");
        } else {
          firebase
            .auth()
            .createUserWithEmailAndPassword(emailId, password)
            .then(() => {
              db.collection("users").add({
                student_name: this.state.student_name,
                class: this.state.class,
                section: this.state.section,
                email_id: this.state.emailId,
                school_name: this.state.school_name,
                
              });
              return Alert.alert("User Added Successfully", "", [
                {
                  text: "OK",
                },
              ]);
            })
            .catch((error) => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              return Alert.alert(errorMessage);
            });
        }
      };
      */
    render(){
        return(
            <ScrollView style={styles.scrollview}>
            <View style = {styles.view}>
               <TouchableOpacity
               onPress={() => this.props.navigation.navigate('WelcomeScreen')}
               >
               <Image
               source = {
                require("../assets/backArrow.png")
            }
            style = {{
                width : 100,
                height : 150,
                alignSelf : 'center',
               marginTop : -40,
               marginBottom : -30,
               marginLeft : -250,
            }}
                />
        
               </TouchableOpacity>
                <Text style = {styles.header}>sign up.</Text>
                <Text style = {styles.text}>welcome to classroom.</Text>
                <Image
               source = {
                require("../assets/girl.png")
            }
            style = {{
                width : 300,
                height : 350,
                alignSelf : 'center',
               marginTop : -40,
               marginBottom : -30,
               marginLeft : -10,
            }}
                />
              
               <TextInput
               style={styles.formTextInput}
               placeholder={" name.."}
               placeholderTextColor = {'white'}
               onChangeText={(text) => {
                 this.setState({
                   student_name: text,
                 });
               }}
               value={this.state.student_name}
               />
               
                <TextInput
                  style={styles.formTextInput}
                  placeholderTextColor = {'white'}
                  placeholder="email address.."
                  keyboardType="email-address"
                  onChangeText={(text) => {
                    this.setState({
                    emailId: text,
                  });
                  }}

                />
               
               <TextInput
               style={styles.formTextInput}
               placeholder={"school.."}
               placeholderTextColor = {'white'}
               onChangeText={(text) => {
                 this.setState({
                   school_name: text,
                 });
               }}
               value={this.state.school_name}
               />

               <TextInput
               style={styles.formTextInput}
               placeholderTextColor = {'white'}
               placeholder={"class.."}
               keyboardType={"numeric"}
               onChangeText={(text) => {
                 this.setState({
                   class: text,
                 });
               }}
               value={this.state.class}
               />
               <TextInput
               style={styles.formTextInput}
               placeholderTextColor = {'white'}
               placeholder={"section.."}
               maxLength={10}
               onChangeText={(text) => {
                 this.setState({
                   section: text,
                 });
               }}
               value={this.state.section}
               />
               <TextInput
               style={styles.formTextInput}
               placeholderTextColor = {'white'}
               placeholder={"roll number.."}
               keyboardType={"numeric"}
               maxLength={10}
               onChangeText={(text) => {
                 this.setState({
                   roll_no: text,
                 });
               }}
               value={this.state.roll_no}
               />
                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"password.."}
                    placeholderTextColor = {'white'}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        password: text,
                      });
                    }}
                  />

                  <TextInput
                    style={styles.formTextInput}
                    placeholder={"confrim Password.."}
                    placeholderTextColor = {'white'}
                    secureTextEntry={true}
                    onChangeText={(text) => {
                      this.setState({
                        confirmPassword: text,
                      });
                    }}
                  />
                  <TouchableOpacity style = {styles.button}
                  onPress={() => this.props.navigation.navigate('WP')}
                  ><Text style = {styles.buttonText}
                   
                  >SIGN UP</Text></TouchableOpacity>

            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    view : {
        flex : 1,
        backgroundColor : '#FFB067',
        padding : 20
    },
    
    formTextInput : {
        width: "90%",
        height: RFValue(45),
        padding: RFValue(10),
        borderWidth:3,
        //borderRadius:10,
        paddingBottom:RFValue(15),
        marginLeft:RFValue(5),
        marginBottom:RFValue(20),
        borderTopColor:'#607D86',
        borderBottomColor : '#607D86',
        borderRightColor : '#FFB067',
        borderLeftColor : '#FFB067',
        
    },
    button : {
        backgroundColor : '#DB1F48',
        borderRadius : 10,
        width : RFValue(200),
        height : 50,
        justifyContent: "center",
         alignItems: "center",
         shadowColor: "#F4EAE6",
         margin : 10,
         marginLeft : 50,
         marginTop : 40,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    },
    buttonText : {
        fontSize:RFValue(20),
        color:"#F4EAE6",
        fontWeight:'300',
        marginLeft:RFValue(20),  
        alignItems : 'center',
        paddingRight : 15
    },
    scrollview : {
        flex: 1,
        backgroundColor: "#fff"
    },
    header : {
      fontSize : 60,
      alignContent : 'center',
      fontFamily : 'serif',
      marginLeft : 60,
      color : '#C44B4F',
      marginTop : -60
    },
    text : {
      fontSize : 20,
      alignContent : 'center',
      fontFamily : 'serif',
      marginLeft : 60,
      color : '#C44B4F' ,
      marginTop : 10
    }

})
