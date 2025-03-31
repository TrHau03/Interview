import AppHeader from '@/core/components/AppHeader'
import AppIcon from '@/core/components/AppIcon'
import SideSheetProd from '@/core/components/SideSheetProd'
import Wrapper from '@/core/components/Wrapper'
import { IconLibrary, SVG } from '@/core/constants/icon'
import { Button, normalize, Text, useTheme } from '@rneui/themed'
import LottieView from 'lottie-react-native'
import React from 'react'
import { View } from 'react-native'
import { useProdCommand } from './hooks/useProdCommand'
import { useStyles } from './styles'

const ProdCommand = () => {
    const {
        theme: { colors },
    } = useTheme()
    const styles = useStyles(0)
    const { isSide, toggleSide } = useProdCommand()

    return (
        <>
            <Wrapper isSafeArea={false} containerStyle={styles.container}>
                <AppHeader
                    leftIcon={<SVG.Menu width={normalize(32)} height={normalize(32)} fill={colors.white} />}
                    onLeftPress={toggleSide}
                    title="Lệnh sản xuất"
                />
                <View style={styles.containerNoCommand}>
                    <LottieView
                        source={require('@/assets/animations/empty.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                    <Text style={styles.textNoCommand}>Chưa có lệnh sản xuất</Text>
                    <Button
                        title={'Bắt đầu ghim lệnh ngay'}
                        titleStyle={styles.textStartCommand}
                        onPress={toggleSide}
                        icon={
                            <AppIcon
                                name={'pin'}
                                type={IconLibrary.MaterialCommunityIcons}
                                color={colors.white}
                                isPaddingIcon={false}
                            />
                        }
                    />
                </View>
            </Wrapper>
            <SideSheetProd isVisible={isSide} onBackdropPress={toggleSide} />
        </>
    )
}

export default ProdCommand
