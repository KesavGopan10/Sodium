
import React from 'react';
import { Flag, MapPin } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

interface Address {
  region: string;
  address: string[] | string[][];
}

const OfficeLocations = () => {
  const locations: Address[] = [
    {
      region: "Americas",
      address: ["611 Gateway Blvd", "South San Francisco", "CA", "94080"],
    },
    {
      region: "EMEA",
      address: [
        ["Pioneer Trading Fze", "Regus, JAFZA One Tower A", "11th Floor - Mina Jebel Ali", "Jebel Ali Freezone", "Dubai", "United Arab Emirates"],
        ["1 Canada Square", "London E14 5AB", "United Kingdom"]
      ],
    },
    {
      region: "APAC",
      address: ["India", "-2 floor, Thejaswini building", "Phase I Technopark", "Thiruvananthapuram", "Kerala, India"],
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-[#1A1F2C] to-[#221F26]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Global Presence</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            With offices strategically located across three continents, we deliver excellence worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card 
              key={location.region}
              className="bg-white/5 backdrop-blur-xl border border-white/10 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-white/10 animate-fade-in-up group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6 relative">
                {/* Tech-inspired background pattern */}
                <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_25%,rgba(255,255,255,0.1)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:24px_24px] group-hover:opacity-10 transition-opacity" />
                
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="relative">
                    <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Flag className="w-6 h-6 text-white relative z-10" />
                    <div className="absolute -inset-1 bg-white/20 rounded-full blur-sm animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 group-hover:text-transparent transition-all duration-300">
                    {location.region}
                  </h3>
                </div>
                <div className="space-y-6 text-gray-300 relative z-10">
                  {Array.isArray(location.address[0]) ? (
                    (location.address as string[][]).map((addr, i) => (
                      <div key={i} className="space-y-1 group/address">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 mt-1 text-white/60 group-hover/address:text-blue-400 transition-colors" />
                          <div className="space-y-0.5">
                            {addr.map((line, j) => (
                              <p 
                                key={j}
                                className="transition-all duration-300 group-hover/address:text-white"
                                style={{ animationDelay: `${j * 100}ms` }}
                              >
                                {line}
                              </p>
                            ))}
                          </div>
                        </div>
                        {i === 0 && (
                          <div className="border-t border-white/10 my-4 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse" />
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="space-y-1 group/address">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 mt-1 text-white/60 group-hover/address:text-blue-400 transition-colors" />
                        <div className="space-y-0.5">
                          {(location.address as string[]).map((line, i) => (
                            <p 
                              key={i}
                              className="transition-all duration-300 group-hover/address:text-white"
                              style={{ animationDelay: `${i * 100}ms` }}
                            >
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;
