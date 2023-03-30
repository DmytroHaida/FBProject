import React, { FC } from "react";
import {View, StyleSheet, Text} from "react-native";
import { RouteEnum, ScreenComponentType } from "../../types/navigation";

export const HomeScreen: FC = () => {
    return (
        <View style={styles.container}><Text style={{color: 'red'}}>HOME SCREEN</Text></View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})