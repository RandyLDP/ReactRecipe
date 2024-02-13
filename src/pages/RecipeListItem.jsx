import {
  Center,
  Text,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Badge,
} from "@chakra-ui/react";

const RecipeListItem = ({ recipe, onClick }) => {
  const {
    label,
    image,
    healthLabels = [],
    cautions = [],
    mealType,
    dishType,
  } = recipe.recipe;

  // Filter out only vegetarian and vegan health labels
  const filteredHealthLabels = healthLabels.filter(
    (label) => label === "Vegetarian" || label === "Vegan"
  );

  return (
    <Card key={label} borderTop="6px solid" borderColor="blue.400">
      <CardHeader display="center">
        <Image
          src={image}
          alt={label}
          objectFit="cover"
          width="90%"
          height="150px"
        />
      </CardHeader>
      <Center>
        <Text as="i" color="grey.50">
          {mealType}
        </Text>
      </Center>
      <CardBody>
        <Box>
          <Text as="b">{label}</Text>
        </Box>

        <Box>
          {filteredHealthLabels.length > 0 && (
            <Badge variant="subtle" colorScheme="green">
              {filteredHealthLabels.join(", ")}
            </Badge>
          )}
        </Box>

        <Box>
          <Text>
            Dish type:
            <Badge variant="subtle" colorScheme="purple">
              {dishType}
            </Badge>
          </Text>
          <Text>
            {cautions.length > 0 && (
              <Text>
                Cautions:
                {cautions.map((caution, index) => (
                  <Badge key={index} variant="subtle" colorScheme="red" ml={1}>
                    {caution}
                  </Badge>
                ))}
              </Text>
            )}
          </Text>
        </Box>
      </CardBody>

      <Center>
        <CardFooter>
          <Button colorScheme="blue" onClick={onClick}>
            View Details
          </Button>
        </CardFooter>
      </Center>
    </Card>
  );
};

export default RecipeListItem;
