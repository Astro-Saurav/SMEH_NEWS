import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function DeanMessagePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Dean’s Message
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1 flex flex-col items-center text-center">
              <div className="relative h-80 w-80 rounded-lg overflow-hidden shadow-lg mb-4">
                <Image
                  src="https://manavrachna.edu.in/uploads/faculty/Dr.Shilpi_Jha.webp"
                  alt="Portrait of the Dean, Dr. Shilpi Jha"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-2xl font-bold font-headline">Dr. Shilpi Jha</h2>
              <p className="text-muted-foreground font-semibold">Dean, SMeH</p>
            </div>
            <div className="md:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <Quote className="h-12 w-12 text-primary/50 transform -scale-x-100" />
              <p>
                It is with great pleasure that I welcome you to the School of Media and Humanities at Manav Rachna International Institute of Research and Studies. Our mission is to cultivate the next generation of media professionals, critical thinkers, and creative storytellers who will shape the future of communication.
              </p>
              <p>
                In an era of rapid technological advancement and evolving media landscapes, our focus is on providing a robust education that is both theoretically grounded and practically oriented. We are committed to fostering an environment of innovation, ethical practice, and intellectual curiosity. Our students are encouraged to explore, question, and create, supported by our distinguished faculty and state-of-the-art facilities.
              </p>
              <p>
                We believe in the power of media to inform, inspire, and bring about positive change in society. I invite you to explore the diverse opportunities our school offers and to join us on this exciting journey of learning and discovery.
              </p>
              <Quote className="h-12 w-12 text-primary/50 ml-auto" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
