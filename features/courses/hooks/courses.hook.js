import { useGetAPI } from "@/common/hooks/useGetAPI";
import { getCourseServiceApi } from "../service/get-course.service";

export const useCourseHook = (page = 1, limit = 5) => {
  const { data, loading, error } = useGetAPI(getCourseServiceApi, {
    page,
    limit,
  });
  return { data, loading, error };
};
