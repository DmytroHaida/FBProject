import React, { FC, useCallback, useMemo, useState } from "react";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { Color } from "../../utils/res/colors";
import { Fonts, fontStyles } from "../../utils/res/fonts";
import { dw } from "../../utils/sizeUtils";

const BUTTON_HEIGHT = dw(45);

interface Props {
    text: string;
    width?: number;
    height?: number;
    font?: Fonts;
    color?: Color;
    bgColor?: Color;
    isDisabled?: boolean;
    containerStyles?: ViewStyle;
    onPress: () => void;
}

export const AppButton: FC<Props> = ({ text, width, height, font, color, isDisabled, containerStyles, onPress }) => {
    const [isPressed, setIsPresed] = useState(false);

    const pressableContainerStyles = useMemo(() => ({
        width: width ? width : '100%',
        height: height ? height : BUTTON_HEIGHT,
        ...containerStyles
    }), [width, height, font, containerStyles]);

    const textStyles= useMemo(() => ({
        color: color ?? Color.WHITE,
        ...fontStyles(font ?? Fonts.S_13_W400)

    }), [color, font])

    const handleOnPress = useCallback(() => {
        onPress();
    }, [onPress]);

    const handleTogglePressInOut = useCallback(() => {
        setIsPresed(prev => !prev);
    }, []);


    return (
        <Pressable 
            style={[styles.container, isDisabled ?? isPressed ? styles.pressed : null, pressableContainerStyles]}
            disabled={isDisabled ?? isPressed}
            onPress={handleOnPress}
            onPressIn={handleTogglePressInOut}
            onPressOut={handleTogglePressInOut}
        >
            <Text style={textStyles}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Color.PRIMARY,
        borderRadius: dw(8),
    },
    pressed: {
        backgroundColor: Color.GRAY,
    },
})