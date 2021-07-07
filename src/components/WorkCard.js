/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function WorkCard(props) {
  return (
    <div className="work-card">
      <p className="name text-heading-text dark:text-dark-heading-text text-2xl font-worksans font-semibold">
        {props.projectName}
      </p>
      <p className="skills text-text dark:text-dark-heading-text text-sm font-worksans font-normal uppercase no-underline">
        {props.skills}
      </p>
    </div>
  );
}
