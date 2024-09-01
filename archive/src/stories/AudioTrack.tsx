import AudioTrack from "../components/AudioTrack";
import { Track } from '../thor/model/Track';

interface AudioTrackProps {
  track: Track;
}

/**
 * Primary UI component for user interaction
 */
export const AudioTrackComponent = ({
  track
}: AudioTrackProps) => {
  
  return (
    <AudioTrack track={track}      
    />
  );
};
