import React, { FC } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { ACTIVE_OPACITY } from "../../utils/constants";
import { Color } from "../../utils/res/colors";
import { Fonts } from "../../utils/res/fonts";
import { dw } from "../../utils/sizeUtils";
import { AppText } from "../AppText/AppText";
import { Icon } from "../";
import { Icons } from "../../utils/res/icons";
interface Props {
    title: string;
    color?: Color;
    onBackPress?: () => void;
}
export const Header: FC<Props> = ({title, color, onBackPress}) => {
    return (
        <View style={styles.container}>
            {onBackPress && (
                <TouchableOpacity
                    onPress={onBackPress}
                    style={styles.backButton}
                    activeOpacity={ACTIVE_OPACITY}>
                    <Icon icon={Icons.BACK_ARROW} color={Color.BLACK} width={dw(20)} height={dw(20)} />
                </TouchableOpacity>
            )}

            <AppText style={styles.title} color={color} text={title} font={Fonts.S26_W700} alignment="center" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: dw(40),
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButton: {
        width: dw(40),
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 1,
    },
});
