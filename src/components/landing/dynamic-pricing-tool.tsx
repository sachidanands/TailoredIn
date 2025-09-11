"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';
import { getDynamicPricingSuggestions, type DynamicPricingSuggestionsOutput } from '@/ai/flows/dynamic-pricing-suggestions';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  timeOfYear: z.string().min(1, 'Please select a time of year.'),
  currentPriceList: z.string().min(10, 'Please provide a current price list.'),
  competitorPrices: z.string().min(10, 'Please provide competitor prices.'),
  location: z.string().min(1, 'Location is required.').default('Bangalore'),
});

const defaultPriceList = `Blouse (Simple): 500
Salwar Kameez: 800
Lehenga Choli: 3000`;
const defaultCompetitorPrices = `Competitor A Blouse: 450
Competitor B Salwar: 850`;

export function DynamicPricingTool() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState<DynamicPricingSuggestionsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      timeOfYear: 'Wedding Season',
      currentPriceList: defaultPriceList,
      competitorPrices: defaultCompetitorPrices,
      location: 'Bangalore',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);
    setSuggestions(null);
    try {
      const result = await getDynamicPricingSuggestions(data);
      setSuggestions(result);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "An error occurred",
        description: "Failed to get pricing suggestions. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="mt-4">
          Launch AI Pricing Demo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>AI Dynamic Pricing Suggestions</DialogTitle>
          <DialogDescription>
            This tool demonstrates how we use AI to analyze market data and suggest optimal pricing.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="timeOfYear"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Time of Year</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a season" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Wedding Season">Wedding Season (Oct - Feb)</SelectItem>
                        <SelectItem value="Festival Season">Festival Season (Aug - Oct)</SelectItem>
                        <SelectItem value="Summer">Summer (Mar - May)</SelectItem>
                        <SelectItem value="Off-Season">Off-Season (Jun - Jul)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="currentPriceList"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Our Current Prices (Sample)</FormLabel>
                    <FormControl>
                      <Textarea rows={4} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="competitorPrices"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Competitor Prices (Sample)</FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Location</FormLabel>
                    <FormControl>
                      <Input {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               <Button type="submit" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Get AI Suggestions
              </Button>
            </form>
          </Form>

          {isLoading && (
             <div className="flex justify-center items-center p-8">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
             </div>
          )}

          {suggestions && (
            <div className="mt-6 space-y-4">
                <Card>
                    <CardHeader><CardTitle>Suggested Pricing</CardTitle></CardHeader>
                    <CardContent><p className="whitespace-pre-wrap">{suggestions.suggestedPricing}</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Recommended Deals</CardTitle></CardHeader>
                    <CardContent><p className="whitespace-pre-wrap">{suggestions.recommendedDeals}</p></CardContent>
                </Card>
                 <Card>
                    <CardHeader><CardTitle>Reasoning</CardTitle></CardHeader>
                    <CardContent><p className="whitespace-pre-wrap">{suggestions.reasoning}</p></CardContent>
                </Card>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
