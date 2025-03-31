import BottomTab from '@/core/components/BottomTab'
import { logger } from '@/core/utils/logger'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { RootTabParamEnum, screens } from './RootTab'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
    return (
        <Tab.Navigator
            id={undefined}
            initialRouteName={RootTabParamEnum.ProdCommand}
            backBehavior="none"
            tabBar={(props) => <BottomTab {...props} />}
            screenOptions={{
                headerShown: false,
            }}
        >
            {screens.map((screen) => {
                if (!screen.component) {
                    logger.error('Screen component not found', screen.name)
                    return null
                }
                return (
                    <Tab.Screen
                        key={screen.name}
                        name={screen.name}
                        component={screen.component}
                        options={screen.options}
                    />
                )
            })}
        </Tab.Navigator>
    )
}

export default TabNavigator
