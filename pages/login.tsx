import SplitImageLayout from '@/components/Layouts/page/SplitImageLayout';
import { Button } from '@/components/buttons/button';
import TextInput from '@/components/inputs/text-input';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    signIn('credentials', { email, password, callbackUrl: '/dashboard' });
  }

  return (
    <SplitImageLayout pageName="Login">
      <div>
        <img
          className="h-10 w-auto"
          src="/icon-wide.png"
          alt="Kitchendry logo"
        />
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-500">
          Not a member?{' '}
          <Link
            href="/sign-up"
            className="font-semibold text-brand hover:text-brand-500"
          >
            Create an account
          </Link>
        </p>
      </div>

      <div className="mt-10">
        <div>
          <form onSubmit={onSubmit} className="space-y-6">
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
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SplitImageLayout>
  );
};

export async function getStaticProps() {
  return { props: { isFullScreen: true } };
}

export default Login;
