
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src="lovable-uploads/8f9b6858-865d-4166-8aea-a49e22d9a360.png"
            alt="Sodium Logo"
            className="h-32 w-32 rounded-full animate-pulse"
          />
          <div className="absolute inset-0 rounded-full border-4 border-gray-200/20 animate-spin" />
          <div className="absolute inset-0 rounded-full border-t-4 border-sodium-primary animate-spin [animation-delay:-0.15s]" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
