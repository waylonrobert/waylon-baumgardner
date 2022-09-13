/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Link } from 'gatsby';

export default function CurrentlyReading() {
  return (
    <div className="reading">
      <h2 className="uppercase font-defaultSans leading-none text-accent dark:text-white font-medium text-sm">
        Currently Reading
      </h2>
      <p className="title capitalize md:leading-tight font-defaultSans font-medium text-text dark:text-dark-heading-text text-sm md:text-lg mt-2">
        Backyard Starship
      </p>
      <p className="author font-sourceSerifPro text-xs mt-1 md:text-sm dark:text-white ">
        J.N. Chaney
      </p>
      <p className="link font-defaultSans text-text font-semibold text-xs mt-2">
        <Link
          to="/reading-log"
          title="See reading log"
          className="dark:text-dark-heading-text hover:after:content-['→'] hover:after:align-middle"
        >
          See reading log
        </Link>
      </p>
    </div>
  );
}
