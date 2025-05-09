
import React, { useEffect, useRef } from "react";
import { QRCodeSVG } from "qrcode.react";
import { useQRCode } from "@/contexts/QRCodeContext";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const QRCodeDisplay: React.FC = () => {
  const {
    text,
    backgroundColor,
    foregroundColor,
    dotShape,
    logoUrl,
    frameText,
    qrCodeRef,
    isGeneratingQR
  } = useQRCode();
  
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (logoUrl) {
      const img = new Image();
      img.onload = () => {
        logoRef.current = img;
      };
      img.onerror = () => {
        toast.error("Failed to load logo image");
      };
      img.src = logoUrl;
    } else {
      logoRef.current = null;
    }
  }, [logoUrl]);

  // Get the CSS class for the dot shape
  const getDotClass = () => {
    switch (dotShape) {
      case "rounded":
        return "qr-dot-rounded";
      case "circle":
        return "qr-dot-circle";
      case "diamond":
        return "qr-dot-diamond";
      default:
        return "qr-dot-square";
    }
  };

  return (
    <Card className="p-6 flex flex-col items-center bg-white">
      <div 
        ref={qrCodeRef}
        className={`
          relative flex flex-col items-center justify-center p-4 
          transition-all duration-300 rounded-lg
          ${isGeneratingQR ? 'animate-pulse-slow' : ''}
        `}
        style={{ backgroundColor }}
      >
        {text ? (
          <div className={`qr-dot ${getDotClass()}`}>
            <QRCodeSVG
              value={text || "https://example.com"}
              size={240}
              bgColor={backgroundColor}
              fgColor={foregroundColor}
              level="H"
              includeMargin={true}
              imageSettings={
                logoUrl && logoRef.current
                  ? {
                      src: logoUrl,
                      x: undefined,
                      y: undefined,
                      height: 60,
                      width: 60,
                      excavate: true,
                    }
                  : undefined
              }
            />
          </div>
        ) : (
          <div className="w-[240px] h-[240px] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-gray-400 text-center px-4">
              Enter text or URL to generate QR code
            </p>
          </div>
        )}
        
        {frameText && text && (
          <div className="mt-3 text-center">
            <p
              style={{ color: foregroundColor }}
              className="font-medium text-lg"
            >
              {frameText}
            </p>
          </div>
        )}
      </div>
    </Card>
  );
};

export default QRCodeDisplay;
