import { StatusBar } from 'expo-status-bar';
import QR from './components/qrCodegen';
import React from 'react';
export default function App() {
  return (
    <>
      <QR />
      <StatusBar style="auto" />
    </>
  );
}