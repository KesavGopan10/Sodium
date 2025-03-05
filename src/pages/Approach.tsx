import { Brain, Target, Lightbulb, Users, Heart, Settings, ArrowRight, Check, Infinity } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Approach = () => {
  const values = [
    { letter: "S", word: "Solutions", icon: Settings, description: "Delivering innovative solutions for complex challenges" },
    { letter: "O", word: "Opportunities", icon: Target, description: "Identifying and creating opportunities for growth" },
    { letter: "D", word: "Dedication", icon: Heart, description: "Committed to excellence in everything we do" },
    { letter: "I", word: "Innovation", icon: Lightbulb, description: "Pioneering new technologies and approaches" },
    { letter: "U", word: "Understanding", icon: Brain, description: "Deep comprehension of client needs" },
    { letter: "M", word: "Management", icon: Users, description: "Expert leadership and project management" },
  ];

  const methodologies = [
    {
      title: "Discovery & Analysis",
      description: "We begin by understanding your unique challenges and objectives, conducting thorough research and analysis to identify key opportunities and potential roadblocks.",
      icon: Brain
    },
    {
      title: "Strategic Planning",
      description: "Developing comprehensive roadmaps for success, with clear milestones and deliverables that align with your business objectives.",
      icon: Target
    },
    {
      title: "Innovation & Development",
      description: "Creating cutting-edge solutions that drive results, leveraging the latest technologies and best practices in software development.",
      icon: Lightbulb
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-[#1A1F2C] to-[#221F26] py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="mb-6 text-4xl font-bold animate-fade-in">Our Approach</h1>
          <p className="max-w-3xl text-lg animate-fade-in-up">
            At Sodium Group, we combine innovative thinking with proven methodologies to deliver transformative solutions that drive real business value.
          </p>
          <div className="absolute -bottom-10 -right-10 opacity-10">
            <Infinity className="h-40 w-40 animate-ring" />
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-semibold animate-fade-in">How We Work</h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {methodologies.map((method, index) => (
            <Card 
              key={method.title}
              className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sodium-secondary/10 text-sodium-secondary transition-transform group-hover:scale-110">
                  <method.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{method.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{method.description}</p>
                <div className="mt-4 flex items-center text-sodium-secondary">
                  <span className="mr-2">Learn more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* SODIUM Values */}
      <section className="bg-gradient-to-b from-[#1A1F2C] to-[#221F26] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-semibold animate-fade-in">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map(({ letter, word, icon: Icon, description }, index) => (
              <Card 
                key={letter}
                className="group overflow-hidden transition-all duration-300 hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sodium-secondary/10 text-sodium-secondary transition-transform group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sodium-secondary">{letter}</span>
                      <span className="text-gray-700">- {word}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="flex items-start gap-2 text-gray-600">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-sodium-secondary" />
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1A1F2C] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold animate-fade-in">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-lg animate-fade-in-up">
            Partner with us to drive innovation and achieve digital excellence
          </p>
          <button className="rounded-full bg-white px-8 py-3 text-sodium-primary transition-all hover:bg-sodium-light hover:shadow-lg animate-bounce-in">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
};

export default Approach;
