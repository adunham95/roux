import { ICreateRecipe } from '@/graphql/mutations/createRecipe';
import { useMutation } from '@tanstack/react-query';
import { getClient } from '../client';
import { gql } from 'graphql-request';

export const useUpdateRecipe = () => {
  return useMutation({ mutationFn: updateRecipe });
};

async function updateRecipe({
  id,
  recipe,
  elements,
}: {
  id: string;
  recipe: ICreateRecipe;
  elements?: RecipeHistory[];
}) {
  const client = getClient();

  const variables = { recipe, id, elements };

  const query = gql`
    mutation CreateRecipe(
      $recipe: CreateRecipeInput
      $id: String
      $elements: [UpdateRecipeElementsInput]
    ) {
      updateRecipe(recipe: $recipe, id: $id, elements: $elements) {
        id
      }
    }
  `;

  const response = await client.request(query, variables);

  return response;
}
