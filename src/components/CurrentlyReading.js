/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Link } from 'gatsby';

export default function CurrentlyReading() {
  return (
    <div className="reading">
      <h2 className="uppercase font-worksans leading-none text-heading-text dark:text-white font-medium text-sm">
        Currently Reading
      </h2>
      <p className="title capitalize md:leading-tight font-lora font-medium text-text dark:text-mint text-sm md:text-lg mt-2">
        The Guest List
      </p>
      <p className="author font-lora italic text-xs md:text-sm dark:text-white ">
        Lucy Foley
      </p>
      <p className="link font-worksans text-heading-text font-semibold text-xs mt-2">
        <Link
          to="/reading-log"
          title="See reading log"
          className="dark:text-mint"
        >
          See reading log
        </Link>
      </p>
    </div>
  );
}
