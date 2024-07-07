import { Loader } from "lucide-react";
import React, { useState } from "react";

interface UserSettings {
  username: string;
  email: string;
  bio: string;
}

const mockApiCall = (
  data: UserSettings
): Promise<{ success: boolean; message: string }> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (data.username && data.email && data.bio) {
        resolve({ success: true, message: "Settings updated successfully!" });
      } else {
        resolve({ success: false, message: "All fields are required." });
      }
    }, 1000);
  });
};

const UserSettingsForm: React.FC = () => {
  const [formData, setFormData] = useState<UserSettings>({
    username: "",
    email: "",
    bio: "",
  });
  const [loading, setsetLoading] = useState<boolean>(false);

  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setsetLoading(true);
    const response = await mockApiCall(formData);
    if (response.success) {
      setSuccessMessage(response.message);
    } else {
      setError(response.message);
    }
    setsetLoading(false);
  };

  return (
    <div>
      <div className="pb-4 border-b dark:border-slate-600 ">
        <h2 className="text-2xl font-bold">User Settings</h2>
        <p className="text-sm text-gray-500">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>
      <div className="mt-4 max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium dark:text-gray-400"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 block w-full border rounded-md dark:bg-slate-700 dark:border-slate-500"
              value={formData.username}
              onChange={handleInputChange}
              required
              placeholder="username"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium dark:text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 block w-full border rounded-md dark:bg-slate-700 dark:border-slate-500"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="john@doe.com"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bio"
              className="block text-sm font-medium dark:text-gray-400"
            >
              Bio
            </label>
            <input
              type="text"
              id="bio"
              name="bio"
              className="mt-1 p-2 block w-full border rounded-md dark:bg-slate-700 dark:border-slate-500"
              value={formData.bio}
              onChange={handleInputChange}
              placeholder="add a bio"
            />
          </div>
          <button
            type="submit"
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 flex items-center gap-2 disabled:opacity-50"
            disabled={loading}
          >
            {loading && <Loader className="animate-spin w-4 h-4" />}
            Update Settings
          </button>
          <div className="mt-4">
            {error && <div className="mb-4 text-red-500">{error}</div>}
            {successMessage && (
              <div className="mb-4 text-green-500">{successMessage}</div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettingsForm;
