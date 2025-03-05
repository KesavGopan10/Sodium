
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const locations = [
    {
      region: "Americas",
      offices: [
        {
          address: [
            "611 Gateway Blvd",
            "South San Francisco",
            "CA 94080",
            "United States of America"
          ],
          email: "info@sodiumgroups.com"
        }
      ]
    },
    {
      region: "EMEA",
      offices: [
        {
          address: [
            "Pioneer Trading Fze",
            "Regus, JAFZA One Tower A",
            "11th Floor - Mina Jebel Ali",
            "Jebel Ali Freezone",
            "Dubai",
            "United Arab Emirates"
          ],
          email: "info@sodiumgroups.com"
        },
        {
          address: [
            "1 Canada Square",
            "London E14 5AB",
            "United Kingdom"
          ],
          email: "info@sodiumgroups.co.uk"
        }
      ]
    },
    {
      region: "APAC",
      offices: [
        {
          address: [
            "-2 floor, Thejaswini building",
            "Phase I Technopark",
            "Thiruvananthapuram",
            "Kerala, India"
          ],
          email: "info@sodiumgroups.com"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-sodium-primary mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our global offices. We're here to help you with your technology needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, regionIndex) => (
            <motion.div
              key={location.region}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: regionIndex * 0.1 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-sodium-primary mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-sodium-highlight mr-2" />
                  {location.region}
                </h2>
                {location.offices.map((office, officeIndex) => (
                  <motion.div
                    key={officeIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: (regionIndex + officeIndex) * 0.1 }}
                    className={`${officeIndex > 0 ? 'mt-8 pt-8 border-t border-gray-200' : ''}`}
                  >
                    <div className="space-y-2 mb-4">
                      {office.address.map((line, index) => (
                        <p key={index} className="text-gray-600">{line}</p>
                      ))}
                    </div>
                    <div className="flex items-center text-sodium-primary hover:text-sodium-highlight transition-colors duration-300">
                      <Mail className="w-5 h-5 mr-2" />
                      <a href={`mailto:${office.email}`} className="text-sm">
                        {office.email}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-sodium-primary mb-4">Need Immediate Assistance?</h3>
          <p className="text-lg text-gray-600 mb-6">
            Our team is ready to help you with any queries you might have.
          </p>
          <Button
            variant="default"
            className="bg-sodium-primary hover:bg-sodium-secondary text-white"
            onClick={() => window.location.href = "mailto:sodiumgroups@gmail.com"}
          >
            <Phone className="w-5 h-5 mr-2" />
            Contact our sales team
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
