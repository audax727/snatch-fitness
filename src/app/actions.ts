// @/app/actions.ts
'use server';
import { enhanceLocationWithLandmarks } from '@/ai/flows/enhance-location-with-landmarks';

export async function fetchLandmarks() {
  try {
    const coordinates = {
      latitude: 17.5913423,
      longitude: 78.0754515,
    };
    const result = await enhanceLocationWithLandmarks(coordinates);
    return { success: true, data: result.landmarks };
  } catch (error) {
    console.error('Error fetching landmarks:', error);
    return { success: false, error: 'Failed to fetch landmarks.' };
  }
}
