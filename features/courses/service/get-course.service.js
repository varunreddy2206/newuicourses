import { API } from "@/core/url";

export const getCourseServiceApi = ({ category = "", page = 1, limit = 20 }) => {
  // If category is "All", fetch from /course/all endpoint (latest courses)
  // Backend defaults to createdAt: -1 (newest first) when no sortBy is provided
  if (category === "All" || !category) {
    return API.get(`/course/all`, {
      params: { 
        page, 
        limit
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // For specific category, use category endpoint
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

// Get popular courses (sorted by enrolledUsers count)
export const getPopularCoursesApi = ({ limit = 4 }) => {
  return API.get(`/course/popular`, {
    params: { limit },
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Get enrolled courses for authenticated user
export const getMyEnrolledCoursesApi = () => {
  return API.get(`/course/my-courses`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

// Enroll in a course
export const enrollCourseApi = async (courseId) => {
  try {
    const res = await API.post(`/course/${courseId}/enroll`, {}, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return {
      status: true,
      data: res?.data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      error: error?.response?.data?.message || "Failed to enroll in course",
    };
  }
};
