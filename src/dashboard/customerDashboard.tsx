import React, { useEffect, useState } from "react";
import axios from "axios";

interface IUser {
  _id: string;
  fullName: string;
  email: string;
  userRole: string;
}

function CustomerDashboard() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("accessToken"); // if login saved token
        const response = await axios.get("#", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUsers(response.data);
      } catch (err) {
        console.error("❌ Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="p-4">Loading users...</p>;

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">User Dashboard</h2>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="text-black bg-yellow-400">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="text-center">
              <td className="p-2 border">{user.fullName}</td>
              <td className="p-2 border">{user.email}</td>
              <td className="p-2 border">{user.userRole}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CustomerDashboard;
