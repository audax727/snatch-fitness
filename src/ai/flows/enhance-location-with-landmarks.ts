'use server';

/**
 * @fileOverview Enhances a location with nearby landmarks using the Google Maps API.
 *
 * - enhanceLocationWithLandmarks - A function that takes a latitude and longitude and returns a list of nearby landmarks.
 * - EnhanceLocationWithLandmarksInput - The input type for the enhanceLocationWithLandmarks function.
 * - EnhanceLocationWithLandmarksOutput - The return type for the enhanceLocationWithLandmarks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceLocationWithLandmarksInputSchema = z.object({
  latitude: z.number().describe('The latitude of the location.'),
  longitude: z.number().describe('The longitude of the location.'),
});
export type EnhanceLocationWithLandmarksInput = z.infer<
  typeof EnhanceLocationWithLandmarksInputSchema
>;

const EnhanceLocationWithLandmarksOutputSchema = z.object({
  landmarks: z
    .array(z.string())
    .describe('A list of nearby landmarks, such as restaurants and parks.'),
});
export type EnhanceLocationWithLandmarksOutput = z.infer<
  typeof EnhanceLocationWithLandmarksOutputSchema
>;

export async function enhanceLocationWithLandmarks(
  input: EnhanceLocationWithLandmarksInput
): Promise<EnhanceLocationWithLandmarksOutput> {
  return enhanceLocationWithLandmarksFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceLocationWithLandmarksPrompt',
  input: {schema: EnhanceLocationWithLandmarksInputSchema},
  output: {schema: EnhanceLocationWithLandmarksOutputSchema},
  prompt: `You are a helpful assistant that provides a list of landmarks near a given location.

  Given the following latitude and longitude, please list some well known landmarks nearby.
  Latitude: {{{latitude}}}
  Longitude: {{{longitude}}}

  Examples of landmarks include restaurants, parks, and points of interest.
  Return the result as a list of strings.
  `,
});

const enhanceLocationWithLandmarksFlow = ai.defineFlow(
  {
    name: 'enhanceLocationWithLandmarksFlow',
    inputSchema: EnhanceLocationWithLandmarksInputSchema,
    outputSchema: EnhanceLocationWithLandmarksOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
