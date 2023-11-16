import { useForgotPassword } from '@/api/mutation/forgotPassword';
import SplitImageLayout from '@/components/Layouts/page/SplitImageLayout';
import { Button } from '@/components/buttons/button';
import TextInput from '@/components/inputs/text-input';
import { useToast } from '@/stores/toast';
import Link from 'next/link';
import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const { mutateAsync: mutateForgotPassword, isPaused: isLoading } =
    useForgotPassword();
  const { addToast } = useToast();

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutateForgotPassword(
      { email: email },
      {
        onSuccess() {
          addToast(
            'Password Rest',
            'success',
            'Check your email for a reset link',
          );
        },
      },
    );
  }

  return (
    <SplitImageLayout pageName="Forgot Password">
      <div>
        <Link href="/">
          <img
            className="h-10 w-auto"
            src="/icon-wide.png"
            alt="Kitchendry logo"
          />
          <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-surface-1">
            Forgot Password
          </h2>
        </Link>
      </div>

      <div className="mt-10">
        <div>
          <form
            onSubmit={onSubmit}
            className=" grid gap-y-5 gap-x-2 grid-cols-2"
          >
            <div className="col-span-2">
              <TextInput
                label="Email"
                id="email"
                value={email}
                type="text"
                autoComplete="email"
                onChange={setEmail}
              />
            </div>

            <div className="col-span-2">
              <Button disabled={isLoading} type="submit" className="w-full">
                Reset Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </SplitImageLayout>
  );
};

export default ForgotPassword;
