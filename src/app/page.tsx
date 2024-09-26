import Image from "next/image";
import Navbar from "./Components/Navbar";
import DashBoard from "./DashBoard/page";

export default function Home() {
  return (
    <div className='m-6 p-3 text-white'>

      <Navbar /> 
      <DashBoard />
      
    </div>
  );
}
