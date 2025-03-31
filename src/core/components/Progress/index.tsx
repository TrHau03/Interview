import { Text } from "@rneui/themed";
import React from "react";
import { View } from "react-native";
import { useStyles } from "./styles";

interface ProgressProps {
  progress: number;
  color: string;
}

const Progress: React.FC<ProgressProps> = (props) => {
  const { progress, color } = props;
  const styles = useStyles(0);
  return (
    <View style={[styles.container, { backgroundColor: `${color}20` }]}>
      <View
        style={[
          styles.progress,
          { width: `${progress}%`, backgroundColor: color },
        ]}
      >
        {progress > 20 && <Text style={styles.textPercent}>{progress}%</Text>}
      </View>
    </View>
  );
};

export default Progress;
