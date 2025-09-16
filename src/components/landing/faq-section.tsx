import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from '@/components/scroll-reveal';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const faqItems = [
  {
    question: "What's the best way to contact you for tailoring services in Bangalore?",
    answer: "Getting in touch is easy! Simply click the prominent 'Call Now' button on our website or use the phone number listed in the footer. We're ready to discuss your custom tailoring needs."
  },
  {
    question: "How do I schedule a consultation with a tailor?",
    answer: "Just give us a call. Our representative will ask for your location to confirm service availability. If your area is covered, we will promptly schedule a convenient time for you to speak directly with one of our experienced tailors."
  },
  {
    question: "What is your typical turnaround time for tailoring?",
    answer: "For initial consultations and pickups in our serviced areas, we can typically have a representative with you within the hour. The timeline for completing your garment will be confirmed once we finalize the design and materials."
  },
  {
    question: "How do you handle measurements and material selection?",
    answer: "For a perfect fit, we recommend providing a well-fitting existing garment as a measurement sample. If you don't have one, don't worry! We will guide you through taking accurate measurements yourself. You can see an example in the image below.",
    imageId: "blouse-measurement"
  },
  {
    question: "What is the process for pickup and delivery?",
    answer: "Once we've finalized the design, measurements, and materials, our representative will arrange to pick up the fabric from you. After the tailoring is complete, we'll contact you to schedule a convenient delivery time."
  },
  {
    question: "Do you have a physical shop I can visit?",
    answer: "We operate as a collective of skilled independent tailors dedicated to empowering women through their craft. We don't have a traditional brick-and-mortar shop, allowing us to focus on providing personalized, at-your-doorstep service."
  },
  {
    question: "Do you accept large commercial or bulk orders?",
    answer: "Our focus is on providing bespoke, individual tailoring services. We operate much like a personal tailor you would visit for specialized attention and do not handle commercial invoicing or bulk enterprise orders."
  }
];

export function FaqSection() {
  const measurementImage = PlaceHolderImages.find(p => p.id === 'blouse-measurement');
  return (
    <section id="faq" className="bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Frequently Asked Questions</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions? We have answers.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    <p>{item.answer}</p>
                    {item.imageId && measurementImage && (
                       <div className="mt-4">
                        <Image
                          src={measurementImage.imageUrl}
                          alt={measurementImage.description}
                          width={600}
                          height={400}
                          className="w-full h-auto rounded-lg object-cover"
                          data-ai-hint={measurementImage.imageHint}
                        />
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
