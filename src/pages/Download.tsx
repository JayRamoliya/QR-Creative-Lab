
import React from "react";
import { QRCodeProvider } from "@/contexts/QRCodeContext";
import Navbar from "@/components/Navbar";
import QRCodeDisplay from "@/components/QRCode";
import DownloadOptions from "@/components/DownloadOptions";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DownloadContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Download Your <span className="text-primary">QR Code</span>
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            Choose your preferred format and download your QR code
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Link to="/customize" className="flex items-center text-primary mb-6 hover:underline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Customize
          </Link>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Preview</h2>
              <QRCodeDisplay />
            </div>
            
            <div>
              <h2 className="text-xl font-semibold mb-4">Download Options</h2>
              <Card>
                <CardContent className="p-6">
                  <DownloadOptions />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        <p>QR Code Creative Lab &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

const DownloadPage: React.FC = () => {
  return (
    <QRCodeProvider>
      <DownloadContent />
    </QRCodeProvider>
  );
};

export default DownloadPage;
