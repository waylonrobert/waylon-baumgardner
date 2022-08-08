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
      <h2 className="uppercase font-defaultSans text-accent dark:text-white leading-none dark:text-white font-medium text-sm mt-6 md:mt-0">
        Currently listening
      </h2>

      {data.allSpotifyRecentTrack.nodes.map((tracks) => (
        <span key={tracks.track.name}>
          <p className="track md:leading-tight font-defaultSans font-medium text-text dark:text-dark-heading-text text-sm md:text-lg mt-2">
            {tracks.track.name}
          </p>

          {tracks.track.artists.map((node) => (
            <p
              className="artist font-sourceSerifPro text-xs mt-1 md:text-sm dark:text-white"
              key={node.name}
            >
              {node.name}
            </p>
          ))}
        </span>
      ))}
      <p className="listening font-defaultSans text-text font-semibold text-xs mt-2">
        <Link
          to="/listening-log"
          title="See listening log"
          className="dark:text-dark-heading-text hover:after:content-['→'] hover:after:align-middle"
        >
          See listening log
        </Link>
      </p>
    </div>
  );
}
