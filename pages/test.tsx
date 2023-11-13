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
        Add Toast
      </Button>
    </div>
  );
};

export default Test;
