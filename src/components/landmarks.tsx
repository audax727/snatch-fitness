'use client';

import { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';
import { fetchLandmarks } from '@/app/actions';
import { Skeleton } from '@/components/ui/skeleton';

export default function Landmarks() {
  const [landmarks, setLandmarks] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadLandmarks() {
      setLoading(true);
      setError(null);
      const result = await fetchLandmarks();
      if (result.success && result.data) {
        setLandmarks(result.data);
      } else {
        setError(result.error || 'An unknown error occurred.');
      }
      setLoading(false);
    }
    loadLandmarks();
  }, []);

  return (
    <div className="mt-6">
      <h3 className="font-headline text-xl font-semibold text-neutral-800">Nearby Landmarks</h3>
      {loading && (
        <div className="space-y-3 mt-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <Skeleton className="h-5 w-5 rounded-full" />
              <Skeleton className="h-4 w-48" />
            </div>
          ))}
        </div>
      )}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {!loading && !error && landmarks.length > 0 && (
        <ul className="mt-4 space-y-3 font-body text-neutral-600">
          {landmarks.map((landmark, index) => (
            <li key={index} className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{landmark}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
