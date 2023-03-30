import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export enum RouteEnum {
    //AUTH
    WELLCOME = 'WELLCOME',
    REGISTER = 'REGISTER',
    LOGIN = 'LOGIN',

    //HOME
    HOME = 'HOME',
    
}

export type RootStackParamList = {
    [RouteEnum.HOME]: undefined;
    [RouteEnum.REGISTER]: undefined;
    [RouteEnum.LOGIN]: undefined;
    [RouteEnum.WELLCOME]: undefined;
};

export type ScreenComponentType<T extends RouteEnum> = React.FC<NativeStackScreenProps<RootStackParamList, T>>;

export type ScreenParams<T extends RouteEnum> = RootStackParamList[T];
