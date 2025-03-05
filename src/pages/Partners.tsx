import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Code2, Send } from "lucide-react";

const Partners = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto px-4 animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold">Our Partners</h1>
          <p className="max-w-3xl text-lg">
            We believe that partnerships are more than just collaborations—they're essential to making a meaningful impact. Building a better world requires a diverse mix of ideas and expertise.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-lg bg-gradient-to-r from-[#1A1F2C] to-[#221F26] p-8 shadow-sm animate-fade-in-up">
          <h2 className="mb-4 text-2xl font-bold text-white">Ready to Partner?</h2>
          <p className="text-lg text-gray-300 mb-6">
            Join us in creating innovative solutions that drive digital transformation. Get in touch to explore partnership opportunities.
          </p>
          <button className="bg-sodium-secondary text-white px-8 py-3 rounded-full hover:bg-sodium-accent transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Partners;