
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const Leadership = () => {
  const leaders = [
    {
      name: "Akshay Udayakumaran Nair Aswathy",
      role: "Founder",
      company: "Sodium Groups",
      bio: "Visionary leader with expertise in technology innovation and business strategy."
    },
    {
      name: "Shruti Maria George",
      role: "Co-Founder",
      company: "Sodium Groups",
      bio: "Strategic thinker specializing in digital transformation and client relations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26] pt-16">
      <section className="container mx-auto px-4 py-16">
        <h1 className="mb-12 text-center text-4xl font-bold text-white animate-fade-in">Our Leadership</h1>
        <p className="text-center text-lg text-gray-300 mb-12 max-w-2xl mx-auto animate-fade-in-up">
          Meet the visionaries driving innovation and excellence at Sodium Groups
        </p>
        
        <div className="grid gap-8 md:grid-cols-2">
          {leaders.map((leader, index) => (
            <Card 
              key={leader.name} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-white">
                  <div className="p-3 rounded-full bg-white/10">
                    <User className="h-6 w-6 text-white" />
                  </div>
                  {leader.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-white/90 mb-2">{leader.role}</p>
                <p className="text-sm text-white/60">{leader.company}</p>
                <p className="mt-4 text-white/80">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leadership;
