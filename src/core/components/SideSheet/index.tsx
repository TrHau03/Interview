import { useDevice } from "@/hooks/useDevice";
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";
import { useStyles } from "./styles";

interface SideSheetProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onBackdropPress?: () => void;
}

const SideSheet: React.FC<SideSheetProps> = (props) => {
  const { isVisible, children, onBackdropPress } = props;
  const { insetTop } = useDevice();
  const styles = useStyles(insetTop);
  return (
    <Modal
      isVisible={isVisible}
      animationIn={"slideInLeft"}
      animationOut={"slideOutLeft"}
      style={styles.modal}
      onBackdropPress={onBackdropPress}
    >
      <View style={styles.container}>{children}</View>
    </Modal>
  );
};

export default SideSheet;
