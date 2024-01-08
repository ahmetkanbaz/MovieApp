import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actors: [],
  loading: false,
  error: null
}

const actorsSlice = createSlice({
  name: 'actors',
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true
    },
    setActors: (state, action) => {
      state.loading = false
      state.actors = action.payload
    },
    setError: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {setLoading, setActors, setError} = actorsSlice.actions

export default actorsSlice.reducer