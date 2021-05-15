import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MainB } from '../vars/vars'
import { createStackNavigator } from '@react-navigation/stack';
import StudentScreen from "./StudentScreen";
import ChartScreen from "./ChartScreen";
import BookScreen from './BookScreen'
import InfoScreen from "./InfoScreen";
import AddScreen from "./AddScreen";
import ImagesContainer from "./stackImages/ImagesContainer";

const Stack = createStackNavigator();

const bookStack = () => {
    return(
        <Stack.Navigator initialRouteName="Books">
            <Stack.Screen
                name="Books"
                component={BookScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Books',
                    tabBarIcon: () => (
                        <View>
                            <Icon
                                name={'bold'}
                            />
                        </View>
                    ),
                }}
            />
            <Stack.Screen
                name="InfoScreen"
                component={InfoScreen}
            />
            <Stack.Screen
                name="AddScreen"
                component={AddScreen}
            />
        </Stack.Navigator>
    )
}


const Tab = createMaterialBottomTabNavigator();

const RootNavigator = () => {
    return (
        <NavigationContainer theme={ MainB }>
            <Tab.Navigator
                shifting={true}
                sceneAnimationEnabled={true}
                initialRouteName="Creator"
            >
                <Tab.Screen
                    name="MainTab"
                    component={StudentScreen}
                    options={{
                        tabBarLabel: 'StudentScreen',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'star'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name="ChartScreen"
                    component={ChartScreen}
                    options={{
                        tabBarLabel: 'ChartScreen',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={23.5}
                                    name={'line-chart'}
                                />
                            </View>
                        ),
                    }}
                />
                <Tab.Screen
                    name='Books'
                    options={{
                        tabBarLabel: 'Books',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={25}
                                    name={'book'}
                                />
                            </View>
                        ),
                    }}
                    component={bookStack}
                />
                <Tab.Screen
                    name='ImagesContainer'
                    options={{
                        tabBarLabel: 'Images',
                        tabBarIcon: () => (
                            <View>
                                <Icon
                                    style={[{color: '#F9F3E7'}]}
                                    size={23}
                                    name={'camera'}
                                />
                            </View>
                        ),
                    }}
                    component={ImagesContainer}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
export default RootNavigator
