import React, { FC } from 'react';
import { RouteEnum, ScreenComponentType } from '../types/navigation';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { WellcomeScreen } from '../screens/Auth/WellcomeScreen';
import { RegisterScreen } from '../screens/Auth/RegisterScreen/RegisterScreen';
import { LoginScreen } from '../screens/Auth/LoginScreen/LoginScreen';


export interface IScreen {
    name: RouteEnum;
    component: FC;
    options?: NativeStackNavigationOptions;
}

export const AUTH_SCREENS: IScreen[] = [
    {
        name: RouteEnum.WELLCOME,
        component: WellcomeScreen,
        options: {
            headerShown: false,
            animation: 'none',
        },
    },
    {
        name: RouteEnum.REGISTER,
        component: RegisterScreen,
        options: {
            headerShown: false,
            animation: 'none',
        },
    },
    {
        name: RouteEnum.LOGIN,
        component: LoginScreen,
        options: {
            headerShown: false,
            animation: 'none',
        },
    },
];

export const HOME_SCREENS: IScreen[] = [
    {
        name: RouteEnum.HOME,
        component: HomeScreen,
        options: {
            headerShown: false,
            animation: 'none',
        },
    },
];