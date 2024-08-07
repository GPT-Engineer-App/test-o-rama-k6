import { useState, useEffect } from "react";
import { Cat, Heart, Moon, Sun, Paw, Info, Award } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip } from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Tooltip } from "@/components/ui/tooltip";
import CatFactGenerator from "../components/CatFactGenerator";
import { motion, AnimatePresence } from "framer-motion";

const catImages = [
  "https://placekitten.com/800/400",
  "https://placekitten.com/801/400",
  "https://placekitten.com/802/400",
  "https://placekitten.com/803/400",
];

const catBreeds = [
  { name: "Siamese", origin: "Thailand", personality: "Vocal and affectionate" },
  { name: "Persian", origin: "Iran", personality: "Calm and gentle" },
  { name: "Maine Coon", origin: "United States", personality: "Friendly and playful" },
  { name: "British Shorthair", origin: "United Kingdom", personality: "Easygoing and quiet" },
  { name: "Sphynx", origin: "Canada", personality: "Energetic and mischievous" },
  { name: "Bengal", origin: "United States", personality: "Active and curious" },
];

const catAdoptions = [
  { name: "Whiskers", age: 2, image: "https://placekitten.com/300/300", personality: "Playful and cuddly" },
  { name: "Luna", age: 1, image: "https://placekitten.com/301/300", personality: "Gentle and shy" },
  { name: "Oliver", age: 3, image: "https://placekitten.com/302/300", personality: "Adventurous and friendly" },
  { name: "Milo", age: 4, image: "https://placekitten.com/303/300", personality: "Calm and independent" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState("facts");

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} transition-colors duration-300`}>
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          >
            <img src="https://placekitten.com/1200/800" alt="Cat background" className="w-full h-full object-cover" />
          </motion.div>
        </div>
        <div className="relative z-10 text-center text-white bg-black bg-opacity-50 p-8 rounded-lg">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold mb-6 flex items-center justify-center"
          >
            <Cat className="mr-2" /> Purrfect Cat Paradise
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl"
          >
            Discover the magical world of cats
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-end mb-4">
          <div className="flex items-center">
            <Sun className="h-4 w-4 mr-2" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            <Moon className="h-4 w-4 ml-2" />
          </div>
        </div>

        <Slider {...sliderSettings} className="mb-12">
          {catImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Cat ${index + 1}`}
                className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="facts">
              <Info className="mr-2" /> Cat Facts
            </TabsTrigger>
            <TabsTrigger value="breeds">
              <Paw className="mr-2" /> Cat Breeds
            </TabsTrigger>
            <TabsTrigger value="adopt">
              <Heart className="mr-2" /> Adopt a Cat
            </TabsTrigger>
          </TabsList>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TabsContent value="facts">
                <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
                  <CardContent className="p-6">
                    <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Fascinating Feline Facts</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Cats have been domesticated for over 4,000 years.</li>
                      <li>They can make over 100 different vocal sounds.</li>
                      <li>A group of cats is called a "clowder".</li>
                      <li>Cats spend 70% of their lives sleeping.</li>
                      <li>They have an excellent sense of balance and flexible bodies.</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="breeds">
                <Card className={`${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-300`}>
                  <CardContent className="p-6">
                    <h2 className={`text-2xl font-semibold mb-4 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Popular Cat Breeds</h2>
                    <ul className="grid grid-cols-2 gap-4">
                      {catBreeds.map((breed, index) => (
                        <motion.li 
                          key={index} 
                          className={`${darkMode ? 'bg-gray-700' : 'bg-purple-100'} p-3 rounded transition-colors duration-300`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="font-semibold">{breed.name}</span>
                          <br />
                          <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Origin: {breed.origin}</span>
                          <br />
                          <Badge variant="secondary" className="mt-2">{breed.personality}</Badge>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="adopt">
                <h2 className={`text-3xl font-semibold mb-6 ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>Adopt a Furry Friend</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {catAdoptions.map((cat, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden transition-colors duration-300`}
                    >
                      <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover" />
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{cat.name}</h3>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Age: {cat.age} years</p>
                        <Badge className="mt-2 mb-4">{cat.personality}</Badge>
                        <Tooltip content="Start the adoption process">
                          <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                            Adopt Me
                          </Button>
                        </Tooltip>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            </motion.div>
          </AnimatePresence>
        </Tabs>

        <CatFactGenerator darkMode={darkMode} />

        <motion.div 
          className="text-center mt-12"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => setLikes(likes + 1)}
            className="bg-pink-500 hover:bg-pink-600 text-white text-xl py-3 px-6"
          >
            <Heart className="mr-2" /> Like Cats ({likes})
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12 text-center"
        >
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Made with <Heart className="inline-block text-pink-500" /> by cat lovers, for cat lovers
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;
