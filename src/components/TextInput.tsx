
import React from "react";
import { useQRCode } from "@/contexts/QRCodeContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const TextInput: React.FC = () => {
  const { text, setText, generateQRCode } = useQRCode();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    generateQRCode();
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setText(text);
    } catch (err) {
      // Do nothing, clipboard API may not be available
    }
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div>
          <label htmlFor="qr-text" className="block text-sm font-medium text-gray-700 mb-1">
            Enter Text or URL
          </label>
          <div className="flex space-x-2">
            <Input
              id="qr-text"
              type="text"
              value={text}
              onChange={handleInputChange}
              placeholder="https://example.com or any text"
              className="flex-1"
            />
            <Button 
              type="button" 
              variant="outline" 
              onClick={handlePaste}
              className="whitespace-nowrap"
            >
              Paste
            </Button>
          </div>
        </div>
        
        <Button type="submit" className="w-full">
          Generate QR Code
        </Button>
      </form>
    </Card>
  );
};

export default TextInput;
