import {Platform, StyleSheet, TextStyle} from 'react-native';
import {dw} from '../sizeUtils';

// if want to add new fonts add them to assets\fonts\
// then npx react-native-asset

enum FontFamily {
    HELVETICA = 'HELVETICA',
}
type FontWeight = '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

const helveticaFontWeightToAndroidFont = new Map<FontWeight, string>([
    ['100', 'HelveticaNeueCyr-UltraLight'],
    ['200', 'HelveticaNeueCyr-Thin'],
    ['300', 'HelveticaNeueCyr-Light'],
    ['400', 'HelveticaNeueCyr-Roman'],
    ['500', 'HelveticaNeueCyr-Medium'],
    ['600', 'HelveticaNeueCyr-Medium'],
    ['700', 'HelveticaNeueCyr-Bold'],
    ['800', 'HelveticaNeueCyr-Heavy'],
    ['900', 'HelveticaNeueCyr-Black'],
]);

const getAndroidFontWeight = (fontWeight: FontWeight, fontFamily?: FontFamily) => {
    switch (fontFamily) {
        case FontFamily.HELVETICA:
            return helveticaFontWeightToAndroidFont.get(fontWeight);

        default:
            return helveticaFontWeightToAndroidFont.get(fontWeight);
    }
}


const getIosFontFamily = (fontFamily?: FontFamily) => {
    switch (fontFamily) {
        case FontFamily.HELVETICA:
            return 'HelveticaNeueCyr';
        
        default:
            return 'HelveticaNeueCyr';
    }
}


const getFontFamily = (fontWeight: FontWeight = '400', fontFamily?: FontFamily, isItalic = false): TextStyle | undefined =>
    Platform.select<TextStyle>({
        ios: {
            fontWeight,
            fontFamily: getIosFontFamily(fontFamily),
            fontStyle: isItalic ? 'italic' : 'normal',
        },
        android: {
            fontFamily: `${getAndroidFontWeight(fontWeight, fontFamily)}${isItalic ? 'Italic' : ''}`,
        },
    });

/**
 * Naming:
 * 1. Size
 * 2. Weight
 * 3. LineHeight (optional)
 * 4. Is Italic (optional)
 * 5. Other
 * Example: S20_W400_LH20_ITALIC_UNDERLINED
 * {
 *    fontSize: dw(20),
      ...getFont('400', true),
      lineHeight: dw(20),
      textDecorationLine: 'underline',
 * }
 */

export enum Fonts {
    S26_W700 = "S26_W700",
    S20_W700 = "S20_W700",
    S_16_W400 = "S_16_W400",
    S_14_W600 = "S_14_W600",
    S_13_W400 = "S_13_W400",

}

export const fontStyles = (font: Fonts, fontFamily?: FontFamily) => {
    const getFont = (fontWeight: FontWeight = '400') => {
        return getFontFamily(fontWeight, fontFamily);
    }

    const styles = StyleSheet.create({
        [Fonts.S26_W700]: {
            fontSize: dw(26),
            ...getFont('700'),
        },
        [Fonts.S20_W700]: {
            fontSize: dw(20),
            ...getFont('700'),
        },
        [Fonts.S_16_W400]: {
            fontSize: dw(16),
            ...getFont('400'),
        },
        [Fonts.S_14_W600]: {
            fontSize: dw(14),
            ...getFont('600'),
        },
        [Fonts.S_13_W400]: {
            fontSize: dw(13),
            ...getFont('400'),
        },
    })

    return styles[font];
};
