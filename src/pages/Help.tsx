
import React from "react";
import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { QrCode, Image, Download, HelpCircle } from "lucide-react";

const Help: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
            Help & <span className="text-primary">Resources</span>
          </h1>
          <p className="mt-2 text-xl text-gray-600">
            Learn how to create and customize your QR codes
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Quick Start Guide */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <HelpCircle className="h-6 w-6 text-primary" />
                Quick Start Guide
              </CardTitle>
              <CardDescription>
                Follow these simple steps to create your QR code
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <QrCode className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">1. Create</h3>
                  <p className="text-gray-600">
                    Enter any text or URL on the home page and click Generate
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Image className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">2. Customize</h3>
                  <p className="text-gray-600">
                    Add colors, logos and change the style on the Customize page
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center p-4">
                  <div className="bg-primary/10 p-4 rounded-full mb-4">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">3. Download</h3>
                  <p className="text-gray-600">
                    Save your QR code in PNG, SVG, or PDF format
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* FAQs */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What is a QR code?</AccordionTrigger>
                  <AccordionContent>
                    QR codes (Quick Response codes) are two-dimensional barcodes that can be scanned 
                    using a smartphone camera to quickly access information or perform actions like
                    visiting websites, accessing menus, or making contactless payments.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Why customize QR codes?</AccordionTrigger>
                  <AccordionContent>
                    Customized QR codes with brand colors and logos help with brand recognition, 
                    increase engagement, and make your marketing materials more visually appealing. 
                    They also help distinguish your codes from generic ones.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>Can I add a logo to my QR code?</AccordionTrigger>
                  <AccordionContent>
                    Yes! In the Customize page, you can upload a logo image that will be displayed 
                    in the center of your QR code. Make sure your logo isn't too large or complex, 
                    as it needs to maintain QR code scanability.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Which format should I download my QR code in?</AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>PNG:</strong> Best for digital use and most social media platforms.</li>
                      <li><strong>SVG:</strong> Best for print materials where the QR code might be enlarged.</li>
                      <li><strong>PDF:</strong> Useful when incorporating into documents or print layouts.</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Are customized QR codes always scannable?</AccordionTrigger>
                  <AccordionContent>
                    Most customized QR codes are scannable, but extreme customizations can reduce 
                    scanability. Our app maintains a balance between aesthetics and functionality. 
                    For best results, always test your QR code on different devices before sharing 
                    it widely.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          {/* Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Popular QR Code Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Business</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Digital business cards</li>
                    <li>Restaurant menus</li>
                    <li>Product packaging information</li>
                    <li>Event check-ins</li>
                    <li>Contact information</li>
                  </ul>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Personal</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-600">
                    <li>Social media profiles</li>
                    <li>Wedding or party invitations</li>
                    <li>Personal websites</li>
                    <li>WiFi access sharing</li>
                    <li>Digital art projects</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <footer className="py-6 text-center text-gray-500 text-sm border-t">
        <p>QR Code Creative Lab &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Help;
