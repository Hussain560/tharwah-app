import BottomNav from './BottomNav';


// iPhone 14 Pro Max size: 430 x 932 px
function Layout({ children, activeTab, setActiveTab }) {
  return (
    <div
      className="bg-neutral-800 rounded-[40px] shadow-2xl flex flex-col p-2.5 w-full md:w-[430px] max-w-sm h-[calc(100vh-80px)] md:h-[932px] mx-auto"
    >
      <div className="flex-grow bg-white rounded-[30px] overflow-y-auto flex flex-col">
        {children}
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default Layout;
