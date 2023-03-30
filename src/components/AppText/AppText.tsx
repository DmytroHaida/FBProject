import React, { FC, memo, useMemo } from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import { Color } from "../../utils/res/colors";
import { Fonts, fontStyles } from "../../utils/res/fonts";

interface Props {
    text: string;
    font: Fonts,
    alignment?: 'center' | 'left' | 'right';
    color?: Color;
    isUnderlined?: boolean;
    style?: TextStyle;
}

const AppTextCmp: FC<Props> = ({ text, font, alignment, color, isUnderlined, style }) => {
    const textStyles: TextStyle = useMemo(() => ({
        ...fontStyles(font),
        color: color ?? Color.BLACK,
        textAlign: alignment,
        textDecorationLine: isUnderlined ? 'underline' : 'none',
        ...style,
    }), [font, color, alignment, isUnderlined, style]);

    return (
        <Text style={textStyles}>{text}</Text>
    )
};

export const AppText = memo(AppTextCmp);


