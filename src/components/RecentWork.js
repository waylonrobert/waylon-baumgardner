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
        to="/work/arousal-architecture"
        className="text-heading-text dark:text-dark-text"
      >
        <StaticImage
          src="../images/screencapture-arousalarchitecture-2021-02-27-23_19_40 1.png"
          alt="Screenshot"
        />
        <WorkCard projectName="Arousal Architecture" />
      </Link>
      <Skills skills="UX • UI • DEV" />
    </div>
  );
}
