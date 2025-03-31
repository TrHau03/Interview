import ErrorBoundary from '@/core/components/Error'
import { getTheme } from '@/core/theme/theme'
import RootNavigation from '@/navigation/RootNavigation'
import { persiststor, store } from '@/redux/store'
import { ThemeProvider } from '@rneui/themed'
import { useFonts } from 'expo-font'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
    const [loaded, error] = useFonts({
        LexendDeca: require('./src/assets/fonts/LexendDeca-VariableFont_wght.ttf'),
    })
    if (!loaded || error) {
        return null
    }
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persiststor}>
                    <SafeAreaProvider>
                        <ThemeProvider theme={getTheme()}>
                            <RootNavigation />
                        </ThemeProvider>
                    </SafeAreaProvider>
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    )
}
