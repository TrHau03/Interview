import { data, DataType } from "@/core/constants/data";
import { IconLibrary } from "@/core/constants/icon";
import { useDevice } from "@/hooks/useDevice";
import { Divider, normalize, Text, useTheme } from "@rneui/themed";
import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import AppIcon from "../AppIcon";
import AppSearch from "../AppSearch";
import FilterProd from "../FilterProd";
import ProdCommandItem from "../ProdCommandItem";
import SideSheet from "../SideSheet";
import { useStyles } from "./styles";

interface SideSheetProdProps {
  isVisible: boolean;
  onBackdropPress?: () => void;
}

const SideSheetProd: React.FC<SideSheetProdProps> = ({
  isVisible,
  onBackdropPress,
}) => {
  const styles = useStyles(0);
  const {
    theme: { colors },
  } = useTheme();
  const { insetBottom } = useDevice();

  const renderItem = useCallback(({ item }: { item: DataType }) => {
    return <ProdCommandItem item={item} />;
  }, []);

  const renderItemSeparator = useCallback(() => {
    return (
      <Divider
        color={colors.borderColor}
        width={1}
        style={{ marginVertical: 10 }}
      />
    );
  }, []);

  return (
    <SideSheet isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View style={styles.container}>
        <Text style={styles.textProdCommand}>Lệnh sản xuất</Text>
        <AppSearch
          onChangeText={() => {}}
          placeholder="Tiềm kiếm lệnh sản xuất"
        />
        <FilterProd />
        <View style={styles.containerUnpin}>
          <Text style={styles.textUnpin}>Bỏ ghim toàn bộ</Text>
          <AppIcon
            name="pin-off-outline"
            type={IconLibrary.MaterialCommunityIcons}
            isPaddingIcon={false}
            size={normalize(16)}
          />
        </View>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        renderItem={renderItem}
        style={[styles.containerList]}
        contentContainerStyle={{ paddingBottom: insetBottom }}
        ItemSeparatorComponent={renderItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </SideSheet>
  );
};

export default SideSheetProd;
