import { API } from "@/core/url";

export const getCourseServiceApi = ({ category = "", page = 1, limit = 5 }) => {
  if (!category) {
    // category empty → return empty promise
    return Promise.resolve({
      data: {
        status: true,
        data: [],
        totalCourses: 0,
        totalPages: 0,
      },
    });
  }

  return API.get(`/course/category/${category}`, {
    params: { page, limit },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getSingleCourse = ({ id }) => {
  console.log("ididididid", id);

  return API.get(`/course/${id}`, {
    headers: { "Content-Type": "application/json" },
  });
};
