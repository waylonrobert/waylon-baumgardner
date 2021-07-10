/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'gatsby';
import CurrentlyListening from './CurrentlyListening';
import CurrentlyReading from './CurrentlyReading';
import GitHubIcon from './GitHubIcon';
import LinkedInIcon from './LinkedInIcon';
import TwitterIcon from './TwitterIcon';

const ListLink = (props) => (
  <Link
    className="font-worksans text-xs text-heading-text underline"
    to={props.to}
    title={props.title}
  >
    {props.children}
  </Link>
);
export default function Footer() {
  return (
    <footer className="bg-white dark:bg-british-racing-green mt-8 py-10">
      <div className="grid md:grid-cols-3 md:gap-2 mx-auto w-11/12 md:w-3/4 lg:w-3/5">
        <div className="col1">
          <CurrentlyReading />
        </div>
        <div className="col2">
          <CurrentlyListening />
        </div>
      </div>
      {/* <div className="mx-auto w-3/4 mt-14">
        <ul className="text-right">
          <li className="inline-block mr-2">
            <GitHubIcon fill="rgba(173,78,60,1)" />
          </li>
          <li className="inline-block mr-2">
            <LinkedInIcon fill="rgba(173,78,60,1)" />
          </li>
          <li className="inline-block">
            <TwitterIcon fill="rgba(173,78,60,1)" />
          </li>
        </ul>
      </div> */}
      <div className="grid md:grid-cols-2 md:gap-2 mx-auto w-11/12 mt-4 md:w-3/4 lg:w-3/5 md:mt-14">
        <div className="col1 order-last md:order-first">
          <span className="font-worksans text-xs leading-none text-heading-text dark:text-white align-bottom">
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
        {/* <div className="col2 text-right">
          <ListLink to="/work" title="Accessibility">
            Accessibility
          </ListLink>
          {'  '}
          <ListLink to="/writing" title="Colophon">
            Colophon
          </ListLink>
          {'  '}
          <ListLink to="/contact" title="RSS">
            RSS
          </ListLink>
        </div> */}
      </div>
    </footer>
  );
}
