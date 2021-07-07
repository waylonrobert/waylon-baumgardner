/* eslint-disable react/destructuring-assignment */

import * as React from 'react';

export default function MiniTitleBlock({ title }) {
  return (
    <div className="mini-title w-11/12">
      <h2 className="mb-8 text-3xl md:text-4xl">{title}</h2>

      {/* <div className="caret-small my-2" /> */}
    </div>
  );
}
