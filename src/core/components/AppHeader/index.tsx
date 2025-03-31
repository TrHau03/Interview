import { useDevice } from "@/hooks/useDevice";
import { Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { useStyles } from "./styles";

interface AppHeaderProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  onLeftPress?: () => void;
  onRightPress?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
  const styles = useStyles(0);
  const { insetTop } = useDevice();
  return (
    <View style={[styles.container, { paddingTop: insetTop }]}>
      <View style={styles.header}>
        {props.leftIcon}
        <Text style={styles.textTitle}>{props.title ?? "@title"}</Text>
        {props.rightIcon}
      </View>
    </View>
  );
};

export default AppHeader;
