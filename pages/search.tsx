import { DefaultLayout } from '@/components/Layouts/page/DefaultLayout';
import TextInput from '@/components/inputs/text-input';
import React, { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');
  return (
    <DefaultLayout pageName="Search">
      <div>
        <TextInput
          id="search"
          placeholder="Search"
          value={search}
          onChange={setSearch}
        />
      </div>
      <div>
        <div></div>
      </div>
    </DefaultLayout>
  );
};

export default Search;
