import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${term}&type=movie`)
      .catch((error) => {
        console.log("Error", error);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&s=${term}&type=series`)
      .catch((error) => {
        console.log("Error", error);
      });
    return response.data;
  }
);

export const fetchAsyncDetails = createAsyncThunk(
  "movies/fetchAsyncDetails",
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
      .catch((error) => {
        console.log("Error", error);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedDetails : {}
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedDetails : (state) =>{
      state.selectedDetails = {}
    }
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected!");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncDetails.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!");
      return { ...state, selectedDetails: payload };
    },
  },
});

export const { removeSelectedDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies; //name of slice(movies).property we want to access initial state in this case
export default movieSlice.reducer;
