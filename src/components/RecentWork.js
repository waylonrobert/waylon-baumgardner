/* eslint-disable react/destructuring-assignment */

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
import Skills from './Skills';
import WorkCard from './WorkCard';

export default function RecentWork() {
  return (
    <div>
      <Link
        to="/work/esri"
        className="link text-heading-text dark:text-dark-heading-text underline"
      >
        <StaticImage
          src="../images/esri-thumb.jpg"
          alt="Esri logo"
          width={350}
        />
        <WorkCard projectName="Esri" />
      </Link>
      <p className="skills text-text dark:text-mint text-sm font-worksans font-normal uppercase no-underline">
        UX
      </p>
    </div>
  );
}
