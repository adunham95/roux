import { TwoColumnCard } from '@/components/Layouts/components/twoColumnCard';
import { AdminLayout } from '@/components/Layouts/page/AdminLayout';
import { Button } from '@/components/buttons/button';
import TextInput from '@/components/inputs/text-input';
import React, { useState } from 'react';

const Content = () => {
  return (
    <AdminLayout pageName="Content">
      <TwoColumnCard title="Hero Card">
        <EditHeroCard />
      </TwoColumnCard>
    </AdminLayout>
  );
};

const EditHeroCard = () => {
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [ctaLink, setCTALink] = useState('');
  const [ctaText, setCTAText] = useState('');
  return (
    <>
      {/* Add Image upload component */}
      <TextInput
        id="title"
        className="col-span-6"
        label="Title"
        value={title}
        onChange={setTitle}
      />
      <TextInput
        id="subtitle"
        className="col-span-6"
        label="SubTitle"
        value={subTitle}
        onChange={setSubTitle}
      />
      <TextInput
        id="ctaLink"
        className="col-span-6"
        label="CTA Link"
        value={ctaLink}
        onChange={setCTALink}
      />
      <TextInput
        id="ctaText"
        className="col-span-6"
        label="CTA Text"
        value={ctaText}
        onChange={setCTAText}
      />
      <div className="col-span-6 w-full flex justify-end">
        <Button className="w-full md:w-auto">Save</Button>
      </div>
    </>
  );
};

export default Content;
