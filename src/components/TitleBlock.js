/* eslint-disable react/destructuring-assignment */

import * as React from 'react';

export default function TitleBlock(props) {
  return (
    <div className="title mb-4">
      {props.postDate ? (
        <aside className="date text-accent dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
          {props.postDate}
        </aside>
      ) : null}
      {props.pageCategory ? (
        <aside className="date text-accent dark:text-dark-heading-text text-sm font-defaultSans font-semibold uppercase mb-2">
          {props.pageCategory}
        </aside>
      ) : null}
      <h1 className="text-accent dark:text-dark-heading-text text-4xl md:text-5xl font-defaultSans font-extrabold">
        {props.pageTitle}
      </h1>

      <p className="description text-text text-xl md:text-2xl font-sourceSerifPro font-normal">
        {props.shortDescription}
      </p>
      {/* used for blog post */}
      {props.shortDescriptionAlt ? (
        <p className="description text-accent dark:text-dark-heading-text text-2xl font-sourceSerifPro font-medium italic w-full md:w-1/2">
          {props.shortDescriptionAlt}
        </p>
      ) : null}
      {props.callToAction ? (
        <p className="title-cta text-accent dark:text-dark-heading-text text-base md:text-xl font-defaultSans font-semibold my-2">
          <a
            className="alt"
            href={props.callToActionTo}
            title={props.callToActionToTitle}
          >
            <button
              type="button"
              className="bg-accent dark:bg-dark-heading-text text-white dark:text-black py-2 px-4 mt-2 text-sm font-defaultSans"
            >
              {props.callToAction}
            </button>
          </a>
        </p>
      ) : null}
    </div>
  );
}
