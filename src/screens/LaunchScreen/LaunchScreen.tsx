import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native'
import { Color } from "../../utils/res/colors";
import { dw } from "../../utils/sizeUtils";
import { Bouncing } from "./Bouncing";
import auth from '@react-native-firebase/auth';

export const LaunchScreen = () => {
    const [isLaunched, setIsLaunched] = useState(false);


    useEffect(() => {
        const subscriber = auth().onAuthStateChanged((user) => console.log(user))
        setTimeout(() => {setIsLaunched(true)}, 5000);

        return subscriber;
    }, []);

    return !isLaunched ? (
        <View style={styles.container}>
            <Text style={styles.title}>Loading...</Text>
            <Bouncing />
        </View>
    ) : null
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: Color.GALLERY,
    },
    title: {
        textAlign: 'center',
        fontSize: dw(25),
        color: Color.PRIMARY,
        marginTop: dw(40),
    }
})