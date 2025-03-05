
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const ClientLogos = () => {
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const clientLogos = [
    {
      src: "lovable-uploads/ec1a0b99-1080-42fa-9ab4-7d695c6b980d.png",
      alt: "Euro DeVoyage Logo",
      name: "Euro DeVoyage"
    },
    {
      src: "lovable-uploads/a8363070-6d9b-4b8b-a871-850d0d6e050e.png",
      alt: "SPHC Logo",
      name: "Surrey Physiotherapy"
    },
    {
      src: "lovable-uploads/17c9d898-4881-4ca0-a527-6ac1474cf7ba.png",
      alt: "Focuz Logo",
      name: "Focuz Physiotherapy"
    },
    {
      src: "lovable-uploads/67f31ad8-9d58-4779-ae6b-b51aa540f07e.png",
      alt: "Z SEVEN Logo",
      name: "Z SEVEN A LUXURY BOUTIQUE HOTEL"
    },
    {
      src: "lovable-uploads/05541947-2692-4097-9b40-a74e6b12d40f.png",
      alt: "AURUM Logo",
      name: "AURUM RESTAURANT"
    },
    {
      src: "lovable-uploads/c82f552f-5f69-4009-9aae-c41d9c0235bd.png",
      alt: "DOG & GUN Logo",
      name: "DOG & GUN"
    },
    {
      src: "lovable-uploads/baf1dc1c-38d9-4183-a4fd-c59af1cf8f62.png",
      alt: "foodpage Logo",
      name: "foodpage"
    },
    {
      src: "lovable-uploads/4bfcb1c3-ca43-4a67-aea2-5571db9ed760.png",
      alt: "Bakwaan Logo",
      name: "Bakwaan INDIAN PUNJABI CUISINE"
    },
    {
      src: "lovable-uploads/e1cf372a-db76-4ce0-9868-0f4ef97f3473.png",
      alt: "RedChillies Logo",
      name: "RedChillies"
    }
  ];

  if (!isMounted) {
    return null;
  }

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-black text-center mb-12 animate-fade-in">Our Trusted Clients</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/4">
                <Card className="border-none shadow-none">
                  <div className="h-32 p-4 flex items-center justify-center group transition-all duration-300 hover:scale-110 animate-fade-in-up" 
                       style={{ animationDelay: `${index * 100}ms` }}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-full w-auto object-contain filter hover:brightness-110"
                    />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientLogos;
