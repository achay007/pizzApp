/* eslint-disable */
//import React from "react";
import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Spinnger from "./Spinnger";
function AppLayout() {
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"
  return (
    <div className='grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Spinnger/>}
      <Header />
    <div className="overflow-scroll">
      <main className="max-w-3xl mx-auto">
        <Outlet />    
      </main>
    </div>
      <CartOverview />
    </div>
  );
}

export default AppLayout;
