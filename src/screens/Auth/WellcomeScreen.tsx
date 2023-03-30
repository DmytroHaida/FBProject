import React, { FC, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { AppButton, Header } from "../../components";
import { useAuth } from "../../hooks/useAuth";
import { RootNavigation } from "../../navigation/RootNavigation";
import { RouteEnum } from "../../types/navigation";
import { dw } from "../../utils/sizeUtils";

export const WellcomeScreen: FC = () => {
    useAuth();

    const handlePressLogin = useCallback(() => RootNavigation.navigate(RouteEnum.LOGIN), [])
    const handlePressRegister = useCallback(() => RootNavigation.navigate(RouteEnum.REGISTER), [])

    return (
        <View style={styles.container}>
            <Header title="Wellcome screen" />

            <View style={styles.buttons}>
                <AppButton containerStyles={styles.button} text="Login" onPress={handlePressLogin} />
                <AppButton containerStyles={styles.button} text="Register" onPress={handlePressRegister} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: dw(20),
        paddingVertical: dw(40),
    },
    buttons: {
        width: '100%',
    },
    button: {
        marginVertical: dw(20),
    },
})