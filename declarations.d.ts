declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const svg: React.FC<SvgProps>;
  export default svg;
}
