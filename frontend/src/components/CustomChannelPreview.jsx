import { HashIcon, Trash2 } from "lucide-react";

const CustomChannelPreview = ({ channel, setActiveChannel, activeChannel, onDeleteChannel }) => {
  const isActive = activeChannel && activeChannel.id === channel.id;
  const isDM = channel.data.member_count === 2 && channel.data.id.includes("user_");

  if (isDM) return null;

  const unreadCount = channel.countUnread();

  const handleDelete = async (e) => {
    e.stopPropagation(); // prevent opening the channel
    if (onDeleteChannel) {
      await onDeleteChannel(channel); // delegate deletion to HomePage
    }
  };

  return (
    <button
      onClick={() => setActiveChannel(channel)}
      className={`str-chat__channel-preview-messenger transition-colors flex items-center flex-nowrap w-full text-left px-4 py-2 rounded-lg mb-1 font-medium hover:bg-blue-50/80 min-h-9 ${
        isActive
          ? "!bg-black/20 !hover:bg-black/20 border-l-8 border-purple-500 shadow-lg text-blue-900"
          : ""
      }`}
    >
      <HashIcon className="w-4 h-4 text-[#9b9b9b] mr-2 shrink-0" />

      <span className="str-chat__channel-preview-messenger-name flex-1 truncate">
        {channel.data.id}
      </span>

      {unreadCount > 0 && (
        <span className="flex items-center justify-center ml-2 size-4 text-xs rounded-full bg-red-500 text-white shrink-0">
          {unreadCount}
        </span>
      )}

      {/* Delete Icon */}
      <Trash2
        onClick={handleDelete}
        className="w-4 h-4 ml-3 text-gray-500 hover:text-red-600 transition-colors cursor-pointer shrink-0"
      />
    </button>
  );
};

export default CustomChannelPreview;
