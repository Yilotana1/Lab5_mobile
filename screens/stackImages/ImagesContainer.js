import React, { useState } from 'react';
import { View, Text, ScrollView, StatusBar } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Appbar } from 'react-native-paper';
import SearchBar from "react-native-dynamic-search-bar";
import ImageLibrary from "./ImagesLibrary";
import { useScreenDimensions, MainT } from '../../vars/vars'

const ImagesContainer = () => {

    const [imageLibraryState, setImageLibraryState] = useState([]);

    const pickImage = async () => {
        const pickedImage = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [3, 4],
            quality: 1
        });
        if (pickedImage.cancelled) {
            console.log('cancelled')
        } else {
            setImageLibraryState(prevState => [...prevState, { uri: pickedImage.uri }])
        }
    };
    const screenData = useScreenDimensions();
    const galleryComponent = splitter(imageLibraryState).map(
        image => (
            <ImageLibrary
                key={image[0].uri}
                imagesArray={image}
                width={screenData.width / 4}
                height={screenData.isLandscape ? screenData.height / 2.5 : screenData.height / 6.5}
            />
        )
    );
    return (
        <>
            <View>
                <Appbar.Header theme={MainT}>
                    <Appbar.Action icon="home"/>
                    <SearchBar
                        placeholder='Search'
                        style={{flex: 1}}
                    />
                    <Appbar.Action
                        icon="plus"
                        onPress={pickImage}
                    />
                </Appbar.Header>
            </View>
            <View style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
                {
                    imageLibraryState.length !== 0 ?
                        <ScrollView style={{display: "flex", flexWrap: "wrap", flexDirection: "row",}}>
                            {galleryComponent}
                        </ScrollView>
                        :
                        <View style={{flex: 1, alignItems: "center", justifyContent: "center", height: "100%"}}>
                            <Text style={{fontStyle: "italic", fontSize: 20}}>
                                Add some what u want!
                            </Text>
                        </View>
                }
            </View>
        </>
    );
};

const splitter = (arr = [], maxArrSize = 8) => {
    const result = [];
    for (let i = 0; i < Math.ceil(arr.length / maxArrSize); i++) {
        result[i] = arr.slice(i * maxArrSize, (i * maxArrSize) + maxArrSize);
    }
    return result;
};

export default ImagesContainer
