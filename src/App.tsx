import { useEffect, useState } from "react";
import type { User, UserArray } from "./types/user";
import UserCard from "./Components/UserCard";
import UserProfile from "./Components/UserProfile";

const url = "https://jsonplaceholder.typicode.com/users";

const App = () => {
  const [users, setUsers] = useState<UserArray>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(url, {
        method: "GET",
      });

      const data = await res.json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <>
      {/* {console.log(users)}   */}
      <div className="flex justify-center mt-5">
        <input
          type="text"
          className="border px-3 py-2 rounded-l-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e?.target?.value)}
        />
        <button
          className="font-bold bg-gray-200 hover:bg-gray-300 px-3 rounded-r-md cursor-pointer"
          onClick={() => setSearchQuery("")}
        >
          X
        </button>
      </div>

      <div className="m-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 auto-rows-[300px]">
        {users
          .filter((user) =>
            user.name.toLowerCase().includes(searchQuery?.toLowerCase())
          )
          .map((user) => {
            return (
              <UserCard
                key={user.id}
                user={user}
                onViewDetails={() => setSelectedUser(user)}
              />
            );
          })}
      </div>

      {selectedUser && (
        <UserProfile
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
};

export default App;
