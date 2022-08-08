import * as React from 'react';
import { Link } from 'gatsby';
import ThemeToggle from './ThemeToggle';

const isActive =
  (className) =>
  ({ isPartiallyCurrent }) => ({
    className: className + (isPartiallyCurrent ? ' active' : ''),
  });

const ListLink = ({ className, children, ...props }) => (
  <li className="inline-block mr-4 md:mr-8 font-medium text-sm md:text-base align-middle">
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

export default function Navigation() {
  return (
    <nav className="text-center md:text-none md:ml-1">
      <ul className="m-0 text-text dark:text-dark-text focus:text-right font-defaultSans uppercase md:my-3">
        <ListLink
          to="/work"
          title="Work"
          className="link"
          activeClassName="active"
        >
          Work
        </ListLink>
        {/* <ListLink
            to="/writing"
            title="Writing"
            className="link"
            activeClassName="active"
          >
            Writing
          </ListLink> */}
        <ListLink
          to="/about"
          title="About"
          className="link"
          activeClassName="active"
        >
          About
        </ListLink>

        <ListLink
          to="/contact"
          title="Contact"
          className="link"
          activeClassName="active"
        >
          Contact
        </ListLink>
        <ListLink
          to="/resume"
          title="Resume"
          className="link"
          activeClassName="active"
        >
          Resume
        </ListLink>
        <li className="inline-block font-normal text-base align-bottom">
          <ThemeToggle />
        </li>
      </ul>
    </nav>
  );
}
