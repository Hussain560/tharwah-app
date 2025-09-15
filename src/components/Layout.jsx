import BottomNav from './BottomNav';


// iPhone 14 Pro Max size: 430 x 932 px
function Layout({ children, activeTab, setActiveTab }) {
  return (
    <div
      className="bg-black rounded-3xl shadow-2xl flex flex-col w-full max-w-full md:w-[430px] md:max-w-[430px] h-[92dvh] md:h-[932px] mx-auto border-8 border-[#222] overflow-hidden my-2 md:my-0"
      style={{ minHeight: 400 }}
    >
      <div className="flex-1 flex flex-col bg-white rounded-2xl overflow-y-auto">
        {children}
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default Layout;
