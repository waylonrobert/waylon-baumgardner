/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

export default function CurrentlyListening() {
  const data = useStaticQuery(graphql`
    {
      allSpotifyRecentTrack(
        sort: { fields: played_at, order: DESC }
        limit: 1
      ) {
        nodes {
          track {
            name
            artists {
              name
            }
          }
        }
      }
    }
  `);

  return (
    <div>
      <h2 className="uppercase font-worksans text-heading-text leading-none dark:text-white font-medium text-sm mt-6 md:mt-0">
        Currently listening
      </h2>

      {data.allSpotifyRecentTrack.nodes.map((tracks) => (
        <span key={tracks.track.name}>
          <p className="track md:leading-tight font-lora font-medium text-text dark:text-mint text-sm md:text-lg mt-2">
            {tracks.track.name}
          </p>

          {tracks.track.artists.map((node) => (
            <p
              className="artist font-lora italic text-xs md:text-sm dark:text-white"
              key={node.name}
            >
              {node.name}
            </p>
          ))}
        </span>
      ))}
      <p className="listening font-worksans text-heading-text font-semibold text-xs mt-2">
        <Link
          to="/listening-log"
          title="See listening log"
          className="dark:text-mint"
        >
          See listening log
        </Link>
      </p>
    </div>
  );
}
