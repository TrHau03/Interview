import { makeStyles, normalize } from '@rneui/themed'

export const useStyles = makeStyles(({ fontSize, colors, spacing }) => {
    return {
        container: {
            flex: 1,
        },
        containerNoCommand: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            gap: spacing.xl,
        },
        textNoCommand: {
            fontSize: fontSize.lg,
            fontWeight: '400',
            lineHeight: normalize(28),
            color: colors.textPrimary,
        },
        textStartCommand: {
            fontSize: fontSize.lg,
            fontWeight: '400',
            lineHeight: normalize(28),
            color: colors.white,
        },
        animation: {
            width: normalize(300),
            aspectRatio: 1,
        },
    }
})
