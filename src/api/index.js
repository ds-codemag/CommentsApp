export const GET_COMMENTS = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=20');
  const data = await request.json();
  return data;
};
