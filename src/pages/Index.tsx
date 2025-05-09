
import React from "react";
import { QRCodeProvider } from "@/contexts/QRCodeContext";
import Navbar from "@/components/Navbar";
import QRCodeDisplay from "@/components/QRCode";
import TextInput from "@/components/TextInput";
import DownloadOptions from "@/components/DownloadOptions";

const Index: React.FC = () => {
  return (
    <QRCodeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Navbar />
        
        <main className="flex-1 container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
              QR Code <span className="text-primary">Creative Lab</span>
            </h1>
            <p className="mt-2 text-xl text-gray-600">
              Generate custom QR codes in seconds
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col space-y-6">
              <TextInput />
              <DownloadOptions />
            </div>
            
            <div className="flex justify-center">
              <QRCodeDisplay />
            </div>
          </div>
        </main>
        
        <footer className="py-6 text-center text-gray-500 text-sm border-t">
          <p>QR Code Creative Lab &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </QRCodeProvider>
  );
};

export default Index;
