import React, { useEffect, useState } from "react";
import createAxiosClient from "../hooks/axiosClient";

interface User {
  _id: string;
  fullName: string;
  email: string;
  userRole: string;
  createdAt?: string;
}

const CustomersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const apiClient = createAxiosClient();

  useEffect(() => {
    apiClient
      .get("/users")
      .then((res) => {
        setUsers(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="mb-4 text-2xl font-bold"> Customers</h1>

      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead className="text-white bg-yellow-500">
              <tr>
                <th className="px-4 py-2 text-left">#</th>
                <th className="px-4 py-2 text-left">Full Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Role</th>
                <th className="px-4 py-2 text-left">Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr
                  key={user._id}
                  className="transition border-b hover:bg-gray-100"
                >
                  <td className="px-4 py-2">{i + 1}</td>
                  <td className="px-4 py-2">{user.fullName}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2 capitalize">{user.userRole}</td>
                  <td className="px-4 py-2">
                    {user.createdAt
                      ? new Date(user.createdAt).toLocaleDateString()
                      : "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CustomersPage;
