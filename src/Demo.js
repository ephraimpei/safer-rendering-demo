import React from 'react';
import {
  VideoCard,
  PlaceholderBoundedVideoCard,
  SkipRenderBoundedVideoCard
} from './components';
import invalid from '../data/invalid.json';
import valid from '../data/valid.json';

const Demo = (props) => {
  return (
    <main>
      <grid className="video-grid">
        <PlaceholderBoundedVideoCard { ...valid } />
        <PlaceholderBoundedVideoCard { ...invalid } />
        <SkipRenderBoundedVideoCard { ...valid } />
        <SkipRenderBoundedVideoCard { ...invalid } />
        <VideoCard { ...valid } />
      </grid>
    </main>
  );
};

export default Demo;