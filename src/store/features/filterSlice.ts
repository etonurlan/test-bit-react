import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
    name: 'filters',
    initialState: {
        filters: {
            postFilters: [],
            sexFilters: [],
            technologyFilters: [],
        },
    },
    reducers: {
        updateState: (state, action) => {
            const payload = action.payload
            debugger
            let selectedFilters = payload.data
            const filter = payload.filter
            const doesExist = selectedFilters.includes(filter)
            let newSelectedFilters
            if(doesExist === false) {
                newSelectedFilters = [...selectedFilters, filter]
            } else {
                newSelectedFilters = selectedFilters.filter((i: any) => i !== filter)
            }
            if (payload.listbox === "post") {
                return { 
                    filters: {
                        ...state.filters,
                        postFilters: newSelectedFilters
                    }
                }
            } else if (payload.listbox === "sex") {
                return { 
                    filters: {
                        ...state.filters,
                        sexFilters: newSelectedFilters
                    }
                }
            } else if (payload.listbox === "tech") {
                return { 
                    filters: {
                        ...state.filters,
                        technologyFilters: newSelectedFilters
                    }
                }
            }
        }
    }
})

export const { updateState } = filterSlice.actions

export default filterSlice.reducer