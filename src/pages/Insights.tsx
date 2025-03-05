
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Newspaper, Calendar } from "lucide-react";

const Insights = () => {
  const insights = [
    {
      title: "Latest News",
      items: [
        "Sodium Groups Expands Global Presence",
        "New Healthcare AI Solutions Launch",
        "Partnership Announcement with Tech Leaders"
      ],
      icon: Newspaper
    },
    {
      title: "Industry Reports",
      items: [
        "2024 Technology Trends Report",
        "Healthcare Digital Transformation",
        "AI in Manufacturing Study"
      ],
      icon: BookOpen
    },
    {
      title: "Upcoming Events",
      items: [
        "Global Tech Summit 2024",
        "Healthcare Innovation Conference",
        "AI & ML Workshop Series"
      ],
      icon: Calendar
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26] pt-16">
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6 animate-fade-in">Insights & News</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up">
            Stay updated with the latest trends, news, and innovations in technology
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {insights.map((section, index) => (
            <Card 
              key={section.title} 
              className="bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-4 text-white">
                  <div className="p-3 rounded-full bg-white/10">
                    <section.icon className="h-6 w-6 text-white" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li 
                      key={item} 
                      className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer flex items-center gap-2"
                    >
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

export default Insights;

