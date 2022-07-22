export const getUsers = async <T>(): Promise<T> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
};

export const getJoke = async () => {
  const jokeData = await fetch(
    "https://v2.jokeapi.dev/joke/Programming?type=single"
  );
  return await jokeData.json();
};
