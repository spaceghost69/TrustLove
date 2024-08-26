
import { useGetTracksQuery } from "../../redux/services/TrackApi";
import AudioTrack from "../AudioTrack";
import "./index.css";

const AudioMixer = () => {

// Using a query hook automatically fetches data and returns query values
const { data, error, isLoading } =  useGetTracksQuery()

// Individual hooks are also accessible under the generated endpoints:
// const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

// render UI based on data and loading state
  

if(error){
  return 'ERROR:' + error;
}
if(isLoading){
  return 'Loading...';
}
if(!data){
  return "NO TRACKS"
}

  return (
    <div className="trackRow">
      {data.map(track => (
        <AudioTrack key={track.name} track={track} />
      ))}
    </div>
  );
};

export default AudioMixer;
