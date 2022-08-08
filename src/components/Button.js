/* eslint-disable react/destructuring-assignment */
import { Link } from 'gatsby';
import React from 'react';

export default function Button(props) {
  return (
    <Link to={props.to}>
      <button
        type="button"
        className="cta bg-accent hover:after:content-['→'] dark:bg-dark-heading-text text-white dark:text-black py-2 px-4 mt-6 text-base font-defaultSans"
      >
        {props.children}
      </button>
    </Link>
  );
}
