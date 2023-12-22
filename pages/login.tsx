import { useLogin } from '@/api/mutation/login';
import SplitImageLayout from '@/components/Layouts/page/SplitImageLayout';
import { Button } from '@/components/buttons/button';
import PasswordInput from '@/components/inputs/password-input';
import TextInput from '@/components/inputs/text-input';
import { useToast } from '@/stores/toast';
import Link from 'next/link';
import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { mutateAsync: asyncLogin } = useLogin();
  const { addToast } = useToast();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    await asyncLogin(
      {
        password,
        email,
      },
      {
        onSuccess(data) {
          addToast('Successfully Logged In', 'success');
          console.log(data);
        },
        onError(error) {
          addToast('Error logging in', 'danger');
          console.log('ERROR');
          console.log(error);
        },
      },
    );
  }

  return (
    <SplitImageLayout pageName="Login">
      <div>
        <Link href="/">
          <img
            className="h-10 w-auto"
            src="/icon-wide.png"
            alt="Kitchendry logo"
          />
        </Link>
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-surface-1">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm leading-6 text-surface-2">
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
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-brand to-brand-600 shadow-md transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl group-hover:sm:rotate-0 transition" />
          <form
            onSubmit={onSubmit}
            className="space-y-6 relative px-4 py-10 bg-surface shadow-lg sm:rounded-3xl sm:p-10"
          >
            <div>
              <TextInput
                label="Email Address"
                id="email"
                value={email}
                type="email"
                autoComplete="email"
                onChange={setEmail}
              />
            </div>

            <div>
              <PasswordInput
                id="password"
                label="Password"
                value={password}
                type="password"
                autoComplete="current-password"
                onChange={setPassword}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                {/* <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-surface-4 text-brand focus:ring-brand"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 block text-sm leading-6 text-surface-2"
                >
                  Remember me
                </label> */}
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
