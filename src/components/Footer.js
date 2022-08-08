/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CurrentlyListening from './CurrentlyListening';
import CurrentlyReading from './CurrentlyReading';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import TwitterIcon from './TwitterIcon';

export default function Footer() {
  return (
    <footer className="bg-accent/10 py-10">
      <div className="grid grid-cols-1 max-w-7xl p-4 mx-auto md:p-8 md:grid-cols-5">
        <div className="w-auto">
          <CurrentlyReading />
        </div>
        <div className="w-auto">
          <CurrentlyListening />
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
        <div className="col1 order-last md:order-first">
          <span className="font-defaultSans text-xs leading-none text-text dark:text-white align-bottom">
            Copyright &copy;{new Date().getFullYear()} Waylon Baumgardner. All
            rights reserved.
          </span>
        </div>
        <div className="col2 mt-4 md:mt-0">
          <ul className="text-left md:text-right">
            <li className="inline-block mr-2">
              <GitHubIcon />
            </li>
            <li className="inline-block mr-2">
              <LinkedInIcon />
            </li>
            <li className="inline-block">
              <TwitterIcon />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
