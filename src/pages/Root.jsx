import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import powderCoating from "../assets/video/PowderCoating.mov";

export default function RootLayout() {
  return (
    <>
      {/* <video
        className="absolute top-0 w-full h-full object-cover -z-30"
        autoPlay
        loop
        muted
      >
        <source src={powderCoating} type="video/mp4" />
        Your browser does not support the video tag. //{" "}
      </video> */}
      <Header />
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
}
