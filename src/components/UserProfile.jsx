import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlice";

const UserProfile = ({ user }) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector((state) => state.user);

  const selectedUserHandler = (user) => {
    
    dispatch(setSelectedUser(user));
  };

  return (
    <div
      onClick={() => selectedUserHandler(user)}
      className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition duration-300 ease-in-out  ${
        selectedUser?._id === user?._id ? "bg-red-400" : "bg-gray-700"
      }`}
    >
      <img
        src={user?.profilePhoto || `https://ui-avatars.com/api/?name=${user?.fullName}`}
        alt={user?.fullName}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div className="text-white">{user?.fullName || "No Name"}</div>
    </div>
  );
};

export default UserProfile;
