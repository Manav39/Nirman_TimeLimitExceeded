import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import SideBar from "./pages/SideBar";
import Diagnose from "./pages/Diagnose";
import { useEffect } from "react";

import { ChakraProvider } from "@chakra-ui/react";
import Dashboard from "./pages/Dashboard";
import Patient from "./pages/Patient";
import Articles from "./pages/Articles";
import Medical_History from "./pages/patients/Medical_History";
import Profile from "./pages/Profile";
import Dashboard_patient from "./pages/patients/Dasboard_patient";

import News from "./pages/News";
import Assistant from "./pages/Assistant";
import Disease from "./pages/Disease";
import Consult from "./pages/patients/Consult";
import Login from "./pages/Login";
import AddDoctors from "./pages/AddDoctors";
import Beds from "./pages/Beds";
import SideBar_Patient from "./pages/patients/SideBar_Patient";
import Profile_Patient from "./pages/patients/Profile_Patient"

function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/news" element={<News />} />
        <Route path="/login" element={<Login />} />

        <Route path="/assistant" element={<Assistant />} />

        <Route
          path="/Dashboard"
          element={
            <>
              <SideBar>
                <Dashboard />
              </SideBar>
            </>
          }
        />

         <Route
          path="/patient_Dashboard"
          element={
            <>
              <SideBar_Patient>
                <Dashboard_patient/>
              </SideBar_Patient>
            </>
          }
        />

          <Route
          path="/Medical_History"
          element={
            <>
              <SideBar_Patient>
                <Medical_History/>
              </SideBar_Patient>
            </>
          }
        />


        <Route
          path="/Diagnose"
          element={
            <>
              <SideBar>
                <Diagnose />
              </SideBar>
            </>
          }
        />

        <Route
          path="/Patient"
          element={
            <>
              <SideBar>
                <Patient />
              </SideBar>
            </>
          }
        />

        <Route
          path="/Articles"
          element={
            <>
              <SideBar>
                <Articles />
              </SideBar>
            </>
          }
        />

        {/* <Route
          path="/Medical_History"
          element={
            <>
              <SideBar>
                <Medical_History />
              </SideBar>
            </>
          }
        /> */}
        <Route
          path="/profile"
          element={
            <SideBar>
              <Profile />
            </SideBar>
          }
        />

          <Route
          path="/Patient's_Profile"
          element={
            <SideBar_Patient>
              <Profile_Patient/>
            </SideBar_Patient>
          }
        />
        <Route
          path="/Consult"
          element={
            <SideBar>
              <Consult />
            </SideBar>
          }
        />
        <Route
          path="/Disease"
          element={
            <SideBar>
              <Disease />
            </SideBar>
          }
        />
         <Route
          path="/Register_Doctor"
          element={
            <SideBar>
              <AddDoctors />
            </SideBar>
          }
        />
        <Route
          path="/Beds_Availabilty"
          element={
            <SideBar>
              <Beds />
            </SideBar>
          }
        />
      </Routes>
    </ChakraProvider>
  );
}
export default App;
