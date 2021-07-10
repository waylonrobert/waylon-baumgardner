/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'gatsby';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

const isActive =
  (className) =>
  ({ isPartiallyCurrent }) => ({
    className: className + (isPartiallyCurrent ? ' active' : ''),
  });

const ListLink = ({ className, children, ...props }) => (
  <li className="inline-block mr-6 md:mr-8 font-normal text-base align-middle">
    {/* <Link
      to={props.to}
      title={props.title}
      className={props.classname}
      activeClassName={props.activeclassname}
    >
      {props.children}
    </Link> */}
    <Link getProps={isActive(className)} {...props}>
      {children}
    </Link>
  </li>
);

// width="468"
//           height="67"
//           viewBox="0 0 468 67"

export default function Header() {
  return (
    <header className="grid grid-cols-1 md:grid-cols-2 md:gap-2 gap-1 col-span-3 pt-8 md:pt-12 md:mx-auto w-full md:w-3/4 lg:w-11/12">
      <Link
        to="/"
        title="Waylon Baumgardner"
        className="text-center md:text-left"
      >
        <Logo
          classNameAvatar="inline-flex dark:hidden h-1/2 md:h-3/4"
          classNameDarkAvatar="hidden fill-current dark:inline-flex h-1/2 md:h-3/4"
          classNameName="inline-flex ml-4 text-heading-text dark:text-dark-heading-text fill-current lg:w-min"
        />
      </Link>
      <nav className="text-center md:text-none md:ml-1">
        <ul className="m-0 text-text dark:text-dark-text focus:text-center md:float-right md:m-3 font-worksans uppercase">
          <ListLink
            to="/work"
            title="Work"
            className="link-test"
            activeClassName="active"
          >
            Work
          </ListLink>
          <ListLink
            to="/writing"
            title="Writing"
            className="link-test"
            activeClassName="active"
          >
            Writing
          </ListLink>
          <ListLink
            to="/about"
            title="About"
            className="link-test"
            activeClassName="active"
          >
            About
          </ListLink>
          <ListLink
            to="/contact"
            title="Contact"
            className="link-test"
            activeClassName="active"
          >
            Contact
          </ListLink>
          <li className="inline-block mr-2 md:mr-8 font-normal text-base align-middle">
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
