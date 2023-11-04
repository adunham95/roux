import SplitImageLayout from '@/components/Layouts/page/SplitImageLayout';
import { Button } from '@/components/buttons/button';
import TextInput from '@/components/inputs/text-input';
import Link from 'next/link';
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [betaToken, setBetaToken] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <SplitImageLayout pageName="Sign Up">
      <div>
        <img
          className="h-10 w-auto"
          src="/icon-wide.png"
          alt="Kitchendry logo"
        />
        <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-10">
        <div>
          <form
            onSubmit={onSubmit}
            className="space-y-6 grid gap-1 grid-cols-2"
          >
            <div className="col-span-2">
              <TextInput
                label="Early Access Token"
                id="betaToken"
                value={betaToken}
                type="text"
                onChange={setBetaToken}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                label="First Name"
                id="firstName"
                value={firstName}
                type="text"
                onChange={setFirstName}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                label="Last Name"
                id="lastName"
                value={lastName}
                type="text"
                onChange={setLastName}
              />
            </div>

            <div className="col-span-2">
              <TextInput
                label="Email Address"
                id="email"
                value={email}
                type="email"
                onChange={setEmail}
              />
            </div>

            <div className="col-span-2">
              <TextInput
                id="password"
                label="Password"
                value={password}
                type="password"
                onChange={setPassword}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm leading-6">
                <Link
                  href="/login"
                  className="font-semibold text-brand hover:text-brand-500"
                >
                  Sign In
                </Link>
              </div>
            </div>

            <div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SplitImageLayout>
  );
};

export default SignUp;
