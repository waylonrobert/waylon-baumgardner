/* eslint-disable react/destructuring-assignment */

import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react';
// import Skills from './Skills';
import WorkCard from './WorkCard';

export default function RecentWork() {
  return (
    <>
    <div className="p-1 md:px-16 md:py-2 mt-6 md:mt-6">
      <aside className="text-darkNavy dark:text-dark-text text-sm font-worksans font-semibold uppercase">
              2021-Present
            </aside>
      <WorkCard projectName="Matterport" />
      <p className="skills text-darkNavy dark:text-mint text-sm font-worksans font-normal no-underline">
      Matterport is a spatial data company whose technology captures fully-immersive digital twins from the built world. As a Senior Product Designer, I'm a lead designer on the platform design team currently focused on e-commerce.
      </p>
    </div>
    <div className="p-1 md:px-16 md:py-2 mt-6 md:mt-6">
    <aside className="text-darkNavy dark:text-dark-text text-sm font-worksans font-semibold uppercase">
            2019-2021
          </aside>
    <Link
      to="/work/esri"
      className="link text-darkPurple dark:text-dark-heading-text underline"
    >
      <WorkCard projectName="Esri" />
    </Link>
    <p className="skills text-darkNavy dark:text-mint text-sm font-worksans font-normal no-underline">
    Esri is the global leader of geographic information systems (GIS) software. As a senior UX strategist, I was a UX thought leader responsible for the e-commerce experience from discovery to post-sale, while also serving as a coach to junior designers.
    </p>
  </div>
  <div className="p-1 md:px-16 md:py-2 mt-6 md:mt-6">
    <aside className="text-darkNavy dark:text-dark-text text-sm font-worksans font-semibold uppercase">
            2012-2019
          </aside>
    <Link
      to="/work/california-baptist-university"
      className="link text-darkPurple dark:text-dark-heading-text underline"
    >
      <WorkCard projectName="California Baptist University" />
    </Link>
    <p className="skills text-darkNavy dark:text-mint text-sm font-worksans font-normal no-underline">
    CBU is a private university in Southern California boasting an enrollment over 11,000 students that confers bachelor, master, and doctoral degrees. I held many roles during my time here, including design and development leadership roles focused on internal and external websites.
    </p>
  </div>
  </>
  );
}
