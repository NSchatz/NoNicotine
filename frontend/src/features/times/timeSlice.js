import { createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import timeService from './timeService'

const initialState = {
    time:'',
    cost: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const createTime = createAsyncThunk('times/create', async (timeData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await timeService.createTime(timeData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const updateTime = createAsyncThunk('times/update', async (timeData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        console.log(timeData)
        return await timeService.updateTime(timeData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const getTime = createAsyncThunk('times/getTime', async(_,thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await timeService.getTime(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const timeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        reset: (state) => initialState
    }, 
    extraReducers: (builder) => {
        builder
            .addCase(createTime.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTime.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.time.push(action.payload)
            })
            .addCase(createTime.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(updateTime.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateTime.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.time.push(action.payload)
            })
            .addCase(updateTime.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTime.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTime.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.time = action.payload
            })
            .addCase(getTime.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})


export const {reset} = timeSlice.actions
export default timeSlice.reducer