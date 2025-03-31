import { SVG } from '@/core/constants/icon'
import { RootTabParamEnum } from '@/navigation/tab/RootTab'
import { makeStyles, normalize, Text, useTheme } from '@rneui/themed'
import React from 'react'
import { Pressable, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const tabs = [
    {
        label: RootTabParamEnum.Overview,
        icon: SVG.Overview,
    },
    {
        label: RootTabParamEnum.Order,
        icon: SVG.Order,
    },
    {
        label: RootTabParamEnum.Chart,
        icon: SVG.Chart,
    },
    {
        label: RootTabParamEnum.ProdCommand,
        icon: SVG.Note,
    },
    {
        label: RootTabParamEnum.More,
        icon: SVG.More,
    },
]

export default function BottomTab({ state, descriptors, navigation }: any) {
    const {
        theme: { colors, mode },
    } = useTheme()
    const insets = useSafeAreaInsets()
    const styles = useStyles()

    return (
        <View style={[styles.container]}>
            {state.routes.map((route: any, index: number) => {
                const { options } = descriptors[route.key]

                const isFocused = state.index === index

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name, route.params)
                    }
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                const label = tabs[index].label
                const Icon = tabs[index].icon

                return (
                    <Pressable
                        key={index}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        // onPress={onPress}
                        // onLongPress={onLongPress}
                        style={styles.btnTab}
                    >
                        <Icon
                            color={isFocused ? colors.primary : colors.secondary}
                            width={normalize(24)}
                            height={normalize(24)}
                        />
                        <Text style={[styles.label, { color: isFocused ? colors.primary : colors.secondary }]}>
                            {label}
                        </Text>
                    </Pressable>
                )
            })}
        </View>
    )
}

const useStyles = makeStyles(({ colors, fontSize, spacing, borderRadius }) => {
    return {
        container: {
            flexDirection: 'row',
            paddingHorizontal: spacing.md,
            paddingTop: spacing.sm,
            height: normalize(94),
            borderTopLeftRadius: borderRadius.xl,
            borderTopRightRadius: borderRadius.xl,
            backgroundColor: colors.white,
            shadowColor: colors.shadowColor,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        },
        btnTab: {
            flex: 1,
            alignItems: 'center',
        },
        label: {
            color: colors.secondary,
            fontSize: fontSize.sm,
            fontWeight: '400',
        },
    }
})
