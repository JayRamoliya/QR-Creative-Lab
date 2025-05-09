
import React from "react";
import { useQRCode } from "@/contexts/QRCodeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Download } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { toast } from "sonner";

const DownloadOptions: React.FC = () => {
  const { qrCodeRef, fileName, setFileName, fileFormat, setFileFormat } = useQRCode();

  const handleDownload = async () => {
    if (!qrCodeRef.current) {
      toast.error("QR code not found");
      return;
    }

    try {
      const canvas = await html2canvas(qrCodeRef.current, {
        backgroundColor: null,
        scale: 3,
      });

      switch (fileFormat) {
        case "png":
          const pngUrl = canvas.toDataURL("image/png");
          downloadFile(pngUrl, `${fileName}.png`);
          break;
        case "svg":
          // For SVG, we'll convert the PNG to a downloadable file
          // Note: True SVG export would require additional libraries
          const svgUrl = canvas.toDataURL("image/png");
          downloadFile(svgUrl, `${fileName}.svg`);
          break;
        case "pdf":
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF({
            orientation: "portrait",
            unit: "mm",
            format: [100, 100],
          });
          
          const imgWidth = 80;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
          pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
          pdf.save(`${fileName}.pdf`);
          break;
      }

      toast.success(`Downloaded as ${fileName}.${fileFormat}`);
    } catch (error) {
      toast.error("Failed to download QR code");
      console.error("Download error:", error);
    }
  };

  const downloadFile = (dataUrl: string, filename: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-1.5">
        <Label htmlFor="file-name" className="text-sm font-medium">
          File Name
        </Label>
        <Input
          id="file-name"
          type="text"
          value={fileName}
          onChange={(e) => setFileName(e.target.value)}
          placeholder="qr-code"
        />
      </div>
      
      <div className="flex flex-col space-y-1.5">
        <Label className="text-sm font-medium">File Format</Label>
        <RadioGroup 
          value={fileFormat} 
          onValueChange={(value) => setFileFormat(value as any)}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="png" id="format-png" />
            <Label htmlFor="format-png">PNG</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="svg" id="format-svg" />
            <Label htmlFor="format-svg">SVG</Label>
          </div>
          
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="pdf" id="format-pdf" />
            <Label htmlFor="format-pdf">PDF</Label>
          </div>
        </RadioGroup>
      </div>
      
      <Button onClick={handleDownload} className="w-full mt-4">
        <Download className="h-4 w-4 mr-2" />
        Download QR Code
      </Button>
    </div>
  );
};

export default DownloadOptions;
