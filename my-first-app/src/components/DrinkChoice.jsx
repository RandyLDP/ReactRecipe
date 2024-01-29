export const DrinkChoice = ({ drink }) => {
  return (
    <>
      <p>{drink.name}</p>
      <img src={drink.imgUrl} width={100} height={100} alt={drink.alt} />
      <p>The drink will be available in a few minutes</p>
    </>
  );
};
