import { Button } from '@/components/buttons/button';
import { useToast } from '@/stores/toast';
import React from 'react';

const Test = () => {
  const { addToast } = useToast();
  return (
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
  );
};

export default Test;
