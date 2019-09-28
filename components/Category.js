import React, { Component } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Category extends Component {

    state = {
        shops: [],
        catName: ''
    }


    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
        return {
            title: `${state.params.catName}`,
            //header: null
        };
    };

    componentDidMount() {
        const { navigation } = this.props;
        this.setState({ catName: navigation.getParam('catName', 'NO-CAT') });

        fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ shops: responseJson.movies });
            })
            .catch((error) => {
                console.error(error);
            });



    }


    render() {
        const x = Dimensions.get('window').height / 3 - 20;
        const y = Dimensions.get('window').width / 2 - 20;
        const { navigate } = this.props.navigation;

        var shop = [];


        for (let i = 0; i < this.state.shops.length; i++) {

            shop.push(
                <TouchableOpacity
                    onPress={() => { navigate('Shop'); }}
                    style={{ margin: 5, width: y, height: x, backgroundColor: 'skyblue' }}
                >

                    <Text>{this.state.shops[i].title} </Text>
                    <Text>Nom : </Text>
                    <Text>tele : </Text>
                    <Text>voir plus</Text>
                </TouchableOpacity>
            )
        }

        return (




            <SafeAreaView >
                <ScrollView>
                    <View style={{ marginLeft: 10, flex: 1, flexWrap: 'wrap', alignItems: 'flex-start', flexDirection: 'row' }}>

                        {shop}


                        {/* <TouchableOpacity style={{ margin: 5, width: y, height: x, backgroundColor: 'steelblue' }} /> */}
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