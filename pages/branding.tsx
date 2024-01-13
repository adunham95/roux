import React from 'react';

const Branding = () => {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Branding Guidelines
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our visual identity is a critical part of our brand. It represents
              our mission, values, and the quality of our services.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Logo Usage
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our logo is a symbol of our brand and should be used thoughtfully
              and consistently.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
              <p className="text-center text-gray-500 dark:text-gray-400">
                This is our primary logo and should be used in most instances.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
              <p className="text-center text-gray-500 dark:text-gray-400">
                This is our secondary logo and should be used when the primary
                logo is not suitable.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Logo"
                className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/placeholder.svg"
                width="140"
              />
              <p className="text-center text-gray-500 dark:text-gray-400">
                This is our monochrome logo and should be used when color is not
                an option.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Color Palette
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our color palette reflects our brand personality and should be
              used consistently across all visual elements.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-brand rounded-full" />
              <p className="text-center text-gray-500 dark:text-gray-400">
                Primary Color - #649DAD
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-accent rounded-full" />
              <p className="text-center text-gray-500 dark:text-gray-400">
                Secondary Color - #C19AB7
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Typography
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our typography is a key part of our visual identity and helps to
              create a consistent look and feel.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-3">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-bold">Roboto</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                This is our primary font and should be used for all headings and
                body text.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-bold">Open Sans</h3>
              <p className="text-center text-gray-500 dark:text-gray-400">
                This is our secondary font and should be used for captions and
                small text.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branding;
