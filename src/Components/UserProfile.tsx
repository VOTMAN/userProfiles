import { useEffect } from "react";
import type { User } from "../types/user";

type Props = {
  user: User;
  onClose: () => void;
};

const UserProfile = ({ user, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow="hidden"
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key == "Escape") {
          onClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
        document.body.style.overflow="auto"
        window.removeEventListener("keydown", handleKeyDown)
    }
  },[onClose])

  return (
<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 transition-all">
    <div className="bg-white p-8 rounded-xl shadow-2xl w-lg max-w-[90%]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{user.name}</h2>
        <p className="mb-1 text-gray-700"><strong>Email:</strong> {user.email}</p>
        <p className="mb-1 text-gray-700"><strong>Phone:</strong> {user.phone}</p>
        <p className="mb-3 text-gray-700"><strong>Website:</strong> {user.website}</p>
        
        <h3 className="text-lg font-semibold mt-4 mb-1 text-gray-800">Company</h3>
        <p className="text-gray-700">{user.company.name}</p>
        <p className="italic text-gray-600">{user.company.catchPhrase}</p>
        
        <h3 className="text-lg font-semibold mt-4 mb-1 text-gray-800">Address</h3>
        <p className="text-gray-700">{user.address.street}, {user.address.city}</p>
        <p className="text-gray-700">{user.address.zipcode}</p>

        <button
        className="mt-6 w-full bg-red-500 px-4 py-2 text-white rounded-lg hover:bg-red-600 transition"
        onClick={onClose}
        >
        Close
        </button>
    </div>
</div>
  );
};

export default UserProfile;
