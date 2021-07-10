/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
// import RecentWriting from '../components/RecentWriting';
// import RecentWork from '../components/RecentWork';

const ListLink = (props) => (
  <li className="text-heading-text dark:text-dark-heading-text text-2xl font-worksans font-semibold my-4">
    <Link to={props.to} className="underline">
      {props.children}
    </Link>
  </li>
);
const IndexPage = () => (
  <Layout>
    <SEO title="Welcome to Waylon's website" />
    <div className="mx-auto my-12 w-11/12 md:w-3/4 lg:w-1/2">
      <div className="md:grid md:grid-cols-3 md:gap-4">
        <div className="md:col-span-2 ml-1 md:ml-24 md:mt-8 md:pr-8">
          <h2 className="dark:text-dark-heading-text">Hi, I'm Waylon</h2>
          <div className="my-4 md:hidden">
            <StaticImage
              src="../images/waylon-baumgardner-portrait.jpg"
              alt="Waylon Baumgardner"
              width={200}
            />
          </div>
          <p className="text-text text-xl md:text-2xl mt-5 dark:text-dark-text">
            I'm a human-centered user experience designer based in Southern
            California. I currently work at Esri as a UX strategist.
          </p>
          <ul className="ctas mt-8 list-none dark:text-dark-text">
            <ListLink to="/work/">Explore my work</ListLink>
            <ListLink to="/writing/">Read my writing</ListLink>
          </ul>
        </div>
        <div className="hidden md:block">
          <StaticImage
            src="../images/waylon-baumgardner-portrait.jpg"
            alt="Waylon Baumgardner"
            width={250}
          />
        </div>
      </div>
      {/* <div className="md:grid md:grid-cols-2 md:gap-4">
        <div className="ml-1 md:ml-24 md:mt-8 md:pr-8">
          <h3 className="mt-12 md:mt-14">Recent writing</h3>
          <RecentWriting />
        </div>
        <div className="ml-1 md:ml-24 mt-8 md:pr-8">
          <h3 className="mt-12 md:mt-14">Recent work</h3>
          <RecentWork />
        </div>
      </div> */}
    </div>
    <div>
      {/* <div className="ml-1 mt-4 col-span-2 md:ml-20 md:mt-8 md:col-span-1">
        
      </div> */}

      {/* <div className="grid w-full grid-cols-1 md:grid-cols-2  md:gap-8 md:m-12 md:mx-auto md:w-3/4 lg:w-3/5">
      <div className="ml-1 mt-4 col-span-2 md:ml-20 md:mt-8 md:col-span-1">
        <h2 className="dark:text-dark-heading-text">Hi, I'm Waylon</h2>
        <p className="text-text text-2xl mt-5 dark:text-dark-text">
          I'm a human-centered user experience designer in Southern California.
          I work at Esri as a UX strategist and also do freelance UX consulting.
        </p>
        <ul className="ctas mt-8 list-none dark:text-dark-text">
          <ListLink to="/work/">Explore my work</ListLink>
          <ListLink to="/writing/">Read my writing</ListLink>
        </ul>
      </div> */}

      <div className="mx-auto my-auto">
        {/* TODO: write conditional logic for dark mode */}
        {/* <svg
          className="-mb-20 dark:text-dark-heading-text stroke-current"
          style={{ width: '30em' }}
          width="133"
          height="133"
          viewBox="0 0 133 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(0 0.983276)"
              // fill="#F9F4EF"
            />
            <line
              x1="0.353553"
              y1="0.629723"
              x2="200.354"
              y2="200.63"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip1)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(0 33.9868)"
              // fill="#F9F4EF"
            />
            <line
              x1="0.353553"
              y1="33.6333"
              x2="200.354"
              y2="233.633"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip2)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(0 66.9899)"
              // fill="#F9F4EF"
            />
            <line
              x1="0.353553"
              y1="66.6363"
              x2="200.354"
              y2="266.636"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip3)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(0 99.9934)"
              // fill="#F9F4EF"
            />
            <line
              x1="0.353553"
              y1="99.6399"
              x2="200.354"
              y2="299.64"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip4)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(66.0068 0.982788)"
              // fill="#F9F4EF"
            />
            <line
              x1="66.3604"
              y1="0.629235"
              x2="266.36"
              y2="200.629"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip5)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(66.0068 33.9868)"
              // fill="#F9F4EF"
            />
            <line
              x1="66.3604"
              y1="33.6333"
              x2="266.36"
              y2="233.633"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip6)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(66.0068 66.9899)"
              // fill="#F9F4EF"
            />
            <line
              x1="66.3604"
              y1="66.6363"
              x2="266.36"
              y2="266.636"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip7)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(66.0068 99.9934)"
              // fill="#F9F4EF"
            />
            <line
              x1="66.3604"
              y1="99.6399"
              x2="266.36"
              y2="299.64"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip8)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 66.0068 0.982788)"
              // fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.0068 0.982788)"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip9)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 66.0068 33.9868)"
              // fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.0068 33.9868)"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip10)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 66.0068 66.9899)"
              // fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.0068 66.9899)"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip11)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 66.0068 99.9934)"
              // fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.0068 99.9934)"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip12)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 132.014 0.982788)"
              // fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 132.014 0.982788)"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip13)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 132.014 33.9868)"
              //   // fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 132.014 33.9868)"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip14)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 132.014 66.9899)"
              // fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 132.014 66.9899)"
              // stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip15)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 132.014 99.9934)"
              // fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 132.014 99.9934)"
              // stroke="#C83D2B"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="translate(0 0.983276)"
              />
            </clipPath>
            <clipPath id="clip1">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="translate(0 33.9868)"
              />
            </clipPath>
            <clipPath id="clip2">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="translate(0 66.9899)"
              />
            </clipPath>
            <clipPath id="clip3">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="translate(0 99.9934)"
              />
            </clipPath>
            <clipPath id="clip4">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="translate(66.0068 0.982788)"
              />
            </clipPath>
            <clipPath id="clip5">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="translate(66.0068 33.9868)"
              />
            </clipPath>
            <clipPath id="clip6">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="translate(66.0068 66.9899)"
              />
            </clipPath>
            <clipPath id="clip7">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="translate(66.0068 99.9934)"
              />
            </clipPath>
            <clipPath id="clip8">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="matrix(-1 0 0 1 66.0068 0.982788)"
              />
            </clipPath>
            <clipPath id="clip9">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="matrix(-1 0 0 1 66.0068 33.9868)"
              />
            </clipPath>
            <clipPath id="clip10">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="matrix(-1 0 0 1 66.0068 66.9899)"
              />
            </clipPath>
            <clipPath id="clip11">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="matrix(-1 0 0 1 66.0068 99.9934)"
              />
            </clipPath>
            <clipPath id="clip12">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="matrix(-1 0 0 1 132.014 0.982788)"
              />
            </clipPath>
            <clipPath id="clip13">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="matrix(-1 0 0 1 132.014 33.9868)"
              />
            </clipPath>
            <clipPath id="clip14">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="matrix(-1 0 0 1 132.014 66.9899)"
              />
            </clipPath>
            <clipPath id="clip15">
              <rect
                width="33.0034"
                height="33.0034"
                // fill="white"
                transform="matrix(-1 0 0 1 132.014 99.9934)"
              />
            </clipPath>
          </defs>
        </svg>
*/}

        {/* <svg
          className="-mt-20"
          width="133"
          height="133"
          viewBox="0 0 133 133"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(0 0.983276)"
              fill="#F9F4EF"
            />
            <line
              x1="0.353553"
              y1="0.629723"
              x2="200.354"
              y2="200.63"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip1)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(0 33.9868)"
              fill="#F9F4EF"
            />
            <line
              x1="0.353553"
              y1="33.6333"
              x2="200.354"
              y2="233.633"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip2)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(0 66.9899)"
              fill="#F9F4EF"
            />
            <line
              x1="0.353553"
              y1="66.6363"
              x2="200.354"
              y2="266.636"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip3)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(0 99.9934)"
              fill="#F9F4EF"
            />
            <line
              x1="0.353553"
              y1="99.6399"
              x2="200.354"
              y2="299.64"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip4)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(66.0068 0.982788)"
              fill="#F9F4EF"
            />
            <line
              x1="66.3604"
              y1="0.629235"
              x2="266.36"
              y2="200.629"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip5)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(66.0068 33.9868)"
              fill="#F9F4EF"
            />
            <line
              x1="66.3604"
              y1="33.6333"
              x2="266.36"
              y2="233.633"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip6)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(66.0068 66.9899)"
              fill="#F9F4EF"
            />
            <line
              x1="66.3604"
              y1="66.6363"
              x2="266.36"
              y2="266.636"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip7)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="translate(66.0068 99.9934)"
              fill="#F9F4EF"
            />
            <line
              x1="66.3604"
              y1="99.6399"
              x2="266.36"
              y2="299.64"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip8)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 66.0068 0.982788)"
              fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.0068 0.982788)"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip9)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 66.0068 33.9868)"
              fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.0068 33.9868)"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip10)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 66.0068 66.9899)"
              fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.0068 66.9899)"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip11)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 66.0068 99.9934)"
              fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 66.0068 99.9934)"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip12)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 132.014 0.982788)"
              fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 132.014 0.982788)"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip13)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 132.014 33.9868)"
              fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 132.014 33.9868)"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip14)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 132.014 66.9899)"
              fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 132.014 66.9899)"
              stroke="#C83D2B"
            />
          </g>
          <g clipPath="url(#clip15)">
            <rect
              width="33.0034"
              height="33.0034"
              transform="matrix(-1 0 0 1 132.014 99.9934)"
              fill="#F9F4EF"
            />
            <line
              y1="-0.5"
              x2="282.843"
              y2="-0.5"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 132.014 99.9934)"
              stroke="#C83D2B"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="translate(0 0.983276)"
              />
            </clipPath>
            <clipPath id="clip1">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="translate(0 33.9868)"
              />
            </clipPath>
            <clipPath id="clip2">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="translate(0 66.9899)"
              />
            </clipPath>
            <clipPath id="clip3">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="translate(0 99.9934)"
              />
            </clipPath>
            <clipPath id="clip4">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="translate(66.0068 0.982788)"
              />
            </clipPath>
            <clipPath id="clip5">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="translate(66.0068 33.9868)"
              />
            </clipPath>
            <clipPath id="clip6">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="translate(66.0068 66.9899)"
              />
            </clipPath>
            <clipPath id="clip7">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="translate(66.0068 99.9934)"
              />
            </clipPath>
            <clipPath id="clip8">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="matrix(-1 0 0 1 66.0068 0.982788)"
              />
            </clipPath>
            <clipPath id="clip9">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="matrix(-1 0 0 1 66.0068 33.9868)"
              />
            </clipPath>
            <clipPath id="clip10">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="matrix(-1 0 0 1 66.0068 66.9899)"
              />
            </clipPath>
            <clipPath id="clip11">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="matrix(-1 0 0 1 66.0068 99.9934)"
              />
            </clipPath>
            <clipPath id="clip12">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="matrix(-1 0 0 1 132.014 0.982788)"
              />
            </clipPath>
            <clipPath id="clip13">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="matrix(-1 0 0 1 132.014 33.9868)"
              />
            </clipPath>
            <clipPath id="clip14">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="matrix(-1 0 0 1 132.014 66.9899)"
              />
            </clipPath>
            <clipPath id="clip15">
              <rect
                width="33.0034"
                height="33.0034"
                fill="white"
                transform="matrix(-1 0 0 1 132.014 99.9934)"
              />
            </clipPath>
          </defs>
        </svg>
        */}
      </div>
    </div>
  </Layout>
);

export default IndexPage;
