import { makeStyles, normalize } from "@rneui/themed";

export const useStyles = makeStyles(
  ({ colors, spacing, borderRadius, fontSize }) => {
    return {
      container: {
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: borderRadius.lg,
      },
      containerHeader: {
        flexDirection: "row",
        gap: spacing.xs,
        paddingHorizontal: spacing.sm,
        paddingVertical: spacing.xs,
      },
      textHeader: {
        flex: 1,
        color: colors.neutral,
        fontSize: fontSize.sm,
      },
      containerCheckbox: { flexDirection: "row", alignItems: "center" },
      checkbox: {
        marginRight: 0,
      },
      labelCheckbox: {
        fontSize: fontSize.mm,
        fontWeight: "400",
        lineHeight: normalize(20),
        paddingHorizontal: spacing.xs,
        paddingVertical: spacing.xs / 2,
        borderRadius: borderRadius.md,
      },
    };
  }
);
