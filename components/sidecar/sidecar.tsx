import React from 'react';

interface ISidecarProps {}

const Sidecar = (props: ISidecarProps) => {
  const {} = props;
  return (
    <div className="pt-6">
      <dt>
        {/* <!-- Expand/collapse question button --> */}
        <button
          type="button"
          className="flex w-full items-start justify-between text-left text-gray-900"
          aria-controls="faq-0"
          aria-expanded="false"
        >
          <span className="text-base font-semibold leading-7">
            What&#039;s the best thing about Switzerland?
          </span>
          <span className="ml-6 flex h-7 items-center">
            {/* <!--
          Icon when question is collapsed.

          Item expanded: "hidden", Item collapsed: ""
        --> */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            {/* <!--
          Icon when question is expanded.

          Item expanded: "", Item collapsed: "hidden"
        --> */}
            <svg
              className="hidden h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
            </svg>
          </span>
        </button>
      </dt>
      <dd className="mt-2 pr-12" id="faq-0">
        <p className="text-base leading-7 text-gray-600">
          I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
        </p>
      </dd>
    </div>
  );
};

export default Sidecar;
