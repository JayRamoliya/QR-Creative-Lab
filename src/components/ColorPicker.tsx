
import React from "react";
import { useQRCode } from "@/contexts/QRCodeContext";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

interface ColorPickerProps {
  label: string;
  color: string;
  setColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, color, setColor }) => {
  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor={`color-${label}`} className="text-sm font-medium">
        {label}
      </Label>
      <div className="flex items-center space-x-2">
        <div 
          className="w-10 h-10 rounded border flex-shrink-0" 
          style={{ backgroundColor: color }}
        />
        <Input
          id={`color-${label}`}
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-full h-10"
        />
      </div>
    </div>
  );
};

export default ColorPicker;
