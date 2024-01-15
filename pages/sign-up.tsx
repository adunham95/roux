import { useCreateUser } from '@/api/mutation/createUser';
import SplitImageLayout from '@/components/Layouts/page/SplitImageLayout';
import { Button } from '@/components/buttons/button';
import NewPasswordInput from '@/components/inputs/newPassword-input';
import TextInput from '@/components/inputs/text-input';
import { useToast } from '@/stores/toast';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const { mutateAsync: createUser, isPending: isLoading } = useCreateUser();
  const params = useSearchParams();
  const { addToast } = useToast();
  const router = useRouter();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    createUser(
      {
        input: { email, password, firstName, lastName },
        teamID: params.get('teamid') || undefined,
        roleID: params.get('roleid') || undefined,
      },
      {
        onSuccess() {
          console.log('Created user');
          addToast('Created user successfully!', 'success');
          setTimeout(() => {
            router.push('/login');
          }, 1000);
        },
        onError(e) {
          console.log('Error creating the user', e);
          addToast('Error creating user', 'danger');
        },
      },
    );
  }
  return (
    <SplitImageLayout pageName="Sign Up">
      <div>
        <Link href="/">
          <img
            className="h-10 w-auto"
            src="/icon-wide.png"
            alt="Kitchendry logo"
          />
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-tc-1">
            Create your account
          </h2>
        </Link>
      </div>

      <div className="mt-10">
        <div>
          <form
            onSubmit={onSubmit}
            className=" grid gap-y-5 gap-x-2 grid-cols-2"
          >
            <div className="col-span-1">
              <TextInput
                label="First Name"
                id="firstName"
                value={firstName}
                type="text"
                autoComplete="given-name"
                onChange={setFirstName}
              />
            </div>

            <div className="col-span-1">
              <TextInput
                label="Last Name"
                id="lastName"
                value={lastName}
                type="text"
                autoComplete="family-name"
                onChange={setLastName}
              />
            </div>

            <div className="col-span-2">
              <TextInput
                label="Email Address"
                id="email"
                value={email}
                type="email"
                autoComplete="email"
                onChange={setEmail}
              />
            </div>

            <div className="col-span-2">
              <NewPasswordInput
                autoComplete="new-password"
                id="password"
                label="Password"
                value={password}
                type="text"
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
              <Button disabled={isLoading} type="submit" className="w-full">
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
