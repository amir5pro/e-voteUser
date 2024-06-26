import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import LandingLayout from "./pages/LandingLayout";
import Landing from "./pages/Landing";
import DashboardLayout from "./pages/DashboardLayout";
import AdminLogin from "./pages/AdminLogin";

import VoterRegister from "./pages/VoterRegister";
import VoterLogin from "./pages/VoterLogin";
import CandidateLogin from "./pages/CandidateLogin";
import Vote from "./pages/Vote";
import Prevote from "./pages/Prevote";
import Candidate from "./pages/Candidate";
import Results from "./pages/Results";
import Stats from "./pages/Stats";
import Admin from "./pages/Admin";
import Error from "./pages/Error";

import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as voteLoader } from "./pages/Vote";
import { loader as resultLoader } from "./pages/Results";
import { loader as statsLoader } from "./pages/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "adminlogin",
        element: <AdminLogin />,
      },

      {
        path: "voterRegister",
        element: <VoterRegister />,
      },
      {
        path: "voterlogin",
        element: <VoterLogin />,
      },
      {
        path: "candidatelogin",
        element: <CandidateLogin />,
      },

      {
        path: "dashboard",
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          {
            index: true,
            element: <Vote />,
            loader: voteLoader,
          },
          {
            path: "preVote",
            element: <Prevote />,
          },
          {
            path: "candidates",
            element: <Candidate />,
          },
          {
            path: "results",
            element: <Results />,
            loader: resultLoader,
          },
          {
            path: "stats",
            element: <Stats />,
            loader: statsLoader,
          },
          {
            path: "admin",
            element: <Admin />,
          },
        ],
      },
    ],
  },
]);
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#242f9c",
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
};

export default App;
