"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Sparkles } from 'lucide-react';
import { generateWhyUsDescriptions } from '@/ai/flows/ai-generated-why-us-descriptions';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  rawText: z.string().min(20, 'Please provide at least 20 characters of description.'),
});

const defaultRawText = "We are a family-run tailor shop in Bangalore. We are fast and use good quality cloth. We make sarees, blouses, and dresses. We have been here for a long time.";

export function WhyUsGenerator() {
  const [isLoading, setIsLoading] = useState(false);
  const [bulletPoints, setBulletPoints] = useState<string[] | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      rawText: defaultRawText,
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setBulletPoints(null);
    try {
      const result = await generateWhyUsDescriptions(data);
      setBulletPoints(result.bulletPoints);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to generate descriptions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="rawText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Business Description (Raw Notes)</FormLabel>
                <FormControl>
                  <Textarea rows={4} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading} className="w-full">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Generate Bullet Points
          </Button>
        </form>
      </Form>

      {bulletPoints && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">AI-Generated Points:</h4>
          <ul className="space-y-2 list-disc list-inside bg-muted p-4 rounded-md">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
