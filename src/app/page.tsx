import Hero from "../components/Hero";
import Section from "../components/Section";
import { farmingData } from "../constants/farming";

export default function Home() {
  return (
    <div>
      <Hero />
      <Section title="Sustainable Farming Techniques" content={farmingData} />
    </div>
  );
}