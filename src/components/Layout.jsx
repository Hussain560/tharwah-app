import BottomNav from './BottomNav';


// iPhone 14 Pro Max size: 430 x 932 px
function Layout({ children, activeTab, setActiveTab }) {
  return (
    <div
      className="bg-neutral-800 rounded-[40px] shadow-2xl flex flex-col p-2.5"
      style={{ width: 430, height: 932, minWidth: 430, minHeight: 932, maxWidth: 430, maxHeight: 932 }}
    >
      <div className="flex-grow bg-white rounded-[30px] overflow-y-auto">
        {children}
      </div>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

export default Layout;
