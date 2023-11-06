const APIurl =
  process.env.NODE_ENV === "development"
    ? process.env.LOCAL_API_URL
    : process.env.PROD_API_URL;

export const getSingleCourse = async (id) => {
  const response = await fetch(`${APIurl}/courses/?id=${id}`);
  return response.json();
};

export const getAllCourses = async () => {
  const response = await fetch(`${APIurl}/courses/`);
  return response.json();
};
