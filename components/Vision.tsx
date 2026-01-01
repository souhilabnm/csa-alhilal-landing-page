import React from 'react';
import { SectionId } from '../types';
import { Crown, Rocket, Globe } from 'lucide-react';

export const Vision: React.FC = () => {
  const pillars = [
    {
      title: "Accès à l'Élite",
      description: "Viser l'accès durable à l'élite du futsal algérien, en figurant parmi les meilleurs clubs du pays avec des performances constantes au plus haut niveau.",
      icon: <Crown className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Formation des Talents",
      description: "Développer les jeunes talents locaux à travers la création d'une académie de futsal performante et professionnelle, garantissant l'avenir du club.",
      icon: <Rocket className="w-8 h-8" strokeWidth={1.5} />
    },
    {
      title: "Rayonnement National",
      description: "Promouvoir une image forte, dynamique et responsable du club et de ses partenaires sur l'ensemble du territoire national algérien.",
      icon: <Globe className="w-8 h-8" strokeWidth={1.5} /> 
    }
  ];

  return (
    <section id={SectionId.VISION} className="py-10 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Notre Trajectoire</span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-6">Une Vision d'Avenir</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            CSA ALHILAL BBA aspire à devenir un club de référence, reconnu pour l'excellence de sa gestion, 
            la qualité de sa formation et ses performances sportives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="group p-8 rounded-3xl bg-brand-ice/20 border border-brand-ice/50 hover:bg-white hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-500">
              <div className="w-16 h-16 rounded-2xl bg-white border border-brand-ice flex items-center justify-center text-brand-primary mb-6 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-sm">
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors">{pillar.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};