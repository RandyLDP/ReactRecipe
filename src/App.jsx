import { ChakraProvider } from "@chakra-ui/react";
import RecipeListPage from "./pages/RecipeListPage";
import RecipePage from "./pages/RecipePage";
import { data } from "./utils/data";
import { useState } from "react";

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleGoBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <ChakraProvider>
      {selectedRecipe ? (
        <RecipePage selectedRecipe={selectedRecipe} onGoBack={handleGoBack} />
      ) : (
        <RecipeListPage recipes={data.hits} onRecipeClick={handleRecipeClick} />
      )}
    </ChakraProvider>
  );
};
