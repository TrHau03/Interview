import { data } from '@/core/constants/data'
import { CommandType } from '@/core/entities/Command'
import { createSlice } from '@reduxjs/toolkit'

interface ProdCommandState {
    filter: string[]
    commandList: CommandType[]
}

const initialState: ProdCommandState = {
    filter: [],
    commandList: data,
}

const prodCommandSlice = createSlice({
    name: 'prodCommand',
    initialState,
    reducers: {
        updateFilter: (state, action) => {
            return {
                ...state,
                filter:
                    state.filter.findIndex((item) => item === action.payload) === -1
                        ? [...state.filter, action.payload]
                        : state.filter.filter((item) => item !== action.payload),
            }
        },
        clearFilter: (state) => {
            return {
                ...state,
                filter: [],
            }
        },
        updateCommandList: (state, action) => {
            return {
                ...state,
                commandList: action.payload,
            }
        },
        pinCommand: (state, action) => {
            return {
                ...state,
                commandList: state.commandList
                    .map((item) => {
                        if (item.id === action.payload) {
                            return {
                                ...item,
                                isPin: !item.isPin,
                            }
                        }
                        return item
                    })
                    .sort((a, b) => (a.isPin === b.isPin ? 0 : a.isPin ? -1 : 1)),
            }
        },
        removeAllPinCommand: (state) => {
            return {
                ...state,
                commandList: state.commandList
                    .map((item) => ({
                        ...item,
                        isPin: false,
                    }))
                    .sort((a, b) => {
                        const parseDate = (dateStr: string) => {
                            const [day, month, year] = dateStr.split('/').map(Number)
                            return new Date(year, month - 1, day)
                        }

                        return parseDate(a.deadline).getTime() - parseDate(b.deadline).getTime()
                    }),
            }
        },
    },
})

export const prodCommandActions = prodCommandSlice.actions

export default prodCommandSlice.reducer
