import { useState } from "react";
import RecipeListItem from "./RecipeListItem";
import { Grid, SimpleGrid, Input } from "@chakra-ui/react";

const RecipeListPage = ({ recipes, onRecipeClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const lowerCaseName = (recipe?.recipe?.label || "").toLowerCase();
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    const nameMatch = lowerCaseName.includes(lowerCaseSearchTerm);

    const healthLabelsMatch = (recipe?.recipe?.healthLabels || []).some(
      (label) => label.toLowerCase().includes(lowerCaseSearchTerm)
    );

    return nameMatch || healthLabelsMatch;
  });

  return (
    <Grid>
      <Input
        color="teal"
        placeholder="Sear Recipe"
        _placeholder={{ color: "inherit" }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <SimpleGrid p="10px" minChildWidth="250px" spacing={10}>
        {filteredRecipes.map((recipe) => (
          <RecipeListItem
            key={recipe.url}
            recipe={recipe}
            onClick={() => onRecipeClick(recipe)}
          />
        ))}
      </SimpleGrid>
    </Grid>
  );
};

export default RecipeListPage;
