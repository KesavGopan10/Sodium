import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg w-80 animate-slide-in-right">
          <div className="bg-sodium-primary text-white p-4 rounded-t-lg flex justify-between items-center">
            <h3 className="font-semibold">Chat with us</h3>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-sodium-light"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="h-64 p-4 overflow-y-auto">
            <div className="text-gray-500 text-center">
              How can we help you today?
            </div>
          </div>
          <div className="p-4 border-t">
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button size="icon" className="bg-sodium-primary hover:bg-sodium-secondary">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-sodium-primary hover:bg-sodium-secondary text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-bounce-in"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatBox;