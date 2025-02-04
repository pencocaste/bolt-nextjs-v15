import { Metadata } from 'next';
import ModelGrid from '@/components/ModelGrid';
import TransSidebar from '@/components/sidebars/TransSidebar';
import { TransFeetDescription } from '@/components/descriptions/TransFeetDescription';
import { TransFeetBottomDescription } from '@/components/descriptions/TransFeetBottomDescription';
import { fetchModels } from '@/lib/api';

export const metadata: Metadata = {
  title: 'Chaturbate Feet Trans Cams ❤️ Live Sex Chat on Chaturbate.Lat',
  description: 'Watch Feet Sex Cams Shows for FREE. ⭐ Join our Adult Chat with Trans Models. +200 Live Feet Webcams. No Registration Required.',
  alternates: {
    canonical: 'https://chaturbate.lat/trans/feet/',
  },
};

export const dynamic = 'force-dynamic';

export default async function FeetPage() {
  const initialModels = await fetchModels('trans', 1, 36, 'feet');

  return (
    <div className="flex flex-col min-h-full">
      <div className="w-full bg-white flex-1">
        <div className="w-full px-4 md:w-[calc(100%-15px)] md:max-w-[2400px] mx-auto py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <TransSidebar />
            <div className="flex-1">
              <div className="mb-4 bg-white rounded-t-lg">
                <TransFeetDescription />
              </div>
              <ModelGrid 
                category="trans" 
                initialModels={initialModels.results}
                tag="feet"
              />
              <div className="mt-8">
                <TransFeetBottomDescription />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}