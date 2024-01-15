import MarketingLayout from '@/components/Layouts/page/MarketingLayout';
import { Container } from '@/components/container';
import React from 'react';

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
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    About Kitchendry
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    We provide high-quality services to help you achieve your
                    goals.
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
                  Innovation. Collaboration. Diversity.
                </h2>
                <p className="max-w-[900px] text-tc-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We embrace these values to deliver exceptional results for our
                  clients.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
              <img
                alt="Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Our Mission
                  </h2>
                  <p className="max-w-[600px] text-tc-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed ">
                    To provide innovative solutions that help our clients
                    achieve their goals.
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
                      <img
                        alt="Avatar"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: '40/40',
                          objectFit: 'cover',
                        }}
                        width="40"
                      />
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-tc-2">CEO</div>
                      </div>
                    </div>
                    <p className="text-sm text-tc-2">
                      John is a seasoned executive with over 20 years of
                      experience in the tech industry.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2">
                      <img
                        alt="Avatar"
                        className="rounded-full"
                        height="40"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: '40/40',
                          objectFit: 'cover',
                        }}
                        width="40"
                      />
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
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-brand-500 px-3 py-1 text-sm ">
                  Our History
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Our journey from startup to success.
                </h2>
                <p className="mx-auto max-w-[700px] text-tc-2 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Inc was founded in 2010 with a vision to provide
                  innovative solutions to our clients.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col space-y-2">
                    <div className="font-medium">2010</div>
                    <p className="text-sm text-tc-2">
                      Founded in Silicon Valley.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="font-medium">2015</div>
                    <p className="text-sm text-tc-2">
                      Launched our first product.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="font-medium">2020</div>
                    <p className="text-sm text-tc-2">
                      Opened our first international office.
                    </p>
                  </div>
                  <div className="flex flex-col space-y-2">
                    <div className="font-medium">2021</div>
                    <p className="text-sm text-tc-2">
                      Received Series A funding.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <Container className="container px-4 md:px-6">
            <div className="grid gap-10 sm:px-10 md:gap-16 md:grid-cols-2">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-brand-500 px-3 py-1 text-sm">
                  Our Culture
                </div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  We value diversity and inclusion.
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
              <div className="flex flex-col items-start space-y-4">
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
              </div>
            </div>
          </Container>
        </section>
      </main>
    </MarketingLayout>
  );
};

export default About;
