import {CommonActions, createNavigationContainerRef, StackActions} from '@react-navigation/native';
import {RouteEnum, ScreenParams} from '../types/navigation';


export const navigationRef = createNavigationContainerRef()

export const navigate = <T extends RouteEnum> (name: T, params?: ScreenParams<T>): void => {
    if (navigationRef.isReady()) {
        navigationRef.navigate((name as never), (params as never));
    }
}

export const resetTo = <T extends RouteEnum>(route: T | T[], params?: ScreenParams<T>): void => {
    const currentState = navigationRef.current?.getState();

    if (
        typeof route === 'string' &&
        currentState &&
        currentState.routes.length === 1 &&
        currentState.routes[0].name === route
    ) {
        return;
    }

    if (typeof route === 'string') {
        navigationRef.current?.dispatch(StackActions.push(route, params));
    } else {
        route.forEach(item => navigationRef.current?.dispatch(StackActions.push(item)));
    }

    navigationRef.current?.dispatch(state => {
        const correctRoutesLength = typeof route === 'string' ? 1 : route.length;
        const routes = state.routes.slice(correctRoutesLength * -1);

        return CommonActions.reset({
            ...state,
            routes,
            index: routes.length - 1,
        });
    });
}

export const goBack = () => {
    if (!navigationRef.current?.canGoBack()) {
        console.log('RootNavigation: It is first page in the stack, can not go back!!!');
        return;
    }

    navigationRef.current?.goBack();
}


export const RootNavigation = {navigate, goBack, resetTo};
