import React, { useState } from 'react';
import { SectionId } from '../types';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

// TODO: Replace these with actual images from the provided folder
// Assuming a folder structure, you might map them or import them.
// For now, using placeholders/existing images to demonstrate layout.
const galleryImages = [
    { id: 1, src: 'http://csa-alhilal.dz/img/team/WhatsApp%20Image%202026-01-04%20at%2014.07.39.jpeg', alt: 'Joueurs du CSA Al Hilal en pleine action', size: 'tall' },
    { id: 2, src: 'http://csa-alhilal.dz/img/team/WhatsApp%20Image%202026-01-04%20at%2014.07.40%20(1).jpeg', alt: 'Séance d\'entraînement de l\'équipe junior', size: 'wide' },
    { id: 4, src: 'http://csa-alhilal.dz/img/team/WhatsApp%20Image%202026-01-04%20at%2014.07.42.jpeg', alt: 'Célébration des joueurs du CSA', size: 'short' },
    { id: 5, src: 'http://csa-alhilal.dz/img/team/WhatsApp%20Image%202026-01-04%20at%2014.07.43%20(1).jpeg', alt: 'Préparation physique et échauffement', size: 'tall' },
    { id: 6, src: 'http://csa-alhilal.dz/img/team/WhatsApp%20Image%202026-01-04%20at%2014.07.43.jpeg', alt: 'Moment de convivialité entre coéquipiers', size: 'wide' },
];

export const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<{ src: string, alt: string } | null>(null);

    return (
        <section id={SectionId.GALLERY} className="py-10 md:py-24 bg-brand-ice/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-2 block">Nos Souvenirs</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-brand-dark">Moments capturés en 2025</h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
                        L'intensité, la passion et la joie de nos équipes sur et en dehors du terrain.
                    </p>
                </div>

                {/* Masonry Layout */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="break-inside-avoid relative group cursor-zoom-in rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 mb-4"
                            onClick={() => setSelectedImage({ src: image.src, alt: image.alt })}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-110"
                                loading="eager"
                            />
                            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/20 transition-colors duration-300 flex items-center justify-center">
                                <div className="bg-white/90 p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                    <ZoomIn className="text-brand-dark w-6 h-6" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X size={32} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
                            const prevIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
                            setSelectedImage({ src: galleryImages[prevIndex].src, alt: galleryImages[prevIndex].alt });
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden md:block"
                    >
                        <ChevronLeft size={32} />
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            const currentIndex = galleryImages.findIndex(img => img.src === selectedImage.src);
                            const nextIndex = (currentIndex + 1) % galleryImages.length;
                            setSelectedImage({ src: galleryImages[nextIndex].src, alt: galleryImages[nextIndex].alt });
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors hidden md:block"
                    >
                        <ChevronRight size={32} />
                    </button>

                    <div
                        className="relative max-w-5xl max-h-[90vh] rounded-lg overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.alt}
                            className="w-full h-full max-h-[90vh] object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
};
