import SideNavbar from "./SideNavbar";

function Layout({ children }) {
  return (
    <div className="flex">
      <SideNavbar />
      <div className="flex-1 flex justify-center items-center bg-white">
        {children}
      </div>
    </div>
  );
}

export default Layout;
