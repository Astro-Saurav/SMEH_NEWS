import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const galleryImages = {
  campus: [
    { src: 'https://picsum.photos/seed/g-campus1/800/600', alt: 'University main building', hint: 'university building' },
    { src: 'https://picsum.photos/seed/g-campus2/600/800', alt: 'Library interior', hint: 'library interior' },
    { src: 'https://picsum.photos/seed/g-campus3/800/600', alt: 'Students walking on campus grounds', hint: 'students campus' },
    { src: 'https://picsum.photos/seed/g-campus4/800/600', alt: 'Sports complex', hint: 'sports complex' },
    { src: 'https://picsum.photos/seed/g-campus5/600/800', alt: 'Lush green campus area', hint: 'green campus' },
    { src: 'https://picsum.photos/seed/g-campus6/800/600', alt: 'Ariel view of the campus', hint: 'campus aerial' },
  ],
  events: [
    { src: 'https://picsum.photos/seed/g-event1/800/600', alt: 'Annual cultural festival', hint: 'cultural festival' },
    { src: 'https://picsum.photos/seed/g-event2/800/600', alt: 'Convocation ceremony', hint: 'convocation ceremony' },
    { src: 'https://picsum.photos/seed/g-event3/600/800', alt: 'Guest lecture in auditorium', hint: 'guest lecture' },
    { src: 'https://picsum.photos/seed/g-event4/800/600', alt: 'Tech fest project showcase', hint: 'tech fest' },
    { src: 'https://picsum.photos/seed/g-event5/800/600', alt: 'Sports day event', hint: 'sports day' },
  ],
  studentWork: [
    { src: 'https://picsum.photos/seed/g-work1/800/600', alt: 'Student photography project', hint: 'student photography' },
    { src: 'https://picsum.photos/seed/g-work2/600/800', alt: 'Film production still', hint: 'film set' },
    { src: 'https://picsum.photos/seed/g-work3/800/600', alt: 'Print magazine layout design', hint: 'magazine layout' },
    { src: 'https://picsum.photos/seed/g-work4/800/600', alt: 'Web journalism project screenshot', hint: 'web design' },
  ],
};

const ImageCard = ({ src, alt, hint }: { src: string; alt: string; hint: string }) => (
  <div className="relative aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-lg group shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover group-hover:scale-105 transition-transform duration-300"
    />
    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
        <p className="text-white text-sm font-semibold">{alt}</p>
    </div>
  </div>
);


export default function GalleryPage() {
  return (
     <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
              Gallery
            </h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              A visual journey through campus life, events, and student work.
            </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Tabs defaultValue="campus" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-12">
            <TabsTrigger value="campus">Campus Life</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="studentWork">Student Work</TabsTrigger>
          </TabsList>
          
          <TabsContent value="campus">
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {galleryImages.campus.map((img) => <ImageCard key={img.src} {...img} />)}
            </div>
          </TabsContent>
          <TabsContent value="events">
            <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {galleryImages.events.map((img) => <ImageCard key={img.src} {...img} />)}
            </div>
          </TabsContent>
          <TabsContent value="studentWork">
             <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {galleryImages.studentWork.map((img) => <ImageCard key={img.src} {...img} />)}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
