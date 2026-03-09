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
            <div className="absolute top-2 sm:top-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-1.5 sm:gap-2 z-50 bg-white/70 backdrop-blur-md px-4 py-2 rounded-2xl md:rounded-full shadow-md border border-white/60 w-fit max-w-[95vw]">
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
                    { code: Language.HU, flag: '🇭🇺', label: 'Magyar' },
                    { code: Language.ET, flag: '🇪🇪', label: 'Eesti' },
                ].map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => window.location.href = `/${lang.code}`}
                        className={cn(
                            "text-xl sm:text-2xl hover:scale-110 transition-transform p-1 rounded-full flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10",
                            currentLang === lang.code ? "bg-white shadow-sm ring-2 ring-blue-500/50" : "opacity-70 hover:opacity-100 hover:bg-white/50"
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
                        {/* CENTER CONTENT */}
                        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 w-full max-w-2xl mx-auto">
                            
                            {/* RESTORED TEXT BLOCK */}
                            <div className="space-y-4">
                                <p className="text-xl md:text-2xl font-medium text-gray-800 max-w-xl mx-auto leading-relaxed whitespace-pre-line">
                                    {t.hero.desc}
                                </p>
                            </div>

                            {/* SMALL IMAGE */}
                            <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mt-4">
                                <div className="absolute inset-0 bg-gray-100 rounded-[1.5rem] shadow-lg overflow-hidden">
                                    <Image
                                        src={getDriveUrl('1Y6m6R0z_7wBpxY6FRZSPtpKJ-cjpgwNg')}
                                        alt="Cosmelab Curation"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            <button
                                onClick={() => setStep(QuizStepId.FOCUS)}
                                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-black rounded-full overflow-hidden transition-all hover:bg-gray-800 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto mt-4"
                            >
                                <span className="mr-2">{t.start}</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Social Links under START DIAGNOSIS */}
                            <div className="flex items-center justify-center gap-5 pt-4">
                                <a
                                    href="https://www.instagram.com/cosmelab_official_global/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1),_inset_0_-3px_5px_rgba(0,0,0,0.05),_inset_0_2px_4px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] transform transition-all hover:-translate-y-1"
                                >
                                    <div className="absolute inset-[2px] rounded-xl bg-gradient-to-tr from-[#FFDC80] via-[#F56040] to-[#C13584] opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Instagram className="w-6 h-6 text-white" />
                                    </div>
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/104779203/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative flex items-center justify-center w-12 h-12 rounded-2xl bg-white shadow-[0_4px_10px_rgba(0,0,0,0.1),_inset_0_-3px_5px_rgba(0,0,0,0.05),_inset_0_2px_4px_rgba(255,255,255,0.8)] hover:shadow-[0_8px_15px_rgba(0,0,0,0.15)] transform transition-all hover:-translate-y-1"
                                >
                                    <div className="absolute inset-[2px] rounded-xl bg-[#0a66c2] opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Linkedin className="w-6 h-6 text-white" fill="currentColor" />
                                    </div>
                                </a>
                            </div>

                            {/* Contact Info */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 pt-6 border-t border-gray-100 w-full max-w-lg mx-auto">
                                {/* Email */}
                                <a
                                    href="mailto:overseas@cosmelab.com"
                                    className="group flex flex-1 items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100/50 w-full overflow-hidden relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="w-10 h-10 rounded-xl bg-blue-100/80 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform relative z-10 flex-shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div className="flex flex-col relative z-10 text-left overflow-hidden">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Email Us</span>
                                        <span className="text-[13px] font-semibold text-gray-800 truncate">overseas@cosmelab.com</span>
                                    </div>
                                </a>

                                {/* WhatsApp */}
                                <a
                                    href="https://wa.me/821050938474"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group relative flex flex-1 items-center gap-3 px-4 py-3 bg-white/60 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-lg transition-all border border-gray-100/50 w-full overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {/* 3D WhatsApp Icon */}
                                    <div className="relative flex items-center justify-center w-10 h-10 flex-shrink-0 rounded-xl bg-white shadow-[0_2px_5px_rgba(0,0,0,0.1),_inset_0_-2px_3px_rgba(0,0,0,0.05),_inset_0_1px_2px_rgba(255,255,255,0.8)] z-10">
                                        <div className="absolute inset-[1.5px] rounded-[10px] bg-gradient-to-tr from-[#128C7E] to-[#25D366] opacity-90 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <MessageCircle className="w-5 h-5 text-white" fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col relative z-10 text-left overflow-hidden">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">WhatsApp</span>
                                        <span className="text-[13px] font-semibold text-gray-800 truncate">+82 10-5093-8474</span>
                                    </div>
                                </a>
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

                                        <div className="flex flex-wrap gap-4 w-full mt-2">
                                            {/* Buying & Brand Buttons - Hidden for Hungarian (B2B) */}
                                            {currentLang !== Language.HU && (
                                                <>
                                                    <a
                                                        href={getBuyingLink(currentLang, product)}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex-1 min-w-[160px] inline-flex items-center justify-center px-6 py-4 bg-gradient-to-b from-blue-500 to-blue-700 text-white font-bold rounded-2xl shadow-[0_4px_0_theme(colors.blue.900),0_10px_20px_rgba(37,99,235,0.4)] hover:shadow-[0_2px_0_theme(colors.blue.900),0_5px_10px_rgba(37,99,235,0.4)] hover:translate-y-[2px] active:shadow-[0_0px_0_theme(colors.blue.900),0_0px_0px_rgba(37,99,235,0)] active:translate-y-[4px] transition-all"
                                                    >
                                                        <span className="mr-2 text-2xl drop-shadow-md">🛒</span>
                                                        {t.buyingLink}
                                                    </a>
                                                    <a
                                                        href={BRAND_INTRODUCE_URL}
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        className="flex-1 min-w-[160px] inline-flex items-center justify-center px-6 py-4 bg-gradient-to-b from-gray-50 to-gray-200 text-gray-800 font-bold rounded-2xl shadow-[0_4px_0_theme(colors.gray.400),0_10px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_2px_0_theme(colors.gray.400),0_5px_10px_rgba(0,0,0,0.1)] hover:translate-y-[2px] active:shadow-[0_0px_0_theme(colors.gray.400),0_0px_0px_rgba(0,0,0,0)] active:translate-y-[4px] border border-gray-100 transition-all"
                                                    >
                                                        <span className="mr-2 text-2xl drop-shadow-md">📖</span>
                                                        {t.catalog || "CATALOG"}
                                                    </a>
                                                </>
                                            )}
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


        </div>
    );
}
