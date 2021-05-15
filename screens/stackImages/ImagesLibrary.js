import React from 'react';
import { View } from 'react-native';
import Image from 'react-native-image-progress';

const ImageLibrary = ({ imagesArray, width, height}) => {
    const simple = {
        width: width,
        height: height
    }
    const triple = {
        width: width * 3,
        height: height * 3
    };
    const ImageOf = (uri, optionsStyles = simple) => (
        <Image
            style={optionsStyles}
            source={uri}
            threshold={150}
        />
    );
    return (
        <>
            <View style={{
                display: "flex",
                flexDirection: "row"
            }}>
                <View style={{display: "flex", flexDirection: "column"}}>
                    <View style={{display: "flex", flexDirection: "column"}}>
                        {imagesArray[0] && ImageOf(imagesArray[0])}
                        {imagesArray[2] && ImageOf(imagesArray[2])}
                        {imagesArray[3] && ImageOf(imagesArray[3])}
                        {imagesArray[4] && ImageOf(imagesArray[4])}
                    </View>
                </View>
                <View style={{display: "flex", flexDirection: "column"}}>
                    {imagesArray[1] && ImageOf(imagesArray[1], triple)}
                    <View style={{display: "flex", flexDirection: "row"}}>
                        {imagesArray[5] && ImageOf(imagesArray[5])}
                        {imagesArray[6] && ImageOf(imagesArray[6])}
                        {imagesArray[7] && ImageOf(imagesArray[7])}
                    </View>
                </View>
            </View>
        </>
    );
};

export default ImageLibrary
