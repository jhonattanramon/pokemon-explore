import React, { useContext } from "react";
import { Link, Redirect, Slot, Stack } from "expo-router";
import { UserContext } from "../../context/userContext";
export default function AppLayout() {
  const {isAuthentcated} = React.useContext(UserContext)

  if (!isAuthentcated) {
    return <Redirect href="/sign-in" />;
  }
  return <Slot />;
}
