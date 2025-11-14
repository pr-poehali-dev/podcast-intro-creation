import { Radio } from 'lucide-react';
import Icon from '@/components/ui/icon';
import { useEffect, useState } from 'react';

const Index = () => {
  const [showVideo, setShowVideo] = useState(true);
  const [videoPhase, setVideoPhase] = useState<'earth' | 'logo' | 'complete'>('earth');

  useEffect(() => {
    const earthTimer = setTimeout(() => {
      setVideoPhase('logo');
    }, 3000);

    const completeTimer = setTimeout(() => {
      setVideoPhase('complete');
      setShowVideo(false);
    }, 6000);

    return () => {
      clearTimeout(earthTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  if (showVideo) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/b0b85770-bcce-42cf-9b13-6c342822a304/files/07983be1-3f95-473e-aac1-0d0ad631a35b.jpg')`,
            opacity: videoPhase === 'earth' ? 1 : 0,
            transform: videoPhase === 'earth' ? 'scale(1.2) translateY(0)' : 'scale(0.8) translateY(100px)'
          }}
        />
        
        <div 
          className="absolute inset-0 flex items-center justify-center transition-all duration-1000"
          style={{
            opacity: videoPhase === 'logo' ? 1 : 0,
            transform: videoPhase === 'logo' ? 'scale(1)' : 'scale(0.8)'
          }}
        >
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://cdn.poehali.dev/files/a93907d3-6c5e-40f0-b700-b12ea79822b9.png"
                alt="ПУ"
                className="w-48 h-48 mx-auto animate-fade-in"
              />
            </div>
            <h1 className="text-7xl font-bold text-white tracking-wider animate-fade-in">
              ПУСТЬ УСЛЫШАТ
            </h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A1F2C] via-[#1A1F2C] to-[#0c0f16] flex items-center justify-center p-4 overflow-hidden">
      <div className="relative w-full max-w-5xl">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="flex gap-2 items-end h-64">
            {[...Array(24)].map((_, i) => (
              <div
                key={i}
                className="w-2 bg-[#0EA5E9] rounded-full animate-pulse-wave"
                style={{
                  height: `${Math.random() * 60 + 20}%`,
                  animationDelay: `${i * 0.1}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/a93907d3-6c5e-40f0-b700-b12ea79822b9.png" 
                alt="Пусть Услышат"
                className="w-48 h-48 object-contain"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#0EA5E9] p-4 rounded-xl shadow-xl">
                <Icon name="Radio" size={32} className="text-white" />
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
            Пусть Услышат
          </h1>
          
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#0EA5E9] to-transparent mx-auto mb-6"></div>
          
          <p className="text-[#8E9196] text-xl md:text-2xl font-light tracking-wide">
            Подкаст о серьезных темах
          </p>
          
          <div className="mt-12 flex gap-4 items-center justify-center">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-[#0EA5E9] rounded-full animate-pulse-wave"
                style={{
                  height: `${30 + i * 10}px`,
                  animationDelay: `${i * 0.2}s`
                }}
              />
            ))}
            <div className="w-12 h-12 rounded-full bg-[#0EA5E9] flex items-center justify-center shadow-lg shadow-[#0EA5E9]/50 cursor-pointer hover:scale-110 transition-transform">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 bg-[#0EA5E9] rounded-full animate-pulse-wave"
                style={{
                  height: `${70 - i * 10}px`,
                  animationDelay: `${(i + 5) * 0.2}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
