import React, { useEffect } from "react";
import { Animated, StyleSheet, useAnimatedValue, Dimensions } from 'react-native';
import { Color } from "../../utils/res/colors";

const OBJECT_WIDTH = 100;
const OBJECT_HEIGHT = 100;
const DURATION = 800;

export const Bouncing = () => {
    const fall = useAnimatedValue(150);
    const rotate = useAnimatedValue(0);
    const border = useAnimatedValue(0);

    const bouncing = (isUp = false) => {
        const fallAnim= Animated.timing(fall, {
            toValue: isUp ? 400 : 150,
            duration: DURATION,
            useNativeDriver:true,
        })
    
        const rotateAnim=   Animated.timing(rotate, {
            toValue: isUp ? 1 : 0,
            duration: DURATION,
            useNativeDriver:true,
        })
        const borderAnim=   Animated.timing(border, {
            toValue: isUp ? 50 : 0,
            duration: DURATION,
            useNativeDriver:true,
        })
        Animated.parallel([
            fallAnim,
            rotateAnim,
            borderAnim,
        ]).start(() => {
            bouncing(!isUp);
        });
    };

    useEffect(() => {
        bouncing();
    }, []);
    

    const trans={
        transform:[
            {translateY: fall },
            {rotate: rotate.interpolate({
                inputRange:[0, 1],
                outputRange:["0deg", "360deg"],
            })}
        ],
        borderRadius: border,
    }

    return (
        <Animated.View style={[styles.object, trans]} />
    );
}

const styles = StyleSheet.create({
     object:{
        width: OBJECT_WIDTH,
        height: OBJECT_HEIGHT,
        backgroundColor: Color.PRIMARY,
        position: "absolute",
        left: Dimensions.get('screen').width / 2 - OBJECT_WIDTH / 2,
    }
})