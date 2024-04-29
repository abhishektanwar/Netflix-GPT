import React, { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from "./Login";
import Browse from "./Browse";
import { withHeader } from "./Header";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();
  const LoginWithHeader = withHeader(Login);
  const BrowseWithHeader = withHeader(Browse);
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginWithHeader />
    },
    {
      path: "/browse",
      element: <BrowseWithHeader />
    }
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        console.log("a");
        dispatch(removeUser())
      }
    });
  }, [])

  return <RouterProvider router={appRouter} />
}

export default Body;