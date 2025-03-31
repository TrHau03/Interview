import { useAppDispatch } from '@/hooks/useRedux'
import { prodCommandActions } from '@/redux/reducers/prodCommand/prodCommandReducer'
import { useCallback, useState } from 'react'

export const useProdCommand = () => {
    const [isSide, setIsSide] = useState(false)
    const dispatch = useAppDispatch()

    const toggleSide = useCallback(() => {
        setIsSide((prev) => !prev)
        if (isSide) {
            dispatch(prodCommandActions.clearFilter())
        }
    }, [isSide])

    return {
        isSide,
        toggleSide,
    }
}
