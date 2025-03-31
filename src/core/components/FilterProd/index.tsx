import { IconLibrary, SVG } from '@/core/constants/icon'
import { logger } from '@/core/utils/logger'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { prodCommandActions } from '@/redux/reducers/prodCommand/prodCommandReducer'
import { CheckBox, Divider, normalize, Text, useTheme } from '@rneui/themed'
import React, { memo, useCallback, useState } from 'react'
import { Pressable, View } from 'react-native'
import AppIcon from '../AppIcon'
import { useStyles } from './styles'

const filterOptions = [
    {
        label: 'Chưa sản xuất',
        value: 'notDone',
    },
    {
        label: 'Đang sản xuất',
        value: 'inProgress',
    },
    {
        label: 'Hoàn thành',
        value: 'done',
    },
]

const FilterProdItem = memo((item: (typeof filterOptions)[0]) => {
    const {
        theme: { colors },
    } = useTheme()
    const styles = useStyles(0)
    const dispatch = useAppDispatch()
    const isSelected = useAppSelector((state) => state.root.prodCommand.filter.includes(item.value))
    logger.info('FilterProdItem', isSelected)
    let bgColor = ''
    let textColor = ''
    if (item.value === 'notDone') {
        bgColor = colors.bgOrange
        textColor = colors.textOrange
    } else if (item.value === 'inProgress') {
        bgColor = colors.bgWathet
        textColor = colors.textWathet
    } else {
        bgColor = colors.bgGreen
        textColor = colors.textGreen
    }

    const handleFilter = useCallback(() => {
        dispatch(prodCommandActions.updateFilter(item.value))
    }, [item.value])

    return (
        <Pressable onPress={handleFilter} style={[styles.containerCheckbox]}>
            <CheckBox
                checked={isSelected}
                iconType="material-community"
                checkedIcon="checkbox-marked"
                uncheckedIcon="checkbox-blank-outline"
                checkedColor={colors.primary02}
                containerStyle={styles.checkbox}
                size={normalize(16)}
                onPress={handleFilter}
            />
            <Text style={[styles.labelCheckbox, { backgroundColor: bgColor, color: textColor }]}>{item.label}</Text>
        </Pressable>
    )
})

const FilterProd: React.FC = () => {
    const styles = useStyles(0)
    const {
        theme: { colors },
    } = useTheme()
    const [isShowFilter, setIsShowFilter] = useState(false)

    const toggleFilter = useCallback(() => {
        setIsShowFilter((prev) => !prev)
    }, [])

    return (
        <View style={styles.container}>
            <Pressable onPress={toggleFilter} style={styles.containerHeader}>
                <SVG.ChartDonut width={normalize(16)} height={normalize(16)} fill={colors.neutral02} />
                <Text style={styles.textHeader}>Trạng thái</Text>
                <AppIcon
                    name={isShowFilter ? 'caret-up-outline' : 'caret-down-outline'}
                    type={IconLibrary.Ionicons}
                    color={colors.neutral02}
                    size={normalize(16)}
                    isPaddingIcon={false}
                />
            </Pressable>
            {isShowFilter && (
                <>
                    <Divider width={1} color={colors.borderColor} />
                    <View>
                        {filterOptions.map((item) => (
                            <FilterProdItem key={item.value} label={item.label} value={item.value} />
                        ))}
                    </View>
                </>
            )}
        </View>
    )
}

export default FilterProd
