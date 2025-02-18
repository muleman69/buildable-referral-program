import { useState } from 'react';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Mockup } from './components/ui/mockup';
import { Glow } from './components/ui/glow';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr,400px] lg:gap-12 xl:grid-cols-[1fr,600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge
                className="animate-appear [animation-delay:0.3s] [animation-fill-mode:backwards]"
                variant="secondary"
              >
                Introducing Euriqa
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-appear [animation-delay:0.4s] [animation-fill-mode:backwards]">
                The future of credit union operations is here
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 animate-appear [animation-delay:0.5s] [animation-fill-mode:backwards]">
                Experience the next generation of credit union operations. Streamlined, efficient, and designed for the future.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-appear [animation-delay:0.6s] [animation-fill-mode:backwards]">
              <Glow>
                <Button size="lg" className="group">
                  Get Started
                  <svg
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Button>
              </Glow>
              <Button variant="outline" size="lg">
                Book a Demo
              </Button>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[600px] animate-appear-zoom [animation-delay:0.7s] [animation-fill-mode:backwards]">
            <Mockup>
              <div className="aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  alt="Hero"
                  className="object-cover w-full h-full"
                  height="600"
                  src="/hero-image.jpg"
                  width="800"
                />
              </div>
            </Mockup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 