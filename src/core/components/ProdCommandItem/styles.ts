import { makeStyles, normalize } from '@rneui/themed'

export const useStyles = makeStyles(({ colors, spacing, fontSize, borderRadius }) => {
    return {
        container: {
            borderLeftWidth: 4,
            borderColor: colors.primary,
            padding: spacing.sm,
            gap: spacing.xs,
            borderRadius: borderRadius.lg,
        },
        containerHeader: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
        },
        textHeader: {
            alignSelf: 'flex-start',
            fontSize: fontSize.sm,
            fontWeight: '400',
            lineHeight: normalize(16),
            color: colors.darkBlue,
            paddingHorizontal: spacing.xs,
            paddingVertical: spacing.xs / 2,
            borderRadius: borderRadius.md,
        },
        textCode: {
            fontSize: fontSize.mm,
            fontWeight: '600',
            lineHeight: normalize(20),
        },
        textDeadline: {
            fontSize: fontSize.sm,
            fontWeight: '500',
            lineHeight: normalize(16),
        },
        containerProgress: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: spacing.xs,
        },
    }
})
