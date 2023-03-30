import React, { FC } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { AppText, Input } from "../";
import { Fonts } from "../../utils/res/fonts";
import { dw } from "../../utils/sizeUtils";
import { IInputProps } from "./Input";

interface Props extends IInputProps {
    title: string;
    style: ViewStyle;
}

export const InputWithTitle: FC<Props> = ({ title, style, value, placeholder, isSecured, onChangeText }) => {
    return (
        <View style={style}>
            <AppText style={styles.title} text={title} font={Fonts.S_16_W400} />

            <Input value={value} placeholder={placeholder} onChangeText={onChangeText} isSecured={isSecured} />
        </View>
    )
};

const styles = StyleSheet.create({
    title: {
        marginLeft: dw(12),
        marginVertical: dw(2),
    },
});
