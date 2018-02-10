import React from 'react';
import {
  VideoCard,
  PlaceholderBoundedVideoCard,
  SkipRenderBoundedVideoCard
} from '@components';
import invalid from '@data/invalid.json';
import valid from '@data/valid.json';

const App = (props) => {
  return (
    <main>
      <grid>
        {/* This row will render 4 items since one is skipped */}
        <row>
          <PlaceholderBoundedVideoCard { ...valid } />
          <PlaceholderBoundedVideoCard { ...invalid } />
          <SkipRenderBoundedVideoCard { ...valid } />
          {/* This component will be SKIPPED */}
          <SkipRenderBoundedVideoCard { ...invalid } />
          <VideoCard { ...valid } />
        </row>
        {/* This row will render 5 items */}
        <row>
          <PlaceholderBoundedVideoCard { ...invalid } />
          <PlaceholderBoundedVideoCard { ...valid } />
          <VideoCard { ...valid } />
          <SkipRenderBoundedVideoCard { ...valid } />
          <PlaceholderBoundedVideoCard { ...invalid } />
        </row>
        {/* This row will also render 5 items */}
        <row>
          <PlaceholderBoundedVideoCard { ...valid } />
          <PlaceholderBoundedVideoCard { ...invalid } />
          <PlaceholderBoundedVideoCard { ...invalid } />
          <SkipRenderBoundedVideoCard { ...valid } />
          <VideoCard { ...valid } />
        </row>
      </grid>
    </main>
  );
};

export default App;