import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin, ArrowUpRight, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const SocialLink = ({ href, icon: Icon }: { href: string, icon: any }) => (
        <a
            href={href}
            className="group w-12 h-12 rounded-full bg-brand-ice flex items-center justify-center text-brand-dark hover:bg-brand-primary hover:text-white transition-all duration-300 shadow-sm hover:shadow-brand-primary/30 hover:-translate-y-1"
        >
            <Icon size={22} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
        </a>
    );

    return (
        <footer id="contact" className="bg-white pt-12 md:pt-24 pb-8 md:pb-12 relative overflow-hidden">
            {/* Background Gradients - Subtle for light mode */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[700px] h-[700px] bg-brand-ice/40 rounded-full blur-[100px] opacity-60"></div>
                <div className="absolute bottom-[-10%] -left-[10%] w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <div className="mb-10 md:mb-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
                        <div>
                            <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Contact</span>
                            <h2 className="text-4xl md:text-6xl font-bold text-brand-dark">Restons en contact</h2>
                        </div>

                        {/* Desktop Icons Placement - Right of Heading */}
                        <div className="hidden md:flex gap-4 pb-2">
                            <SocialLink href="#" icon={Facebook} />
                            <SocialLink href="#" icon={Instagram} />
                        </div>
                    </div>

                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                        Vous souhaitez inscrire votre enfant ou simplement en savoir plus ?
                        Notre équipe est à votre disposition.
                    </p>

                    {/* Mobile Icons Placement - Under Description */}
                    <div className="flex md:hidden gap-4 mt-8">
                        <SocialLink href="#" icon={Facebook} />
                        <SocialLink href="#" icon={Instagram} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 md:mb-20">
                    {/* Phone Card */}
                    <a href="tel:+213660521634" className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-sm">
                        <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Phone size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">Téléphone</h3>
                        <p className="text-gray-500 mb-8">Discutons de vive voix.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-lg text-brand-dark font-medium">+213 660 521 634</span>
                            <div className="w-10 h-10 rounded-full bg-brand-ice flex items-center justify-center text-brand-dark opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </a>

                    {/* Email Card */}
                    <a href="mailto:contact@csa-alhilal.dz" className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-sm">
                        <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                            <Mail size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">Email</h3>
                        <p className="text-gray-500 mb-8">Écrivez-nous à tout moment.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-lg text-brand-dark font-medium">contact@csa-alhilal.dz</span>
                            <div className="w-10 h-10 rounded-full bg-brand-ice flex items-center justify-center text-brand-dark opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                                <ArrowUpRight size={20} />
                            </div>
                        </div>
                    </a>

                    {/* Location Card */}
                    <div className="group relative bg-white border border-gray-100 rounded-3xl p-8 hover:shadow-xl hover:shadow-brand-deep/5 transition-all duration-500 hover:-translate-y-2 flex flex-col shadow-sm">
                        <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-8 group-hover:scale-110 transition-transform duration-500">
                            <MapPin size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-brand-dark mb-2">Siège</h3>
                        <p className="text-gray-500 mb-8">Venez nous rencontrer.</p>
                        <div className="flex items-center justify-between mt-auto">
                            <span className="text-lg text-brand-dark font-medium">Bordj Bou Arréridj</span>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-100 flex flex-col-reverse md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
                        <p className="text-gray-500 text-sm">
                            &copy; {currentYear} Tous droits réservés.
                        </p>
                        <span className="hidden md:inline text-gray-300">|</span>
                        <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                            built by
                            <a
                                href="https://peak.atakor.studio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-dark hover:text-brand-primary transition-colors font-medium"
                            >
                                peak
                            </a>
                            <span className="text-gray-500 opacity-80"> - the creative studio in sports</span>
                        </p>
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="p-3 rounded-full bg-brand-ice/50 hover:bg-brand-primary hover:text-white text-brand-dark transition-all duration-300 group"
                        aria-label="Retour en haut"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
                    </button>
                </div>

            </div>
        </footer>
    );
};