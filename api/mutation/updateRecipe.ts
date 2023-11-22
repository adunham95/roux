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
}: {
  id: string;
  recipe: ICreateRecipe;
}) {
  const client = getClient();

  const variables = { recipe, id };

  const query = gql`
    mutation CreateRecipe($recipe: CreateRecipeInput, $id: String) {
      updateRecipe(recipe: $recipe, id: $id) {
        id
      }
    }
  `;

  const response = await client.request(query, variables);

  return response;
}
