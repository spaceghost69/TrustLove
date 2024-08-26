// actions.js

export const FETCH_TRACKS_REQUEST = 'FETCH_TRACKS_REQUEST';
export const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'FETCH_TRACKS_FAILURE';
export const UPDATE_TRACK_REQUEST = 'UPDATE_TRACK_REQUEST';
export const UPDATE_TRACK_SUCCESS = 'UPDATE_TRACK_SUCCESS';
export const UPDATE_TRACK_FAILURE = 'UPDATE_TRACK_FAILURE';

export const fetchTracksRequest = () => ({
    type: FETCH_TRACKS_REQUEST,
});

export const fetchTracksSuccess = (tracks) => ({
    type: FETCH_TRACKS_SUCCESS,
    payload: tracks,
});

export const fetchTracksFailure = (error) => ({
    type: FETCH_TRACKS_FAILURE,
    payload: error,
});

export const updateTrackRequest = (track) => ({
    type: UPDATE_TRACK_REQUEST,
    payload: track,
});

export const updateTrackSuccess = (track) => ({
    type: UPDATE_TRACK_SUCCESS,
    payload: track,
});

export const updateTrackFailure = (error) => ({
    type: UPDATE_TRACK_FAILURE,
    payload: error,
});
