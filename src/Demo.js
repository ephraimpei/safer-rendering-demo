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
        {/* This row will render 4 items since one is skipped */}
        <row>
          <PlaceholderBoundedVideoCard { ...valid } />
          <PlaceholderBoundedVideoCard { ...invalid } />
          <SkipRenderBoundedVideoCard { ...valid } />
          {/* This following component will SKIPPED */}
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
      </grid>
    </main>
  );
};

export default Demo;