
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Recycle, Heart } from "lucide-react";

const ESGCommitment = () => {
  const commitments = [
    {
      icon: Leaf,
      title: "Environmental",
      items: [
        "Carbon Neutral Operations",
        "Sustainable Technology Solutions",
        "Green Office Initiatives"
      ]
    },
    {
      icon: Heart,
      title: "Social",
      items: [
        "Community Engagement",
        "Diversity & Inclusion",
        "Employee Well-being"
      ]
    },
    {
      icon: Recycle,
      title: "Governance",
      items: [
        "Ethical Business Practices",
        "Transparent Reporting",
        "Risk Management"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26] pt-16">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-6 text-center animate-fade-in">ESG Commitment</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 text-center animate-fade-in-up">
          Our commitment to Environmental, Social, and Governance principles drives sustainable innovation
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {commitments.map((commitment, index) => (
            <Card 
              key={commitment.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <commitment.icon className="h-12 w-12 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">{commitment.title}</h3>
                <ul className="space-y-2">
                  {commitment.items.map((item) => (
                    <li key={item} className="text-gray-300 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-white/50 rounded-full"></span>
                      {item}
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

export default ESGCommitment;
