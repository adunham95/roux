import NoHeaderLayout from '@/components/Layouts/NoHeaderLayout';
import { Button } from '@/components/buttons/button';
import TextInput from '@/components/inputs/text-input';
import Image from 'next/image';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <NoHeaderLayout pageName="Login" containerClassName="h-full">
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="h-10 w-auto"
                src="/icon-wide.png"
                alt="Roux logo"
              />
              <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                Not a member?{' '}
                <a
                  href="#"
                  className="font-semibold text-brand hover:text-brand-500"
                >
                  Start a 14 day free trial
                </a>
              </p>
            </div>

            <div className="mt-10">
              <div>
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <TextInput
                      label="Email Address"
                      id="email"
                      value={email}
                      type="email"
                      onChange={setEmail}
                    />
                  </div>

                  <div>
                    <TextInput
                      id="password"
                      label="Password"
                      value={password}
                      type="password"
                      onChange={setPassword}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-brand focus:ring-brand"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-3 block text-sm leading-6 text-gray-700"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm leading-6">
                      <a
                        href="#"
                        className="font-semibold text-brand hover:text-brand-500"
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <Button className="w-full">Sign In</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            fill
            className="absolute inset-0 h-full w-full object-cover object-bottom"
            src="/images/cooking.jpg"
            alt=""
          />
        </div>
      </div>
    </NoHeaderLayout>
  );
};

export async function getStaticProps() {
  return { props: { isFullScreen: true } };
}

export default Login;
