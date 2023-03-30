import React, { FC } from "react";
import { View, StyleSheet, TextInput, KeyboardTypeOptions } from "react-native";
import { Color } from "../../utils/res/colors";
import { Fonts, fontStyles } from "../../utils/res/fonts";
import { dw } from "../../utils/sizeUtils";
import { AppText } from "../AppText/AppText";

export interface IInputProps {
    value: string;
    placeholder?: string;
    keyboardType?: KeyboardTypeOptions;
    errorText?: string;
    isSecured?: boolean;
    onChangeText: (value: string) => void;
    onBlur?: () => void;
}

export const Input: FC<IInputProps> = ({value, placeholder, keyboardType, errorText, isSecured, onChangeText, onBlur}) => {

    return (
        <View>
            <TextInput 
                style={[styles.input, errorText ? styles.inputError : null]}
                value={value}
                placeholder={placeholder}
                keyboardType={keyboardType}
                secureTextEntry={isSecured}
                onChangeText={onChangeText}
                onBlur={onBlur}
            />
            {errorText && <AppText style={styles.errorText} text={errorText} font={Fonts.S_13_W400} />}
        </View>
    )
};

const styles = StyleSheet.create({
    input: {
        height: dw(45),
        padding: dw(10),
        borderWidth: 1,
        borderRadius: dw(8),
        borderColor: Color.DOVE_GRAY,
        color: Color.BLACK,
        ...fontStyles(Fonts.S_14_W600),
      },
      inputError: {
        borderColor: Color.RED,
        color: Color.RED,
      },
      errorText: {
        marginLeft: dw(12),
        marginTop: dw(2),
        color: Color.RED,
      },
});
