import { makeStyles, normalize } from "@rneui/themed";

export const useStyles = makeStyles(
  ({ fontSize, colors, borderRadius, spacing }) => {
    return {
      container: {
        gap: spacing.xs,
      },
      containerList: {
        marginTop: spacing.sm,
      },
      textProdCommand: {
        color: colors.darkBlue,
        fontSize: fontSize.lg,
        fontWeight: "500",
      },
      containerUnpin: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: borderRadius.lg,
        padding: spacing.sm,
      },
      textUnpin: {
        flex: 1,
        fontSize: fontSize.mm,
        fontWeight: "500",
        lineHeight: normalize(fontSize.mm + fontSize.mm * 0.3),
      },
    };
  }
);
