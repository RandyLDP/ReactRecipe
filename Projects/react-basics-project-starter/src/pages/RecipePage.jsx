import {
  Box,
  Button,
  Badge,
  Grid,
  GridItem,
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";

const RecipePage = ({ selectedRecipe, onGoBack }) => {
  if (!selectedRecipe) {
    return <div>No recipe selected.</div>;
  }

  const {
    label,
    image,
    mealType,
    dishType,
    totalTime,
    healthLabels,
    cautions,
    ingredientLines,
    yield: totalYield,
  } = selectedRecipe.recipe;

  return (
    <>
      {" "}
      <Button colorScheme="blue" onClick={onGoBack}>
        Go Back
      </Button>
      <Grid
        templateColumns="repeat(5, 1fr)"
        templateRows="repeat(2, 1fr)"
        gap={1}
        p={4}
      >
        <GridItem colSpan={{ base: 5 }} p="30px">
          <Box>
            <Image
              objectFit="cover"
              src={image}
              alt={label}
              width="80vw"
              height="50vh"
            />
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 5, lg: 2 }} p="30px">
          <Heading as="h3">{label}</Heading>
          <Box>
            <Text as="b" color={"grey"}>
              {mealType} &bull; {dishType}
            </Text>
          </Box>
          <Box>
            <Text>
              Total Cooking Time: {totalTime}{" "}
              <Text as="b" color="grey.300">
                minutes
              </Text>
            </Text>
          </Box>

          <Box>{totalYield} servings</Box>

          <Box>
            <UnorderedList>
              <p>Ingredients:</p>
              {ingredientLines.map((ingredient, index) => (
                <ListItem key={index}>{ingredient}</ListItem>
              ))}
            </UnorderedList>
          </Box>
        </GridItem>

        <GridItem colSpan={{ base: 5, lg: 2 }} p="30px">
          <Text>
            {cautions.join(" ") ? (
              <Text>
                Cautions:
                <Badge variant="subtle" colorScheme="red">
                  {cautions}
                </Badge>
              </Text>
            ) : null}
          </Text>
          <Box>
            <Text>Health Labels:</Text>
            {healthLabels.length > 0 &&
              healthLabels.map((label) => (
                <Badge key={label} variant="subtle" colorScheme="green" mr={2}>
                  {label}
                </Badge>
              ))}
          </Box>
        </GridItem>
      </Grid>
    </>
  );
};

export default RecipePage;
