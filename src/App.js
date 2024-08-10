import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Camera, Moon, Sun, ChevronDown, Linkedin, Twitter, Globe } from 'lucide-react';


// Simulated data for the chart
const performanceData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
];

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'product', 'team', 'clients'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <header className="fixed w-full z-50 bg-white dark:bg-gray-900 transition-colors duration-300">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <a href="#home" className="text-2xl font-bold text-blue-600 dark:text-blue-400">Moontropy</a>
            </motion.div>
            <div className="hidden md:flex space-x-4">
              {['home', 'about', 'product', 'team', 'clients'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 ${
                    activeSection === item ? 'border-b-2 border-blue-600 dark:border-blue-400' : ''
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
            <div className="flex items-center">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="md:hidden ml-4">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-gray-700 dark:text-gray-300 focus:outline-none"
                >
                  <ChevronDown size={24} className={`transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
            </div>
          </div>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden mt-4"
              >
                {['home', 'about', 'product', 'team', 'clients'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="pt-16">
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 dark:from-blue-900 dark:to-purple-900">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4">Moontropy</h1>
            <p className="text-xl md:text-2xl mb-8">Empowering Accessibility Through AI</p>
            <a href="#product" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
              Discover Our Solutions
            </a>
          </motion.div>
        </section>

        <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">About Us</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Camera size={40} />, title: 'Innovation', description: 'Pushing the boundaries of technology' },
                { icon: <Moon size={40} />, title: 'User-Centric Design', description: 'Putting users at the heart of every product' },
                { icon: <Sun size={40} />, title: 'Reliability', description: 'Building trust through consistent performance' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-4">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="product" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Our Product: oto.do</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">AI-Driven Automation Suite</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  oto.do is an all-inclusive AI-driven automation suite designed to streamline operations on Android devices,
                  enhancing accessibility and efficiency.
                </p>
                <ul className="space-y-2">
                  {['Voice Commands', 'Automated Tasks', 'Custom Routines'].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <Camera size={20} className="mr-2 text-blue-600 dark:text-blue-400" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <XAxis dataKey="name" stroke="#888" />
                    <YAxis stroke="#888" />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Meet Our Innovators</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { name: 'Jagadish Rath', role: 'Founder & Architect', experience: '15+ years in tech, IIT Delhi alumnus' },
                { name: 'Anantha C', role: 'UX Design', experience: '10 years shaping user experiences' },
                { name: 'Gopal K Rath', role: 'Software Engineering', experience: '7+ years of innovative contributions' },
                { name: 'Sushrita Setty', role: 'Experience Design', experience: '10+ years creating engaging interfaces' },
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg text-center"
                >
                  <img src={`/api/placeholder/150/150?text=${member.name}`} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-2">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{member.experience}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-200">Our Clients</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Flipkart', 'Honeywell', 'Client 3', 'Client 4'].map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center"
                >
                  <img src={`/api/placeholder/150/80?text=${client}`} alt={client} className="max-w-full h-auto" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-2xl font-bold">Moontropy</h3>
              <p className="text-gray-400">Empowering Accessibility Through AI</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Globe size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400 text-sm">
            © 2024 Moontropy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;