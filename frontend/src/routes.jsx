
import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/HomeLayout";
import HomePage from "./components/Home/HomePage";
import GpaCalculatorPage from "./components/GPACalculator";
import PastPapersPage from "./components/PastPapers/SubjectList";
import PastPaperDetailPage from "./components/PastPapers/SubjectDetail";
import JournalsPage from "./components/Journals/JournalList";
import JournalDetailPage from "./components/Journals/JournalDetail";
import JournalCreatePage from "./components/Journals/JournalCreate";
import LoginPage from "./components/Account/Login";
import SignupPage from "./components/Account/Signup";
import AboutPage from "./components/AboutMe";
import ContactPage from "./components/Contact";
import HomeLayout from "./components/HomeLayout";
import MainLayout from "./components/MainLayout";

// import ExtraTestLayout from "./components/ExtraTestLayout";



const router=createBrowserRouter([
  {
    path:"/",element:<HomeLayout/>,
    children:[
      {index:true,element: <HomePage />}
    ],
  },
  {
    path:"/",element:<MainLayout/>,
    children:[
      { path: "gpa-calculator", element: <GpaCalculatorPage /> },
      { path: "past-papers", element: <PastPapersPage /> },
      { path: "past-papers/:subjectIdSlug", element: <PastPaperDetailPage /> },
      { path: "journals", element: <JournalsPage /> },
      { path: "journals/:id", element: <JournalDetailPage /> },
      { path: "journals/create", element: <JournalCreatePage /> },
      { path: "login", element: <LoginPage /> },
      { path: "signup", element: <SignupPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },

  // CAN USE THIS TYPE OF EXTRA LAYOUT IF WANT EXTRA LAYOUT LIKE NO NAVBAR ON SOME PAGES
  // {
  //   path:"/",element:<ExtraTestLayout/>,
  //   children:[
  //     // { path: "gpa-calculator", element: <GpaCalculatorPage /> },
  //     { path: "past-papers", element: <PastPapersPage /> },
  //     { path: "past-papers/:subjectIdSlug", element: <PastPaperDetailPage /> },
  //     { path: "journals", element: <JournalsPage /> },
  //     { path: "login", element: <LoginPage /> },
  //     { path: "signup", element: <SignupPage /> },
  //     { path: "about", element: <AboutPage /> },
  //     { path: "contact", element: <ContactPage /> },
  //   ],
  // },
]);

export default router;
