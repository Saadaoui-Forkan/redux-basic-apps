import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    countState : 0,
  },
  reducers:
    {
        increment : (state) => {
            state.countState += 1
        },
        decrement : (state) => {
            state.countState -= 1
        },
        incrementByValue : (state,action) => {
            state.countState += action.payload
        },
        decrementByValue : (state,action) => {
            state.countState -= action.payload
        }
    }
  },
)
export const { increment, decrement , incrementByValue , decrementByValue } = counterSlice.actions

export default counterSlice.reducer