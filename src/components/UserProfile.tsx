import React, { useState, useEffect } from "react";

type User = {
  name: { first: string; last: string };
  email: string;
  picture: { large: string };
};

const UserProfile: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const fetchUser = async () => {
    try {
      const response = await fetch("https://randomuser.me/api/");
      console.log(response,"response")
      const data = await response.json();
      console.log(data,"data")
      setUser(data.results[0]);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div className="bg-white shadow-md rounded-lg p-28 text-center">
      {user ? (
        <div>
          <img
            src={user.picture.large}
            alt="User"
            className="w-36 h-36 rounded-full mx-auto mb-4"
          />
          <h2 className="text-xl font-semibold text-gray-800">{`${user.name.first} ${user.name.last}`}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
      ) : (
        <p className="text-gray-500">Loading...</p>
      )}
      <button
        onClick={fetchUser}
        className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
      >
        Fetch New User
      </button>
    </div>
  );
};

export default UserProfile;
