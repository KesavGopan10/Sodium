import { Link } from "react-router-dom";

const Footer = () => {
  const footerLinks = {
    locations: {
      title: "Locations",
      links: [
        { name: "Americas", path: "/locations/americas" },
        { name: "EMEA", path: "/locations/emea" },
        { name: "APAC", path: "/locations/apac" },
        { name: "View all", path: "/locations" },
      ],
    },
    about: {
      title: "About us",
      links: [
        { name: "Who we are", path: "/about" },
        { name: "News", path: "/news" },
        { name: "Events", path: "/events" },
        { name: "ESG commitment", path: "/esg" },
        { name: "DE&I", path: "/dei" },
        { name: "Leadership team", path: "/leadership" },
      ],
    },
    careers: {
      title: "Careers",
      links: [
        { name: "Explore opportunities", path: "/careers" },
        { name: "LinkedIn", url: "https://www.linkedin.com/company/sodiumgroups/posts/?feedView=all" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { name: "Legal Notice", path: "/legal" },
        { name: "Contact us", path: "/contact" },
        { name: "Cookies Settings", path: "/cookies" },
      ],
    },
  };

  return (
    <footer className="bg-sodium-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    {link.url ? (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link to={link.path} className="text-gray-300 hover:text-white transition-colors">
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Sodium Groups. All rights reserved.
          </p>
          <p className="text-center text-sm text-gray-400 mt-2">
            We use cookies to provide you with the best experience of this website. To accept cookies continues browsing as normal or read how to decline them in our cookie policy. Please also see our privacy policy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;