import { API } from "@/core/url";

export const getCourseServiceApi = ({ page = 1, limit = 5 } = {}) => {
  return API.get(`/course`, {
    params: { page, limit },
    headers: {
      "Content-Type": "application/json",
    },
  });
};
