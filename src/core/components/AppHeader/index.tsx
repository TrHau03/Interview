import { useDevice } from '@/hooks/useDevice'
import { Text } from '@rneui/themed'
import React from 'react'
import { Pressable, View } from 'react-native'
import { useStyles } from './styles'

interface AppHeaderProps {
    title: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    onLeftPress?: () => void
    onRightPress?: () => void
}

const AppHeader: React.FC<AppHeaderProps> = (props) => {
    const { title, leftIcon, rightIcon, onLeftPress, onRightPress } = props
    const styles = useStyles(0)
    const { insetTop } = useDevice()
    return (
        <View style={[styles.container, { paddingTop: insetTop }]}>
            <View style={styles.header}>
                <Pressable onPress={onLeftPress} style={{ position: 'absolute', left: 0, zIndex: 1 }}>
                    {leftIcon}
                </Pressable>
                <Text style={styles.textTitle}>{title ?? '@title'}</Text>
                <Pressable onPress={onRightPress} style={{ position: 'absolute', right: 0, zIndex: 1 }}>
                    {rightIcon}
                </Pressable>
            </View>
        </View>
    )
}

export default AppHeader
