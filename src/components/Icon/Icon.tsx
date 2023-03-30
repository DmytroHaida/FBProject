import React, { FC, memo, useMemo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { Color } from '../../utils/res/colors';
import {Icons, icons} from '../../utils/res/icons';

interface IconProps {
    icon: Icons;
    color?: Color;
    styles?: StyleProp<ViewStyle>;
    width?: number;
    height?: number;
}

const IconCmp: FC<IconProps> = ({icon, color, styles, width, height}) => {
    const iconComponent = icons.get(icon);
    console.log(iconComponent)

    const iconProps = useMemo(() => {
        const props: {color: Color; width?: number; height?: number} = {color: Color.BLACK};

        if (width) {
            props.width = width;
        }

        if (height) {
            props.height = height;
        }

        return props;
    }, [color, width, height]);

    return <View style={styles}>{iconComponent(iconProps)}</View>;
};

export const Icon = memo(IconCmp);
