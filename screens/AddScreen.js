import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { Btn } from "../vars/vars";
import { Button } from "react-native-elements";
import { FloatingLabelInput } from 'react-native-floating-label-input';

const AddScreen = ({ navigation, route }) => {

    const { booksData } = route.params;
    const { setBooksData } = route.params;
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState('');

    function ValidationCallback(arr, setArr) {
        try {
            const num = parseInt(price);
            let Idx = 50
            if (isNaN(num)) {
                setPrice('U entered letters to price')
                setTimeout(() => {
                    setPrice('')
                }, 2000);
            } else {
                const newItem = {
                    image: '',
                    isbn13: Idx,
                    price: price,
                    subtitle: subtitle,
                    title: title,
                }
                const newBooksData = [...arr, newItem]
                setArr(newBooksData)
                navigation.navigate('Books')
            }
        }catch(error) {
            console.log('error', error);
        }
    }

    return (
        <ScrollView
            keyboardShouldPersistTaps="handled"
        >
            <View style={{padding: 50, flex: 1}}>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        countdownLabel="chars left"
                        placeholder={''}
                        maxLength={100}
                        showCountdown={true}
                        style={{color: '#fff'}}
                        label={'Title'}
                        value={title}
                        rightComponent={(
                            <TouchableOpacity
                                style={{ alignContent:'center', justifyContent:'center' }}
                                onPress={()=>{
                                    setTitle('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setTitle(val)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        label={'Subtitle'}
                        value={subtitle}
                        rightComponent={(
                            <TouchableOpacity
                                style={{
                                    alignContent:'center',
                                    justifyContent:'center'
                                }}
                                onPress={()=>{
                                    setSubtitle('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setSubtitle(val)}
                    />
                </View>
                <View style={{marginBottom: 20}}>
                    <FloatingLabelInput
                        keyboardType="numeric"
                        label={'Price'}
                        value={price}
                        rightComponent={(
                            <TouchableOpacity
                                style={{alignContent:'center', justifyContent:'center'}}
                                onPress={()=>{
                                    setPrice('')
                                }}>
                                <Text>✕</Text>
                            </TouchableOpacity>
                        )}
                        onChangeText={(val) => setPrice(val)}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Button
                        onPress={() => {
                            ValidationCallback(booksData, setBooksData)
                        }}
                        theme={Btn}
                        title="Add"
                        buttonStyle={{ width: 150 }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}

export default AddScreen
