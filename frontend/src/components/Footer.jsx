
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-yellow-600/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center shadow-lg shadow-yellow-500/20">
                <span className="text-black font-bold text-xl">IQ</span>
              </div>

              <span className="text-2xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
                IntelliQuery
              </span>
            </div>

            <p className="text-gray-400 max-w-md mb-4">
              Voice-driven conversational analytics platform that lets you query
              SQL and spreadsheet-style datasets using natural language.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-yellow-600/30 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} IntelliQuery-AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

