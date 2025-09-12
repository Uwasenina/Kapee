import { Outlet } from "react-router-dom";
import { Topbar } from "../Components/Topbar";
import Navbar from "../Components/Navbar";
import ProductCard from "../Components/Product";
import Footer from "../Components/Footer";



const LayoutHandling =() => {
    return (
        <div className="flex flex-col min-h-screen">
            <Topbar/>
            <Navbar/>
            <main className="flex-grow">
                <Outlet/>
            </main>
      
        <Footer/>
        </div>
    );
}
export default LayoutHandling