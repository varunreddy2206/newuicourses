const { API } = require("@/core/url");

export const loginApi = async ({ password, email }) => {
  try {
    const res = await API.post("/auth/login", { password, email });
    console.log("res", res.data);
    return {
      status: true,
      data: res?.data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      error: error?.response?.data?.message,
    };
  }
};
