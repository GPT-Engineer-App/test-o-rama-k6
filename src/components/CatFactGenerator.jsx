import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const catFacts = [
  "Cats can rotate their ears 180 degrees.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have whiskers on the backs of their front legs.",
  "Cats can jump up to six times their length.",
  "A cat's nose print is unique, like a human's fingerprint.",
  "Cats can't taste sweetness.",
  "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus.",
  "Cats spend about 70% of their lives sleeping.",
  "A group of kittens is called a kindle.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
];

const CatFactGenerator = () => {
  const [fact, setFact] = useState("");

  const generateFact = () => {
    const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];
    setFact(randomFact);
  };

  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4 text-purple-600">Cat Fact Generator</h2>
        <p className="mb-4 min-h-[3em]">{fact || "Click the button to generate a cat fact!"}</p>
        <Button onClick={generateFact} className="bg-purple-500 hover:bg-purple-600 text-white">
          Generate Cat Fact
        </Button>
      </CardContent>
    </Card>
  );
};

export default CatFactGenerator;
