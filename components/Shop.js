import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';

export default class Shop extends Component {

    render() {

        return (


            <SafeAreaView >
                <ScrollView>
                    <View style={{ marginLeft: 10, flex: 1, flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 40 }}>hello shopfadsfasdfasdaf dsf asdfadsasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</Text>
                        <Text style={{ fontSize: 40 }}>hello shopfadsfasdfasdaf dsf asdfadsasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</Text>
                        <Text style={{ fontSize: 40 }}>hello shopfadsfasdfasdaf dsf asdfadsasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</Text>
                        <Text style={{ fontSize: 40 }}>hello shopfadsfasdfasdaf dsf asdfadsasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdf</Text>

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