import { useDevice } from '@/hooks/useDevice'
import { normalize, Text } from '@rneui/themed'
import React, { useCallback, useRef, useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import Modal from 'react-native-modal'
import { useStyles } from './styles'

interface TooltipProps {
    data: {
        color: string
        text: string
        percent: number
    }[]
    children: React.ReactNode
}

const Tooltip: React.FC<TooltipProps> = ({ data, children }) => {
    const styles = useStyles(0)
    const [visible, setVisible] = useState(false)
    const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = useDevice()
    const [tooltipPosition, setTooltipPosition] = useState({ top: 0, right: undefined, bottom: undefined })
    const buttonRef = useRef<View>(null)
    const [isUnderScreenState, setIsUnderScreenState] = useState(false)

    const toggleTooltip = () => {
        if (buttonRef.current) {
            buttonRef.current.measure((x, y, width, height, pageX, pageY) => {
                const isUnderScreen = pageY > SCREEN_HEIGHT * 0.8
                setIsUnderScreenState(isUnderScreen)
                setTooltipPosition({
                    right: SCREEN_WIDTH - pageX - normalize(60),
                    top: isUnderScreen ? undefined : pageY + height - normalize(15),
                    bottom: isUnderScreen ? SCREEN_HEIGHT - pageY - normalize(15) : undefined,
                })
                toggleVisible()
            })
        }
    }

    const toggleVisible = useCallback(() => {
        setVisible((prev) => !prev)
    }, [])

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity ref={buttonRef} onPress={toggleTooltip}>
                {children}
            </TouchableOpacity>
            <Modal isVisible={visible} onBackdropPress={toggleVisible} backdropColor="transparent">
                <View
                    style={[
                        styles.containerModal,
                        {
                            top: tooltipPosition.top,
                            bottom: tooltipPosition.bottom,
                            right: tooltipPosition.right,
                        },
                    ]}
                >
                    <View
                        style={[
                            styles.tail,
                            !isUnderScreenState
                                ? { top: -normalize(7) }
                                : { bottom: -normalize(7), transform: [{ rotate: '-135deg' }] },
                        ]}
                    />
                    {data.map((item, index) => (
                        <View key={index} style={styles.container}>
                            <View style={[styles.dot, { backgroundColor: item.color }]} />
                            <Text style={[styles.textTitle, { minWidth: '50%' }]}>{item.text}</Text>
                            <Text style={[styles.textTitle, styles.textPercent]}>{item.percent}%</Text>
                        </View>
                    ))}
                </View>
            </Modal>
        </View>
    )
}

export default Tooltip
