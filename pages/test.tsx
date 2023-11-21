import { AlertPanel } from '@/components/alertPanel/alertPanel';
import { Button } from '@/components/buttons/button';
import { useToast } from '@/stores/toast';
import React from 'react';

const Test = () => {
  const { addToast } = useToast();
  return (
    <>
      <div>
        <Button
          onClick={() => {
            addToast('title', 'success');
          }}
        >
          Toast Success
        </Button>
        <Button
          onClick={() => {
            addToast('title', 'danger');
          }}
        >
          Toast Error
        </Button>
        <Button
          onClick={() => {
            addToast('title', 'warning');
          }}
        >
          Toast Warning
        </Button>
        <Button
          onClick={() => {
            addToast('title', 'info');
          }}
        >
          Toast Info
        </Button>
      </div>
      <div>
        <AlertPanel title="Title" style="info" />
        <AlertPanel title="Title" style="danger" />
        <AlertPanel title="Title" style="warning" />
        <AlertPanel title="Title" style="success" />
      </div>
    </>
  );
};

export default Test;
