"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Slide {
  id: number;
  image: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/58d3b989-a649-47f5-81fe-1f0c04193c0e/generated_images/wide-panoramic-landscape-photograph-of-a-baa919eb-20251130201225.jpg",
    title: "Discover Amazing Adventures",
    description: "Embark on unforgettable journeys to breathtaking destinations around the world. Experience cultures, landscapes, and memories that will last a lifetime."
  },
  {
    id: 2,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/58d3b989-a649-47f5-81fe-1f0c04193c0e/generated_images/modern-minimalist-architectural-interior-ada3fe1b-20251130201225.jpg",
    title: "Modern Innovation & Design",
    description: "Explore cutting-edge technology and sleek design that pushes boundaries. Where creativity meets functionality in perfect harmony."
  },
  {
    id: 3,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/58d3b989-a649-47f5-81fe-1f0c04193c0e/generated_images/serene-nature-scene-of-a-peaceful-forest-10fe7ea5-20251130201225.jpg",
    title: "Nature's Tranquil Beauty",
    description: "Find peace and serenity in the natural world. Reconnect with the earth and discover the simple joys of outdoor exploration."
  },
  {
    id: 4,
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/58d3b989-a649-47f5-81fe-1f0c04193c0e/generated_images/vibrant-urban-cityscape-photograph-at-go-1552b68b-20251130201225.jpg",
    title: "Urban Energy & Culture",
    description: "Immerse yourself in the vibrant pulse of city life. Where architecture, art, and diverse communities create an electric atmosphere."
  }
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="w-full">
      {/* Carousel Header */}
      <div className="relative h-[500px] w-full overflow-hidden bg-black">
        {/* Images */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/20 p-2 backdrop-blur-sm transition-all hover:bg-white/30"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Dynamic Text Content */}
      <div className="mx-auto max-w-4xl px-6 py-16">
        <div
          key={currentSlide}
          className="animate-fadeIn"
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            {currentSlideData.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            {currentSlideData.description}
          </p>
        </div>
      </div>
    </div>
  );
}