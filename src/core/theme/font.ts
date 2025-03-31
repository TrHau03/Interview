import { normalize } from '@rneui/themed'

export const fontSize = {
    xl: normalize(24),
    lg: normalize(18),
    md: normalize(16),
    mm: normalize(14),
    sm: normalize(12),
    xs: normalize(8),
}

export const fontFamily = {
    LexendDeca: 'LexendDeca',
}

export type FontSize = typeof fontSize

export type FontFamily = typeof fontFamily
