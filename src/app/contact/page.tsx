import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  return (
     <div className="bg-background text-foreground">
      <section className="bg-muted dark:bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-6xl font-bold font-headline text-primary">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch with the School of Media and Humanities.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
             <h2 className="text-3xl font-bold font-headline">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea id="message" placeholder="Please type your message here..." className="min-h-[150px]" />
              </div>
              <Button type="submit" size="lg" className="w-full">Submit</Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold font-headline">Contact Information</h2>
            <div className="space-y-6 text-lg">
                <div className="flex items-start gap-4">
                    <MapPin className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Our Address</h3>
                        <p className="text-muted-foreground">
                            Manav Rachna Campus, Sector 43, Aravalli Hills,<br/>
                            Delhi - Surajkund Road, Faridabad, Haryana 121004
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Mail className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Email Us</h3>
                        <p className="text-muted-foreground hover:text-primary transition-colors">
                            <a href="mailto:smeh@mriirs.edu.in">smeh@mriirs.edu.in</a>
                        </p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="h-7 w-7 text-primary mt-1 flex-shrink-0" />
                    <div>
                        <h3 className="font-semibold">Call Us</h3>
                        <p className="text-muted-foreground">
                            +91-129-419-8100
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
