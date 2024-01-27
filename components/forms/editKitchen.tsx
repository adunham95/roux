import React, { useState } from 'react';
import TextInput from '../inputs/text-input';
import { ColorInput } from '../inputs/color-input';

const EditKitchen = () => {
  const [team, setTeam] = useState({
    name: '',
    primary: 'rgb(100, 157, 173)',
    accent: 'rgb(218, 109, 94)',
  });

  function handleTeamChange(v: string, id: string) {
    const newTeam = { ...team, [id]: v };
    setTeam(newTeam);
  }

  return (
    <fieldset className="grid gap-x-6 gap-y-8 grid-cols-6">
      <TextInput
        className="col-span-6"
        disabled
        label="Name"
        id="name"
        value={team.name}
        onChange={handleTeamChange}
      />
      <ColorInput
        label="Primary Brand Color"
        id="primary"
        className="col-span-6 md:col-span-3"
        value={team.primary}
        onChange={handleTeamChange}
      />
      <ColorInput
        label="Accent Brand Color"
        id="accent"
        className="col-span-6 md:col-span-3"
        value={team.accent}
        onChange={handleTeamChange}
      />
    </fieldset>
  );
};

export default EditKitchen;
