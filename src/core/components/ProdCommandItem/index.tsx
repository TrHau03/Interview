import { IconLibrary } from '@/core/constants/icon'
import { CommandType } from '@/core/entities/Command'
import { linerGradientColors } from '@/core/theme/colors'
import { useAppDispatch } from '@/hooks/useRedux'
import { prodCommandActions } from '@/redux/reducers/prodCommand/prodCommandReducer'
import { normalize, useTheme } from '@rneui/themed'
import { LinearGradient } from 'expo-linear-gradient'
import React, { memo } from 'react'
import { Text, View } from 'react-native'
import AppIcon from '../AppIcon'
import Progress from '../Progress'
import Tooltip from '../Tooltip'
import { useStyles } from './styles'

interface ProdCommandItemProps {
    item: CommandType
}

const ProdCommandItem: React.FC<ProdCommandItemProps> = (props) => {
    const { item } = props
    const styles = useStyles(0)
    const {
        theme: { colors },
    } = useTheme()
    const dispatch = useAppDispatch()

    const data = [
        { color: colors.bgProgress1, text: 'Tiến độ Kế hoạch Nguyên liệu', percent: item.progress1 },
        {
            color: colors.bgProgress2,
            text: 'Tiến độ Nhập kho Thành phẩm',
            percent: item.progress2,
        },
    ]
    let bgColor = ''
    let textColor = ''

    if (item.status === 'notDone') {
        bgColor = colors.bgOrange
        textColor = colors.textOrange
    } else if (item.status === 'inProgress') {
        bgColor = colors.bgWathet
        textColor = colors.textWathet
    } else {
        bgColor = colors.bgGreen
        textColor = colors.textGreen
    }

    const handlePinItem = () => {
        dispatch(prodCommandActions.pinCommand(item.id))
    }

    return (
        <LinearGradient colors={linerGradientColors} style={styles.container}>
            <View style={styles.containerHeader}>
                <Text style={[styles.textHeader, { color: textColor, backgroundColor: bgColor }]}>
                    {props.item.label}
                </Text>
                <AppIcon
                    name="pin-outline"
                    color={item.isPin ? colors.error : colors.neutral03}
                    type={IconLibrary.MaterialCommunityIcons}
                    size={normalize(20)}
                    isPaddingIcon={false}
                    onPress={handlePinItem}
                />
            </View>
            <Text style={styles.textCode}>{props.item.id}</Text>
            <Text style={styles.textDeadline}>Deadline: {props.item.deadline}</Text>
            <View style={styles.containerProgress}>
                <Progress progress={item.progress1} color={colors.bgProgress1} />
                <Progress progress={item.progress2} color={colors.bgProgress2} />
                <Tooltip data={data}>
                    <AppIcon
                        name="information-circle"
                        type={IconLibrary.Ionicons}
                        size={normalize(9.75)}
                        isPaddingIcon={true}
                        color={colors.neutral03}
                    />
                </Tooltip>
            </View>
        </LinearGradient>
    )
}

export default memo(ProdCommandItem)
