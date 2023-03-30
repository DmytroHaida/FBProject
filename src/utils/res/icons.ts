import React from 'react';

import BackArrow from '../../assets/icons/back_arrow.svg';
import { Color } from './colors';


export enum Icons {
    BACK_ARROW = 'BACK_ARROW',
}

export const icons = new Map<Icons, React.FC<{color: Color; width?: number; height?: number}>>([
    [Icons.BACK_ARROW, BackArrow],
]);
