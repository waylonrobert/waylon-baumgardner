/* eslint-disable react/destructuring-assignment */

import * as React from 'react';

export default function Testimonial({ quote, author }) {
  return (
    <div>
      <blockquote>{quote}</blockquote>
      <p className="text-sm mt-2 text-accent dark:text-dark-heading-text font-defaultSans font-medium">
        <em>&mdash;{author}</em>
      </p>
    </div>
  );
}
