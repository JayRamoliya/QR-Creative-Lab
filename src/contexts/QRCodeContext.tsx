
import React, { createContext, useContext, useState, ReactNode } from "react";

export type DotShape = "square" | "rounded" | "circle" | "diamond";
export type FileFormat = "png" | "svg" | "pdf";

interface QRCodeContextType {
  text: string;
  setText: (text: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  foregroundColor: string;
  setForegroundColor: (color: string) => void;
  dotShape: DotShape;
  setDotShape: (shape: DotShape) => void;
  logoUrl: string | null;
  setLogoUrl: (url: string | null) => void;
  frameText: string;
  setFrameText: (text: string) => void;
  fileFormat: FileFormat;
  setFileFormat: (format: FileFormat) => void;
  fileName: string;
  setFileName: (name: string) => void;
  qrCodeRef: React.RefObject<HTMLDivElement>;
  generateQRCode: () => void;
  isGeneratingQR: boolean;
}

const QRCodeContext = createContext<QRCodeContextType | undefined>(undefined);

export const QRCodeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [text, setText] = useState<string>("");
  const [backgroundColor, setBackgroundColor] = useState<string>("#FFFFFF");
  const [foregroundColor, setForegroundColor] = useState<string>("#8B5CF6");
  const [dotShape, setDotShape] = useState<DotShape>("rounded");
  const [logoUrl, setLogoUrl] = useState<string | null>(null);
  const [frameText, setFrameText] = useState<string>("");
  const [fileFormat, setFileFormat] = useState<FileFormat>("png");
  const [fileName, setFileName] = useState<string>("qr-code");
  const [isGeneratingQR, setIsGeneratingQR] = useState<boolean>(false);
  
  const qrCodeRef = React.useRef<HTMLDivElement>(null);

  const generateQRCode = () => {
    setIsGeneratingQR(true);
    // The actual generation happens in the QRCode component
    setTimeout(() => {
      setIsGeneratingQR(false);
    }, 500);
  };

  return (
    <QRCodeContext.Provider
      value={{
        text,
        setText,
        backgroundColor,
        setBackgroundColor,
        foregroundColor,
        setForegroundColor,
        dotShape,
        setDotShape,
        logoUrl,
        setLogoUrl,
        frameText,
        setFrameText,
        fileFormat,
        setFileFormat,
        fileName,
        setFileName,
        qrCodeRef,
        generateQRCode,
        isGeneratingQR,
      }}
    >
      {children}
    </QRCodeContext.Provider>
  );
};

export const useQRCode = (): QRCodeContextType => {
  const context = useContext(QRCodeContext);
  if (context === undefined) {
    throw new Error("useQRCode must be used within a QRCodeProvider");
  }
  return context;
};
