import React from 'react';
import {
  VideoCard,
  PlaceholderBoundedVideoCard,
  SkipRenderBoundedVideoCard
} from '@components';
import invalid from '@data/invalid.json';
import valid from '@data/valid.json';

const Demo = (props) => {
  return (
    <main>
      <grid>
        <row>
          <PlaceholderBoundedVideoCard { ...valid } />
          <PlaceholderBoundedVideoCard { ...invalid } />
          <SkipRenderBoundedVideoCard { ...valid } />
          <SkipRenderBoundedVideoCard { ...invalid } />
          <VideoCard { ...valid } />
        </row>
        <row>
          <SkipRenderBoundedVideoCard { ...valid } />
          <PlaceholderBoundedVideoCard { ...valid } />
          <VideoCard { ...valid } />
          <SkipRenderBoundedVideoCard { ...invalid } />
          <PlaceholderBoundedVideoCard { ...invalid } />
        </row>
      </grid>
    </main>
  );
};

export default Demo;