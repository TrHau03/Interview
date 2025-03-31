import { makeStyles } from "@rneui/themed";

export const useStyles = makeStyles(({ colors, spacing }, insetTop: number) => {
  return {
    modal: {
      margin: 0,
    },
    container: {
      width: "70%",
      height: "100%",
      backgroundColor: colors.white,
      paddingTop: insetTop,
      paddingHorizontal: spacing.sm,
      paddingVertical: spacing.lg,
    },
  };
});
