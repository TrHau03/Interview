import { IconLibrary } from '@/core/constants/icon'
import { useDebounce } from '@/hooks/useDebounce'
import { normalize, useTheme } from '@rneui/themed'
import React, { useCallback, useState } from 'react'
import { TextInput, View } from 'react-native'
import AppIcon from '../AppIcon'
import { useStyles } from './styles'

interface AppSearchProps {
    placeholder?: string
    onChangeText: (text: string) => void
}

const AppSearch: React.FC<AppSearchProps> = (props) => {
    const styles = useStyles(0)
    const {
        theme: { colors },
    } = useTheme()
    const [input, setInput] = useState('')
    const debouncedValue = useDebounce(input, 1000)

    React.useEffect(() => {
        props.onChangeText(debouncedValue)
    }, [debouncedValue])

    const onClear = useCallback(() => {
        setInput('')
        props.onChangeText('')
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.containerSearch}>
                <AppIcon
                    name={'search'}
                    type={IconLibrary.Ionicons}
                    color={colors.grey3}
                    size={normalize(16)}
                    isPaddingIcon={false}
                />
            </View>
            <View style={styles.containerInput}>
                <TextInput
                    value={input}
                    placeholder={props.placeholder}
                    placeholderTextColor={colors.grey3}
                    onChangeText={setInput}
                    style={styles.input}
                />
                {input && (
                    <AppIcon
                        name={'close'}
                        type={IconLibrary.Ionicons}
                        color={colors.grey3}
                        size={normalize(16)}
                        onPress={onClear}
                        isPaddingIcon
                    />
                )}
            </View>
        </View>
    )
}

export default AppSearch
