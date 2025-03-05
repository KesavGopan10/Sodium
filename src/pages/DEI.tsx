
import { motion } from "framer-motion";

const DEI = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-sodium-primary mb-4">Diversity, Equity & Inclusion</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Sodium Groups, we believe that diverse perspectives drive innovation and better solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-sodium-primary mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              We are committed to fostering an inclusive environment where every individual feels valued, 
              respected, and empowered to contribute their unique perspectives and talents.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Promoting diversity in recruitment and development</li>
              <li>• Ensuring equal opportunities for growth</li>
              <li>• Creating inclusive workplace policies</li>
              <li>• Supporting employee resource groups</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-sodium-primary mb-4">Our Initiatives</h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <strong className="text-sodium-primary">Diverse Hiring Practices</strong>
                <p>Implementing inclusive recruitment strategies to build diverse teams.</p>
              </li>
              <li>
                <strong className="text-sodium-primary">Training & Education</strong>
                <p>Regular workshops and training sessions on diversity and inclusion.</p>
              </li>
              <li>
                <strong className="text-sodium-primary">Employee Resource Groups</strong>
                <p>Supporting communities within our organization to foster inclusion.</p>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DEI;
