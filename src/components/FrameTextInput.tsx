
import React from "react";
import { useQRCode } from "@/contexts/QRCodeContext";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FrameTextInput: React.FC = () => {
  const { frameText, setFrameText } = useQRCode();

  return (
    <div className="flex flex-col space-y-1.5">
      <Label htmlFor="frame-text" className="text-sm font-medium">
        Frame Text (Optional)
      </Label>
      <Input
        id="frame-text"
        type="text"
        value={frameText}
        onChange={(e) => setFrameText(e.target.value)}
        placeholder="e.g., Scan Me!"
      />
    </div>
  );
};

export default FrameTextInput;
