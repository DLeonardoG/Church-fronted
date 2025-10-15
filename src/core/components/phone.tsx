import { useState } from 'react';
import IPhoneHomeScreen from '@/core/components/IPhoneHomeScreen';
import { Button } from '@/core/components/ui/button';
import IphoneReels from '@/core/components/HealthScannerApp';


export default function Phone() {
  const [currentView, setCurrentView] = useState<'home' | 'app'>('home');

  return (
    <div className="h-full w-40 flex flex-col space-y-2 items-center">

      <div className="flex">
        <div className="bg-black/40 backdrop-blur-md rounded-full p-1 flex gap-1">
          <Button
            variant={currentView === 'home' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('home')}
            className="rounded-full text-white hover:text-black"
          >
            Instagram
          </Button>
          <Button
            variant={currentView === 'app' ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setCurrentView('app')}
            className="rounded-full text-white hover:text-black"
          >
            Reels
          </Button>
        </div>
      </div>

      {currentView === 'home' && <IPhoneHomeScreen />}
      {currentView === 'app' && <IphoneReels />}
      
    </div>
  );
}