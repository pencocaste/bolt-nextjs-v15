import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import MenSidebar from '@/components/sidebars/MenSidebar';
import { MenStraightDescription } from '@/components/descriptions/MenStraightDescription';
import { MenStraightBottomDescription } from '@/components/descriptions/MenStraightBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Chaturbate Straight Male Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch Straight Male Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Straight Men. +300 Live Straight Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/men/straight/',
  },
};

export const dynamic = 'force-dynamic';

export default async function StraightPage() {
  const initialModels = await fetchModels('men', 1, 36, 'straight');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <MenSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <MenStraightDescription />
              </div>
              <ModelGrid 
                category="men" 
                initialModels={initialModels.results}
                tag="straight"
              />
              <div className="mt-8">
                <MenStraightBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}