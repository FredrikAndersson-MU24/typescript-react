interface Fruits {
  name: string;
  color: string;
}

const List = () => {
  const fruit: Fruits<Array<string>> = [
    {
      name: "apple",
      color: "red",
    },
    {
      name: "pear",
      color: "green",
    },
  ];
  console.log(fruit);
  return (
    <>
      <ul>
        {fruit.map((fruit: string, color: number) => (
          <li key={index} value={color}>
            {fruit["name"]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
