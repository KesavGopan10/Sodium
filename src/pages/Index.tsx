import React, { useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Code2, Cloud, Shield, Smartphone, Brain, Rocket } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import ClientLogos from "@/components/ClientLogos";
import OfficeLocations from "@/components/OfficeLocations";
import ChatBox from "@/components/ChatBox";
import { motion } from "framer-motion";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description: "We design and develop bespoke software solutions that align with your business goals."
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Leverage the power of cloud computing to enhance flexibility and reduce costs."
  },
  {
    icon: Brain,
    title: "IT Consulting",
    description: "Our experts provide strategic insights to help you navigate digital transformation."
  },
  {
    icon: Smartphone,
    title: "Web & Mobile App Development",
    description: "Create digital experiences that captivate and engage users."
  },
  {
    icon: Shield,
    title: "Cybersecurity Services",
    description: "Protect your business with robust security measures and compliance."
  },
  {
    icon: Brain,
    title: "Food Technology",
    description: "Leading food technology solutions and innovations across the world."
  }
];

const carouselImages = [
  {
    src: "/lovable-uploads/58fd8087-8803-4e68-84e9-fe961b882237.png",
    alt: "Future of AI in Healthcare"
  },
  {
    src: "/lovable-uploads/1ffded13-75d9-46b4-b203-1617c7d4f7fe.png",
    alt: "Food Tech Innovation"
  },
  {
    src: "/lovable-uploads/b2a8bd2e-cce3-4cb3-bb8f-9f87487b9cda.png",
    alt: "Digital Enterprise Solutions"
  }
];

const Index = () => {
  const plugin = React.useMemo(() => Autoplay({ delay: 4000, stopOnInteraction: true }), []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-white text-gray-900"
    >
      <LoadingScreen />
      
      {/* Hero Section with Carousel */}
      <section className="relative">
        <Carousel plugins={[plugin]} className="w-full">
          <CarouselContent>
            {carouselImages.map((image, index) => (
              <CarouselItem key={index}>
                <Card className="overflow-hidden border-none bg-transparent">
                  <CardContent className="relative aspect-[21/9] p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105 animate-fade-in"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/60 to-transparent" />
                    {/* Dot Animation */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {carouselImages.map((_, dotIndex) => (
                        <div
                          key={dotIndex}
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            index === dotIndex ? 'bg-white scale-125' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>

      <ClientLogos />

      {/* About Section with updated values */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-white mb-6">Transforming Businesses Through Technology</h2>
            <p className="text-lg text-gray-300 mb-8">
              Sodium Groups is an innovative IT solutions provider, bringing fresh perspectives and cutting-edge technology services to businesses. 
              Our expertise spans across digital transformation, cloud computing, and enterprise solutions.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3">100+</h3>
                <p className="text-gray-300">Clients Worldwide</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-3">200+</h3>
                <p className="text-gray-300">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with dark theme */}
      <section className="py-20 bg-[#221F26]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">Our Technology Solutions</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Card 
                key={service.title}
                className="group transition-all duration-300 hover:shadow-lg hover:scale-105 animate-fade-in-up bg-white/5 backdrop-blur-xl border border-white/10"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <service.icon className="h-12 w-12 text-white mb-4 transition-transform group-hover:scale-110" />
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with dark theme */}
      <section className="py-20 bg-gradient-to-r from-[#1A1F2C] to-[#221F26]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">Why Choose Sodium Groups?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Industry Expertise", description: "Deep understanding of various industry verticals and their unique challenges." },
              { title: "Global Reach", description: "Strategic presence across multiple continents ensuring 24/7 support and service delivery." },
              { title: "Innovation Focus", description: "Continuous investment in emerging technologies and R&D to deliver cutting-edge solutions." },
              { title: "Quality Assurance", description: "ISO certified processes and rigorous quality standards in all deliverables." }
            ].map((item, index) => (
              <div 
                key={item.title}
                className="text-center p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-lg animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <OfficeLocations />

      {/* Contact Section with dark theme */}
      <section className="py-20 bg-[#1A1F2C]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-300 mb-8 animate-fade-in-up">
            Partner with Sodium Groups for innovative IT solutions that drive growth, efficiency, and digital transformation.
          </p>
          <button className="bg-white/10 backdrop-blur-xl text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300 animate-bounce-in border border-white/20">
            Start Your Digital Journey
          </button>
        </div>
      </section>

      <ChatBox />
    </motion.div>
  );
};

export default Index;
