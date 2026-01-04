import React from 'react';
import { SectionId } from '../types';
import { Users, Clock, Trophy, ArrowRight } from 'lucide-react';

const teamsData = [
  {
    id: 'u10',
    title: 'Équipe U10-U13',
    category: 'Académie de Base',
    image: 'https://csa-alhilal.dz/img/u10.jpg',
    objective: 'Former les jeunes joueurs aux bases du futsal : technique individuelle, tactique collective et valeurs sportives.',
    stats: {
      age: '(8-10 ans) (10-13 ans)',
      training: '2 Séances / sem.',
      match: '15 - 20 Matchs'
    }
  },
  {
    id: 'u17',
    title: 'Équipe U17',
    category: 'Formation Élite',
    image: 'https://csa-alhilal.dz/img/U17.jpg',
    objective: 'Préparer les futurs joueurs de l\'équipe Senior avec une maîtrise technique avancée et une préparation physique intensive.',
    stats: {
      age: '15 - 17 ans',
      training: '3 Séances / sem.',
      match: '20 - 25 Matchs'
    }
  },
  {
    id: 'senior',
    title: 'Équipe Senior',
    category: 'Nationale 1',
    image: 'https://csa-alhilal.dz/img/senior.jpg',
    objective: 'Fer de lance du club en Nationale 1. Objectif Excellence 2026 : Confirmer notre statut et viser le haut du tableau.',
    stats: {
      age: '18+ ans',
      training: '4 - 5 Séances / sem.',
      match: 'Compétition Nat. 1'
    }
  }
];

export const Teams: React.FC = () => {
  return (
    <section id={SectionId.TEAMS} className="py-10 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
          <div>
            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nos Catégories</span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-dark mb-4">La Formation d'Excellence</h2>
            <p className="text-gray-600 max-w-xl text-lg">
              Du développement des jeunes talents à la compétition d'élite, découvrez nos effectifs pour cette saison 2026.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamsData.map((team) => (
            <div key={team.id} className="group relative rounded-3xl overflow-hidden min-h-[550px] hover:shadow-2xl hover:shadow-brand-deep/30 transition-all duration-500 flex flex-col">
              {/* Image Background */}
              <div className="absolute inset-0">
                <img
                  src={team.image}
                  alt={`Équipe ${team.title} - ${team.category} du CSA ALHILAL BBA`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-dark/90 to-transparent/20 opacity-95"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 flex flex-col h-full">

                {/* Category Badge */}
                <div className="flex justify-between items-start mb-auto">
                  <span className="inline-block px-4 py-1.5 bg-brand-primary text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-lg backdrop-blur-md border border-white/10">
                    {team.category}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-3xl font-bold text-white mb-3 tracking-tight">{team.title}</h3>

                  <p className="text-brand-ice/90 text-sm leading-relaxed mb-8 border-l-2 border-brand-primary pl-4">
                    {team.objective}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/5 hover:bg-white/20 transition-colors">
                      <div className="flex items-center gap-2 text-brand-light mb-1.5">
                        <Users size={16} />
                        <span className="text-xs uppercase font-bold tracking-wider">Âge</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{team.stats.age}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/5 hover:bg-white/20 transition-colors">
                      <div className="flex items-center gap-2 text-brand-light mb-1.5">
                        <Clock size={16} />
                        <span className="text-xs uppercase font-bold tracking-wider">Rythme</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{team.stats.training}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/5 hover:bg-white/20 transition-colors col-span-2">
                      <div className="flex items-center gap-2 text-brand-light mb-1.5">
                        <Trophy size={16} />
                        <span className="text-xs uppercase font-bold tracking-wider">Compétition</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{team.stats.match}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};