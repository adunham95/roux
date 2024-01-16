import MarketingLayout from '@/components/Layouts/page/MarketingLayout';
import { Container } from '@/components/container';
import React from 'react';
import { Avatar } from '@ark-ui/react';

const About = () => {
  return (
    <MarketingLayout pageName="About">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <Container className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="310"
                src="/images/family-cooking.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    About Kitchendry
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Empowering Culinary Excellence
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-surface">
          <Container className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-brand-500 px-3 py-1 text-sm ">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Innovation. Collaboration. .
                </h2>
                <p className="max-w-[900px] text-tc-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our mission is to revolutionize the culinary landscape through
                  cutting-edge SaaS kitchen solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/images/food-truck.jpg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Our Mission
                  </h2>
                  <p className="max-w-[600px] text-tc-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    Our mission is to revolutionize the culinary landscape
                    through cutting-edge the ability to innovate.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <Container className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg px-3 py-1 text-sm bg-brand-500">
                  Our Team
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Meet our team of experts.
                </h2>
                <p className="mx-auto max-w-[600px] text-tc-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                  We have a diverse team of professionals with a wide range of
                  skills and expertise.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar.Root>
                        <Avatar.Fallback className="rounded-full bg-brand-500 flex justify-center items-center">
                          AD
                        </Avatar.Fallback>
                        <Avatar.Image
                          src=""
                          alt="avatar"
                          className="rounded-full aspect-square object-cover w-10"
                        />
                      </Avatar.Root>
                      <div>
                        <div className="font-medium">Adrian Dunham</div>
                        <div className="text-sm text-tc-2">Founder</div>
                      </div>
                    </div>
                    <p className="text-sm text-tc-2">
                      John is a seasoned executive with over 20 years of
                      experience in the tech industry.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <Avatar.Root>
                        <Avatar.Fallback className="rounded-full bg-brand-500 flex justify-center items-center">
                          AD
                        </Avatar.Fallback>
                        <Avatar.Image
                          src=""
                          alt="avatar"
                          className="rounded-full aspect-square object-cover w-10"
                        />
                      </Avatar.Root>
                      <div>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-tc-2">CFO</div>
                      </div>
                    </div>
                    <p className="text-sm text-tc-2">
                      Jane is a passionate finance professional with a track
                      record of delivering results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-500 px-3 py-1 text-sm">
                  Our Culture
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  We value collaboration and inclusion.
                </h2>
                <p className="mx-auto max-w-[900px] text-tc-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We are committed to creating a diverse and inclusive workplace
                  where everyone can thrive.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <div className="font-medium">Collaboration</div>
                    <p className="text-sm text-tc-2">
                      We value teamwork and encourage collaboration.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="font-medium">Innovation</div>
                    <p className="text-sm text-tc-2">
                      We embrace change and encourage innovation.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="font-medium">Diversity</div>
                    <p className="text-sm text-tc-2">
                      We celebrate diversity and promote inclusivity.
                    </p>
                  </div>
                </div>
              </div>
              {/* <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-brand-500 px-3 py-1 text-sm">
                  Testimonials
                </div>
                <blockquote className="text-lg font-semibold leading-snug lg:text-xl lg:leading-normal xl:text-2xl">
                  “The customer service I received was exceptional. The support
                  team went above and beyond to address my concerns.“
                </blockquote>
                <div>
                  <div className="font-semibold">Jules Winnfield</div>
                  <div className="text-sm text-tc-2">CEO, Acme Inc</div>
                </div>
              </div> */}
            </div>
          </Container>
        </section>
      </main>
    </MarketingLayout>
  );
};

export default About;
