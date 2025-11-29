import { create } from "zustand";

export const useAuthStore = create((set, get) => ({
  // State
  token: null,
  user: null,
  isAuthenticated: false,

  // Actions
  setAuth: (token, user) => {
    set({
      token,
      user,
      isAuthenticated: true,
    });
    // Store in localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
  },

  clearAuth: () => {
    set({
      token: null,
      user: null,
      isAuthenticated: false,
    });
    // Clear localStorage
    if (typeof window !== "undefined") {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
    }
  },

  // Initialize from localStorage on mount
  initializeAuth: () => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      const userStr = localStorage.getItem("user");
      
      if (token && userStr) {
        try {
          const user = JSON.parse(userStr);
          set({
            token,
            user,
            isAuthenticated: true,
          });
        } catch (error) {
          console.error("Error parsing user data:", error);
          // Clear invalid data
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      }
    }
  },

  // Get token (helper function for API interceptor)
  getToken: () => {
    const state = get();
    if (state.token) {
      return state.token;
    }
    // Fallback to localStorage
    if (typeof window !== "undefined") {
      return localStorage.getItem("token");
    }
    return null;
  },

  // Update user data (for profile updates)
  updateUser: (updatedUser) => {
    const state = get();
    const newUser = { ...state.user, ...updatedUser };
    set({
      user: newUser,
    });
    // Update localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem("user", JSON.stringify(newUser));
    }
  },
}));

