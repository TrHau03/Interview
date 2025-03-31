export const logger = {
    info: (title: string, message: any) => {
        __DEV__ && console.dir(`${title}: ${message}`)
    },
    error: (title: string, message: string) => {
        __DEV__ && console.error(`${title}: ${message}`)
    },
}
