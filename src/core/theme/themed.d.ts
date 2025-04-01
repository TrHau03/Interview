import '@rneui/themed'
import { BorderRadius } from './borderRadius'
import { FontFamily, FontSize } from './font'
import { Spacing } from './spacing'
declare module '@rneui/themed' {
    export interface Colors {
        tertiary: string
        accent: string
        surface: string
        border: string
        green: string
        red: string
        label: string
        yellow: string
        backgroundActionSheet: string
        orange: string
        shadowColor: string
        textPrimary: string
        borderColor: string
        blue04: string
        darkBlue: string
        bgOrange: string
        textOrange: string
        bgWathet: string
        textWathet: string
        bgGreen: string
        textGreen: string
        neutral: string
        neutral02: string
        primary02: string
        bgProgress1: string
        bgProgress2: string
        neutral03: string
        neutral05: string
    }
    export interface Theme {
        borderRadius: BorderRadius
        fontSize: FontSize
        spacing: Spacing
        fontFamily: FontFamily
    }
}
