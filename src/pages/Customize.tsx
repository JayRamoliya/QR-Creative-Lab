
import React from "react";
import { QRCodeProvider } from "@/contexts/QRCodeContext";
import Navbar from "@/components/Navbar";
import QRCodeDisplay from "@/components/QRCode";
import TextInput from "@/components/TextInput";
import ColorPicker from "@/components/ColorPicker";
import ShapeSelector from "@/components/ShapeSelector";
import LogoUploader from "@/components/LogoUploader";
import FrameTextInput from "@/components/FrameTextInput";
import { useQRCode } from "@/contexts/QRCodeContext";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const CustomizeContent: React.FC = () => {
  const {
    backgroundColor,
    setBackgroundColor,
    foregroundColor,
    setForegroundColor
  } = useQRCode();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Customize Your <span className="text-primary">QR Code</span>
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            Personalize your QR code with colors, logos, and styles
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left panel - Input and customization options */}
          <div className="lg:col-span-2 space-y-6">
            <TextInput />
            
            <Card>
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-semibold">Style Options</h2>
                <Separator />
                
                <div className="grid sm:grid-cols-2 gap-6">
                  <ColorPicker
                    label="Foreground Color"
                    color={foregroundColor}
                    setColor={setForegroundColor}
                  />
                  
                  <ColorPicker
                    label="Background Color"
                    color={backgroundColor}
                    setColor={setBackgroundColor}
                  />
                </div>
                
                <Separator />
                <ShapeSelector />
                
                <Separator />
                <div className="grid sm:grid-cols-2 gap-6">
                  <LogoUploader />
                  <FrameTextInput />
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right panel - QR code preview */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
              <QRCodeDisplay />
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

const CustomizePage: React.FC = () => {
  return (
    <QRCodeProvider>
      <CustomizeContent />
    </QRCodeProvider>
  );
};

export default CustomizePage;
