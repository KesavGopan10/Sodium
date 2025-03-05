
import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Industries = () => {
  useEffect(() => {
    console.log("Industries page mounted");
  }, []);

  const industries = [
    {
      name: "Automotive",
      description: "Digital transformation solutions for the automotive industry, from manufacturing to customer experience.",
    },
    {
      name: "Financial Services",
      description: "Innovative fintech solutions and digital banking transformations.",
    },
    {
      name: "Food Technology",
      description: "Smart solutions for food production, distribution, and safety management.",
    },
    {
      name: "Healthcare",
      description: "Digital health solutions and healthcare management systems.",
    },
    {
      name: "Hospitality",
      description: "Guest experience platforms and hospitality management solutions.",
    },
    {
      name: "Life Sciences",
      description: "Research and development support systems for life sciences.",
    },
    {
      name: "Manufacturing",
      description: "Smart manufacturing solutions and Industry 4.0 implementations.",
    },
    {
      name: "Energy Consulting",
      description: "Digital solutions for renewable energy and optimization technologies.",
    },
    {
      name: "Public Sector",
      description: "E-governance and digital transformation for public services.",
    },
    {
      name: "Retail & CPG",
      description: "Omnichannel retail solutions and consumer goods management.",
    },
    {
      name: "Technology, Media & Telecom",
      description: "Digital solutions for technology, media, and telecommunications sectors.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative mt-16 bg-gradient-to-r from-[#1A1F2C] to-[#221F26] py-20 text-white">
        <div className="container mx-auto px-4 animate-fade-in">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl animate-fade-in">Industries We Serve</h1>
          <p className="mx-auto max-w-2xl text-lg animate-fade-in-up">
            Delivering innovative solutions across diverse sectors to drive digital transformation and business growth.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Card 
                key={industry.name} 
                className="transition-all duration-300 hover:scale-105 bg-[#1A1F2C] text-white border-[#221F26] animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <h3 className="mb-3 text-xl font-semibold">{industry.name}</h3>
                  <p className="text-gray-300">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;

