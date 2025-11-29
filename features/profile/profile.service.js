import { API, API_ENDPOINTS } from "@/core/url";


// Fetch user profile
export const getProfileApi = async () => {
  try {
    const res = await API.get(API_ENDPOINTS.AUTH.PROFILE);
    console.log("Profile data:", res.data);
    return {
      status: true,
      data: res?.data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      error: error?.response?.data?.message || "Failed to fetch profile",
    };
  }
};

// Upload profile image
export const uploadProfileImageApi = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append("profileImage", imageFile);

    const res = await API.post(API_ENDPOINTS.AUTH.UPLOAD_PROFILE_IMAGE, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("Upload response:", res.data);
    return {
      status: true,
      data: res?.data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      error: error?.response?.data?.message || "Failed to upload image",
    };
  }
};

// Update profile
export const updateProfileApi = async (profileData) => {
  try {
    const res = await API.put(API_ENDPOINTS.AUTH.PROFILE, profileData);
    console.log("Update response:", res.data);
    return {
      status: true,
      data: res?.data,
    };
  } catch (error) {
    console.log("error", error);
    return {
      status: false,
      error: error?.response?.data?.message || "Failed to update profile",
    };
  }
};

