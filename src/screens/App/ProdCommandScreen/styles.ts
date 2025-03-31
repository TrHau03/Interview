import { makeStyles, normalize } from "@rneui/themed";

export const useStyles = makeStyles(
  ({ fontFamily, fontSize, colors, spacing }) => {
    return {
      container: {
        flex: 1,
      },
      containerNoCommand: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: spacing.xl,
      },
      textNoCommand: {
        fontFamily: fontFamily.LexendDeca,
        fontSize: fontSize.lg,
        fontWeight: "400",
        lineHeight: normalize(28),
        color: colors.textPrimary,
      },
      textStartCommand: {
        fontFamily: fontFamily.LexendDeca,
        fontSize: fontSize.lg,
        fontWeight: "400",
        lineHeight: normalize(28),
        color: colors.white,
      },
    };
  }
);
