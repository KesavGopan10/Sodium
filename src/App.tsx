import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Approach from "./pages/Approach";
import Careers from "./pages/Careers";
import Leadership from "./pages/Leadership";
import Industries from "./pages/Industries";
import Partners from "./pages/Partners";
import Insights from "./pages/Insights";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import ESGCommitment from "./pages/ESGCommitment";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import DEI from "./pages/DEI";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/esg" element={<ESGCommitment />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/dei" element={<DEI />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-grow pt-20">
            <AnimatedRoutes />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
