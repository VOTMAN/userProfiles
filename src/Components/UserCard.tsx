import type { User } from "../types/user";

type Props = {
  user: User;
  onViewDetails: () => void
};

const UserCard = ({ user, onViewDetails }: Props) => {
  return (
    <div className="border p-10 w-75 h-full mx-auto flex flex-col items-center justify-between bg-white rounded-xl shadow hover:shadow-lg transition-all">
      <p className="text-3xl font-bold text-center">{user.name}</p>
      <p className="italic">{user.email}</p>
      <p className="underline text-blue-700">{user.company.name}</p>
      <button className="bg-amber-200 p-3 rounded hover:bg-amber-300 transition-all cursor-pointer hover:shadow" onClick={onViewDetails}>View Details</button>
    </div>
  );
};

export default UserCard;
