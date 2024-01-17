import MarketingLayout from '@/components/Layouts/page/MarketingLayout';
import React from 'react';

const colors = [
  {
    id: 'default',
    name: 'Default',
    color: 'bg-brand',
    group: 'brand',
  },
  {
    id: '50',
    name: '50',
    color: 'bg-brand-50',
    group: 'brand',
  },
  {
    id: '100',
    name: '100',
    color: 'bg-brand-100',
    group: 'brand',
  },
  {
    id: '200',
    name: '200',
    color: 'bg-brand-200',
    group: 'brand',
  },
  {
    id: '300',
    name: '300',
    color: 'bg-brand-300',
    group: 'brand',
  },
  {
    id: '400',
    name: '400',
    color: 'bg-brand-400',
    group: 'brand',
  },
  {
    id: '500',
    name: '500',
    color: 'bg-brand-500',
    group: 'brand',
  },
  {
    id: '600',
    name: '600',
    color: 'bg-brand-600',
    group: 'brand',
  },
  {
    id: '700',
    name: '700',
    color: 'bg-brand-700',
    group: 'brand',
  },
  {
    id: '800',
    name: '800',
    color: 'bg-brand-800',
    group: 'brand',
  },
  {
    id: '900',
    name: '900',
    color: 'bg-brand-900',
    group: 'brand',
  },
  {
    id: 'default',
    name: 'Default',
    color: 'bg-accent',
    group: 'accent',
  },
  {
    id: '50',
    name: '50',
    color: 'bg-accent-50',
    group: 'accent',
  },
  {
    id: '100',
    name: '100',
    color: 'bg-accent-100',
    group: 'accent',
  },
  {
    id: '200',
    name: '200',
    color: 'bg-accent-200',
    group: 'accent',
  },
  {
    id: '300',
    name: '300',
    color: 'bg-accent-300',
    group: 'accent',
  },
  {
    id: '400',
    name: '400',
    color: 'bg-accent-400',
    group: 'accent',
  },
  {
    id: '500',
    name: '500',
    color: 'bg-accent-500',
    group: 'accent',
  },
  {
    id: '600',
    name: '600',
    color: 'bg-accent-600',
    group: 'accent',
  },
  {
    id: '700',
    name: '700',
    color: 'bg-accent-700',
    group: 'accent',
  },
  {
    id: '800',
    name: '800',
    color: 'bg-accent-800',
    group: 'accent',
  },
  {
    id: '900',
    name: '900',
    color: 'bg-accent-900',
    group: 'accent',
  },
  {
    id: 'bg',
    name: 'Background',
    color: 'bg-surface-background',
    group: 'surface',
  },
  {
    id: 'surface',
    group: 'surface',
    name: 'Surface',
    color: 'bg-surface',
  },
  {
    id: '1',
    name: '1',
    group: 'surface',
    color: 'bg-surface-1',
  },
  {
    id: '2',
    name: '2',
    group: 'surface',
    color: 'bg-surface-2',
  },
  {
    id: '3',
    name: '3',
    group: 'surface',
    color: 'bg-surface-3',
  },
  {
    id: '4',
    name: '4',
    group: 'surface',
    color: 'bg-surface-4',
  },
  {
    id: '5',
    name: '5',
    group: 'surface',
    color: 'bg-surface-5',
  },
  {
    id: 'success',
    group: 'surface',
    name: 'Success',
    color: 'bg-surface-success',
  },
  {
    id: 'error',
    group: 'surface',
    name: 'Error',
    color: 'bg-surface-error',
  },
  {
    id: 'warning',
    group: 'surface',
    name: 'Warning',
    color: 'bg-surface-warning',
  },
  {
    id: 'info',
    group: 'surface',
    name: 'Info',
    color: 'bg-surface-info',
  },
  {
    id: 'default',
    group: 'text',
    name: 'Default',
    color: 'bg-tc',
  },
  {
    id: '1',
    group: 'text',
    name: '1',
    color: 'bg-tc-1',
  },
  {
    id: '2',
    group: 'text',
    name: '2',
    color: 'bg-tc-2',
  },
  {
    id: '3',
    group: 'text',
    name: '3',
    color: 'bg-tc-3',
  },
  {
    id: '4',
    group: 'text',
    name: '4',
    color: 'bg-tc-4',
  },
  {
    id: '5',
    group: 'text',
    name: '5',
    color: 'bg-tc-5',
  },
  {
    id: 'success',
    group: 'alert',
    name: 'Success',
    color: 'bg-success',
  },
  {
    id: 'error',
    group: 'alert',
    name: 'Error',
    color: 'bg-error',
  },
  {
    id: 'warning',
    group: 'alert',
    name: 'Warning',
    color: 'bg-warning',
  },
  {
    id: 'info',
    group: 'alert',
    name: 'Info',
    color: 'bg-info',
  },
  {
    id: '50',
    name: '50',
    color: 'bg-gold-50',
    group: 'gold',
  },
  {
    id: '100',
    name: '100',
    color: 'bg-gold-100',
    group: 'gold',
  },
  {
    id: '200',
    name: '200',
    color: 'bg-gold-200',
    group: 'gold',
  },
  {
    id: '300',
    name: '300',
    color: 'bg-gold-300',
    group: 'gold',
  },
  {
    id: '400',
    name: '400',
    color: 'bg-gold-400',
    group: 'gold',
  },
  {
    id: '500',
    name: '500',
    color: 'bg-gold-500',
    group: 'gold',
  },
  {
    id: '600',
    name: '600',
    color: 'bg-gold-600',
    group: 'gold',
  },
  {
    id: '700',
    name: '700',
    color: 'bg-gold-700',
    group: 'gold',
  },
  {
    id: '800',
    name: '800',
    color: 'bg-gold-800',
    group: 'gold',
  },
  {
    id: '900',
    name: '900',
    color: 'bg-gold-900',
    group: 'gold',
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const groupBy = (items: any[], key: string) =>
  items.reduce(
    (result, item) => ({
      ...result,
      [item[key]]: [...(result[item[key]] || []), item],
    }),
    {},
  );

const groupedColors = groupBy(colors, 'group');

const Branding = () => {
  return (
    <MarketingLayout pageName="Branding">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center  pb-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none">
              Branding Guidelines
            </h1>
            <p className="mx-auto max-w-[700px] text-tc-2 md:text-xl ">
              Our visual identity is a critical part of our brand. It represents
              our mission, values, and the quality of our services.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center  pb-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Logo Usage
            </h2>
            <p className="mx-auto max-w-[700px] text-tc-2 md:text-xl ">
              Our logo is a symbol of our brand and should be used thoughtfully
              and consistently.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 ">
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Primary Logo"
                className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center"
                height="70"
                src="/icon_square.png"
                width="70"
              />
              <p className="text-center text-tc-2">
                This is our primary logo and should be used in most instances.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-between">
                <img
                  alt="Primary Logo"
                  className="aspect-[1/1] overflow-hidden rounded-lg object-contain object-center bg-black"
                  height="70"
                  src="/icon_square-light.png"
                  width="70"
                />
                <img
                  alt="Primary Logo"
                  className="ml-3 aspect-[1/1] overflow-hidden rounded-lg object-contain object-center bg-white"
                  height="70"
                  src="/icon_square-dark.png"
                  width="70"
                />
              </div>
              <p className="text-center text-tc-2">
                This is our single colored logos and should be used in most
                instances.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <img
                alt="Logo"
                className="overflow-hidden object-contain object-center"
                src="/icon-wide.png"
                width="140"
              />
              <p className="text-center text-tc-2">
                This is our text logo and should be used in most instances.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center justify-between ">
                <img
                  alt="Logo"
                  className="overflow-hidden rounded-lg object-contain object-center bg-black p-2"
                  width="140"
                  src="/icon-wide-light.png"
                />
                <img
                  alt="Logo"
                  className="ml-2  overflow-hidden rounded-lg object-contain object-center bg-white p-2"
                  width="140"
                  src="/icon-wide-dark.png"
                />
              </div>
              <p className="text-center text-tc-2">
                This is our monochrome logo and should be used when color is not
                an option.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container max-xl: mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center  pb-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Color Palette
            </h2>
            <p className="mx-auto max-w-[700px] text-tc-2 md:text-xl ">
              Our color palette reflects our brand personality and should be
              used consistently across all visual elements.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-brand rounded-full" />
              <p className="text-center text-tc-2">Primary Color - #649DAD</p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <div className="w-24 h-24 bg-accent rounded-full" />
              <p className="text-center text-tc-2">Accent Color - #C19AB7</p>
            </div>
          </div>
          <div className="space-y-4 text-center  pb-6">
            <p className="my-2 mx-auto max-w-[700px] text-tc-2 md:text-xl ">
              Our color palette reflects our brand personality and should be
              used consistently across all visual elements.
            </p>
          </div>
          {Object.entries(groupedColors).map(([key, items]) => {
            console.log(key, items);
            const colors = items as {
              id: string;
              name: string;
              color: string;
            }[];
            return (
              <div key={key} className="max-w-[1000px] mx-auto">
                <h2 className="text-3xl font-bold mb-4 capitalize">{key}</h2>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 ">
                  {colors.map((color) => (
                    <div key={`${key}-${color.id}`}>
                      <div
                        className={`aspect-square ${color.color} mb-2 rounded-md border border-black dark:border-white`}
                      />
                      <p className="text-tc-1 text-center">{color.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-surface">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center pb-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Typography
            </h2>
            <p className="mx-auto max-w-[700px] text-tc-2 md:text-xl ">
              Our typography is a key part of our visual identity and helps to
              create a consistent look and feel.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-bold font-heading">
                Libre Baskerville
              </h3>
              <p className="text-center text-tc-2">
                This is our primary font and should be used for all headings.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-bold">Open Sans</h3>
              <p className="text-center text-tc-2">
                This is our secondary font and should be used body text.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
              <h3 className="text-3xl font-bold font-accent">Roboto</h3>
              <p className="text-center text-tc-2">
                This is our accent font and should be used for captions and
                small text.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Branding;
