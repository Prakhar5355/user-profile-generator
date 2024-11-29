import React, { useState, useEffect } from "react";

type User = {
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("https://randomuser.me/api/");
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      const data = await response.json();
      setUser(data.results[0]);
    } catch (error) {
      setError("Error fetching user data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
          fetchUser();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-12 w-[21rem] sm:w-full sm:max-w-md mx-auto text-center flex flex-col items-center">
      {loading ? (
        <p className="text-gray-500 text-lg mb-2">Loading...</p>
      ) : error ? (
        <div className="text-red-500 mb-4 text-lg">{error}</div>
      ) : (
        <div className="flex flex-col items-center">
          <img
            src={user?.picture.large}
            alt="User"
            className="w-36 h-36 rounded-full mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">{`${user?.name.first} ${user?.name.last}`}</h2>
          <p className="text-gray-600 mb-4 text-sm sm:text-base">{user?.email}</p>
        </div>
      )}
      <button
        onClick={fetchUser}
        className="bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition duration-200 text-sm sm:text-base"
      >
        Fetch New User
      </button>
    </div>
  );
};

export default UserProfile;
