"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Usernewheader from "./Usernewheader";
import { useAuthStore } from "@/store/auth.store";
import { getProfileApi, uploadProfileImageApi, updateProfileApi } from "@/features/profile/profile.service";
import { successfully, errorMsgApi } from "@/core/toast";
import { imageUrl } from "@/core/url";
import { Loader2 } from "lucide-react";


export const normalizeImagePath = (imagePath) => {
  if (!imagePath) return null;
  if (imagePath.startsWith("http")) return imagePath;
  
  // Normalize backslashes to forward slashes
  let normalizedPath = imagePath.replace(/\\/g, "/");
  
  // Remove leading slash if present
  normalizedPath = normalizedPath.replace(/^\//, "");
  
  // Remove trailing slash if present
  normalizedPath = normalizedPath.replace(/\/$/, "");
  
  // Ensure imageUrl doesn't have trailing slash
  const baseUrl = imageUrl.replace(/\/$/, "");
  
  return `${baseUrl}/${normalizedPath}`;
};

export default function Profile() {
  const { user, token, updateUser } = useAuthStore();
  const fileInputRef = useRef(null);

  // Form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  // Password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Profile image state
  const [profileImage, setProfileImage] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [savingProfile, setSavingProfile] = useState(false);
  const [savingPassword, setSavingPassword] = useState(false);

  // Helper function to normalize image path
  const normalizeImagePath = (imagePath) => {
    if (!imagePath) return null;
    if (imagePath.startsWith("http")) return imagePath;
    
    // Normalize backslashes to forward slashes
    let normalizedPath = imagePath.replace(/\\/g, "/");
    
    // Remove leading slash if present
    normalizedPath = normalizedPath.replace(/^\//, "");
    
    // Remove trailing slash if present
    normalizedPath = normalizedPath.replace(/\/$/, "");
    
    // Ensure imageUrl doesn't have trailing slash
    const baseUrl = imageUrl.replace(/\/$/, "");
    
    return `${baseUrl}/${normalizedPath}`;
  };

  // Fetch profile data on mount
  useEffect(() => {
    const fetchProfile = async () => {
      setLoadingProfile(true);
      try {
        const response = await getProfileApi();
        if (response.status && response.data) {
          const profileData = response.data.user || response.data;
          
          // Auto-populate form fields
          setFirstName(profileData.firstName || "");
          setLastName(profileData.lastName || "");
          setMobile(profileData.mobile || profileData.phoneNumber || "");
          setEmail(profileData.email || "");
          setGender(profileData.gender || "");
          setDateOfBirth(profileData.dateOfBirth || profileData.dob || "");
          
          // Set profile image
          if (profileData.profileImage || profileData.image || profileData.avatar) {
            const imagePath = profileData.profileImage || profileData.image || profileData.avatar;
            setProfileImage(normalizeImagePath(imagePath));
          }
        } else {
          // Fallback to user from store
          if (user) {
            setFirstName(user.firstName || "");
            setLastName(user.lastName || "");
            setMobile(user.mobile || user.phoneNumber || "");
            setEmail(user.email || "");
            setGender(user.gender || "");
            setDateOfBirth(user.dateOfBirth || user.dob || "");
            
            if (user.profileImage || user.image || user.avatar) {
              const imagePath = user.profileImage || user.image || user.avatar;
              setProfileImage(normalizeImagePath(imagePath));
            }
          }
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
        // Fallback to user from store
        if (user) {
          setFirstName(user.firstName || "");
          setLastName(user.lastName || "");
          setMobile(user.mobile || user.phoneNumber || "");
          setEmail(user.email || "");
          setGender(user.gender || "");
          setDateOfBirth(user.dateOfBirth || user.dob || "");
          
          if (user.profileImage || user.image || user.avatar) {
            const imagePath = user.profileImage || user.image || user.avatar;
            setProfileImage(normalizeImagePath(imagePath));
          }
        }
      } finally {
        setLoadingProfile(false);
      }
    };

    fetchProfile();
  }, [user]);

  // Handle image selection
  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        errorMsgApi("Please select a valid image file");
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        errorMsgApi("Image size should be less than 5MB");
        return;
      }

      setSelectedImage(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image upload
  const handleImageUpload = async () => {
    if (!selectedImage) return;

    setUploadingImage(true);
    try {
      const response = await uploadProfileImageApi(selectedImage);
      
      if (response.status && response.data) {
        const imagePath = response.data.profileImage || response.data.user?.profileImage || response.data.image || response.data.avatar;
        const normalizedPath = normalizeImagePath(imagePath);
        setProfileImage(normalizedPath);
  
        setImagePreview(null);
        setSelectedImage(null);
        
        // Update user in store (store the original path, not the normalized URL)
        updateUser({
          profileImage: imagePath,
          image: imagePath,
          avatar: imagePath,
        });
        
        successfully("Profile image uploaded successfully!");
      } else {
        errorMsgApi(response.error || "Failed to upload image");
      }
    } catch (error) {
      errorMsgApi("An error occurred while uploading image");
    } finally {
      setUploadingImage(false);
    }
  };

  // Handle profile save
  const handleSaveProfile = async () => {
    setSavingProfile(true);
    try {
      const profileData = {
        firstName,
        lastName,
        mobile,
        email,
        gender,
        dateOfBirth,
      };

      const response = await updateProfileApi(profileData);
      
      if (response.status && response.data) {
        const updatedUser = response.data.user || response.data;
        
        // Update user in store
        updateUser(updatedUser);
        
        successfully("Profile updated successfully!");
      } else {
        errorMsgApi(response.error || "Failed to update profile");
      }
    } catch (error) {
      errorMsgApi("An error occurred while updating profile");
    } finally {
      setSavingProfile(false);
    }
  };

  // Handle password update
  const handleUpdatePassword = async () => {
    if (newPassword !== confirmPassword) {
      errorMsgApi("New password and confirm password do not match");
      return;
    }

    if (newPassword.length < 8) {
      errorMsgApi("Password must be at least 8 characters");
      return;
    }

    setSavingPassword(true);
    try {
      const response = await updateProfileApi({
        currentPassword,
        newPassword,
      });

      if (response.status) {
        setCurrentPassword("");
        setNewPassword("");
        setConfirmPassword("");
        successfully("Password updated successfully!");
      } else {
        errorMsgApi(response.error || "Failed to update password");
      }
    } catch (error) {
      errorMsgApi("An error occurred while updating password");
    } finally {
      setSavingPassword(false);
    }
  };

  // Get user display name
  const getUserDisplayName = () => {
    if (firstName && lastName) return `${firstName} ${lastName}`;
    if (firstName) return firstName;
    if (lastName) return lastName;
    if (user?.firstName) return user.firstName;
    if (user?.name) return user.name;
    return "User";
  };

  // Get user email
  const getUserEmail = () => {
    return email || user?.email || "";
  };

  // Get initial letter for profile
  const getInitial = () => {
    const name = getUserDisplayName();
    return name.charAt(0).toUpperCase();
  };

  if (loadingProfile) {
    return (
      <>
        <Usernewheader noOffset />
        <div className="w-full min-h-screen bg-[#f5f7fb] flex items-center justify-center">
          <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
        </div>
      </>
    );
  }

  console.log("profileImage",profileImage);
  

  return (
    <>
      <Usernewheader noOffset />
      <div className="w-full min-h-screen bg-[#f5f7fb] px-4 lg:px-10 py-10 pt-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
          {/* ---------------------- LEFT PROFILE CARD ---------------------- */}
          <div
            className="
            w-full max-w-[320px] lg:w-[300px] shrink-0
            bg-white border border-gray-200
            rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.08)]
            p-8 flex flex-col items-center text-center
            min-h-[420px]
          "
          >
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4 border border-gray-200 relative">
              {imagePreview || profileImage ? (
                <Image
                  src={imagePreview || profileImage}
                  alt="Profile"
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                  unoptimized
                  onError={(e) => {
                    console.error("Image load error:", e);
                    setProfileImage(null);
                  }}
                />
              ) : (
                <div className="w-full h-full bg-blue-600 flex items-center justify-center">
                  <span className="text-white font-semibold text-5xl">
                    {getInitial()}
                  </span>
                </div>
              )}
            </div>

            <h2 className="text-xl font-semibold text-gray-900 capitalize">
              {getUserDisplayName()}
            </h2>
            <p className="text-gray-500 text-sm mb-5">{getUserEmail()}</p>

            <input
              type="file"
              ref={fileInputRef}
              accept="image/*"
              onChange={handleImageSelect}
              className="hidden"
            />

            <button
              onClick={() => fileInputRef.current?.click()}
              className="border border-gray-300 px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-gray-50 transition mb-2"
            >
              ✏ Edit Image
            </button>

            {selectedImage && (
              <button
                onClick={handleImageUpload}
                disabled={uploadingImage}
                className={`w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition ${
                  uploadingImage
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:bg-blue-700"
                }`}
              >
                {uploadingImage ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Uploading...</span>
                  </>
                ) : (
                  "Upload Image"
                )}
              </button>
            )}
          </div>

          {/* ---------------------- RIGHT SIDE ---------------------- */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Edit Details */}
            <div className="bg-white border border-gray-200 rounded-[28px] shadow-[0_15px_35px_rgba(15,23,42,0.08)] overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 bg-[#f9fafc] border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Edit Details</h3>
                <button
                  onClick={handleSaveProfile}
                  disabled={savingProfile}
                  className={`bg-[#0d68f9] text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-[#0b5ad8] transition flex items-center gap-2 ${
                    savingProfile ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {savingProfile ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 pb-8">
                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    First name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First name"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter last name"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Enter mobile number"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div>
                  <label className="text-sm font-semibold text-gray-800">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div className="w-full">
                  <label className="text-sm font-semibold text-gray-800">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="relative mt-2">
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                      className="w-full px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 appearance-none bg-white pr-10"
                    >
                      <option value="">Select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500 pointer-events-none">
                      ▾
                    </span>
                  </div>
                </div>

                <div className="w-full">
                  <label className="text-sm font-semibold text-gray-800">
                    Date Of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    placeholder="DD/MM/YYYY"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* Update Password */}
            <div className="bg-white border border-gray-200 rounded-[24px] shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Update Password</h3>
                <button
                  onClick={handleUpdatePassword}
                  disabled={savingPassword}
                  className={`bg-[#0d68f9] text-white px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-[#0b5ad8] transition flex items-center gap-2 ${
                    savingPassword ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {savingPassword ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    "Save"
                  )}
                </button>
              </div>

              <div className="flex flex-col gap-6 px-6 py-6">
                <div className="max-w-[480px]">
                  <label className="text-sm font-semibold text-gray-800">
                    Current Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Enter Current Password"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div className="max-w-[480px]">
                  <label className="text-sm font-semibold text-gray-800">
                    New Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Enter New Password"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div className="max-w-[480px]">
                  <label className="text-sm font-semibold text-gray-800">
                    Confirm New Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Enter Confirm New Password"
                    className="w-full mt-2 px-4 py-2.5 border border-[#3576ff] rounded-lg focus:ring-2 focus:ring-[#3d7cff40] outline-none text-sm text-gray-800 placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
