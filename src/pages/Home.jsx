import Hero from "../components/Hero";
import Statistics from "../components/Statistics";
import About from "../components/About";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5ED] text-[#11130F]">
      <Hero />
      <Statistics />
      <About />
      <Services />
      <Testimonials />
    </main>
  );
}

export default Home;
