import React, { FC, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Header, InputWithTitle } from "../../../components";
import { RootNavigation } from "../../../navigation/RootNavigation";
import { dw } from "../../../utils/sizeUtils";

export const LoginScreen: FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <View style={styles.container}>
            <Header title="Login" onBackPress={RootNavigation.goBack} />
            
            <View style={styles.inputs}>
                <InputWithTitle
                    style={styles.input}
                    title="Email"
                    value={email}
                    placeholder={'Enter email'}
                    keyboardType="email-address"
                    onChangeText={setEmail}
                />
                <InputWithTitle
                    style={styles.input}
                    title="Password"
                    value={password}
                    placeholder={'Enter password'}
                    onChangeText={setPassword}
                    isSecured
                />
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: dw(20),
        marginTop: dw(40),
    },
    inputs: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        marginVertical: dw(10),
    },
});
