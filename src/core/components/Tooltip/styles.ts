import { makeStyles, normalize } from '@rneui/themed'

export const useStyles = makeStyles(({ colors, spacing, borderRadius }) => {
    return {
        containerModal: {
            flex: 1,
            position: 'absolute',
            backgroundColor: 'white',
            padding: spacing.sm,
            borderRadius: borderRadius.lg,
            borderWidth: 1,
            borderColor: colors.borderColor,
            gap: spacing.sm,
        },
        tail: {
            position: 'absolute',
            width: normalize(14),
            aspectRatio: 1,
            backgroundColor: colors.white,
            transform: [{ rotate: '45deg' }],
            right: normalize(20),
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderColor: colors.borderColor,
        },
        container: {
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: spacing.sm,
        },
        textTitle: {
            color: colors.neutral05,
            fontSize: normalize(10),
            fontWeight: '500',
        },
        dot: {
            width: normalize(13),
            aspectRatio: 1,
            borderRadius: 10,
        },
        textPercent: {
            color: colors.neutral03,
        },
    }
})
