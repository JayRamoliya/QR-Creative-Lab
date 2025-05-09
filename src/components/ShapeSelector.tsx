
import React from "react";
import { useQRCode } from "@/contexts/QRCodeContext";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Square, Circle } from "lucide-react";

const ShapeSelector: React.FC = () => {
  const { dotShape, setDotShape } = useQRCode();

  return (
    <div className="flex flex-col space-y-1.5">
      <Label className="text-sm font-medium">QR Code Dot Shape</Label>
      <RadioGroup 
        value={dotShape} 
        onValueChange={(value) => setDotShape(value as any)} 
        className="flex flex-wrap gap-4"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="square" id="shape-square" />
          <Label htmlFor="shape-square" className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            Square
          </Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="rounded" id="shape-rounded" />
          <Label htmlFor="shape-rounded" className="flex items-center">
            <Square className="h-4 w-4 mr-1 rounded-sm" />
            Rounded
          </Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="circle" id="shape-circle" />
          <Label htmlFor="shape-circle" className="flex items-center">
            <Circle className="h-4 w-4 mr-1" />
            Circle
          </Label>
        </div>
        
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="diamond" id="shape-diamond" />
          <Label htmlFor="shape-diamond" className="flex items-center">
            <div className="h-4 w-4 mr-1 rotate-45 bg-current" />
            Diamond
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
};

export default ShapeSelector;
