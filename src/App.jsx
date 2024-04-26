// import { useState, useEffect } from "react";
import "./App.css";
import { selectError, selectLoading } from "./redux/contactsSlice";
import { useDispatch, useSelector } from "react-redux";
import { Suspense, useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import Layout from "./components/Layout.jsx/Layout";
import Loader from "./components/Loader/Loader";
import { Router, Routes } from "react-router-dom";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const ContactsPage = lazy(() => import("./pages/ContactsPage"));
const HomePage = lazy(() => import("./pages/HomePage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RegistrationPage = lazy(() => import("./pages/RegistrationPage"));

function App() {
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<Loader />}></Suspense>
      <Routes>
        <Router path="/" element={<HomePage />} />
        <Router
          path="/register"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Router
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Router
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Router path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
