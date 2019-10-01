import React, { Component } from 'react';
import { ToastAndroid, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Button, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';


export default class Categories extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'CATEGORIES',
        headerRight: (
            <TouchableOpacity
                style={{
                    margin: 5,
                }}
                onPress={
                    () => {
                        navigation.navigate('Profile')
                    }

                } >

                <Image
                    style={{ width: 30, height: 30 }}
                    source={require('../assets/profilePic.png')}
                />
            </TouchableOpacity>
        ),
    });

    state = {
        categories: [],
        latitude: '',
        longitude: '',
        city: '',
        nav: ''
    }


    componentDidMount() {

        this.setState({ nav: this.props.navigation })


        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null
                });

                fetch('https://api.opencagedata.com/geocode/v1/json?q=' + this.state.latitude + '+' + this.state.longitude + '&key=09e077243d424452961b06a6a3349d1f')
                    .then((response) => response.json())
                    .then((responseJson) => {
                        this.setState({ city: responseJson.results[0].components.city });
                        ToastAndroid.show("you are in ... " + this.state.city, ToastAndroid.SHORT);
                    })


            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );

        fetch('https://tickets.fcpo.ma/phpAPI/ticket/getAllTickets.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ categories: responseJson.data });
            })
            .catch((error) => {
                console.error(error);
            });
    }




    render() {
        const { navigate } = this.props.navigation;

        storeData = async () => {
            try {
                await AsyncStorage.setItem('TASKS', 'I like to save it.');
            } catch (error) {
                // Error saving data
            }
        };
        retrieveData = async () => {
            try {
                const value = await AsyncStorage.getItem('TASKS');
                ToastAndroid.show("hello " + value, ToastAndroid.SHORT);
                if (value !== null) {
                    // We have data!!
                    console.log(value);
                }
            } catch (error) {
                // Error retrieving data
            }
        };

        var cat = [];


        for (let i = 0; i < this.state.categories.length; i++) {

            cat.push(
                <TouchableOpacity
                    key={i}
                    style={{
                        marginBottom: 20,
                        height: 100, backgroundColor: 'powderblue'
                    }}
                    onPress={() => {
                        navigate('Category', { catName: this.state.categories[i].nom });
                    }}>

                    <Text>{this.state.categories[i].nom} </Text>
                </TouchableOpacity>
            )
        }



        return (

            <SafeAreaView>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'stretch'
                    }}>
                        {cat}

                    </View>
                </ScrollView>
            </SafeAreaView>
        );



    }





}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});