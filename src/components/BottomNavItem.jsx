function BottomNavItem({ icon: Icon, label, isActive, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col items-center justify-center p-2 transition-colors ${
        isActive ? 'text-[#8EB69B]' : 'text-neutral-700'
      }`}
    >
      <Icon size={20} />
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
}

export default BottomNavItem;
