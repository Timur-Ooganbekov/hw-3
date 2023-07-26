export const fetchPosts = async () => {
  try {
    const data = await axios.get("https://dummyjson.com/posts");
    return data;
  } catch (error) {
    console.log(error);
  }
};
