import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import FemaleSidebar from '@/components/sidebars/FemaleSidebar';
import { PregnantDescription } from '@/components/descriptions/PregnantDescription';
import { PregnantBottomDescription } from '@/components/descriptions/PregnantBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Chaturbate Pregnant Cams ❤️ Live Pregnant Sex Chat on Chaturbate.Lat',
  description: 'Watch Pregnant Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Pregnant Women. +100 Live Pregnant Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/female/pregnant/',
  },
};

export const dynamic = 'force-dynamic';

export default async function PregnantPage() {
  const initialModels = await fetchModels('girls', 1, 36, 'pregnant');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <FemaleSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <PregnantDescription />
              </div>
              <ModelGrid 
                category="girls" 
                initialModels={initialModels.results}
                tag="pregnant"
              />
              <div className="mt-8">
                <PregnantBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}