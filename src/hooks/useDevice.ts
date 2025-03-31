import { useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useDevice = () => {
  const insets = useSafeAreaInsets();
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;
  const insetTop = insets.top;
  const insetBottom = insets.bottom;
  return { width, height, insetTop, insetBottom };
};
