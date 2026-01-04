import React from 'react';
import { SectionId } from '../types';
import { Button } from './Button';
import { Download, Mail } from 'lucide-react';

export const Sponsors: React.FC = () => {
    return (
        <section id={SectionId.SPONSORS} className="py-10 md:py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl bg-brand-dark overflow-hidden px-6 py-12 md:px-16 md:py-20 shadow-2xl shadow-brand-dark/10">

                    {/* Abstract shapes inside the box */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-deep/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

                    <div className="relative z-10 flex flex-col items-center text-center">
                        <div className="max-w-3xl mx-auto">
                            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Partenariat</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Devenir un Sponsor</h2>
                            <p className="text-brand-light text-lg mb-8 leading-relaxed">
                                Associez votre image aux valeurs d'excellence et d'engagement du CSA ALHILAL BBA.
                                Ensemble, construisons l'avenir du futsal algérien et offrez à votre marque une visibilité nationale.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a
                                    href="http://csa-alhilal.dz/files/Demande%20de%20Sponsoring.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-wide border border-transparent text-white bg-brand-primary hover:bg-brand-deep shadow-lg hover:shadow-brand-primary/30 focus:ring-brand-primary group"
                                >
                                    <Download className="mr-2 h-5 w-5" />
                                    Dossier de Sponsor
                                </a>
                                <Button variant="outline" className="group" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                                    <Mail className="mr-2 h-5 w-5" />
                                    Contactez-nous
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};