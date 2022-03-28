/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { Link } from 'gatsby';

export default function CurrentlyReading() {
  return (
    <div className="reading">
      <h2 className="uppercase font-worksans leading-none text-darkPurple dark:text-white font-medium text-sm">
        Currently Reading
      </h2>
      <p className="title capitalize md:leading-tight font-lora font-medium text-darkNavy dark:text-mint text-sm md:text-lg mt-2">
        The Great Train Robbery
      </p>
      <p className="author font-lora italic text-xs md:text-sm dark:text-white ">
        Michael Crichton
      </p>
      <p className="link font-worksans text-darkPurple font-semibold text-xs mt-2">
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
