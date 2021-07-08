import * as React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function LastBuilt({ text }) {
  const data = useStaticQuery(graphql`
    {
      site {
        buildTimeZone
      }
    }
  `);
  return (
    <div className="my-4">
      <p>
        <small>
          {text}: {data.site.buildTimeZone}
        </small>
      </p>
    </div>
  );
}
