import React from "react";
import { Outlet } from "react-router";
import Header from "../../widgets/header/Header";


export default function Layout(): React.JSX.Element {
  return (
    <>
      
        <Header />

        <Outlet />
      
    </>
  );
}
