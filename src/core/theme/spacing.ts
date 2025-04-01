import { normalize } from '@rneui/themed'

export const spacing = {
    xl: normalize(24),
    lg: normalize(20),
    md: normalize(16),
    sm: normalize(12),
    xs: normalize(8),
}

export type Spacing = typeof spacing
