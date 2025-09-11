'use server';

/**
 * @fileOverview A dynamic pricing suggestion AI agent.
 *
 * - getDynamicPricingSuggestions - A function that suggests optimal pricing and deals for tailoring services.
 * - DynamicPricingSuggestionsInput - The input type for the getDynamicPricingSuggestions function.
 * - DynamicPricingSuggestionsOutput - The return type for the getDynamicPricingSuggestions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicPricingSuggestionsInputSchema = z.object({
  timeOfYear: z
    .string()
    .describe("The current time of year (e.g., 'summer', 'holiday season')."),
  currentPriceList: z
    .string()
    .describe('The current price list for tailoring services.'),
  competitorPrices: z.string().describe('Competitor prices for similar services.'),
  location: z.string().describe('The location of the tailoring service (e.g., Bangalore).'),
});
export type DynamicPricingSuggestionsInput = z.infer<
  typeof DynamicPricingSuggestionsInputSchema
>;

const DynamicPricingSuggestionsOutputSchema = z.object({
  suggestedPricing: z
    .string()
    .describe('Suggested pricing adjustments for each service.'),
  recommendedDeals: z
    .string()
    .describe('Recommended deals and promotions to attract customers.'),
  reasoning: z.string().describe('The reasoning behind the suggested pricing and deals.'),
});
export type DynamicPricingSuggestionsOutput = z.infer<
  typeof DynamicPricingSuggestionsOutputSchema
>;

export async function getDynamicPricingSuggestions(
  input: DynamicPricingSuggestionsInput
): Promise<DynamicPricingSuggestionsOutput> {
  return dynamicPricingSuggestionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'dynamicPricingSuggestionsPrompt',
  input: {
    schema: DynamicPricingSuggestionsInputSchema,
  },
  output: {
    schema: DynamicPricingSuggestionsOutputSchema,
  },
  prompt: `You are an expert in pricing strategy for ladies tailoring services, particularly in Bangalore.

Analyze the current market conditions, competitor prices, and time of year to suggest optimal pricing and deals.

Current Time of Year: {{{timeOfYear}}}
Current Price List: {{{currentPriceList}}}
Competitor Prices: {{{competitorPrices}}}
Location: {{{location}}}

Consider factors such as seasonal demand, local events, and competitor offerings.
Provide a detailed explanation of your reasoning for each suggestion.

Output your suggested pricing, recommended deals, and reasoning in a clear and concise manner.

Follow this example:

Suggested Pricing:
- Service 1: New Price
- Service 2: New Price
...

Recommended Deals:
- Deal 1: Description
- Deal 2: Description
...

Reasoning: Explanation of why these changes are recommended.
`,
});

const dynamicPricingSuggestionsFlow = ai.defineFlow(
  {
    name: 'dynamicPricingSuggestionsFlow',
    inputSchema: DynamicPricingSuggestionsInputSchema,
    outputSchema: DynamicPricingSuggestionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
