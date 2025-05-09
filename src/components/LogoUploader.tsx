
import React, { useRef } from "react";
import { useQRCode } from "@/contexts/QRCodeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Image, X } from "lucide-react";
import { toast } from "sonner";

const LogoUploader: React.FC = () => {
  const { logoUrl, setLogoUrl } = useQRCode();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please select an image file");
        return;
      }

      if (file.size > 1024 * 1024) {
        toast.error("Image size should be less than 1MB");
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoUrl(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveLogo = () => {
    setLogoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col space-y-1.5">
      <Label className="text-sm font-medium">Logo Image (Optional)</Label>
      
      {logoUrl ? (
        <div className="flex flex-col space-y-2">
          <div className="relative w-16 h-16 mx-auto">
            <img
              src={logoUrl}
              alt="Logo"
              className="w-full h-full object-contain rounded"
            />
            <button
              type="button"
              onClick={handleRemoveLogo}
              className="absolute -top-2 -right-2 bg-white rounded-full p-0.5 shadow-sm border"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <Button 
            type="button" 
            variant="outline" 
            size="sm" 
            onClick={() => fileInputRef.current?.click()}
          >
            Change Logo
          </Button>
        </div>
      ) : (
        <div className="flex flex-col space-y-2">
          <div 
            className="border-2 border-dashed rounded-lg p-4 text-center cursor-pointer hover:bg-muted/50 transition-colors"
            onClick={() => fileInputRef.current?.click()}
          >
            <Image className="h-8 w-8 mx-auto text-gray-400" />
            <p className="text-sm text-gray-500 mt-2">
              Click to upload a logo
            </p>
            <p className="text-xs text-gray-400">
              PNG, JPG, SVG (max 1MB)
            </p>
          </div>
        </div>
      )}
      
      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
};

export default LogoUploader;
