import { makeStyles, normalize } from "@rneui/themed";

export const useStyles = makeStyles(({ colors, fontSize }) => {
  return {
    container: {
      flex: 1,
      height: normalize(12),
      borderRadius: 100,
    },
    progress: {
      height: normalize(12),
      position: "absolute",
      borderRadius: 100,
      justifyContent: "center",
      alignItems: "center",
    },
    textPercent: {
      fontSize: fontSize.xs,
      color: colors.white,
    },
  };
});
