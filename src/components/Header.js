/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'gatsby';
import WaylonBaumgardnerLogo from './WaylonBaumgardnerLogo';
import WaylonBaumgardnerDarkLogo from './WaylonBaumgardnerDarkLogo';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg: pb-4 lg:pt-11">
      <div className="flex flex-wrap items-center justify-between max-w-7xl p-4 mx-auto md:p-8">
        <div className="flex items-center">
          <Link to="/" title="Waylon Baumgardner">
            <WaylonBaumgardnerLogo className="py-2 w-screen lg:w-min dark:hidden" />
            <WaylonBaumgardnerDarkLogo className="py-2 w-screen lg:w-min hidden dark:inline" />
          </Link>
        </div>
        <div className="flex order-last mx-auto md:mx-0">
          <Navigation />
        </div>
      </div>
    </header>
    // <header className="grid grid-cols-1 gap-1 pt-4 w-full md:grid-cols-2 md:gap-2 md:col-span-3 md:pt-12 md:mx-auto  md:w-3/4 lg:w-11/12 2xl:w-7/12">
    //   <Link
    //     to="/"
    //     title="Waylon Baumgardner"
    //     className="text-center md:text-left"
    //   >

    //     <WaylonBaumgardnerLogo className="p-2 w-screen lg:w-min dark:hidden" />
    //     <WaylonBaumgardnerDarkLogo className="p-2 w-screen lg:w-min hidden dark:inline" />

    //   </Link>
    //   <Navigation />
    // </header>
  );
}
