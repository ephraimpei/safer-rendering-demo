import React from 'react';
import VideoCardPlaceholder from './VideoCardPlaceholder';
import { renderPlaceholderOnError, skipRenderOnError } from '@higher-order-functions';

export const VideoCard = ({
  title: videoTitle,
  show: {
    title: showTitle,
    season: {
      season_number,
      episode: {
        episode_number
      }
    }
  }
}) => {
  return (
    <div className="video-card">
      <h3>{ videoTitle }</h3>
      <p>{ `Show: ${showTitle}` }</p>
      <p>{ `Season: ${season_number}` }</p>
      <p>{ `Episode: ${episode_number}` }</p>
    </div>
  );
};

export const PlaceholderBoundedVideoCard = renderPlaceholderOnError(<VideoCardPlaceholder />)(VideoCard);
export const SkipRenderBoundedVideoCard = skipRenderOnError(VideoCard);