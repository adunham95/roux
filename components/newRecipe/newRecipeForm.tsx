import React from 'react';
import FieldSet from '../formElements/fieldSet';
import TextInput from '../inputs/text-input';
import TextArea from '../inputs/text-area';
import EmptyBlock from '../emptyBlock/emptyBlock';
import { Button } from '../buttons/button';
import { NewInstructionItem } from './newInstructionItem';
import { useNewRecipe } from '@/stores/recipeStore';

interface IProps {}

const NewRecipeForm = (props: IProps) => {
  const {} = props;
  const {
    name,
    setName,
    description,
    setDescription,
    instructions,
    servings,
    setServings,
    addInstruction,
    updateInstructionItem,
    updateIngredientItem,
    addIngredientItem,
    currentHistory,
    ingredients,
  } = useNewRecipe();

  console.log({ currentHistory });

  return (
    <form>
      <div className="space-y-12">
        <FieldSet title="Details">
          <TextInput
            id="recipe-name"
            label="Recipe Name"
            className="col-span-full"
            value={name}
            onChange={setName}
          />

          <TextArea
            id="recipe-about"
            label="About Recipe"
            className="col-span-full"
            rows={3}
            value={description}
            onChange={setDescription}
          />

          <TextInput
            id="recipe-servings"
            label="Servings"
            type="number"
            className="col-span-full"
            value={servings}
            onChange={setServings}
            min={1}
          />
        </FieldSet>

        <FieldSet title="Instructions" subTitle="Add your list of instructions">
          {instructions.length === 0 ? (
            <EmptyBlock
              title="No Instructions"
              subTitle="Get started by adding some instructions,"
              buttonText="Add Instruction"
              buttonClick={addInstruction}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-12 w-12 text-tc-2 fill-tc-2"
                viewBox="0 0 512 512"
              >
                <path d="M416 32a95.17 95.17 0 0 0-57.73 19.74C334.93 20.5 298 0 256 0s-78.93 20.5-102.27 51.74A95.56 95.56 0 0 0 0 128c0 41.74 64 224 64 224v128a32 32 0 0 0 32 32h320a32 32 0 0 0 32-32V352s64-182.26 64-224a96 96 0 0 0-96-96zm0 448H96v-96h320zm0-128h-44.09L384 201.25a8 8 0 0 0-7.33-8.61l-16-1.28h-.65a8 8 0 0 0-8 7.37L339.8 352h-68.46V200a8 8 0 0 0-8-8h-16a8 8 0 0 0-8 8v152H172.2l-12.27-153.3a8 8 0 0 0-8-7.37h-.65l-16 1.28a8 8 0 0 0-7.33 8.61L140.09 352H96S32 150.7 32 128a64.07 64.07 0 0 1 64-64 63.22 63.22 0 0 1 38.39 13.24l25.68 19.48 19.3-25.83C197.83 46.18 225.77 32 256 32s58.17 14.18 76.63 38.89l19.3 25.83 25.68-19.48A63.22 63.22 0 0 1 416 64a64.07 64.07 0 0 1 64 64c0 22.7-64 224-64 224z" />
              </svg>
            </EmptyBlock>
          ) : (
            <>
              {instructions.map((inst) => (
                <NewInstructionItem
                  key={inst.refId}
                  instruction={inst}
                  ingredients={ingredients.filter(
                    (ing) => ing.instructionRefId === inst.refId,
                  )}
                  onChange={(id, value, key) =>
                    updateInstructionItem(id, key, value, 'update')
                  }
                  onCopy={(id) => updateInstructionItem(id, '', '', 'copy')}
                  onDelete={(id) => updateInstructionItem(id, '', '', 'delete')}
                  addIngredientItem={() => addIngredientItem(inst.refId || '')}
                  onIngredientDelete={(id) =>
                    updateIngredientItem(id, '', '', 'delete')
                  }
                  onIngredientChange={(id, value, key) =>
                    updateIngredientItem(id, key, value, 'update')
                  }
                />
              ))}
              <Button
                onClick={addInstruction}
                size="lg"
                className="col-span-full"
              >
                Add Another Instruction
              </Button>
            </>
          )}
        </FieldSet>
      </div>
    </form>
  );
};

export default NewRecipeForm;
