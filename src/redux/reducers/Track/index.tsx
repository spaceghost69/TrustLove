import { createSlice } from "@reduxjs/toolkit";

import { Track, TrackStatusEnum } from "../../../thor/model/Track";

const TrackSlice = createSlice({
  name: "tracks",
  initialState: [],

  reducers: {
    trackAdded(state, action) {
      state.push(action.payload);
    },

    trackRecordingToggled(state, action) {
      console.log("YO")
      console.warn(JSON.stringify(action))
      const track:Track = state.find((track) => track.id === action.payload.trackId);
      if (track) {
        if (action.payload.target === "record") {
          if (track.status == TrackStatusEnum.Ready) {
            track.status = TrackStatusEnum.Recording;
          } else {
            track.status = TrackStatusEnum.Ready;
          }
        } else if (action.payload.target === "solo") {
            track.solo = !track.solo;
        } else if (action.payload.target === "muted") {
          track.muted = !track.muted;
        }
      }
    },
    trackFrequencySet(state, action) {
      const track = state.find((track) => track.id === action.payload.trackId);
      if (track) {
        track.frequency = action.payload.frequency;
      }
    },
    trackInputGainUpdated(state, action) {
      console.log(action);
      const track: Track = state.find(
        (track) => track.id === action.payload.trackId
      );
      if (track) {
        track.inputGainDB = action.payload.inputGainDB;
      }
    },
  },
});

export const {
  trackAdded,
  trackRecordingToggled,
  trackFrequencySet,
  trackInputGainUpdated,
} = TrackSlice.actions;
export default TrackSlice.reducer;
