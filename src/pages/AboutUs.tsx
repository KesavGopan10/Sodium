
import { Card, CardContent } from "@/components/ui/card";
import { User, Globe, Heart } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: User,
      title: "People First",
      description: "We prioritize our team and clients, fostering strong relationships built on trust and respect."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Making a positive difference in communities worldwide through innovative technology solutions."
    },
    {
      icon: Heart,
      title: "Passion for Excellence",
      description: "Striving for excellence in everything we do, from code quality to client satisfaction."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26] pt-16">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-6 text-center animate-fade-in">About Us</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 text-center animate-fade-in-up">
          At Sodium Groups, we're passionate about transforming businesses through innovative technology solutions. Our journey began with a vision to make digital transformation accessible to all.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <Card 
              key={value.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <value.icon className="h-12 w-12 text-white mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
