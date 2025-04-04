import { data } from '@/core/constants/data'
import { IconLibrary } from '@/core/constants/icon'
import { CommandType } from '@/core/entities/Command'
import { useDevice } from '@/hooks/useDevice'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { prodCommandActions } from '@/redux/reducers/prodCommand/prodCommandReducer'
import { Divider, normalize, Text, useTheme } from '@rneui/themed'
import React, { useCallback, useEffect, useState } from 'react'
import { FlatList, Pressable, View } from 'react-native'
import AppIcon from '../AppIcon'
import AppSearch from '../AppSearch'
import FilterProd from '../FilterProd'
import ProdCommandItem from '../ProdCommandItem'
import SideSheet from '../SideSheet'
import { useStyles } from './styles'

interface SideSheetProdProps {
    isVisible: boolean
    onBackdropPress?: () => void
}

const SideSheetProd: React.FC<SideSheetProdProps> = ({ isVisible, onBackdropPress }) => {
    const styles = useStyles(0)
    const {
        theme: { colors },
    } = useTheme()
    const { insetBottom } = useDevice()
    const dispatch = useAppDispatch()
    const [searchText, setSearchText] = useState('')
    const commandList = useAppSelector((state) => state.root.prodCommand.commandList)
    const filter = useAppSelector((state) => state.root.prodCommand.filter)

    useEffect(() => {
        let filteredData = data
        if (searchText.length > 0) {
            filteredData = filteredData.filter((item) => item.id.includes(searchText))
        }
        if (filter.length > 0) {
            filteredData = filteredData.filter((item) => filter.includes(item.status))
        }
        dispatch(prodCommandActions.updateCommandList(filteredData))
    }, [filter, searchText])

    const renderItem = useCallback(({ item }: { item: CommandType }) => {
        return <ProdCommandItem item={item} />
    }, [])

    const renderItemSeparator = useCallback(() => {
        return <Divider color={colors.borderColor} width={1} style={{ marginVertical: 10 }} />
    }, [])

    const handleRemoveAllPin = useCallback(() => {
        dispatch(prodCommandActions.removeAllPinCommand())
    }, [])

    return (
        <SideSheet isVisible={isVisible} onBackdropPress={onBackdropPress}>
            <View style={styles.container}>
                <Text style={styles.textProdCommand}>Lệnh sản xuất</Text>
                <AppSearch onChangeText={setSearchText} placeholder="Tiềm kiếm lệnh sản xuất" />
                <FilterProd />
                <Pressable onPress={handleRemoveAllPin} style={styles.containerUnpin}>
                    <Text style={styles.textUnpin}>Bỏ ghim toàn bộ</Text>
                    <AppIcon
                        name="pin-off-outline"
                        type={IconLibrary.MaterialCommunityIcons}
                        isPaddingIcon={false}
                        size={normalize(16)}
                    />
                </Pressable>
            </View>
            <FlatList
                keyExtractor={(item) => item.id}
                data={commandList}
                renderItem={renderItem}
                style={[styles.containerList]}
                contentContainerStyle={{ paddingBottom: insetBottom }}
                ItemSeparatorComponent={renderItemSeparator}
                showsVerticalScrollIndicator={false}
            />
        </SideSheet>
    )
}

export default SideSheetProd
