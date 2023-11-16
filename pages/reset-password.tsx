import { useResetPassword } from '@/api/mutation/resetPassword';
import SplitImageLayout from '@/components/Layouts/page/SplitImageLayout';
import { Button } from '@/components/buttons/button';
import NewPasswordInput from '@/components/inputs/newPassword-input';
import { useToast } from '@/stores/toast';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const searchParams = useSearchParams();
  const { mutateAsync: mutateResetPassword, isPending: isLoading } =
    useResetPassword();
  const { addToast } = useToast();

  const resetCode = searchParams.get('code');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!resetCode) {
      addToast('No Reset Code', 'warning');
      return '';
    }
    mutateResetPassword(
      { resetCode, newPassword },
      {
        onSuccess() {
          addToast('Password rest');
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
              <NewPasswordInput
                label="New Password"
                id="newPassword"
                value={newPassword}
                type="text"
                autoComplete="new-password"
                onChange={setNewPassword}
                numbersRequired
                lowercaseRequired
                uppercaseRequired
                length={5}
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

export default ResetPassword;
