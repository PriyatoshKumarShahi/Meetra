import { XIcon } from "lucide-react";

function MembersModal({ members, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg mx-4">
        {/* HEADER */}
       <div className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 shadow-sm rounded-t-lg">
  <h2 className="text-xl font-bold text-gray-800 tracking-tight">
    Channel Members
  </h2>
  <button
    onClick={onClose}
    className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition"
  >
    <XIcon className="w-5 h-5" />
  </button>
</div>


        {/* MEMBERS LIST */}
       <div className="px-6 py-4 max-h-96 overflow-y-auto custom-scrollbar">
  {members.map((member) => (
    <div
      key={member.user.id}
      className="flex items-center gap-4 py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
    >
      {/* Avatar */}
      {member.user?.image ? (
        <img
          src={member.user.image}
          alt={member.user.name}
          className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-semibold shadow-sm">
          {(member.user.name || member.user.id).charAt(0).toUpperCase()}
        </div>
      )}

      {/* User Name */}
      <div className="text-sm font-medium text-gray-800">
        {member.user.name || member.user.id}
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}

export default MembersModal;