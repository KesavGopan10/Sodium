
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { Briefcase } from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  
  const jobCategories = [
    {
      title: "Product and Project Management Team",
      roles: [
        "Product Manager (Healthcare Software)",
        "Project Manager (Software Development Projects)"
      ]
    },
    {
      title: "Software Development Team",
      roles: [
        "Backend Engineer (Healthcare Software)",
        "Frontend Engineer (Healthcare Software)",
        "Mobile App Engineer (Android)",
        "Voice Command and AI Engineer",
        "Cloud Engineer/DevOps Engineer"
      ]
    },
    {
      title: "AI and Data Science Team",
      roles: [
        "Data Scientist (Healthcare AI/ML)",
        "AI Engineer (Healthcare AI Integration)"
      ]
    },
    {
      title: "UI/UX Design Team",
      roles: [
        "UI/UX Designer (Healthcare Software)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26] pt-16">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6 animate-fade-in">Join Our Team</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Be part of a dynamic team that's shaping the future of technology
          </p>
        </div>
        
        <div className="grid gap-8">
          {jobCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-[1.02] animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                </div>
                <ul className="space-y-3">
                  {category.roles.map((role) => (
                    <li 
                      key={role} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2"
                      onClick={() => toast({
                        title: "Position Selected",
                        description: `You've selected: ${role}`,
                      })}
                    >
                      <span className="h-1.5 w-1.5 bg-white/50 rounded-full"></span>
                      {role}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Careers;

