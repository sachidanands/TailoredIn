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
    question: "How to Contact?",
    answer: "Simply click on Call us CTA available in header or call us on the number mentioned on the footer."
  },
  {
    question: "How to speak to tailor?",
    answer: "Call and speak to representative, share the area details, moderator will confirm if the location can be serviced. If Serviced he will schedule a time with tailor."
  },
  {
    question: "What is the turn around time?",
    answer: "Usually tailor will turn around is within an hour, if the location is serviced."
  },
  {
    question: "How do the measurement and material are finalized?",
    answer: "We usually request our customer to share existing used blouse as sample of measurement, however if customer does not have the latest size blouse, we guide you to take the measurement an share the size like shown below.",
    imageId: "blouse-measurement"
  },
  {
    question: "How to setup a pickup and drop?",
    answer: "Once the material is collected and details/Size are finalized, tailored will send representative and pick the material and complete the task and call back and setup delivery time."
  },
  {
    question: "Do we own a shop?",
    answer: "No, we do not own shop we are small group of people trying to empower women through this."
  },
  {
    question: "Do we take Commercial Order?",
    answer: "No, we are not enterprise or process any bill or invoice we are indivual group who does just like you visit to open shop and do the txn."
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
