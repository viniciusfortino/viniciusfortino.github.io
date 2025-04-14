import { useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { initGA, logPageView, logEvent } from './config/analytics';

// Substitua com seu ID de medição do GA4
const GA_MEASUREMENT_ID = 'G-9B1D855XDE';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkProps> = ({ href, children }) => {
  const handleClick = () => {
    // Log do evento quando um link é clicado
    logEvent('Link', `Clicked ${href}`);
  };

  return (
    <a
      href={href}
      className="w-full px-6 py-3 mb-3 text-left bg-white rounded-lg hover:bg-gray-50 transition-colors flex items-center text-gray-700"
      onClick={handleClick}
    >
      {children}
    </a>
  );
};

function App() {
  useEffect(() => {
    // Inicializa o GA4
    initGA(GA_MEASUREMENT_ID);
    // Registra a visualização da página
    logPageView();
  }, []);

  const handleSocialClick = (platform: string) => {
    logEvent('Social', `Clicked ${platform}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1a2e] to-[#1a1a4b] text-gray-800 py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Header com os shapes */}
        <div className="flex justify-center gap-4 mb-8">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-300 to-pink-300"></div>
          <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-purple-300"></div>
          <div className="w-8 h-8 rotate-45 bg-gradient-to-br from-orange-300 to-red-300"></div>
        </div>

        {/* Perfil */}
        <div className="text-center text-white mb-8">
          <h1 className="text-2xl font-bold mb-2">Vinicius Fortino</h1>
          <p className="text-sm mb-4">
            Postgraduate in Cybersecurity<br />
            & Governance Vulnerability<br />
            S1412199 found @ Oracle
          </p>
          
          {/* Social Icons */}
          <div className="flex justify-center gap-4 mb-8">
            <a 
              href="mailto:your@email.com" 
              className="text-white hover:text-gray-300"
              onClick={() => handleSocialClick('Email')}
            >
              <MdEmail size={24} />
            </a>
            <a 
              href="https://github.com/viniciusfortino" 
              className="text-white hover:text-gray-300"
              onClick={() => handleSocialClick('GitHub')}
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/vinicius-fortino" 
              className="text-white hover:text-gray-300"
              onClick={() => handleSocialClick('LinkedIn')}
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Links Section */}
        <div className="space-y-6">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white text-lg">About Me</h2>
              <span className="text-white/50">ℹ️</span>
            </div>
            <LinkButton href="/about">View Profile</LinkButton>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4">
            <div className="flex items-center mb-4">
              <span className="text-white mr-2">🎓</span>
              <h2 className="text-white text-lg">My Medium Blogs</h2>
            </div>
            <LinkButton href="/blog1">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span>🔒</span>
                  <span className="font-medium">Identity and Access Management</span>
                </div>
                <div className="text-sm text-gray-600">
                  Artificial Intelligence and Development Insights
                </div>
              </div>
            </LinkButton>
            <LinkButton href="/blog2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span>👆</span>
                  <span className="font-medium">More Articles</span>
                </div>
              </div>
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
