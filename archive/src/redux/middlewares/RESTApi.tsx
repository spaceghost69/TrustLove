
import { trackGet, trackIdPut } from '../../thor/api';
import {
    FETCH_TRACKS_REQUEST,
    UPDATE_TRACK_REQUEST,
    fetchTracksFailure,
    fetchTracksSuccess,
    updateTrackFailure,
    updateTrackSuccess
} from '../actions';

export const trackMiddleware = ({ dispatch }) => (next) => async (action) => {
    console.log("TRACKMIDDLEWARE: " + JSON.stringify(action) )
    next(action);

    switch (action.type) {
        case FETCH_TRACKS_REQUEST:
            try {
                const response = trackGet();
                debugger
                dispatch(fetchTracksSuccess(response.body));
            } catch (error) {
                dispatch(fetchTracksFailure(error.message));
            }
            break;

        case UPDATE_TRACK_REQUEST:
            try {
                const { id, track } = action.payload;
                const response = trackIdPut(id, track);
                dispatch(updateTrackSuccess(response.body));
            } catch (error) {
                dispatch(updateTrackFailure(error.message));
            }
            break;

        default:
            break;
    }
};
