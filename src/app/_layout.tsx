import React from 'react';
import { Slot, Stack } from 'expo-router';
import UserContextProvider from '../context/userContext';
export default function Root() {
    return (
    <UserContextProvider>
      <Slot />
    </UserContextProvider>
  );
}
