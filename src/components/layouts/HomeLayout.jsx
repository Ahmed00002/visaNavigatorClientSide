import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../Footer";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="mt-24">
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
