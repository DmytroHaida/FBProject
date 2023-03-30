import React, {useCallback} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList, RouteEnum } from '../types/navigation';
import { AUTH_SCREENS, HOME_SCREENS, IScreen } from './screens';
import {NavigationContainer} from '@react-navigation/native';
import { navigationRef } from './RootNavigation';
import { LaunchScreen } from '../screens/LaunchScreen/LaunchScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();


export const AppNavigation = () => {
    const mapScreens = useCallback(
        (inputScreens: IScreen[]) =>
            inputScreens.map(screen => (
                <Stack.Screen
                    key={screen.name}
                    name={screen.name}
                    component={screen.component}
                    options={screen.options}
                />
            )),
        [],
    );

    return (
        <NavigationContainer ref={navigationRef}>
            <LaunchScreen />

            {/* TODO: init route must be not auth redirect. */}
            <Stack.Navigator initialRouteName={RouteEnum.WELLCOME}>
                {mapScreens(AUTH_SCREENS)}
                {mapScreens(HOME_SCREENS)}
            </Stack.Navigator>

        </NavigationContainer>
    )
}

