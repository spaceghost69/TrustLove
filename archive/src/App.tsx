import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import NavbarMenu from "./NavbarMenu";
import About from "./website/About";
import AllMembers from "./website/AllMembers";
import ArtistHome from "./website/ArtistHome";
import ContactUs from "./website/ContactUs";
// import LiveStreams from "./website/LiveStreams";
import { Buffer } from "buffer";
import RayCastWaves from "./components/Visualizations/RayCastWaves";
import Footer from "./website/Footer";
import JamRoom from "./website/JamRoom";
window.Buffer = Buffer;

// 1️⃣ Changed from App to Root
function Groot() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/*  <Route path="/live-streams" element={<LiveStreams />} /> */}

        <Route path="/JamRoom" element={<JamRoom />} />
        <Route path="/all-members" element={<AllMembers />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/" element={<ArtistHome />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <div className="App">
      <NavbarMenu />

      <div className="background-container">
        <RayCastWaves />

        <div className="content-container">
          <Outlet />

          {/* Other components can go here */}
        </div>
      </div>

      <Footer />
      
    </div>
  );
}

// 3️⃣ Router singleton created
const rx = createBrowserRouter([{ path: "*", element: <Groot /> }]);

// 4️⃣ RouterProvider added
export default function App() {
  return <RouterProvider router={rx} />;
}
