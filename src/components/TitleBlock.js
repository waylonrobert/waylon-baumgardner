/* eslint-disable react/destructuring-assignment */

import * as React from 'react';

export default function TitleBlock(props) {
  return (
    <div className="title mb-4 md:mb-14">
      {props.postDate ? (
        <aside className="date text-heading-text dark:text-dark-heading-text text-sm font-worksans font-semibold uppercase">
          {props.postDate}
        </aside>
      ) : null}
      <h1 className="mb-4 text-text text-4xl md:text-5xl font-worksans font-extrabold">
        {props.pageTitle}
      </h1>

      <p className="description text-text text-xl md:text-2xl font-lora font-normal md:w-1/2">
        {props.shortDescription}
      </p>
      {/* used for blog post */}
      {props.shortDescriptionAlt ? (
        <p className="description text-heading-text dark:text-dark-heading-text text-2xl font-lora font-medium italic w-full md:w-1/2">
          {props.shortDescriptionAlt}
        </p>
      ) : null}
      {props.callToAction ? (
        <p className="title-cta text-heading-text dark:text-dark-heading-text text-base md:text-xl font-worksans font-semibold my-2">
          <a href={props.callToActionTo} title={props.callToActionToTitle}>
            {props.callToAction}
          </a>
        </p>
      ) : null}
    </div>
  );
}
