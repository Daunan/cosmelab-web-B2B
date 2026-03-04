"use client";

import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Bot, X, Sparkles, Volume2, Loader2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS, getBuyingLink, BRAND_INTRODUCE_URL } from '@/lib/data';
import { Language } from '@/lib/types';

// --- Types & Constants ---
type STTStatus = 'idle' | 'listening' | 'processing' | 'speaking' | 'error';

interface VoiceConsultantProps {
    currentLang: Language;
}

// Ensure SpeechRecognition types exist
declare global {
    interface Window {
        SpeechRecognition: any;
        webkitSpeechRecognition: any;
    }
}

export default function VoiceConsultant({ currentLang }: VoiceConsultantProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<STTStatus>('idle');
    const [userText, setUserText] = useState('');
    const [boxMessage, setBoxMessage] = useState('');
    const [recommendedProduct, setRecommendedProduct] = useState<any | null>(null);

    // Refs for speech APIS
    const recognitionRef = useRef<any>(null);
    const synthRef = useRef<SpeechSynthesis | null>(null);

    // Dynamic UI Text based on current Language
    const tMapping: Record<string, { title: string; prompt: string; listening: string; processing: string; btnBuy: string; btnBrand: string; }> = {
        [Language.US]: { title: "AI Voice Consultant", prompt: "Hello! Tap the mic and tell me your age, skin type, and main concern.", listening: "Listening...", processing: "Analyzing...", btnBuy: "Buy Online", btnBrand: "Brand Guide" },
        [Language.KR]: { title: "AI 음성 컨설턴트", prompt: "안녕하세요! 마이크를 누르고 나이, 피부 타입, 고민을 말씀해 주세요.", listening: "듣고 있어요...", processing: "분석 중...", btnBuy: "구매하기", btnBrand: "브랜드 소개" },
        [Language.JP]: { title: "AI 音声コンサルタント", prompt: "マイクを押して、年齢、肌質、悩みをお話しください。", listening: "聞いています...", processing: "分析中...", btnBuy: "オンライン購入", btnBrand: "ブランドガイド" },
        [Language.ES]: { title: "Consultor de Voz IA", prompt: "¡Hola! Toca el micrófono y dime tu edad, tipo de piel y preocupación.", listening: "Escuchando...", processing: "Analizando...", btnBuy: "Comprar", btnBrand: "Guía" },
        [Language.FR]: { title: "Consultant Vocal IA", prompt: "Appuyez sur le micro et indiquez votre âge, peau et préoccupation.", listening: "Écoute...", processing: "Analyse...", btnBuy: "Acheter", btnBrand: "Guide" },
        [Language.DE]: { title: "KI-Sprachberater", prompt: "Tippen Sie auf das Mikrofon und nennen Sie mir Ihr Alter, Hauttyp und Anliegen.", listening: "Hört zu...", processing: "Analysiert...", btnBuy: "Kaufen", btnBrand: "Marke" },
        [Language.ME]: { title: "مستشار صوتي", prompt: "اضغط على الميكروفون وأخبرني بعمرك ونوع بشرتك واهتمامك الرئيسي.", listening: "استماع...", processing: "جارٍ التحليل...", btnBuy: "الشراء", btnBrand: "دليل" },
        [Language.EL]: { title: "Σύμβουλος φωνής AI", prompt: "Πατήστε το μικρόφωνο και πείτε μου την ηλικία, τον τύπο δέρματος.", listening: "Ακούγοντας...", processing: "Ανάλυση...", btnBuy: "Αγοράστε", btnBrand: "Οδηγός" },
        [Language.RU]: { title: "Голосовой консультант ИИ", prompt: "Нажмите на микрофон и назовите свой возраст, тип кожи.", listening: "Слушаю...", processing: "Анализ...", btnBuy: "Купить", btnBrand: "Руководство" },
        [Language.HU]: { title: "AI Hang Tanácsadó", prompt: "Érintse meg a mikrofont, és mondja el életkorát, bőrtípusát.", listening: "Hallgatás...", processing: "Elemzés...", btnBuy: "Vásárlás", btnBrand: "Útmutató" },
        [Language.ET]: { title: "AI Häälkonsultant", prompt: "Puudutage mikrofoni ja öelge mulle oma vanus, nahatüüp ja mure.", listening: "Kuulamine...", processing: "Analüüs...", btnBuy: "Osta", btnBrand: "Juhend" }
    };

    const t = tMapping[currentLang as string] || { title: "AI Consultant", prompt: "Tap to speak", listening: "Listening...", processing: "Processing...", btnBuy: "Buy", btnBrand: "Guide" };

    useEffect(() => {
        // Initialize SpeechSynthesis
        if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
            synthRef.current = window.speechSynthesis;
        }

        // Initialize SpeechRecognition
        if (typeof window !== 'undefined') {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            if (SpeechRecognition) {
                recognitionRef.current = new SpeechRecognition();
                recognitionRef.current.continuous = false;
                recognitionRef.current.maxAlternatives = 5; // Request multiple alternatives to boost accuracy

                // Set language for recognition (All 11 Supported Languages)
                const langMap: Record<string, string> = {
                    [Language.US]: 'en-US', [Language.KR]: 'ko-KR', [Language.JP]: 'ja-JP',
                    [Language.ES]: 'es-ES', [Language.FR]: 'fr-FR', [Language.DE]: 'de-DE',
                    [Language.ME]: 'ar-SA', [Language.EL]: 'el-GR', [Language.RU]: 'ru-RU',
                    [Language.HU]: 'hu-HU', [Language.ET]: 'et-EE'
                };
                recognitionRef.current.lang = langMap[currentLang as string] || 'en-US';

                recognitionRef.current.onresult = (event: any) => {
                    // Gather up to 5 alternative transcripts from the STT engine
                    const alternatives = [];
                    for (let i = 0; i < event.results[0].length; i++) {
                        alternatives.push(event.results[0][i].transcript);
                    }

                    // Keep the primary transcript for UI display
                    const primaryTranscript = event.results[0][0].transcript;
                    setUserText(primaryTranscript);

                    // Pass all alternatives joined together to the processor so fuzzy/imperfect matches still work
                    const combinedText = alternatives.join(' | ');
                    processCommand(combinedText);
                };

                recognitionRef.current.onerror = (event: any) => {
                    console.error("Speech recognition error", event.error);
                    setStatus('error');
                    setBoxMessage('Sorry, I couldn\'t hear you. Please try again.');
                };

                recognitionRef.current.onend = () => {
                    if (status === 'listening') {
                        setStatus('processing');
                    }
                };
            }
        }
    }, [currentLang, status]);

    // Open/Close Handlers
    const toggleBox = () => {
        if (!isOpen) {
            setBoxMessage(t.prompt);
            setRecommendedProduct(null);
            setUserText('');
        } else {
            stopSpeaking();
        }
        setIsOpen(!isOpen);
    };

    // Voice Control
    const startListening = () => {
        if (recognitionRef.current) {
            stopSpeaking();
            setUserText('');
            setStatus('listening');
            setBoxMessage(t.listening);
            setRecommendedProduct(null);
            recognitionRef.current.start();
        } else {
            setBoxMessage("Voice recognition is not supported in this browser.");
            setStatus('error');
        }
    };

    const speak = (text: string) => {
        if (synthRef.current) {
            synthRef.current.cancel(); // Stop current speech
            const utterance = new SpeechSynthesisUtterance(text);

            // Try to match voice lang to UI lang (All 11 Supported Languages)
            const langMap: Record<string, string> = {
                [Language.US]: 'en-US', [Language.KR]: 'ko-KR', [Language.JP]: 'ja-JP',
                [Language.ES]: 'es-ES', [Language.FR]: 'fr-FR', [Language.DE]: 'de-DE',
                [Language.ME]: 'ar-SA', [Language.EL]: 'el-GR', [Language.RU]: 'ru-RU',
                [Language.HU]: 'hu-HU', [Language.ET]: 'et-EE'
            };
            utterance.lang = langMap[currentLang as string] || 'en-US';

            utterance.onstart = () => setStatus('speaking');
            utterance.onend = () => setStatus('idle');
            synthRef.current.speak(utterance);
        }
    };

    const stopSpeaking = () => {
        if (synthRef.current) {
            synthRef.current.cancel();
            setStatus('idle');
        }
    };

    // Keyword Extraction Logic
    const processCommand = (text: string) => {
        setStatus('processing');
        const lowerText = text.toLowerCase();

        // 1. Keyword Dictionary Mapping with Fuzzy/Phonetic additions for all 18 Products
        const productKeywords: Record<string, string[]> = {
            'berrisom-lip-original': ['lip', 'tint', '틴트', '립', 'リップ', 'labio', 'lèvre', 'lippe', 'ajak', 'huul', 'тату', 'شفاه', 'χείλη', 'teent', 'leep', 'leave', 'leaf'],
            'berrisom-jelly': ['jelly', '젤리', 'ジェリー', 'gelée', 'gelatina', 'زيل', 'ζελέ', 'gelly', 'jeli'],
            'berrisom-eyebrow': ['eyebrow', 'brow', '눈썹', '아이브로우', 'アイブロウ', '眉毛', 'ceja', 'sourcil', 'augenbraue', 'szemöldök', 'kulm', 'حاجب', 'φρύδι', 'брови', 'brown', 'aybrow'],
            'berrisom-shading': ['shading', 'contour', '쉐딩', '윤곽', 'シェーディング', 'contouring', 'kontur', 'تظليل', 'контуринг', 'σκίαση', 'shade', 'shadow'],
            'g9-whipping': ['toneup', 'tone up', 'whitening', '화이트닝', '톤업', '미백', 'トーンアップ', 'aclarante', 'تفتيح', 'осветление', 'λεύκανση', 'white', 'brightening'],
            'g9-moisture': ['moisture', 'hydrate', 'dry', '수분', '보습', '건조', '건성', '乾燥', 'seco', 'sec', 'trocken', 'száraz', 'kuiv', 'ترطيب', 'увлажнение', 'ενυδάτωση', 'hydra', 'moist', 'water'],
            'g9-milk-toner': ['toner', '토너', '스킨', 'トナー', 'tónico', 'tonique', 'tonik', 'تونر', 'тонер', 'tone', 'milk', '우유'],
            'g9-mask': ['mask', 'aesthetic', '마스크', '팩', '에스테틱', 'マスク', 'masque', 'maske', 'maszk', 'qناع', 'маска', 'μάσκα', 'pack', 'mac'],
            'amill-oil': ['oil', '오일', 'オイル', 'aceite', 'huile', 'öl', 'olaj', 'õli', 'زيت', 'масло', 'λάδι', 'oleo', 'oel'],
            'amill-foam': ['foam', 'cleanse', '폼', '클렌징', '洗顔', 'limpieza', 'nettoyage', 'reinigung', 'tisztítás', 'puhastus', 'تنظيف', 'очищение', 'καθαρισμός', 'cleansing', 'wash'],
            'amill-bubble': ['bubble', '버블', '泡', 'bulles', 'blasen', 'buborék', 'mullid', 'فقاعة', 'пузырь', 'φούσκα', 'buble', 'booble'],
            'coscell-eye': ['eye bag', 'eyebag', 'eye', 'retinol', '아이백', '눈밑', '눈가', 'レチノール', '目元', 'ojos', 'yeux', 'augen', 'szem', 'silmad', 'عين', 'глаза', 'μάτια', 'retynol', 'wrinkle'],
            'coscell-neck': ['neck', '목주름', '목', '首', 'cou', 'cuello', 'hals', 'nyak', 'kael', 'رقبة', 'шея', 'λαιμός', 'rimpier', 'hal'],
            'coscell-serum': ['serum', 'galvanic', '세럼', '갈바닉', 'セラム', 'sérum', 'szérum', 'seerum', 'سيروم', 'сыворотка', 'ορός', 'cerum', 'galvan'],
            'coscell-papaya-ampoule': ['papaya', 'pdrn', 'ampoule', '파파야', '앰플', 'アンプル', 'ampolla', 'ampul', 'امبولة', 'ампула', 'αμπούλα', 'pepaya'],
            'coscell-papaya-foam': ['gomage', 'peeling', '고마쥬', '각질', '필링', 'ピーリング', 'exfoliación', 'gommage', 'peeling', 'hámlás', 'koorimine', 'تقشير', 'пилинг', 'απολέπιση', 'gomache'],
            'coscell-vita-cream': ['vita cream', 'vitamin cream', '비타 캡슐', '캡슐', 'カプセル', 'capsule', 'kapsel', 'kapszula', 'كبسولة', 'капсула', 'κάψουλα', 'capsul'],
            'coscell-vita-ampoule': ['vita ampoule', 'vitamin c', '비타민', '잡티', '기미', 'シミ', 'manchas', 'taches', 'flecken', 'folt', 'laigud', 'فيتامين', 'витамин', 'βιταμίνη', 'bitamin', 'beta']
        };

        // 2. Score calculation
        let maxScore = 0;
        let matchedProductId = '';

        for (const [id, keys] of Object.entries(productKeywords)) {
            let score = 0;
            keys.forEach(k => {
                if (lowerText.includes(k)) score += 2;
            });

            if (score > maxScore) {
                maxScore = score;
                matchedProductId = id;
            }
        }

        setTimeout(() => {
            if (maxScore === 0) {
                // No keywords matched, prompt user to rephrase
                setRecommendedProduct(null);
                let fallbackMsg = "I couldn't detect any specific skin concerns. Could you tell me if you have any trouble with wrinkles, dryness, or acne?";
                if (currentLang === Language.KR) fallbackMsg = "고객님의 주요 피부 고민을 파악하지 못했습니다. 주름, 건성, 여드름 등 어떤 점이 가장 고민이신지 구체적으로 말씀해 주시겠어요?";
                if (currentLang === Language.JP) fallbackMsg = "具体的なお悩みを聞き取れませんでした。シワ、乾燥、ニキビなど、どのような点でお悩みか教えていただけますか？";
                if (currentLang === Language.ES) fallbackMsg = "No pude detectar ninguna preocupación específica de la piel. ¿Podrías decirme si tienes problemas con arrugas, sequedad o acné?";
                if (currentLang === Language.FR) fallbackMsg = "Je n'ai détecté aucun problème de peau spécifique. Pourriez-vous me dire si vous avez des problèmes de rides, de sécheresse ou d'acné ?";
                if (currentLang === Language.DE) fallbackMsg = "Ich konnte keine spezifischen Hautprobleme erkennen. Können Sie mir sagen, ob Sie Probleme mit Falten, Trockenheit oder Akne haben?";
                if (currentLang === Language.RU) fallbackMsg = "Я не смог обнаружить конкретных проблем с кожей. Не могли бы вы сказать мне, есть ли у вас проблемы с морщинами, сухостью или прыщами?";
                if (currentLang === Language.EL) fallbackMsg = "Δεν μπόρεσα να εντοπίσω συγκεκριμένες ανησυχίες για το δέρμα. Μπορείτε να μου πείτε εάν έχετε προβλήματα με ρυτίδες, ξηρότητα ή ακμή;";
                if (currentLang === Language.ME) fallbackMsg = "لم أتمكن من اكتشاف أي مخاوف محددة تتعلق بالبشرة. هل يمكنك أن تخبرني إذا كان لديك أي مشاكل مع التجاعيد أو الجفاف أو حب الشباب؟";

                setBoxMessage(fallbackMsg);
                speak(fallbackMsg);
                return;
            }

            // Find product in DB
            let foundProduct = PRODUCTS.find(p => p.id === matchedProductId);

            // Absolute default fallback (safety net)
            if (!foundProduct) foundProduct = PRODUCTS[0];

            setRecommendedProduct(foundProduct);
            const pName = foundProduct?.translations?.[currentLang]?.name || foundProduct?.name;

            // Localized Response message
            let responseMsg = `I found the perfect match for you: The ${pName}. Check the details below.`;
            if (currentLang === Language.KR) responseMsg = `고객님을 위한 완벽한 제품을 찾았습니다. 바로 ${pName} 입니다. 자세한 내용은 아래를 확인하세요.`;
            if (currentLang === Language.JP) responseMsg = `あなたにぴったりの製品を見つけました。${pName} です。詳細は下記をご覧ください。`;
            if (currentLang === Language.ES) responseMsg = `Encontré la combinación perfecta para ti: ${pName}. Mira los detalles abajo.`;
            if (currentLang === Language.HU) responseMsg = `Megtaláltam a tökéletes terméket az Ön számára: ${pName}. Tekintse meg a részleteket.`;
            if (currentLang === Language.ET) responseMsg = `Leidsin teile ideaalse toote: ${pName}. Vaadake üksikasju.`;
            if (currentLang === Language.FR) responseMsg = `J'ai trouvé la correspondance parfaite pour vous : ${pName}. Vérifiez les détails ci-dessous.`;
            if (currentLang === Language.DE) responseMsg = `Ich habe das perfekte Produkt für Sie gefunden: ${pName}. Überprüfen Sie die Details unten.`;
            if (currentLang === Language.RU) responseMsg = `Я нашел для вас идеальное совпадение: ${pName}. Проверьте детали ниже.`;
            if (currentLang === Language.EL) responseMsg = `Βρήκα το τέλειο ταίρι για εσάς: Το ${pName}. Ελέγξτε τις λεπτομέρειες παρακάτω.`;
            if (currentLang === Language.ME) responseMsg = `لقد وجدت التطابق المثالي لك: ${pName}. تحقق من التفاصيل أدناه.`;

            setBoxMessage(responseMsg);
            speak(responseMsg);
        }, 1000); // Fake processing delay for UX
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="mb-4 w-80 md:w-96 max-h-[75vh] h-[600px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white flex justify-between items-center">
                            <div className="flex items-center gap-2">
                                <Bot className="w-5 h-5" />
                                <span className="font-semibold text-sm">{t.title}</span>
                            </div>
                            <button onClick={toggleBox} className="hover:bg-white/20 p-1 rounded-full text-white transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Chat Area */}
                        <div className="p-5 flex-grow flex-shrink overflow-y-auto min-h-0 flex flex-col gap-4 bg-gray-50/50">

                            {/* User Input Display */}
                            {userText && (
                                <div className="self-end bg-blue-100 text-blue-900 px-4 py-2 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm flex-shrink-0">
                                    "{userText}"
                                </div>
                            )}

                            {/* Bot Message */}
                            <div className="self-start bg-white border border-gray-100 text-gray-800 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[95%] shadow-sm flex flex-col gap-2 flex-shrink-0">
                                <div className="flex items-center gap-2 text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase mb-1">
                                    Cosmelab AI
                                </div>
                                <p className="leading-relaxed">{boxMessage}</p>

                                {status === 'listening' && (
                                    <div className="flex items-center gap-1 mt-2 text-blue-500">
                                        <motion.div animate={{ height: [4, 12, 4] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-blue-500 rounded-full" />
                                        <motion.div animate={{ height: [4, 16, 4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.1 }} className="w-1 bg-blue-500 rounded-full" />
                                        <motion.div animate={{ height: [4, 8, 4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1 bg-blue-500 rounded-full" />
                                    </div>
                                )}
                                {status === 'processing' && <Loader2 className="w-4 h-4 animate-spin text-purple-500 mt-2" />}
                            </div>

                            {/* Product Recommendation Card */}
                            {recommendedProduct && status !== 'processing' && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                                    className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-md mt-2 flex-shrink-0 mb-4"
                                >
                                    <div className="h-32 bg-gray-100 relative w-full">
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={recommendedProduct.imageUrl} alt={recommendedProduct.name} className="object-cover w-full h-full" />
                                    </div>
                                    <div className="p-4 flex flex-col gap-2">
                                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit uppercase">{recommendedProduct.brand}</span>
                                        <h4 className="font-bold text-gray-900 leading-tight">
                                            {recommendedProduct.translations?.[currentLang]?.name || recommendedProduct.name}
                                        </h4>
                                        <p className="text-xs text-gray-500 line-clamp-2">
                                            {recommendedProduct.translations?.[currentLang]?.description || recommendedProduct.description}
                                        </p>

                                        <div className="flex gap-2 mt-3 pt-3 border-t border-gray-100">
                                            <a
                                                href={getBuyingLink(currentLang, recommendedProduct)}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 bg-black text-white text-xs font-semibold py-2 px-3 rounded-lg text-center hover:bg-gray-800 transition-colors flex items-center justify-center gap-1"
                                            >
                                                {t.btnBuy} <ArrowRight className="w-3 h-3" />
                                            </a>
                                            <a
                                                href={BRAND_INTRODUCE_URL}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex-1 bg-white text-black border border-black text-xs font-semibold py-2 px-3 rounded-lg text-center hover:bg-gray-50 transition-colors"
                                            >
                                                {t.btnBrand}
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                        </div>

                        {/* Action Box */}
                        <div className="p-4 bg-white border-t border-gray-100 flex flex-col items-center justify-center gap-2 flex-shrink-0">
                            <button
                                onClick={status === 'listening' ? stopSpeaking : startListening}
                                disabled={status === 'processing' || status === 'speaking'}
                                className={`w-16 h-16 rounded-full flex justify-center items-center shadow-lg transition-all transform hover:scale-105 active:scale-95 ${status === 'listening' ? 'bg-red-50 text-red-500 animate-pulse border-2 border-red-500' :
                                    status === 'speaking' ? 'bg-purple-100 text-purple-600 border border-purple-200' :
                                        status === 'processing' ? 'bg-gray-100 text-gray-400' :
                                            'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl hover:-translate-y-1'
                                    }`}
                            >
                                {status === 'listening' ? <MicOff className="w-6 h-6" /> :
                                    status === 'speaking' ? <Volume2 className="w-6 h-6 animate-pulse" /> :
                                        status === 'processing' ? <Loader2 className="w-6 h-6 animate-spin" /> :
                                            <Mic className="w-6 h-6" />}
                            </button>
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                                {status === 'listening' ? 'Tap to Stop' : status === 'speaking' ? 'Speaking...' : 'Tap to Speak'}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Trigger Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={toggleBox}
                className={`flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-colors ${isOpen ? 'bg-gray-800 text-white' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-blue-500/50'}`}
            >
                {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
            </motion.button>
        </div>
    );
}
