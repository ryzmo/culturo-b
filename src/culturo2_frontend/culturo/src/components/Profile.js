import React, { useState } from "react";

const Profile = ({ userPrincipal }) => {
  const [profile, setProfile] = useState({
    username: "Default Username",
    email: "default@example.com",
    profilePic: null,
    linkedin: "",
    skills: "",
    achievements: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfile((prevProfile) => ({
        ...prevProfile,
        profilePic: URL.createObjectURL(file),
      }));
    }
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
    // Save logic here (e.g., API call)
    console.log("Profile updated:", profile);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Your Profile
      </h1>
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Profile Picture */}
        <div className="flex flex-col items-center mb-6 lg:mb-0">
          <div className="w-32 h-32 overflow-hidden rounded-full border-4 border-gray-300">
            <img
              src={profile.profilePic || "https://via.placeholder.com/150"}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          {isEditing && (
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePicChange}
              className="mt-2 text-sm text-gray-600"
            />
          )}
        </div>

        {/* User Details */}
        <div className="flex flex-col space-y-4 w-full">
          <div className="flex items-center space-x-2">
            <label className="font-medium text-gray-700">Username:</label>
            {isEditing ? (
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                className="border rounded-lg p-2 flex-grow"
                placeholder="Enter your username"
              />
            ) : (
              <span className="text-gray-600">{profile.username}</span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-medium text-gray-700">Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleInputChange}
                className="border rounded-lg p-2 flex-grow"
                placeholder="Enter your email"
              />
            ) : (
              <span className="text-gray-600">{profile.email}</span>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <label className="font-medium text-gray-700">LinkedIn:</label>
            {isEditing ? (
              <input
                type="url"
                name="linkedin"
                value={profile.linkedin}
                onChange={handleInputChange}
                className="border rounded-lg p-2 flex-grow"
                placeholder="Enter LinkedIn profile URL"
              />
            ) : (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                {profile.linkedin || "Not provided"}
              </a>
            )}
          </div>
          <div className="flex flex-col space-y-4">
            <label className="font-medium text-gray-700">Skills & Interests:</label>
            {isEditing ? (
              <textarea
                name="skills"
                value={profile.skills}
                onChange={handleInputChange}
                className="border rounded-lg p-2 w-full"
                placeholder="List your skills and interests"
              />
            ) : (
              <p className="text-gray-600">{profile.skills || "Not provided"}</p>
            )}
          </div>
          <div className="mt-4">
            <label className="font-medium text-gray-700">Achievements/Portfolio:</label>
            {isEditing ? (
              <textarea
                name="achievements"
                value={profile.achievements}
                onChange={handleInputChange}
                className="border rounded-lg p-2 w-full"
                placeholder="Describe your achievements or link your portfolio"
              />
            ) : (
              <p className="text-gray-600">{profile.achievements || "Not provided"}</p>
            )}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex justify-center space-x-4">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className={`py-2 px-4 rounded-lg text-white transition duration-200 ${
            isEditing
              ? "bg-red-500 hover:bg-red-600"
              : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {isEditing ? "Cancel" : "Edit Profile"}
        </button>
        {isEditing && (
          <button
            onClick={handleSaveChanges}
            className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            Save Changes
          </button>
        )}
      </div>
    </div>
  );
};

export default Profile;
