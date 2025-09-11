'use server';
/**
 * @fileOverview Generates AI-powered descriptions for the 'Why Us' section of a tailor's website.
 *
 * - generateWhyUsDescriptions - A function that generates compelling bullet points for the 'Why Us' section.
 * - GenerateWhyUsDescriptionsInput - The input type for the generateWhyUsDescriptions function.
 * - GenerateWhyUsDescriptionsOutput - The return type for the generateWhyUsDescriptions function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWhyUsDescriptionsInputSchema = z.object({
  rawText: z
    .string()
    .describe('Raw text describing the tailor business and its unique selling points.'),
});
export type GenerateWhyUsDescriptionsInput = z.infer<
  typeof GenerateWhyUsDescriptionsInputSchema
>;

const GenerateWhyUsDescriptionsOutputSchema = z.object({
  bulletPoints: z
    .array(z.string())
    .describe('An array of AI-generated bullet points for the Why Us section.'),
});
export type GenerateWhyUsDescriptionsOutput = z.infer<
  typeof GenerateWhyUsDescriptionsOutputSchema
>;

export async function generateWhyUsDescriptions(
  input: GenerateWhyUsDescriptionsInput
): Promise<GenerateWhyUsDescriptionsOutput> {
  return generateWhyUsDescriptionsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWhyUsDescriptionsPrompt',
  input: {schema: GenerateWhyUsDescriptionsInputSchema},
  output: {schema: GenerateWhyUsDescriptionsOutputSchema},
  prompt: `You are a marketing expert specializing in crafting compelling bullet points for the 'Why Us' section of websites.

  Based on the following raw text describing a tailor business, generate 3-5 concise and persuasive bullet points highlighting the unique advantages of choosing this tailor.

  Raw Text: {{{rawText}}}

  Bullet Points:`, // Ensure LLM provides bullet points directly
});

const generateWhyUsDescriptionsFlow = ai.defineFlow(
  {
    name: 'generateWhyUsDescriptionsFlow',
    inputSchema: GenerateWhyUsDescriptionsInputSchema,
    outputSchema: GenerateWhyUsDescriptionsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
