import SideNavbar from "./SideNavbar";
import StarsCanvas from "../Animation/Stars";
import NavMenu from "./Test";
function Layout({ children }) {
  return (
    <div className="flex bg-primary min-h-screen relative z-0">
      <div className="absolute">
      <SideNavbar />
     </div>
      <div className="flex-1 flex justify-center ">
        {children}
      </div>
      <StarsCanvas />

    </div>
  );
}

export default Layout;
