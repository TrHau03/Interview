import { makeStyles, normalize } from '@rneui/themed'

export const useStyles = makeStyles(({ colors, spacing, fontSize }) => {
    return {
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.primary,
            paddingHorizontal: spacing.sm,
            paddingBottom: spacing.sm,
        },
        header: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        },
        textTitle: {
            flex: 1,
            textAlign: 'center',
            fontSize: fontSize.lg,
            fontWeight: '500',
            lineHeight: normalize(28),
            color: colors.white,
        },
    }
})
