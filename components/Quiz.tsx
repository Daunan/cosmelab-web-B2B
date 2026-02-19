'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, RefreshCcw, ShoppingBag, ArrowRight, Sparkles } from 'lucide-react';
import { CATEGORIES, PRODUCTS, UI_TRANSLATIONS, getBuyingLink, BRAND_INTRODUCE_URL, getDriveUrl } from '@/lib/data';
import { Category, Language, QuizStepId } from '@/lib/types';
import { cn } from '@/lib/utils';


interface QuizProps {
    locale: string;
}

export default function Quiz({ locale }: QuizProps) {
    // Ensure locale is a valid Language, fallback to US
    const currentLang = (Object.values(Language).includes(locale as Language) ? locale : Language.US) as Language;
    const t = UI_TRANSLATIONS[currentLang] || UI_TRANSLATIONS[Language.US];

    const [step, setStep] = useState<QuizStepId>(QuizStepId.START);
    const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
    const [selectedSubNeed, setSelectedSubNeed] = useState<string | null>(null);
    const [feedbackId, setFeedbackId] = useState<string | null>(null);

    const handleCategorySelect = (catId: Category) => {
        setSelectedCategory(catId);
        setStep(QuizStepId.DETAILS);
    };

    const handleOptionSelect = (subNeedId: string) => {
        setSelectedSubNeed(subNeedId);
        setStep(QuizStepId.RESULTS);
    };

    const handleReset = () => {
        setStep(QuizStepId.START);
        setSelectedCategory(null);
        setSelectedSubNeed(null);
        setFeedbackId(null); // Reset feedback on quiz reset
    };

    const matchedProducts = PRODUCTS.filter(p =>
        selectedSubNeed && p.subNeed.includes(selectedSubNeed)
    );

    // Animations
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12 min-h-[80vh] flex flex-col items-center justify-center font-sans relative">

            {/* SNS Feedback Modal */}
            <AnimatePresence>
                {feedbackId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
                        onClick={() => setFeedbackId(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setFeedbackId(null)}
                                className="absolute top-4 right-4 text-gray-400 hover:text-black transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h3 className="text-xl font-bold mb-4 border-b pb-2">{t.snsFeedbackBtn}</h3>
                            <div
                                className="prose prose-sm max-w-none text-gray-700 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: PRODUCTS.find(p => p.id === feedbackId)?.snsFeedback?.[currentLang] || '' }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Language Switcher */}
            <div className="absolute top-4 right-4 flex flex-wrap justify-end gap-3 z-50">
                {[
                    { code: Language.US, flag: '🇺🇸', label: 'English' },
                    { code: Language.JP, flag: '🇯🇵', label: '日本語' },
                    { code: Language.ME, flag: '🇸🇦', label: 'العربية' },
                    { code: Language.FR, flag: '🇫🇷', label: 'Français' },
                    { code: Language.ES, flag: '🇪🇸', label: 'Español' },
                    { code: Language.DE, flag: '🇩🇪', label: 'Deutsch' },
                    { code: Language.EL, flag: '🇬🇷', label: 'Ελληνικά' },
                    { code: Language.RU, flag: '🇷🇺', label: 'Русский' },
                    { code: Language.KR, flag: '🇰🇷', label: '한국어' },
                ].map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => window.location.href = `/${lang.code}`}
                        className={cn(
                            "text-2xl hover:scale-110 transition-transform p-1 rounded-md",
                            currentLang === lang.code ? "bg-gray-100 ring-2 ring-blue-500" : "opacity-70 hover:opacity-100"
                        )}
                        title={lang.label}
                    >
                        {lang.flag}
                    </button>
                ))}
            </div>

            {/* Header / Progress */}
            {step !== QuizStepId.START && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full mb-8 flex justify-between items-center text-sm text-gray-500 uppercase tracking-widest"
                >
                    <button onClick={handleReset} className="flex items-center hover:text-black transition-colors">
                        <RefreshCcw className="w-4 h-4 mr-2" />
                        {t.reset}
                    </button>
                    <span>
                        {step === QuizStepId.FOCUS && t.phases[0]}
                        {step === QuizStepId.DETAILS && t.phases[1]}
                        {step === QuizStepId.RESULTS && t.phases[2]}
                    </span>
                </motion.div>
            )}

            <AnimatePresence mode="wait">

                {/* START SCREEN */}
                {step === QuizStepId.START && (
                    <motion.div
                        key="start"
                        initial="hidden" animate="visible" exit={{ opacity: 0, y: -20 }}
                        variants={fadeUp}
                        className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 w-full"
                    >
                        {/* LEFT: TEXT */}
                        <div className="flex-1 text-center md:text-left space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-sm font-bold tracking-[0.3em] text-blue-600 uppercase">{t.hero.sub}</h2>
                                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight whitespace-pre-line">
                                    {t.hero.title}
                                </h1>
                                <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
                                    {t.hero.desc}
                                </p>
                            </div>

                            <button
                                onClick={() => setStep(QuizStepId.FOCUS)}
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black rounded-full overflow-hidden transition-all hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <span className="mr-2">{t.start}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        {/* RIGHT: IMAGE */}
                        <div className="flex-1 relative w-full max-w-md aspect-square hidden md:block">
                            <div className="absolute inset-0 bg-gray-100 rounded-[2rem] transform rotate-3 transition-transform hover:rotate-0 shadow-2xl overflow-hidden">
                                <Image
                                    src={getDriveUrl('1Y6m6R0z_7wBpxY6FRZSPtpKJ-cjpgwNg')}
                                    alt="Cosmelab Curation"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* STEP 1: CATEGORY SELECTION */}
                {step === QuizStepId.FOCUS && (
                    <motion.div
                        key="focus"
                        initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }}
                        variants={fadeUp}
                        className="w-full"
                    >
                        <h2 className="text-3xl font-light text-center mb-12 text-gray-800">
                            {t.instructions[0]}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleCategorySelect(cat.id)}
                                    className="group relative h-64 w-full rounded-3xl overflow-hidden bg-gray-100 text-left shadow-sm hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="absolute inset-0 bg-gray-200">
                                        <Image
                                            src={cat.imageUrl}
                                            alt={cat.title}
                                            fill
                                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-8 text-white">
                                        <span className="text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-2 py-1 rounded mb-2 inline-block">
                                            {cat.brand}
                                        </span>
                                        <h3 className="text-2xl font-bold mb-1">
                                            {cat.translations?.[currentLang]?.title || cat.title}
                                        </h3>
                                        <p className="text-sm text-gray-200 opacity-90">
                                            {cat.translations?.[currentLang]?.subtitle || cat.subtitle}
                                        </p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* STEP 2: SUB-NEED SELECTION */}
                {step === QuizStepId.DETAILS && selectedCategory && (
                    <motion.div
                        key="details"
                        initial="hidden" animate="visible" exit={{ opacity: 0, x: -20 }}
                        variants={fadeUp}
                        className="w-full"
                    >
                        <h2 className="text-3xl font-light text-center mb-12 text-gray-800">
                            {t.instructions[1]}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {CATEGORIES.find(c => c.id === selectedCategory)?.options.map((opt) => (
                                <button
                                    key={opt.id}
                                    onClick={() => handleOptionSelect(opt.id)}
                                    className="group flex flex-col p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-blue-100 hover:shadow-xl hover:bg-blue-50/30 transition-all duration-300 text-left"
                                >
                                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:scale-110 transition-transform">
                                        <Sparkles className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {opt.translations?.[currentLang]?.label || opt.label}
                                    </h3>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-700">
                                        {opt.translations?.[currentLang]?.sub || opt.sub}
                                    </p>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* STEP 3: RESULTS */}
                {step === QuizStepId.RESULTS && (
                    <motion.div
                        key="results"
                        initial="hidden" animate="visible" exit={{ opacity: 0, y: 20 }}
                        variants={fadeUp}
                        className="w-full"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-light text-gray-800 mb-4">
                                {t.instructions[2]}
                            </h2>
                            <div className="w-24 h-1 bg-black mx-auto rounded-full" />
                        </div>

                        <div className="space-y-12">
                            {matchedProducts.map((product) => (
                                <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col md:flex-row">
                                    <div className="relative w-full md:w-1/2 h-80 md:h-auto bg-gray-50">
                                        <Image
                                            src={product.imageUrl}
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center items-start">
                                        <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2">
                                            {product.brand}
                                        </span>
                                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                                            {product.translations?.[currentLang]?.name || product.name}
                                        </h3>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {product.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
                                            {product.translations?.[currentLang]?.description || product.description}
                                        </p>

                                        {/* SNS Feedback Button (Only if available) */}
                                        {product.snsFeedback && (
                                            <button
                                                onClick={() => setFeedbackId(product.id)}
                                                className="w-full mb-3 py-2 px-4 bg-gradient-to-r from-pink-50 to-purple-50 text-pink-600 font-semibold rounded-xl text-sm hover:from-pink-100 hover:to-purple-100 transition-all border border-pink-100 flex items-center justify-center gap-2 group"
                                            >
                                                <Sparkles className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
                                                {t.snsFeedbackBtn || "SNS Feedback from global"}
                                            </button>
                                        )}

                                        <div className="flex flex-wrap gap-4 w-full">
                                            <a
                                                href={getBuyingLink(currentLang, product)}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 min-w-[160px] inline-flex items-center justify-center px-6 py-4 bg-black text-white font-medium rounded-xl hover:bg-gray-800 transition-colors"
                                            >
                                                <ShoppingBag className="w-5 h-5 mr-2" />
                                                {t.buyingLink}
                                            </a>
                                            <a
                                                href={BRAND_INTRODUCE_URL}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 min-w-[160px] inline-flex items-center justify-center px-6 py-4 bg-white text-black border-2 border-black font-medium rounded-xl hover:bg-gray-50 transition-colors"
                                            >
                                                <span className="mr-2">📄</span>
                                                {t.brandFile}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 text-center">
                            <button onClick={handleReset} className="text-gray-500 hover:text-black underline">
                                {t.start}
                            </button>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>

            {/* Contact Footer */}
            <footer className="mt-20 border-t border-gray-200 pt-12 w-full text-center text-gray-500">
                <h3 className="text-sm font-bold uppercase tracking-widest mb-6 opacity-50">{t.contact}</h3>
                <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
                    <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">📧</span>
                        <div className="text-left">
                            <div className="text-xs uppercase font-bold text-gray-400">Email</div>
                            <a href="mailto:overseas@cosmelab.com" className="text-black font-medium hover:text-blue-600">overseas@cosmelab.com</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">💬</span>
                        <div className="text-left">
                            <div className="text-xs uppercase font-bold text-gray-400">WhatsApp</div>
                            <a href="https://wa.me/821050938474" className="text-black font-medium hover:text-green-600">+82 10-5093-8474</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600">📸</span>
                        <div className="text-left">
                            <div className="text-xs uppercase font-bold text-gray-400">Instagram</div>
                            <a href="https://www.instagram.com/cosmelab_official_global/" target="_blank" rel="noopener noreferrer" className="text-black font-medium hover:text-pink-600">@cosmelab_official_global</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
