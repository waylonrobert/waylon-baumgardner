import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
// import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TitleBlock from '../components/TitleBlock';
import LastBuilt from '../components/LastBuilt';

const ListeningLogPage = () => {
  const data = useStaticQuery(graphql`
    {
      allSpotifyRecentTrack(
        sort: { fields: played_at, order: DESC }
        limit: 10
      ) {
        nodes {
          track {
            name
            artists {
              name
            }
            external_urls {
              spotify
            }
          }
        }
      }
    }
  `);
  // TODO: add cover art

  return (
    <Layout>
      <SEO title="Listening log" />
      <div className="listening m-12 mx-auto w-11/12 md:w-3/4 lg:w-3/5">
        <TitleBlock
          pageTitle="Listening log"
          shortDescription="Below are the last 10 songs I listened to on Spotify. This list
            refreshes once every day."
        />

        <div className="mx-auto w-11/12 md:w-3/4 lg:w-3/5 my-8">
          {data.allSpotifyRecentTrack.nodes.map((tracks) => (
            <div className="mb-8" key={tracks.track.name}>
              <p className="text-heading-text text-xl md:text-2xl font-worksans font-semibold">
                <a
                  className=""
                  href={tracks.track.external_urls.spotify}
                  title={`Spotify - ${tracks.track.name}`}
                >
                  {tracks.track.name}
                </a>
              </p>

              {tracks.track.artists.map((node) => (
                <p
                  className="font-lora font-normal italic text-text text-base md:text-lg"
                  key={node.name}
                >
                  {node.name}
                </p>
              ))}
            </div>
          ))}
          <LastBuilt text="Last refreshed" />
        </div>
      </div>
    </Layout>
  );
};

export default ListeningLogPage;
