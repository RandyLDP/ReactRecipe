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
    dietLabels = [],
    cautions = [],
    mealType,
    dishType,
  } = recipe.recipe;

  return (
    <Card key={recipe.label} borderTop="6px solid" borderColor="blue.400">
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
          {dietLabels.length > 0 && (
            <Badge variant="subtle" colorScheme="green">
              {dietLabels.join(" ")}
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
            {cautions.join(" ") ? (
              <Text>
                Cautions:
                <Badge variant="subtle" colorScheme="red">
                  {cautions}
                </Badge>{" "}
              </Text>
            ) : null}
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
