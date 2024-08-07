import { useState, useEffect } from "react";
import { Cat, Heart } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import CatFactGenerator from "../components/CatFactGenerator";

const catImages = [
  "https://placekitten.com/800/400",
  "https://placekitten.com/801/400",
  "https://placekitten.com/802/400",
  "https://placekitten.com/803/400",
];

const catBreeds = [
  { name: "Siamese", origin: "Thailand" },
  { name: "Persian", origin: "Iran" },
  { name: "Maine Coon", origin: "United States" },
  { name: "British Shorthair", origin: "United Kingdom" },
  { name: "Sphynx", origin: "Canada" },
  { name: "Bengal", origin: "United States" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-600">
          <Cat className="mr-2" /> Purrfect Cat Paradise
        </h1>

        <Slider {...sliderSettings} className="mb-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">Fascinating Feline Facts</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Cats have been domesticated for over 4,000 years.</li>
                <li>They can make over 100 different vocal sounds.</li>
                <li>A group of cats is called a "clowder".</li>
                <li>Cats spend 70% of their lives sleeping.</li>
                <li>They have an excellent sense of balance and flexible bodies.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-600">Popular Cat Breeds</h2>
              <ul className="grid grid-cols-2 gap-4">
                {catBreeds.map((breed, index) => (
                  <li key={index} className="bg-purple-100 p-3 rounded">
                    <span className="font-semibold">{breed.name}</span>
                    <br />
                    <span className="text-sm text-gray-600">Origin: {breed.origin}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <CatFactGenerator />

        <div className="text-center mt-8">
          <Button
            onClick={() => setLikes(likes + 1)}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            <Heart className="mr-2" /> Like Cats ({likes})
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
