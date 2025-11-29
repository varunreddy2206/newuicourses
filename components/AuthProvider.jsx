"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const pathname = usePathname();
  const { token, user, isAuthenticated, initializeAuth } = useAuthStore();

  // Public routes that don't require authentication
  const publicRoutes = [
    "/",
    "/login",
    "/Registrationform",
    "/forgotpassword",
    "/courseslist",
    "/course",
  ];

  // Protected routes that require authentication
  const protectedRoutes = [
    "/userdashboard",
    "/lms",
    "/adminpanel",
    "/profile",
    "/payment",
  ];

  const isPublicRoute = publicRoutes.some((route) => {
    if (route === "/course") {
      return pathname?.startsWith("/course");
    }
    return pathname === route || pathname?.startsWith(route);
  });

  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname?.startsWith(route)
  );

  useEffect(() => {
    // Initialize auth from localStorage on mount
    initializeAuth();
  }, [initializeAuth]);

  useEffect(() => {
    // Check authentication status
    const checkAuth = () => {
      // If user is on a protected route and not authenticated
      if (isProtectedRoute && !isAuthenticated && !token) {
        // Check localStorage as fallback
        const localToken = localStorage.getItem("token");
        const localUser = localStorage.getItem("user");

        if (!localToken || !localUser) {
          router.push("/login");
        }
      }

      // If user is authenticated and tries to access login/register, redirect to dashboard
      if ((pathname === "/login" || pathname === "/Registrationform") && isAuthenticated && token) {
        router.push("/");
      }
    };

    // Small delay to ensure localStorage is checked
    const timer = setTimeout(checkAuth, 100);

    return () => clearTimeout(timer);
  }, [pathname, isAuthenticated, token, isProtectedRoute, router]);

  return <>{children}</>;
}

