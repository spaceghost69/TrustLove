import type { Meta, StoryObj } from '@storybook/react';
import { SpatialAudioEvent, SpatialAudioEventSpatialEffectEnum, Track, TrackSetting } from '../thor/model';
import { AudioTrackComponent } from './AudioTrack';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'JamRoom/AudioTrack',
  component: AudioTrackComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args

} satisfies Meta<typeof AudioTrackComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

let track:Track = {
  settings: []
};
track.name = "Drums 1";
let ts1:TrackSetting = {
  trackId: ''
} ;
ts1.inputGainDB = 100;
ts1.outputGainRel = 29;
ts1.timestamp = new Date();
ts1.trackId = "123123123";
track.settings =  [ ts1 ];

let spae1:SpatialAudioEvent = {
  trackId: ''
};
spae1.effectAmount=10;
spae1.h = 0.0;
spae1.w = 0.0;
spae1.x = 0.0;
spae1.y = 0.0;
spae1.z = 0.0;
spae1.l = 0.0;
spae1.spatialEffect = SpatialAudioEventSpatialEffectEnum.Distortion;
spae1.timestamp = new Date();

track.spatialAudioEvents = [ spae1 ]

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    track: track,
  },
};

export const Secondary: Story = {
  args: {
    track: track,
  },
};

export const Large: Story = {
  args: {
    track: track,
  },
};


export const Warning: Story = {
  args: {
    track: track,
  },
};

export const Small: Story = {
  args: {
    track: track,
  },
};
