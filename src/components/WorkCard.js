/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function WorkCard(props) {
  return (
    <div className="work-card">
      <p className="name text-accent dark:text-dark-heading-text text-2xl font-defaultSans font-semibold">
        {props.projectName}
      </p>
      <p className="skills text-accent dark:text-dark-heading-text text-sm font-defaultSans font-normal uppercase no-underline">
        {props.skills}
      </p>
    </div>
  );
}
