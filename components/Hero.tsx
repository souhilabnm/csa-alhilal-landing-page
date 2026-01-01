import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const scrollToSponsors = () => {
    const element = document.getElementById('sponsors');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-10 lg:pt-40 lg:pb-12 overflow-hidden bg-white">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden min-h-[600px] flex items-center justify-center text-center px-4 py-20">
            
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                src="https://csa-alhilal.dz/img/hero.jpg" 
                alt="Équipe de futsal CSA ALHILAL BBA en action sur le terrain" 
                className="w-full h-full object-cover position-center"
                />
                {/* Gradient Overlay using Odyssey Colors */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-primary/40 to-transparent"></div>
                <div className="absolute inset-0 bg-brand-dark/20 mix-blend-multiply"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                
                {/* Logo */}
                <img 
                  src="https://csa-alhilal.dz/img/logo%20elhilal.svg" 
                  alt="CSA ALHILAL BBA Logo" 
                  className="h-24 md:h-32 w-auto mb-8 drop-shadow-2xl"
                />

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-tight">
                    L'Excellence du <br/>
                    <span className="text-brand-light">Futsal Algérien</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-brand-ice mb-10 max-w-2xl font-light leading-relaxed">
                    Rejoignez le CSA ALHILAL BBA. Une vision ambitieuse, une formation d'élite, une passion sans limite.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="primary" className="rounded-full px-8 py-4 text-lg shadow-brand-primary/50" onClick={scrollToSponsors}>
                        Devenir Partenaire
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};