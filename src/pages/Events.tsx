
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Global Tech Summit 2024",
      date: "March 15-17, 2024",
      location: "London, UK",
      description: "Join us for our flagship technology conference featuring industry leaders and innovative solutions."
    },
    {
      title: "Healthcare Innovation Conference",
      date: "April 5-6, 2024",
      location: "Dubai, UAE",
      description: "Exploring the future of healthcare technology and digital transformation."
    },
    {
      title: "AI & ML Workshop Series",
      date: "May 20-22, 2024",
      location: "Singapore",
      description: "Hands-on workshops focusing on practical applications of AI and Machine Learning."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1F2C] to-[#221F26] pt-16">
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-6 text-center animate-fade-in">Upcoming Events</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-12 text-center animate-fade-in-up">
          Join us at our upcoming events to learn, connect, and explore the future of technology
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <Card 
              key={event.title}
              className="bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <Calendar className="h-8 w-8 text-white mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-sm text-white/60 mb-2">{event.date}</p>
                <p className="text-sm text-white/60 mb-4">{event.location}</p>
                <p className="text-gray-300">{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
