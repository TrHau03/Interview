import { createTheme } from "@rneui/themed";
import { borderRadius } from "./borderRadius";
import { baseColors } from "./colors";
import { fontFamily, fontSize } from "./font";
import { spacing } from "./spacing";

export const getTheme = (option?: any) => {
  return createTheme({
    lightColors: {
      ...baseColors,
    },
    darkColors: {
      ...baseColors,
    },
    fontSize: fontSize,
    spacing: spacing,
    borderRadius: borderRadius,
    fontFamily: fontFamily,
    mode: "light",
    components: {
      Text: (props, theme) => {
        return {
          style: {
            color: theme.colors.black,
            fontFamily: fontFamily.LexendDeca,
          },
        };
      },
      Button: (props, theme) => {
        return {
          containerStyle: {
            alignSelf: "center",
          },
          buttonStyle: {
            paddingVertical: theme.spacing.md,
            paddingHorizontal: theme.spacing.xl,
            gap: theme.spacing.xs,
          },
          style: {
            backgroundColor: theme.colors.primary,
          },
          titleStyle: {
            color: theme.colors.white,
          },
        };
      },
    },
  });
};
