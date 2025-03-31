import { makeStyles, normalize } from "@rneui/themed";

export const useStyles = makeStyles(
  ({ colors, spacing, borderRadius, fontFamily, fontSize }) => {
    return {
      container: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: borderRadius.lg,
      },
      containerInput: {
        flex: 1,
        flexDirection: "row",
      },
      input: {
        flex: 1,
        fontSize: fontSize.sm,
        fontWeight: "300",
        lineHeight: normalize(16),
        marginVertical: spacing.xs,
        paddingHorizontal: spacing.md,
      },
      containerSearch: {
        backgroundColor: colors.blue04,
        borderTopRightRadius: borderRadius.lg,
        borderBottomRightRadius: borderRadius.lg,
      },
    };
  }
);
