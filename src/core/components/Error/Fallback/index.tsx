import React from 'react'
import { SafeAreaView, Text, TouchableOpacity } from 'react-native'
import styles from './styles'

export type Props = { error: Error; resetError: () => void }

const FallbackComponent: React.FC<Props> = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>Xảy ra lỗi</Text>
            <Text style={styles.description}>Có lỗi trong quá trình sử dụng ứng dụng.</Text>
            <TouchableOpacity style={styles.button} onPress={props.resetError} activeOpacity={0.8}>
                <Text style={styles.label}>Thử lại</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default FallbackComponent
