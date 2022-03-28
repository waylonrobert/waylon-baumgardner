/* eslint-disable react/destructuring-assignment */
import React from 'react';

export default function Skills(props) {
  return (
    <p className="skills text-darkNavy dark:text-mint text-sm font-worksans font-normal uppercase no-underline mb-6">
      {props.skills}
    </p>
  );
}
