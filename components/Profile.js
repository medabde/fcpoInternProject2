import React, { Component } from 'react';
import { StyleSheet, Button, View, Text, SafeAreaView, ScrollView } from 'react-native';




export default class Profile extends Component {

    static navigationOptions = {
        title: 'Profile'
    };



    render() {
        return (


            <SafeAreaView >
                <ScrollView>
                    <View style={{ marginTop: 20, marginLeft: 10, flex: 1, flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row' }}>
                        <Text>hello profile</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>

        );


    }





}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        //flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },


});