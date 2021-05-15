import React from "react";
import { View, Text } from 'react-native'

const StudentScreen = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', flexDirection:'column', alignItems:'center' }}>
            <Text style={{ fontSize: 20 }}>Анатолій Жилко</Text>
            <Text style={{ fontSize: 20 }}>Група ІО-81</Text>
            <Text style={{ fontSize: 20 }}>ЗК ІО-8107</Text>
        </View>
    )
}

export default StudentScreen
