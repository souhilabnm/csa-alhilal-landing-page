import React from 'react';
import { SectionId } from '../types';

export const About: React.FC = () => {
  return (
    <section id={SectionId.ABOUT} className="bg-white py-10 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Text Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start mb-10 md:mb-20">
            <div>
                <span className="inline-block py-1 px-3 rounded-full bg-brand-ice text-brand-deep text-xs font-bold uppercase tracking-wider mb-4 md:mb-6">
                    À Propos
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-brand-dark leading-tight">
                    Nous ne jouons pas seulement au futsal,<br/>
                    <span className="text-brand-primary">nous le vivons.</span>
                </h2>
            </div>
            <div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    Fondé en 2024, le CSA ALHILAL BBA aspire à devenir un club de référence nationale. Nous intégrons le championnat Nationale 1 dès la saison 2025 avec une ambition claire : l'excellence.
                </p>
                <p className="text-gray-600 leading-relaxed">
                    Notre vision s'articule autour de l'accès durable à l'élite, le développement de jeunes talents via notre académie, et la promotion d'une image responsable et dynamique.
                </p>
            </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 py-8 md:py-12 border-t border-gray-100">
            <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">2024</p>
                <p className="text-brand-primary font-medium">Année de Fondation</p>
            </div>
            <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">NAT 1</p>
                <p className="text-brand-primary font-medium">Division 2025</p>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
                <p className="text-4xl md:text-5xl font-bold text-brand-dark mb-2">3</p>
                <p className="text-brand-primary font-medium">Catégories d'Équipes</p>
            </div>
        </div>

      </div>
    </section>
  );
};