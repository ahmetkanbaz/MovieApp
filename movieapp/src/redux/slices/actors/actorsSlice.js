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
    setActorLoading: (state) => {
      state.loading = true
    },
    setActors: (state, action) => {
      state.loading = false
      state.actors = action.payload
    },
    setActorError: (state, action) => {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const {setActorLoading, setActors, setActorError} = actorsSlice.actions

export default actorsSlice.reducer