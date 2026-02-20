import { Category, Product, Language, CategoryData } from './types';

export const getDriveUrl = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const UI_TRANSLATIONS: Record<string, any> = {
    [Language.US]: {
        start: "START DIAGNOSIS",
        next: "NEXT",
        back: "BACK",
        reset: "RESET",
        buyingLink: "BUY ONLINE",
        brandFile: "BRAND GUIDE",
        catalog: "DOWNLOAD CATALOG",
        contact: "CONTACT US",
        b2b: "B2B & GLOBAL PARTNERSHIPS",
        sidebar: ["HOME", "CATEGORY", "CONCERN", "SOLUTION"],
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nPREMIUM\nCURATION.",
            desc: "Discover the synergy of Korea's finest beauty innovations. Expertly curated solutions from Berrisom, G9SKIN, AMILL, and COSCELL."
        },
        phases: ["PHASE 01: Care Focus", "PHASE 02: Key Concern", "Your Tailored Solution"],
        instructions: ["Select your primary care focus", "Identify your main skin concern", "We have selected these premium essentials for you:"],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.ES]: {
        start: "COMENZAR DIAGNÓSTICO",
        next: "SIGUIENTE",
        back: "VOLVER",
        reset: "REINICIAR",
        buyingLink: "COMPRAR AHORA",
        brandFile: "ARCHIVO DE MARCA",
        catalog: "DESCARGAR CATÁLOGO",
        contact: "CONTACTO",
        b2b: "B2B Y ALIANZAS GLOBALES",
        sidebar: ["INICIO", "CATEGORÍAS", "SÍNTOMAS", "RECOMENDACIÓN"],
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "CURACIÓN\nDE BELLEZA\nCOSMELAB.",
            desc: "Descubra la excelencia de la K-Beauty a través de nuestras prestigiosas marcas globales."
        },
        phases: ["PASO 01: Categoría", "PASO 02: Preocupación", "Tu Rutina Experta"],
        instructions: ["Seleccione el área de cuidado", "¿Cuál es su principal necesidad?", "Hemos seleccionado estos productos esenciales para su perfil:"],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.ME]: {
        start: "ابدأ التشخيص الآن",
        next: "التالي",
        back: "العودة",
        reset: "إعادة تعيين",
        buyingLink: "تسوق الآن",
        brandFile: "ملف العلامة التجارية",
        catalog: "تحميل الكتالوج",
        contact: "اتصل بنا",
        b2b: "شراكات الشركات والتجارة الدولية",
        sidebar: ["الرئيسية", "الفئات", "الاهتمامات", "التوصية"],
        hero: {
            sub: "شركة كوزميلاب المحدودة",
            title: "نخبة منتجات\nكوزميلاب\nالعالمية",
            desc: "اكتشفوا الحل الأمثل للعناية بالبشرة من خلال علاماتنا التجارية المتميزة والأكثر مبيعاً."
        },
        phases: ["الخطوة 01: الفئة", "الخطوة 02: الاهتمام", "الروتين الموصى به"],
        instructions: ["يرجى اختيار فئة العناية", "حدد احتياجات بشرتك بدقة", "تم اختيار هذه المنتجات بعناية لتناسب متطلبات بشرتكم:"],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.JP]: {
        start: "診断を始める",
        next: "次へ",
        back: "戻る",
        reset: "最初からやり直す",
        buyingLink: "オンラインで購入",
        brandFile: "ブランド紹介",
        catalog: "カタログをダウンロード",
        contact: "お問い合わせ",
        b2b: "法人・海外パートナーシップ",
        sidebar: ["ホーム", "ケア選択", "お悩み解決", "診断結果"],
        hero: {
            sub: "株式会社コスメラボ",
            title: "COSMELAB\nプレミアム\nキュレーション",
            desc: "Berrisom、G9SKIN、AMILL、COSCELL。厳選された韓国コスメで、あなたの理想の肌を叶えます。"
        },
        phases: ["STEP 01: カテゴリー", "STEP 02: お悩み解決", "あなたへの推奨ルーティン"],
        instructions: ["ケアカテゴリーを選択してください", "具体的なお悩みをお聞かせください", "お悩みに合わせた最適な製品をご提案いたします："],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.FR]: {
        start: "COMMENCER LE DIAGNOSTIC",
        next: "SUIVANT",
        back: "RETOUR",
        reset: "RÉINITIALISER",
        buyingLink: "ACHETER EN LIGNE",
        brandFile: "DOSSIER MARQUE",
        catalog: "TÉLÉCHARGER LE CATALOGUE",
        contact: "NOUS CONTACTER",
        b2b: "B2B & PARTENARIAT EXPORT",
        sidebar: ["ACCUEIL", "CATÉGORIES", "BESOINS", "RÉSULTATS"],
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "CURATION\nDE BEAUTÉ\nEXPERTE.",
            desc: "L'excellence de la K-Beauty au service de votre peau à travers nos marques premium."
        },
        phases: ["ÉTAPE 01 : Focus", "ÉTAPE 02 : Besoins", "Votre Routine Idéale"],
        instructions: ["Choisissez votre catégorie de soin", "Identifiez votre besoin spécifique", "Voici notre sélection de soins experts adaptée à votre profil :"],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.DE]: {
        start: "DIAGNOSE STARTEN",
        next: "WEITER",
        back: "ZURÜCK",
        reset: "NEUSTART",
        buyingLink: "DIREKT ZUM SHOP",
        brandFile: "MARKEN-GUIDE",
        catalog: "KATALOG DOWNLOAD",
        contact: "KONTAKT",
        b2b: "B2B & GLOBAL PARTNERSCHAFT",
        sidebar: ["HOME", "PFLEGEFOKUS", "ANLIEGEN", "EMPFEHLUNG"],
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nPREMIUM\nKURATION.",
            desc: "Erleben Sie die Synergie unserer Hochleistungsmarken für ein vollendetes Hautbild."
        },
        phases: ["SCHRITT 01: Fokus", "SCHRITT 02: Anliegen", "Ihre Pflegeroutine"],
        instructions: ["Wählen Sie einen Pflegebereich", "Welches Hautbedürfnis steht im Fokus?", "Diese Produkte wurden speziell für Ihr Profil ausgewählt:"],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.KR]: {
        start: "진단 시작하기",
        next: "다음",
        back: "이전",
        reset: "초기화",
        buyingLink: "구매하기",
        brandFile: "브랜드 소개서",
        catalog: "카탈로그 다운로드",
        contact: "CONTACT",
        b2b: "B2B 및 글로벌 파트너십",
        sidebar: ["홈", "카테고리", "피부 고민", "추천 결과"],
        hero: {
            sub: "(주)코스메랩",
            title: "코스메랩\n프리미엄\n큐레이션.",
            desc: "베리썸, G9SKIN, 에이밀, 코스셀. 엄선된 4대 K-뷰티 브랜드의 시너지를 경험하세요."
        },
        phases: ["STEP 01: 집중 케어", "STEP 02: 피부 고민", "맞춤 솔루션"],
        instructions: ["가장 관심 있는 케어 분야를 선택해주세요", "현재 가장 큰 피부 고민은 무엇인가요?", "고객님의 피부 타입에 최적화된 솔루션을 제안합니다:"],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.CN]: {
        start: "开始诊断",
        next: "下一步",
        back: "返回",
        reset: "重置",
        buyingLink: "立即购买",
        brandFile: "品牌介绍文件",
        catalog: "下载目录",
        contact: "联系我们",
        b2b: "B2B与全球合作",
        hero: {
            sub: "CosmeLab有限公司",
            title: "COSMELAB\n严选\n护肤方案",
            desc: "体验Berrisom, G9SKIN, AMILL, COSCELL四大K-Beauty品牌的协同效应。"
        },
        sidebar: ["首页", "护理重点", "肌肤困扰", "推荐结果"],
        phases: ["第一步：重点护理", "第二步：肌肤困扰", "您的专属方案"],
        instructions: ["请选择您最关注的护理类别", "请确认您的主要肌肤困扰", "为您精心挑选的护肤方案如下："],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.RU]: {
        start: "НАЧАТЬ ДИАГНОСТИКУ",
        next: "ДАЛЕЕ",
        back: "НАЗАД",
        reset: "СБРОС",
        buyingLink: "КУПИТЬ ОНЛАЙН",
        brandFile: "ФАЙЛ О БРЕНДЕ",
        catalog: "СКАЧАТЬ КАТАЛОГ",
        contact: "КОНТАКТЫ",
        b2b: "B2B ПАРТНЕРСТВО",
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nПРЕМИУМ\nУХОД.",
            desc: "Откройте синергию лучших брендов K-Beauty: Berrisom, G9SKIN, AMILL и COSCELL."
        },
        sidebar: ["ГЛАВНАЯ", "УХОД", "ПРОБЛЕМЫ", "РЕШЕНИЕ"],
        phases: ["ЭТАП 01: Фокус", "ЭТАП 02: Проблема", "Ваш уход"],
        instructions: ["Выберите категорию ухода", "Какая у вас основная проблема кожи?", "Мы подобрали эти продукты для вас:"],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.EL]: {
        start: "ΕΝΑΡΞΗ",
        next: "ΕΠΟΜΕΝΟ",
        back: "ΠΙΣΩ",
        reset: "ΕΠΑΝΑΦΟΡΑ",
        buyingLink: "ΑΓΟΡΑ ΤΩΡΑ",
        brandFile: "ΑΡΧΕΙΟ ΜΑΡΚΑΣ",
        catalog: "ΛΗΨΗ ΚΑΤΑΛΟΓΟΥ",
        contact: "ΕΠΙΚΟΙΝΩΝΙΑ",
        b2b: "ΣΥΝΕΡΓΑΣΙΑ B2B",
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nPREMIUM\nΦΡΟΝΤΙΔΑ.",
            desc: "Ζήστε τη συνέργεια των κορυφαίων μαρκών K-Beauty: Berrisom, G9SKIN, AMILL και COSCELL."
        },
        sidebar: ["ΑΡΧΙΚΗ", "ΦΡΟΝΤΙΔΑ", "ΑΝΑΓΚΕΣ", "ΠΡΟΤΑΣΗ"],
        phases: ["ΒΗΜΑ 01: Κατηγορία", "ΒΗΜΑ 02: Ανάγκη", "Η Πρότασή μας"],
        instructions: ["Επιλέξτε μια κατηγορία φροντίδας", "Ποια είναι η κύρια ανάγκη της επιδερμίδας σας;", "Επιλέξαμε αυτά τα προϊόντα για εσάς:"],
        snsFeedbackBtn: "SNS Feedback from global"
    },
    [Language.HU]: {
        start: "KEZDÉS",
        next: "KÖVETKEZŐ",
        back: "VISSZA",
        reset: "ÚJRAKEZDÉS",
        buyingLink: "VÁSÁRLÁS ONLINE",
        brandFile: "MÁRKA ÚTMUTATÓ",
        catalog: "KATALÓGUS LETÖLTÉSE",
        contact: "KAPCSOLAT",
        b2b: "B2B ÉS GLOBÁLIS PARTNERSÉG",
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nPRÉMIUM\nKURÁCIÓ.",
            desc: "Fedezze fel a legjobb K-Beauty innovációk szinergiáját. Berrisom, G9SKIN, AMILL és COSCELL szakértői megoldások."
        },
        phases: ["01. LÉPÉS: Fókusz", "02. LÉPÉS: Probléma", "Személyre Szabott Megoldás"],
        instructions: ["Válassza ki az elsődleges célt", "Mi a fő bőrproblémája?", "Ezeket a prémium termékeket választottuk Önnek:"],
        snsFeedbackBtn: "SNS Visszajelzés a világból"
    }
};

export const CATEGORIES: CategoryData[] = [
    {
        id: Category.MAKEUP,
        title: 'Makeup Tattoo',
        subtitle: 'Berrisom: Professional Long-wear Solutions',
        brand: 'BERRISOM',
        imageUrl: getDriveUrl('1Ru1sWVXPcx5xk5Tccjf5c7FlkV-sl_eb'),
        translations: {
            [Language.ES]: { title: 'Maquillaje Tattoo', subtitle: 'Berrisom: Soluciones profesionales de larga duración' },
            [Language.JP]: { title: 'タトゥーメイク', subtitle: 'Berrisom: プロ仕様の持続力' },
            [Language.ME]: { title: 'تاتو المكياج', subtitle: 'بيريسوم: حلول احترافية تدوم طويلاً' },
            [Language.FR]: { title: 'Maquillage Tattoo', subtitle: 'Berrisom : Haute tenue professionnelle' },
            [Language.DE]: { title: 'Make-up-Tattoo', subtitle: 'Berrisom: Professionelle Langzeit-Lösungen' },
            [Language.KR]: { title: '메이크업 타투', subtitle: 'Berrisom: 지속력 끝판왕, 프로페셔널 솔루션' },
            [Language.CN]: { title: '纹身彩妆', subtitle: 'Berrisom: 持久专业的彩妆方案' },
            [Language.HU]: { title: 'Smink Tetoválás', subtitle: 'Berrisom: Professzionális Tartós Megoldások' }
        },
        options: [
            {
                id: 'lip', label: 'Lip Care', sub: 'Long-lasting tattoo lip tints',
                translations: {
                    [Language.ES]: { label: 'Cuidado Labial', sub: 'Tintes tattoo de color inalterable' },
                    [Language.JP]: { label: 'リップケア', sub: '塗りたての鮮やかさが続くティント' },
                    [Language.ME]: { label: 'العناية بالشفاه', sub: 'صبغات شفاه تاتو تدوم طويلاً' },
                    [Language.FR]: { label: 'Soin des Lèvres', sub: 'Encres à lèvres tattoo longue durée' },
                    [Language.DE]: { label: 'Lippenpflege', sub: 'Langanhaltende Lippen-Tattoos' },
                    [Language.KR]: { label: '립 케어', sub: '하루 종일 생생한 롱래스팅 틴트' },
                    [Language.CN]: { label: '唇部护理', sub: '超长持久纹身唇彩' },
                    [Language.HU]: { label: 'Ajakápolás', sub: 'Hosszan tartó tetoválás ajaktinták' }
                }
            },
            {
                id: 'eyebrow', label: 'Eyebrow Care', sub: '8-day lasting natural definition',
                translations: {
                    [Language.ES]: { label: 'Cejas Perfectas', sub: 'Definición natural que dura hasta 8 días' },
                    [Language.JP]: { label: 'アイブロウケア', sub: '8日間美しさをキープするタトゥー眉' },
                    [Language.ME]: { label: 'العناية بالحواجب', sub: 'تحديد طبيعي يدوم لمدة 8 أيام' },
                    [Language.FR]: { label: 'Sourcils', sub: 'Définition naturelle tenue 8 jours' },
                    [Language.DE]: { label: 'Brauenpflege', sub: '8 Tage langanhaltende Definition' },
                    [Language.KR]: { label: '아이브로우', sub: '최대 8일 지속, 자연스러운 눈썹 타투' },
                    [Language.CN]: { label: '眉部护理', sub: '8天持久自然眉妆' },
                    [Language.HU]: { label: 'Szemöldök Ápolás', sub: '8 napig tartó természetes definiálás' }
                }
            },
            {
                id: 'shading', label: 'Shading Tattoo', sub: '7-day lasting 3D contouring',
                translations: {
                    [Language.ES]: { label: 'Contorno 3D', sub: 'Esculpido facial de 7 días de duración' },
                    [Language.JP]: { label: 'シェーディング', sub: '理想の陰影メイクをデザイン。7日間持続する３D立体メイク。' },
                    [Language.ME]: { label: 'تاتو التظليل', sub: 'تحديد ثلاثي الأبعاد يدوم 7 أيام' },
                    [Language.FR]: { label: 'Contouring 3D', sub: 'Sculptage du visage tenue 7 jours' },
                    [Language.DE]: { label: 'Konturierung', sub: '7 Tage anhaltendes 3D-Shading' },
                    [Language.KR]: { label: '쉐딩 타투', sub: '7일 지속 3D 윤곽 메이크업' },
                    [Language.CN]: { label: '修容纹身', sub: '7天持久立体修容' },
                    [Language.HU]: { label: 'Árnyékoló Tetoválás', sub: '7 napig tartó 3D kontúrozás' }
                }
            }
        ]
    },
    {
        id: Category.SKINCARE,
        title: 'Skincare',
        subtitle: 'G9SKIN: Signature Milk & Hydration',
        brand: 'G9SKIN',
        imageUrl: getDriveUrl('16_05uAEWUepmP871kUafYMyHqAAckvbB'),
        translations: {
            [Language.ES]: { title: 'Cuidado Facial', subtitle: 'G9SKIN: Hidratación con extractos de leche' },
            [Language.JP]: { title: 'スキンケア', subtitle: 'G9SKIN: 牛乳タンパク質で弾む潤い肌' },
            [Language.ME]: { title: 'العناية بالبشرة', subtitle: 'جي ناين سكين: ترطيب الحليب الفاخر' },
            [Language.FR]: { title: 'Soins Visage', subtitle: 'G9SKIN : Hydratation signature au lait' },
            [Language.DE]: { title: 'Hautpflege', subtitle: 'G9SKIN: Feuchtigkeit mit Milchproteinen' },
            [Language.KR]: { title: '스킨케어', subtitle: 'G9SKIN: 우유 단백질로 완성하는 촉촉한 피부' },
            [Language.CN]: { title: '护肤', subtitle: 'G9SKIN: 牛奶蛋白保湿护理' },
            [Language.HU]: { title: 'Bőrápolás', subtitle: 'G9SKIN: Jellegzetes Tej és Hidratálás' }
        },
        options: [
            {
                id: 'toneup', label: 'Tone-up Care', sub: 'Instant brightening cream',
                translations: {
                    [Language.ES]: { label: 'Efecto Iluminador', sub: 'Crema aclarante con brillo instantáneo' },
                    [Language.JP]: { label: 'トーンアップ', sub: '透明感あふれる美白美肌へ' },
                    [Language.ME]: { label: 'تفتيح فوري', sub: 'كريم إشراقة وتفتيح فوري' },
                    [Language.FR]: { label: 'Éclat du Teint', sub: 'Crème illuminatrice instantanée' },
                    [Language.DE]: { label: 'Tone-up Pflege', sub: 'Sofortige Leuchtkraft-Creme' },
                    [Language.KR]: { label: '톤업 케어', sub: '즉각적인 화이트닝 & 톤업 효과' },
                    [Language.CN]: { label: '提亮护理', sub: '瞬间提亮美白霜' },
                    [Language.HU]: { label: 'Tónusjavítás', sub: 'Azonnali ragyogást adó krém' }
                }
            },
            {
                id: 'moisture', label: 'Moisture Care', sub: 'Deep hydration care',
                translations: {
                    [Language.ES]: { label: 'Hidratación Extrema', sub: 'Nutrición intensa para pieles secas' },
                    [Language.JP]: { label: '高保湿ケア', sub: '深部まで潤いを届ける水分補給' },
                    [Language.ME]: { label: 'الترطيب العميق', sub: 'عناية فائقة لترطيب البشرة' },
                    [Language.FR]: { label: 'Hydratation', sub: 'Soin hydratant intense' },
                    [Language.DE]: { label: 'Feuchtigkeitskur', sub: 'Tiefenwirksame Feuchtigkeitspflege' },
                    [Language.KR]: { label: '수분 케어', sub: '피부 깊숙이 채워지는 강력한 보습' },
                    [Language.CN]: { label: '保湿护理', sub: '深层补水保湿' },
                    [Language.HU]: { label: 'Hidratálás', sub: 'Mélyhidratáló ápolás' }
                }
            },
            {
                id: 'mask', label: 'Mask Care', sub: 'Professional aesthetic masks',
                translations: {
                    [Language.ES]: { label: 'Mascarillas', sub: 'Tratamientos estéticos profesionales en casa' },
                    [Language.JP]: { label: 'マスクパック', sub: '自宅でできる本格エステ級ケア' },
                    [Language.ME]: { label: 'أقنعة الجمال', sub: 'أقنعة احترافية للعناية الفائقة' },
                    [Language.FR]: { label: 'Masques Soins', sub: 'Soins esthétiques professionnels' },
                    [Language.DE]: { label: 'Maskenpflege', sub: 'Professionelle Wirkstoffmasken' },
                    [Language.KR]: { label: '마스크 케어', sub: '집에서 즐기는 에스테틱 홈케어' },
                    [Language.CN]: { label: '面膜护理', sub: '专业美容院级面膜' },
                    [Language.HU]: { label: 'Maszk Ápolás', sub: 'Professzionális esztétikai maszkok' }
                }
            }
        ]
    },
    {
        id: Category.CLEANSING,
        title: 'Deep Cleansing',
        subtitle: 'AMILL: Super Grain Purification',
        brand: 'AMILL',
        imageUrl: getDriveUrl('1sglXdGWlpQQPCYVo1euIyTSjTGnSlKG6'),
        translations: {
            [Language.ES]: { title: 'Limpieza Profunda', subtitle: 'AMILL: Purificación con granos naturales' },
            [Language.JP]: { title: 'クレンジング', subtitle: 'AMILL: 穀物成分で毛穴までクリアに' },
            [Language.ME]: { title: 'التنظيف العميق', subtitle: 'أميل: تنقية بخلاصة الحبوب الفائقة' },
            [Language.FR]: { title: 'Nettoyage Profond', subtitle: 'AMILL : Purification aux super-grains' },
            [Language.DE]: { title: 'Tiefenreinigung', subtitle: 'AMILL: Reinigung mit Getreideextrakten' },
            [Language.KR]: { title: '딥 클렌징', subtitle: 'AMILL: 곡물 에너지로 맑고 깨끗하게' },
            [Language.CN]: { title: '深层清洁', subtitle: 'AMILL: 超级谷物净化' },
            [Language.HU]: { title: 'Mélytisztítás', subtitle: 'AMILL: Szuper Gabona Tisztítás' }
        },
        options: [
            {
                id: 'bubble', label: 'Foam Type', sub: 'Creamy grain cleansing foam',
                translations: {
                    [Language.ES]: { label: 'Limpiador en Espuma', sub: 'Espuma cremosa a base de granos' },
                    [Language.JP]: { label: 'フォーム洗顔', sub: '韓国産の米エキス配合。肌への負担を抑えながらメイクを完璧にオフ。' },
                    [Language.ME]: { label: 'المنظف الرغوي', sub: 'رغوة كريمية منظفة بالحبوب' },
                    [Language.FR]: { label: 'Mousse Nettoyante', sub: 'Mousse onctueuse aux céréales' },
                    [Language.DE]: { label: 'Reinigungsschaum', sub: 'Cremiger Schaum mit Getreide' },
                    [Language.KR]: { label: '폼 클렌징', sub: '부드러운 곡물 거품 세안' },
                    [Language.CN]: { label: '泡沫洁面', sub: '柔滑谷物洁面泡沫' },
                    [Language.HU]: { label: 'Hab Típus', sub: 'Krémes gabona tisztító hab' }
                }
            },
            {
                id: 'oil', label: 'Oil Product', sub: 'Mild rice cleansing oil',
                translations: {
                    [Language.ES]: { label: 'Aceite Limpiador', sub: 'Fórmula suave con extracto de arroz' },
                    [Language.JP]: { label: 'オイル洗顔', sub: '米ぬかオイルで優しくメイクオフ' },
                    [Language.ME]: { label: 'المنظف الزيتي', sub: 'زيت تنظيف الأرز اللطيف' },
                    [Language.FR]: { label: 'Huile Nettoyante', sub: 'Démaquillant doux à l\'huile de riz' },
                    [Language.DE]: { label: 'Reinigungsöl', sub: 'Mildes Öl mit Reisextrakten' },
                    [Language.KR]: { label: '오일 클렌징', sub: '순한 쌀겨 오일 클렌징' },
                    [Language.CN]: { label: '卸妆油', sub: '温和米糠卸妆油' },
                    [Language.HU]: { label: 'Olaj Termék', sub: 'Kíméletes rizs tisztító olaj' }
                }
            }
        ]
    },
    {
        id: Category.ANTI_AGING,
        title: 'Anti-Aging',
        subtitle: 'COSCELL: Clinical Grade Repair',
        brand: 'COSCELL',
        imageUrl: getDriveUrl('10uzxPYnCxkTN_Tc3EDCRUa9CaeFKkLcU'),
        translations: {
            [Language.ES]: { title: 'Anti-Edad', subtitle: 'COSCELL: Reparación avanzada de grado clínico' },
            [Language.JP]: { title: 'COSCELL:クリニック品質の高機能スキンケア', subtitle: 'COSCELL: クリニック品質の細胞修復' },
            [Language.ME]: { title: 'مكافحة الشيخوخة', subtitle: 'كوزسيل: إصلاح خلوي طبي متطور' },
            [Language.FR]: { title: 'Anti-Âge', subtitle: 'COSCELL : Réparation clinique avancée' },
            [Language.DE]: { title: 'Anti-Aging', subtitle: 'COSCELL: Klinische Zellreparatur' },
            [Language.KR]: { title: '안티에이징', subtitle: 'COSCELL: 전문가급 리페어 솔루션' },
            [Language.CN]: { title: '抗衰老', subtitle: 'COSCELL: 临床级修复护理' },
            [Language.HU]: { title: 'Öregedésgátlás', subtitle: 'COSCELL: Klinikai Szintű Helyreállítás' }
        },
        options: [
            {
                id: 'wrinkle_eye', label: 'Eye Bag Care', sub: 'Retinol eye treatment',
                translations: {
                    [Language.ES]: { label: 'Contorno de Ojos', sub: 'Tratamiento intensivo con retinol' },
                    [Language.JP]: { label: 'レチノールボリュームアイバッグクリーム', sub: '1分で目元の印象を変化させる。シワを目立ちにくくし、ハリを与えるアイバッグクリーム。' },
                    [Language.ME]: { label: 'الهالات والتجاعيد', sub: 'علاج الريتينول لمنطقة العين' },
                    [Language.FR]: { label: 'Contour des Yeux', sub: 'Soin ciblé au rétinol' },
                    [Language.DE]: { label: 'Augenpflege', sub: 'Retinol-Intensivkur' },
                    [Language.KR]: { label: '아이백 케어', sub: '레티놀 집중 아이 트리트먼트' },
                    [Language.CN]: { label: '眼袋护理', sub: '视黄醇眼部护理' },
                    [Language.HU]: { label: 'Szemtáska Ápolás', sub: 'Retinolos szemkezelés' }
                }
            },
            {
                id: 'wrinkle_neck', label: 'Neck Care', sub: 'Restoring firmness in 1 min',
                translations: {
                    [Language.ES]: { label: 'Cuidado del Cuello', sub: 'Firmeza recuperada en 60 segundos' },
                    [Language.JP]: { label: 'ネックケア', sub: '1分でハリを取り戻す即効性ケア' },
                    [Language.ME]: { label: 'عناية الرقبة', sub: 'شد فوري خلال دقيقة واحدة' },
                    [Language.FR]: { label: 'Soin du Cou', sub: 'Restaure la fermeté en 1 min' },
                    [Language.DE]: { label: 'Halspflege', sub: 'Straffung in nur 1 Minute' },
                    [Language.KR]: { label: '넥 케어', sub: '1분 만에 되찾는 목주름 탄력' },
                    [Language.CN]: { label: '颈部护理', sub: '1分钟紧致修复' },
                    [Language.HU]: { label: 'Nyak Ápolás', sub: 'Feszesség helyreállítása 1 perc alatt' }
                }
            },
            {
                id: 'serum_care', label: 'Serum Care', sub: 'Galvanic & Retinol treatment',
                translations: {
                    [Language.ES]: { label: 'Sérum Especializado', sub: 'Tratamiento galvánico con retinol' },
                    [Language.JP]: { label: '美容液セラム', sub: '最先端レチノール成分で集中修復' },
                    [Language.ME]: { label: 'سيروم علاجي', sub: 'علاج الجلفانيك والريتينول' },
                    [Language.FR]: { label: 'Sérum Expert', sub: 'Traitement galvanique au rétinol' },
                    [Language.DE]: { label: 'Serumpflege', sub: 'Galvanik- & Retinol-Kur' },
                    [Language.KR]: { label: '세럼 케어', sub: '갈바닉 & 레티놀 더블 케어' },
                    [Language.CN]: { label: '精华护理', sub: '电离子视黄醇护理' },
                    [Language.HU]: { label: 'Szérum Ápolás', sub: 'Galván és Retinol kezelés' }
                }
            },
            {
                id: 'green_papaya', label: 'Green Papaya Line', sub: 'PDRN pore care line',
                translations: {
                    [Language.ES]: { label: 'Gama Papaya Verde', sub: 'Cuidado de poros con PDRN' },
                    [Language.JP]: { label: 'グリーンパパイヤPDRNライン', sub: 'PDRN配合の次世代毛穴ケア' },
                    [Language.ME]: { label: 'مجموعة البابايا', sub: 'عناية المسام بتقنية PDRN' },
                    [Language.FR]: { label: 'Gamme Papaye Verte', sub: 'Soin des pores au PDRN' },
                    [Language.DE]: { label: 'Grüne Papaya-Linie', sub: 'Poren-Care mit PDRN' },
                    [Language.KR]: { label: '그린 파파야 라인', sub: 'PDRN 모공 집중 케어' },
                    [Language.CN]: { label: '青木瓜系列', sub: 'PDRN毛孔护理系列' },
                    [Language.HU]: { label: 'Zöld Papaya Család', sub: 'PDRN pórusápoló család' }
                }
            },
            {
                id: 'vita_line', label: 'VITA LINE', sub: 'Vitamin C 99% capsule line',
                translations: {
                    [Language.ES]: { label: 'Gama VITA', sub: 'Vitamina C pura al 99% en cápsulas' },
                    [Language.JP]: { label: 'しみ・くすみビタミンケア', sub: '純度99%のビタミンCカプセル' },
                    [Language.ME]: { label: 'مجموعة فيتا', sub: 'كبسولات فيتامين سي النقي' },
                    [Language.FR]: { label: 'Ligne VITA', sub: 'Vitamine C pure à 99% en capsules' },
                    [Language.DE]: { label: 'VITA-LINIE', sub: '99% reine Vitamin-C-Kapseln' },
                    [Language.KR]: { label: '비타 라인', sub: '순수 비타민 C 99% 캡슐 라인' },
                    [Language.CN]: { label: '维他命系列', sub: '99%纯维生素C胶囊系列' },
                    [Language.HU]: { label: 'VITA CSALÁD', sub: 'C-vitamin 99% kapszula család' }
                }
            }
        ]
    }
];

export const PRODUCTS: Product[] = [
    {
        id: 'berrisom-lip-original',
        brand: 'BERRISOM',
        name: 'LIP TATTOO TINT PACK',
        description: 'The iconic peel-off tint. Ensures vibrant color for 32 hours with zero transfer.',
        imageUrl: getDriveUrl('1Ru1sWVXPcx5xk5Tccjf5c7FlkV-sl_eb'),
        subNeed: ['lip'],
        tags: ['32H', 'Iconic'],
        snsFeedback: {
            [Language.US]: `
                <h4 class="font-bold mb-2">Lip Tattoo Tint Pack: Vivid Coloration with a 5-Minute Application</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Convenient Application & Instant Pigmentation:</strong> By applying a thick layer to the lips and allowing it to dry for approximately 5 minutes before peeling, the product delivers immediate, vivid coloration. Unlike tube-type competitors, this product features an integrated silicone tip with optimal elasticity, ensuring precise application along the lip line and superior ease of use.</li>
                    <li><strong>Transfer-Proof Adhesion:</strong> Once peeled, the formula creates a perfect seal that does not transfer onto cups, masks, or hands, maintaining a pristine appearance without smudging.</li>
                    <li><strong>Superior Retention & Layering:</strong> A single application provides all-day color retention. The product supports versatile styling; users can layer two different shades for a natural gradient effect or apply lip oil on top for a glossy finish.</li>
                </ul>
            `,
            [Language.KR]: `
                <h4 class="font-bold mb-2">립 타투 틴트 팩: 5분 만에 완성되는 생생한 발색</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>간편한 사용법과 즉각적인 발색:</strong> 입술에 도톰하게 바르고 약 5분 후 떼어내면 즉시 선명한 컬러가 입혀집니다. 튜브 타입과 달리 탄력 있는 실리콘 팁이 내장되어 있어 입술 라인을 따라 정교하게 바르기 쉽고 사용이 편리합니다.</li>
                    <li><strong>묻어남 없는 밀착력:</strong> 팩을 떼어낸 후에는 컵, 마스크, 손 등에 전혀 묻어나지 않아 하루 종일 깔끔한 상태를 유지할 수 있습니다.</li>
                    <li><strong>하루 종일 지속되는 컬러:</strong> 한 번의 사용으로 하루 종일 컬러가 지속됩니다. 두 가지 컬러를 섞어 자연스러운 그라데이션을 연출하거나 립 오일을 덧발라 광택을 더하는 등 다양한 스타일링이 가능합니다.</li>
                </ul>
            `,
            [Language.JP]: `
                <h4 class="font-bold mb-2">リップタトゥーティントパック：5分で鮮やかな発色</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>簡単な使用法と即時の発色：</strong> 唇に厚めに塗り、約5分後に剥がすだけで、鮮やかな色が定着します。チューブタイプとは異なり、弾力のあるシリコンチップが内蔵されており、リップラインに沿って塗りやすく、使い勝手が抜群です。</li>
                    <li><strong>マスクにつかない密着力：</strong> 剥がした後は、カップやマスク、手などに色移りせず、一日中きれいな状態を保ちます。</li>
                    <li><strong>一日中続く持続力：</strong> 一度の使用で一日中色が持続します。2色を混ぜてグラデーションを作ったり、リップオイルを重ねてツヤを出したりと、様々なアレンジが楽しめます。</li>
                </ul>
            `,
            [Language.CN]: `
                <h4 class="font-bold mb-2">唇纹身染唇液：5分钟即可呈现鲜艳色彩</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>使用方便，即刻显色：</strong> 厚涂于双唇，约5分钟后撕下，即可呈现鲜艳色彩。内置弹性硅胶刷头，比管状产品更易于勾勒唇形。</li>
                    <li><strong>不沾杯，超强附着力：</strong> 撕下后，唇妆不沾杯、不沾口罩、不脏手，整日保持完美妆容。</li>
                    <li><strong>超长持久与叠涂：</strong> 一次使用，全天持色。可叠涂两色打造渐变效果，或叠加唇油增加光泽感。</li>
                </ul>
            `,
            [Language.ES]: `
                <h4 class="font-bold mb-2">Lip Tattoo Tint Pack: Color Vivo en 5 Minutos</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Aplicación Fácil y Pigmentación Instantánea:</strong> Aplica una capa gruesa, deja secar 5 minutos y retira para un color instantáneo. Su punta de silicona integrada facilita una aplicación precisa.</li>
                    <li><strong>A Prueba de Transferencias:</strong> No mancha tazas, mascarillas ni manos, manteniendo una apariencia impecable.</li>
                    <li><strong>Retención Superior:</strong> Dura todo el día. Puedes mezclar tonos para un degradado o añadir aceite labial para un acabado brillante.</li>
                </ul>
            `,
            [Language.FR]: `
                <h4 class="font-bold mb-2">Lip Tattoo Tint Pack : Couleur Vive en 5 Minutes</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Application Facile & Pigmentation Instantanée :</strong> Appliquez, laissez sécher 5 min et retirez pour une couleur immédiate. L'embout en silicone assure une précision parfaite.</li>
                    <li><strong>Sans Transfert :</strong> Ne tache pas les tasses ni les masques.</li>
                    <li><strong>Tenue Longue Durée :</strong> Une application suffit pour toute la journée. Idéal pour les dégradés ou avec une huile à lèvres.</li>
                </ul>
            `,
            [Language.DE]: `
                <h4 class="font-bold mb-2">Lip Tattoo Tint Pack: Lebendige Farbe in 5 Minuten</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Einfache Anwendung:</strong> Dick auftragen, 5 Minuten trocknen lassen, abziehen – für sofortige Farbe. Die Silikonspitze sorgt für Präzision.</li>
                    <li><strong>Kein Abfärben:</strong> Färbt nicht auf Tassen oder Masken ab.</li>
                    <li><strong>Langer Halt:</strong> Hält den ganzen Tag. Perfekt für Gradient-Looks oder mit Lippenöl kombinierbar.</li>
                </ul>
            `,
            [Language.ME]: `
                <h4 class="font-bold mb-2">حزمة تاتو الشفاه: لون حيوي في 5 دقائق</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>سهولة الاستخدام:</strong> ضعي طبقة سميكة، اتركيها تجف لمدة 5 دقائق ثم انزعيها للحصول على لون فوري. يضمن رأس السيليكون تطبيقاً دقيقاً.</li>
                    <li><strong>لا يترك أثراً:</strong> لا يلطخ الأكواب أو الكمامات.</li>
                    <li><strong>ثبات فائق:</strong> يدوم اللون طوال اليوم. يمكن مزج لونين لتدرج طبيعي.</li>
                </ul>
            `,
            [Language.RU]: `
                <h4 class="font-bold mb-2">Тинт-тату для губ: Яркий цвет за 5 минут</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Простое нанесение:</strong> Нанесите толстым слоем, дайте высохнуть 5 минут и снимите пленку. Силиконовый аппликатор обеспечивает точность.</li>
                    <li><strong>Не оставляет следов:</strong> Не отпечатывается на чашках и масках.</li>
                    <li><strong>Стойкость на весь день:</strong> Цвет держится весь день. Можно сочетать оттенки или добавить масло для блеска.</li>
                </ul>
            `,
            [Language.EL]: `
                <h4 class="font-bold mb-2">Lip Tattoo Tint Pack: Ζωντανό Χρώμα σε 5 Λεπτά</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Εύκολη Εφαρμογή:</strong> Εφαρμόστε παχύ στρώμα, αφήστε 5 λεπτά και αφαιρέστε. Το άκρο σιλικόνης εξασφαλίζει ακρίβεια.</li>
                    <li><strong>Χωρίς Μεταφορά:</strong> Δεν λερώνει ποτήρια ή μάσκες.</li>
                    <li><strong>Μεγάλη Διάρκεια:</strong> Κρατάει όλη μέρα. Ιδανικό για gradient με ανάμειξη χρωμάτων.</li>
                </ul>
            `,
            [Language.HU]: `
                <h4 class="font-bold mb-2">Lip Tattoo Tint Pack: Élénk Színezés 5 Perces Alkalmazással</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Kényelmes Alkalmazás és Azonnali Pigmentáció:</strong> Vigyen fel vastag réteget, hagyja száradni 5 percig, majd húzza le az azonnali, élénk színért. A beépített szilikon fej precíz felvitelt biztosít.</li>
                    <li><strong>Elkenődésmentes Tapadás:</strong> A lehúzás után tökéletes tömítést képez, amely nem kenődik bögrékre, maszkokra vagy kézre.</li>
                    <li><strong>Kiváló Tartósság:</strong> Egyetlen alkalmazás egész napos színt biztosít. Használható színátmenetes vagy fényes hatás elérésére is.</li>
                </ul>
            `
        },
        translations: {
            [Language.ES]: { name: 'LIP TATTOO TINT PACK', description: 'El tinte labial peel-off original. Color vibrante durante 32 horas sin manchas.' },
            [Language.JP]: { name: 'リップタトゥーパック', description: '世界中で愛される元祖「剥がすリップ」。32時間塗りたての色をキープ。' },
            [Language.ME]: { name: 'تاتو الشفاه الأصلي', description: 'أول صبغة شفاه قابلة للتقشير. تضمن لونًا حيويًا لمدة 32 ساعة دون تلطيخ.' },
            [Language.FR]: { name: 'LIP TATTOO TINT PACK', description: "L'emblématique tattoo à lèvres pelable. Couleur vibrante 32h sans transfert." },
            [Language.DE]: { name: 'LIP TATTOO TINT PACK', description: 'Die weltweit erste abziehbare Lippentönung. Hält 32 Stunden ohne abzufärben.' },
            [Language.KR]: { name: '립 타투 틴트 팩', description: '원조 뜯는 틴트. 묻어남 없이 32시간 지속되는 선명한 발색을 경험하세요.' },
            [Language.HU]: { name: 'LIP TATTOO TINT PACK', description: "Az ikonikus lehúzható tinta. Élénk színt biztosít 32 órán át, elkenődés nélkül." }
        }
    },
    {
        id: 'berrisom-jelly',
        brand: 'BERRISOM',
        name: 'JELLY TATTOO TINT',
        description: 'A glossy peel-off tint pack that provides vivid color with a comfortable jelly finish.',
        imageUrl: getDriveUrl('1GHrHm5azvpvSrJs18prGj62o1ZdxU1yc'),
        subNeed: ['lip'],
        tags: ['Glossy', 'Comfort'],
        translations: {
            [Language.ES]: { name: 'JELLY TATTOO TINT', description: 'Tinte peel-off con textura gelatina para un color intenso y labios hidratados.' },
            [Language.JP]: { name: 'ジェリータトゥーティント', description: 'ぷるんとしたジェリーのような質感。鮮やかな発色と潤いが持続します。' },
            [Language.ME]: { name: 'جيلي تاتو تينت', description: 'صبغة شفاه جيلي قابلة للتقشير بلون غني وملمس مريح.' },
            [Language.FR]: { name: 'JELLY TATTOO TINT', description: 'Tattoo à lèvres pelable au fini gelée pour une couleur éclatante.' },
            [Language.DE]: { name: 'JELLY TATTOO TINT', description: 'Ein abziehbares Lippen-Tattoo mit lebendigen Farben und geschmeidigem Jelly-Finish.' },
            [Language.KR]: { name: '젤리 타투 틴트', description: '촉촉한 젤리 텍스처로 완성하는 생생한 컬러와 편안한 사용감.' },
            [Language.HU]: { name: 'JELLY TATTOO TINT', description: 'Fényes lehúzható tinta csomag, amely élénk színt ad kényelmes zselés felülettel.' }
        }
    },
    {
        id: 'berrisom-eyebrow',
        brand: 'BERRISOM',
        name: 'OOPS MY BROW TATTOO',
        description: 'A professional brow solution that lasts for up to 8 days with a natural look.',
        imageUrl: getDriveUrl('1rW5IXV3lFCDXw_ux8ent3Q1FJKEXIAS8'),
        subNeed: ['eyebrow'],
        tags: ['8-Day', 'Natural'],
        snsFeedback: {
            [Language.US]: `
                <h4 class="font-bold mb-2">Eyebrow Tattoo Pack: Exceptional Durability and Natural Finish</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Unrivaled Long-Lasting Performance:</strong> The product demonstrates powerful durability, maintaining pigmentation for 5 to 7 days after a single use. This performance significantly exceeds the 32-hour duration benchmark, eliminating the need for retouching and drastically reducing morning makeup routines throughout the week.</li>
                    <li><strong>Natural Aesthetic:</strong> The tint results in a natural look rather than an artificial or overly dark appearance. The applicator, designed like a nail polish brush, allows for easy control, making it accessible even for beginners.</li>
                </ul>
            `,
            [Language.KR]: `
                <h4 class="font-bold mb-2">아이브로우 타투 팩: 놀라운 지속력과 자연스러운 마무리</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>독보적인 롱래스팅:</strong> 한 번 사용으로 5~7일간 컬러가 지속됩니다. 매일 아침 눈썹을 그릴 필요가 없어 메이크업 시간을 획기적으로 줄여줍니다.</li>
                    <li><strong>자연스러운 발색:</strong> 인위적이거나 너무 진하지 않고 본연의 눈썹처럼 자연스럽게 착색됩니다. 매니큐어 브러시 형태의 팁으로 초보자도 쉽게 조절하여 바를 수 있습니다.</li>
                </ul>
            `,
            [Language.JP]: `
                <h4 class="font-bold mb-2">アイブロウタトゥーパック：驚異の持続力と自然な仕上がり</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>圧倒的なロングラスティング：</strong> 一度の使用で5〜7日間色が持続します。毎朝眉を描く必要がなく、メイク時間を大幅に短縮できます。</li>
                    <li><strong>自然な仕上がり：</strong> 不自然に濃くならず、自眉のように自然に色づきます。マニキュアのようなブラシで、初心者でも簡単に扱えます。</li>
                </ul>
            `,
            [Language.CN]: `
                <h4 class="font-bold mb-2">眉毛纹身染眉液：卓越持久，自然妆效</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>无与伦比的持久力：</strong> 一次使用，持色5-7天。告别每日画眉烦恼，大幅缩短晨间化妆时间。</li>
                    <li><strong>自然美感：</strong> 妆效自然，不会过于生硬或深沉。指甲油刷头设计，易于掌控，新手也能轻松上手。</li>
                </ul>
            `,
            [Language.ES]: `
                <h4 class="font-bold mb-2">Eyebrow Tattoo Pack: Durabilidad Excepcional</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Larga Duración:</strong> Mantiene el color de 5 a 7 días. Olvídate de retocarte las cejas cada mañana.</li>
                    <li><strong>Acabado Natural:</strong> No queda artificial. El aplicador tipo esmalte facilita el uso incluso para principiantes.</li>
                </ul>
            `,
            [Language.FR]: `
                <h4 class="font-bold mb-2">Eyebrow Tattoo Pack : Durabilité Exceptionnelle</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Tenue Longue Durée :</strong> La couleur reste 5 à 7 jours. Plus besoin de maquiller vos sourcils chaque matin.</li>
                    <li><strong>Rendu Naturel :</strong> Résultat naturel, sans effet artificiel. Application facile grâce au pinceau précis.</li>
                </ul>
            `,
            [Language.DE]: `
                <h4 class="font-bold mb-2">Eyebrow Tattoo Pack: Außergewöhnliche Haltbarkeit</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Langer Halt:</strong> Die Farbe hält 5 bis 7 Tage. Spart Zeit bei der täglichen Routine.</li>
                    <li><strong>Natürlicher Look:</strong> Wirkt nicht künstlich. Einfache Anwendung auch für Anfänger dank Pinsel-Applikator.</li>
                </ul>
            `,
            [Language.ME]: `
                <h4 class="font-bold mb-2">تاتو الحواجب: ثبات استثنائي ومظهر طبيعي</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>يدوم طويلاً:</strong> يحافظ على اللون لمدة 5 إلى 7 أيام، مما يوفر عناء رسم الحواجب يومياً.</li>
                    <li><strong>مظهر طبيعي:</strong> يمنح مظهراً طبيعياً غير مصتنع. الفرشاة سهلة الاستخدام حتى للمبتدئين.</li>
                </ul>
            `,
            [Language.RU]: `
                <h4 class="font-bold mb-2">Тату-тинт для бровей: Стойкость и естественность</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Долговечность:</strong> Цвет держится 5-7 дней. Забудьте о ежедневном макияже бровей.</li>
                    <li><strong>Естественный вид:</strong> Не выглядит искусственно. Удобная кисточка подходит даже для новичков.</li>
                </ul>
            `,
            [Language.EL]: `
                <h4 class="font-bold mb-2">Eyebrow Tattoo Pack: Εξαιρετική Διάρκεια</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Μεγάλη Διάρκεια:</strong> Το χρώμα διαρκεί 5-7 ημέρες. Ξεχάστε το καθημερινό μακιγιάζ φρυδιών.</li>
                    <li><strong>Φυσικό Αποτέλεσμα:</strong> Δεν φαίνεται τεχνητό. Εύκολη εφαρμογή ακόμα και για αρχάριους.</li>
                </ul>
            `,
            [Language.HU]: `
                <h4 class="font-bold mb-2">Szemöldök Tetoválás Csomag: Kivételes Tartósság és Természetes Felület</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Páratlan, Hosszan Tartó Teljesítmény:</strong> A termék 5-7 napig tartó pigmentációt biztosít egyetlen használattal. Ez jelentősen csökkenti a reggeli sminkelési rutint.</li>
                    <li><strong>Természetes Esztétika:</strong> Természetes megjelenést eredményez, nem mesterséges hatást. A körömlakk ecsethez hasonló applikátor könnyű irányítást tesz lehetővé, kezdőknek is.</li>
                </ul>
            `
        },
        translations: {
            [Language.ES]: { name: 'OOPS MY BROW TATTOO', description: 'Cejas perfectas hasta por 8 días. Definición natural de nivel profesional.' },
            [Language.JP]: { name: 'アイブロウタトゥー', description: '最長8日間持続。毎朝のメイクを楽にする、自然な仕上がりの眉タトゥー。' },
            [Language.ME]: { name: 'تاتو الحواجب أوبس', description: 'حل احترافي للحواجب يدوم حتى 8 أيام بمظهر طبيعي للغاية.' },
            [Language.FR]: { name: 'OOPS MY BROW TATTOO', description: 'Teinture sourcils professionnelle tenue 8 jours, fini naturel.' },
            [Language.DE]: { name: 'OOPS MY BROW TATTOO', description: 'Professionelles Augenbrauen-Tattoo für ein natürliches Aussehen, hält bis zu 8 Tage.' },
            [Language.KR]: { name: '웁스 마이 아이브로우 타투', description: '최대 8일 지속. 매일 그릴 필요 없는 자연스러운 눈썹 문신 효과.' },
            [Language.HU]: { name: 'OOPS MY BROW TATTOO', description: 'Professzionális szemöldök megoldás, amely akár 8 napig is tart természetes megjelenéssel.' }
        }
    },
    {
        id: 'berrisom-shading',
        brand: 'BERRISOM',
        name: 'SHADING TATTOO',
        description: 'Define and sculpt your facial contours with a precise, long-lasting 3D finish.',
        imageUrl: getDriveUrl('1XRprARVP6wHaLPaIKZ6So_KYE0vtbppH'),
        subNeed: ['shading'],
        tags: ['3D Sculp', '7-Day'],
        snsFeedback: {
            [Language.US]: `
                <h4 class="font-bold mb-2">Multi-Zone Application</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Beyond lips and brows, the formula is upgraded for versatility, allowing for contouring on the nose, hairline, and under-eye areas (aegyosal). This creates defined facial features, providing confidence even without full makeup.</li>
                    <li><strong>Full Makeup Effect:</strong> The product offers a "full makeup" visual effect suitable for active scenarios such as travel or water activities, ensuring a polished look that withstands various conditions.</li>
                </ul>
            `,
            [Language.KR]: `
                <h4 class="font-bold mb-2">부위별 멀티 활용</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>입술과 눈썹을 넘어, 코 쉐딩, 헤어라인, 애교살 등 다양한 부위에 활용할 수 있도록 개선되었습니다. 쌩얼에도 자신감을 주는 뚜렷한 이목구비를 완성해줍니다.</li>
                    <li><strong>풀 메이크업 효과:</strong> 여행이나 물놀이 등 활동적인 상황에서도 지워지지 않는 풀 메이크업 효과를 제공하여 언제 어디서나 당당한 모습을 유지할 수 있습니다.</li>
                </ul>
            `,
            [Language.JP]: `
                <h4 class="font-bold mb-2">マルチゾーン活用</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>唇や眉だけでなく、ノーズシャドウ、生え際、涙袋など、様々な部位に使えるよう進化しました。すっぴんでも自信が持てる、はっきりとした顔立ちを作ります。</li>
                    <li><strong>フルメイク効果：</strong> 旅行や水遊びなど、メイクが崩れやすいシーンでも、フルメイクしたような完璧な状態をキープします。</li>
                </ul>
            `,
            [Language.CN]: `
                <h4 class="font-bold mb-2">多部位应用</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>不仅用于唇眉，更升级用于鼻影、发际线和卧蚕。无需全妆，也能打造立体轮廓，素颜更自信。</li>
                    <li><strong>全妆效果：</strong> 旅行或水上活动时的理想选择，确保持久精致妆容，无惧各种环境挑战。</li>
                </ul>
            `,
            [Language.ES]: `
                <h4 class="font-bold mb-2">Aplicación Multi-Zona</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Úsalo en nariz, nacimiento del pelo y ojeras para definir tus rasgos.</li>
                    <li><strong>Efecto Maquillaje Completo:</strong> Ideal para viajes o deportes acuáticos, mantén un look pulido en cualquier situación.</li>
                </ul>
            `,
            [Language.FR]: `
                <h4 class="font-bold mb-2">Application Multi-Zones</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Nez, racines des cheveux, contours des yeux : sculptez votre visage.</li>
                    <li><strong>Effet Maquillage Complet :</strong> Parfait pour le sport ou la plage, restez impeccable en toutes circonstances.</li>
                </ul>
            `,
            [Language.DE]: `
                <h4 class="font-bold mb-2">Multi-Zonen-Anwendung</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Für Nase, Haaransatz und Augenpartie geeignet. Definiert die Gesichtszüge.</li>
                    <li><strong>Full Make-up Effekt:</strong> Ideal für Reisen oder Sport, hält verschiedenen Bedingungen stand.</li>
                </ul>
            `,
            [Language.HU]: `
                <h4 class="font-bold mb-2">Többzónás Alkalmazás</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Az ajkakon és szemöldökön túl az orr, a hajvonal és a szem alatti területek kontúrozására is alkalmas. Definiált arcvonásokat hoz létre, önbizalmat adva smink nélkül is.</li>
                    <li><strong>Teljes Smink Hatás:</strong> "Teljes smink" vizuális hatást nyújt, amely alkalmas aktív tevékenységekhez, például utazáshoz vagy vízi sportokhoz.</li>
                </ul>
            `,
            [Language.ME]: `
                <h4 class="font-bold mb-2">تطبيق متعدد المناطق</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>يمكن استخدامه لتحديد الأنف وخط الشعر وتحت العين.</li>
                    <li><strong>تأثير مكياج كامل:</strong> مثالي للسفر أو الأنشطة المائية، يضمن مظهراً متقناً في جميع الظروف.</li>
                </ul>
            `,
            [Language.RU]: `
                <h4 class="font-bold mb-2">Мультизональное применение</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Подходит для контуринга носа, линии роста волос и зоны под глазами.</li>
                    <li><strong>Эффект полного макияжа:</strong> Идеально для путешествий и активного отдыха, макияж остается безупречным.</li>
                </ul>
            `,
            [Language.EL]: `
                <h4 class="font-bold mb-2">Εφαρμογή Πολλαπλών Ζωνών</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Ιδανικό για μύτη, γραμμή μαλλιών και κάτω από τα μάτια.</li>
                    <li><strong>Εφέ Πλήρους Μακιγιάζ:</strong> Τέλειο για ταξίδια ή σπορ, αντέχει σε δύσκολες συνθήκες.</li>
                </ul>
            `
        },
        translations: {
            [Language.ES]: { name: 'SHADING TATTOO', description: 'Define y esculpe el rostro con un acabado 3D impecable y duradero.' },
            [Language.JP]: { name: 'シェーディングタトゥー', description: '理想の陰影メイクをデザイン。7日間持続する３D立体メイク。' },
            [Language.ME]: { name: 'تاتو التظليل', description: 'حدد ونحت ملامح الوجه بلمسة ثلاثية الأبعاد تدوم طويلاً.' },
            [Language.FR]: { name: 'SHADING TATTOO', description: 'Définissez et sculptez vos contours pour un fini 3D durable.' },
            [Language.DE]: { name: 'SHADING TATTOO', description: 'Definieren und modellieren Sie Ihre Gesichtskonturen mit langanhaltendem 3D-Finish.' },
            [Language.KR]: { name: '쉐딩 타투', description: '7일 동안 지속되는 입체 윤곽. 땀과 물에도 지워지지 않는 강력한 3D 페이스 라인.' },
            [Language.HU]: { name: 'SHADING TATTOO', description: 'Definiálja és formálja arcvonásait precíz, hosszan tartó 3D felülettel.' }
        }
    },
    {
        id: 'g9-whipping',
        brand: 'G9SKIN',
        name: 'WHITE IN WHIPPING CREAM',
        description: 'Instant tone-up cream infused with milk protein for a radiant glow.',
        imageUrl: getDriveUrl('16_05uAEWUepmP871kUafYMyHqAAckvbB'),
        subNeed: ['toneup'],
        tags: ['Glow', 'Milk'],
        snsFeedback: {
            [Language.US]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Viral Drivers:</strong> Dubbed "Milk Carton Skincare," this product is trending significantly due to its instagrammable packaging and unique texture.</li>
                    <li><strong>Texture:</strong> Features a "fresh whipped cream" consistency that melts seamlessly into the skin.</li>
                    <li><strong>Performance:</strong> Positioned as a "game changer" for dull skin, offering immediate tone-up effects ideal for achieving a "No-Makeup" look. Users note its effectiveness in covering blemishes and correcting skin tone.</li>
                </ul>
            `,
            [Language.KR]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>바이럴 요소:</strong> "우유곽 스킨케어"로 불리며, 인스타그래머블한 패키지와 독특한 텍스처로 큰 인기를 끌고 있습니다.</li>
                    <li><strong>텍스처:</strong> 피부에 부드럽게 녹아드는 "생크림" 같은 제형이 특징입니다.</li>
                    <li><strong>효능:</strong> 칙칙한 피부를 위한 "게임 체인저"로, 즉각적인 톤업 효과를 제공하여 "파데 프리" 룩을 연출하기에 이상적입니다. 잡티 커버와 피부 톤 보정에 효과적이라는 평이 많습니다.</li>
                </ul>
            `,
            [Language.JP]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>話題の理由：</strong> 「牛乳パックスキンケア」として知られ、映えるパッケージと独特のテクスチャーでSNSでも大人気です。</li>
                    <li><strong>テクスチャー：</strong> 肌にすっとなじむ「ホイップクリーム」のような感触。</li>
                    <li><strong>効果：</strong> くすんだ肌を救う救世主。一塗りでワントーン明るい肌になり、すっぴん風メイクに最適です。色ムラ補正効果も高く評価されています。</li>
                </ul>
            `,
            [Language.CN]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>爆款因素：</strong> 被称为“牛奶盒护肤品”，凭借高颜值包装和独特质地在社交网络上走红。</li>
                    <li><strong>质地：</strong> 拥有“鲜奶油”般的质地，触肤即融。</li>
                    <li><strong>功效：</strong> 暗沉肌肤的救星，提供即时提亮效果，打造“伪素颜”妆容。用户高度评价其遮瑕和肤色修正能力。</li>
                </ul>
            `,
            [Language.ES]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Factor Viral:</strong> Conocido como "Milk Carton Skincare", tendencia por su diseño y textura única.</li>
                    <li><strong>Textura:</strong> Como "crema batida fresca" que se funde en la piel.</li>
                    <li><strong>Rendimiento:</strong> Efecto "Tone-Up" inmediato, ideal para un look natural "No-Makeup". Cubre imperfecciones y unifica el tono.</li>
                </ul>
            `,
            [Language.FR]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Viralité :</strong> Le "soin brique de lait" tendance pour son packaging instagrammable.</li>
                    <li><strong>Texture :</strong> Consistance "crème fouettée" qui fond sur la peau.</li>
                    <li><strong>Performance :</strong> Effet "Tone-Up" immédiat pour un look "No-Makeup". Corrige le teint et couvre les imperfections.</li>
                </ul>
            `,
            [Language.DE]: `
                <h4 class="font-bold mb-2">White In Whipping Cream</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Viraler Hit:</strong> Als "Milchkarton-Pflege" bekannt, trendet durch Design und Textur.</li>
                    <li><strong>Textur:</strong> Wie "frische Schlagsahne", die mit der Haut verschmilzt.</li>
                    <li><strong>Leistung:</strong> Sofortiger Tone-Up-Effekt für den "No-Makeup"-Look. Korrigiert den Hautton.</li>
                </ul>
            `,
            [Language.ME]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>انتشار واسع:</strong> يُعرف بـ "عناية علبة الحليب"، ويشتهر بعبوته الجذابة وقوامه الفريد.</li>
                    <li><strong>القوام:</strong> قوام يشبه "الكريم المخفوق الطازج" يذوب في البشرة بسلاسة.</li>
                    <li><strong>الفعالية:</strong> تفتيح فوري مثالي لمظهر طبيعي بدون مكياج. يغطي العيوب ويوحد لون البشرة.</li>
                </ul>
            `,
            [Language.RU]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Вирусный хит:</strong> Известен как "уход в пакете молока", популярен благодаря дизайну и текстуре.</li>
                    <li><strong>Текстура:</strong> Консистенция "взбитых сливок", тающая на коже.</li>
                    <li><strong>Эффект:</strong> Мгновенное осветление для эффекта "без макияжа". Скрывает недостатки и выравнивает тон.</li>
                </ul>
            `,
            [Language.EL]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Viral Τάση:</strong> Γνωστό ως "Milk Carton Skincare", δημοφιλές για τη συσκευασία του.</li>
                    <li><strong>Υφή:</strong> Σαν "φρέσκια σαντιγί" που λιώνει στο δέρμα.</li>
                    <li><strong>Απόδοση:</strong> Άμεσο αποτέλεσμα λάμψης για "No-Makeup" look. Καλύπτει ατέλειες.</li>
                </ul>
            `,
            [Language.HU]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Virális Tényezők:</strong> "Tejesdoboz Bőrápolás" néven ismert, instagram-kompatibilis csomagolása és egyedi textúrája miatt népszerű.</li>
                    <li><strong>Textúra:</strong> "Friss tejszínhab" állagú, amely azonnal a bőrbe olvad.</li>
                    <li><strong>Teljesítmény:</strong> "Játékváltó" a fakó bőr számára, azonnali tónusjavító hatást kínál a "smink nélküli" megjelenéshez. Hatékonyan fedi el a bőrhibákat.</li>
                </ul>
            `
        },
        translations: {
            [Language.ES]: { name: 'WHITE IN WHIPPING CREAM', description: 'Crema iluminadora con proteínas de leche para una piel radiante al instante.' },
            [Language.JP]: { name: 'ホワイトホイップクリーム', description: '牛乳タンパク質配合。一塗りでワントーン明るい透明肌を演出します。' },
            [Language.ME]: { name: 'كريم ويبينج للتفتيح', description: 'كريم تفتيح فوري مع بروتين الحليب لإشراقة طبيعية.' },
            [Language.FR]: { name: 'WHITE IN WHIPPING CREAM', description: 'Crème éclat instantanée aux protéines de lait pour un teint radieux.' },
            [Language.DE]: { name: 'WHITE WHIPPING CREAM', description: 'Sofort-Aufhellungscreme mit Milchproteinen für einen strahlenden Glow.' },
            [Language.KR]: { name: '화이트 인 생크림', description: '우유 단백질 추출물 함유. 바르는 즉시 화사해지는 톤업 매직.' },
            [Language.HU]: { name: 'WHITE IN WHIPPING CREAM', description: 'Azonnali tónusjavító krém tejfehérjével a ragyogó bőrért.' }
        }
    },
    {
        id: 'g9-moisture',
        brand: 'G9SKIN',
        name: 'WHITE IN MOISTURE CREAM',
        description: 'A deep hydration cream that nourishes and brightens the skin from within.',
        imageUrl: getDriveUrl('11LMxQ8w-EXI8Gg036s4ejllrOEIZGX5P'),
        subNeed: ['moisture'],
        tags: ['Hydrate', 'Radiant'],
        translations: {
            [Language.ES]: { name: 'WHITE IN MOISTURE CREAM', description: 'Crema hidratante profunda que nutre e ilumina desde el interior.' },
            [Language.JP]: { name: 'モイスチャークリーム', description: '深い潤いを与え、内側から輝くようなツヤ肌へ導く高保湿クリーム。' },
            [Language.ME]: { name: 'كريم الترطيب وايت', description: 'كريم ترطيب عميق يغذي البشرة ويفتحها من الداخل.' },
            [Language.FR]: { name: 'WHITE IN MOISTURE CREAM', description: 'Crème hydratante profonde pour une peau nourrie et lumineuse.' },
            [Language.DE]: { name: 'WHITE MOISTURE CREAM', description: 'Intensive Feuchtigkeitspflege, die die Haut nährt und zum Strahlen bringt.' },
            [Language.KR]: { name: '화이트 인 수분 크림', description: '피부 속부터 차오르는 수분광. 미백과 보습을 한번에 해결하는 데일리 크림.' },
            [Language.HU]: { name: 'WHITE IN MOISTURE CREAM', description: 'Mélyhidratáló krém, amely belülről táplálja és ragyogóvá teszi a bőrt.' }
        }
    },
    {
        id: 'g9-milk-toner',
        brand: 'G9SKIN',
        name: 'WHITE IN MILK TONER',
        description: 'Gentle, high-capacity hydrating toner (300ml). Enriched with Milk Protein for brightening and moisturizing.',
        imageUrl: getDriveUrl('1xc5keLI5I1ymi-aILE_YJsiWNeguLb1k'),
        subNeed: ['moisture'], // Adding to moisture care as requested
        tags: ['300ml', 'MilkProtein'],
        snsFeedback: {
            [Language.US]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Market Perception:</strong> Highly regarded as a "gentle, high-capacity hydrating toner."</li>
                    <li><strong>User Experience:</strong> Consumers praise the unique "diluted milk" texture—creamy yet lightweight—offering rapid absorption without sticky residue.</li>
                    <li><strong>Efficacy:</strong> Formulated with milk protein, it is recognized for brightening and firming properties without the use of harsh acids. It is frequently recommended for soothing dry, winter-fatigued skin.</li>
                    <li><strong>Value Proposition:</strong> The substantial 300ml volume and dual functionality (whitening/anti-wrinkle) are cited as key value drivers.</li>
                </ul>
            `,
            [Language.KR]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>시장 반응:</strong> "순하고 촉촉한 대용량 토너"로 높은 평가를 받고 있습니다.</li>
                    <li><strong>사용감:</strong> 묽은 우유 같은 독특한 텍스처로, 끈적임 없이 산뜻하고 빠르게 흡수된다는 점이 호평받습니다.</li>
                    <li><strong>효능:</strong> 우유 단백질 성분이 함유되어 자극 없이 피부를 밝고 탄력 있게 가꿔줍니다. 겨울철 건조하고 지친 피부 진정에 추천됩니다.</li>
                    <li><strong>가성비:</strong> 300ml 대용량과 미백/주름개선 이중 기능성을 갖춘 점이 핵심 구매 포인트입니다.</li>
                </ul>
            `,
            [Language.JP]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>市場の評価：</strong> 「優しくて大容量の保湿トナー」として高評価を得ています。</li>
                    <li><strong>使用感：</strong> 薄めた牛乳のようなユニークなテクスチャーで、べたつかず肌にすっとなじむ浸透力が人気です。</li>
                    <li><strong>効果：</strong> 牛乳タンパク質配合で、刺激を与えずに明るくハリのある肌へ導きます。乾燥した冬の肌荒れ対策にも推奨されています。</li>
                    <li><strong>コスパ：</strong> 300mlの大容量と美白・シワ改善のダブル機能性が魅力です。</li>
                </ul>
            `,
            [Language.CN]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>市场反响：</strong> 被誉为“温和大容量保湿爽肤水”。</li>
                    <li><strong>使用体验：</strong> 独特的“稀牛奶”质地，清爽不粘腻，吸收迅速，深受喜爱。</li>
                    <li><strong>功效：</strong> 蕴含牛奶蛋白，温和提亮紧致，无酸配方。常被推荐用于舒缓冬季干燥疲劳的肌肤。</li>
                    <li><strong>性价比：</strong> 300ml大容量及美白/抗皱双重功效是其核心卖点。</li>
                </ul>
            `,
            [Language.ES]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Percepción:</strong> Valorada como "tónico hidratante suave de gran capacidad".</li>
                    <li><strong>Experiencia:</strong> Textura de "leche diluida", cremosa pero ligera, absorción rápida sin residuo pegajoso.</li>
                    <li><strong>Eficacia:</strong> Con proteína de leche, ilumina y reafirma sin ácidos agresivos. Ideal para piel seca en invierno.</li>
                    <li><strong>Valor:</strong> 300ml y doble función (blanqueamiento/antiarrugas).</li>
                </ul>
            `,
            [Language.FR]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Perception :</strong> "Tonique hydratant doux grand format" très apprécié.</li>
                    <li><strong>Expérience :</strong> Texture "lait dilué", crémeuse mais légère, absorption rapide sans coller.</li>
                    <li><strong>Efficacité :</strong> Illumine et raffermit grâce aux protéines de lait. Apaise les peaux sèches.</li>
                    <li><strong>Valeur :</strong> Format 300ml et double fonction (blanchiment/anti-rides).</li>
                </ul>
            `,
            [Language.DE]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Marktwahrnehmung:</strong> Als "sanfter, ergiebiger Feuchtigkeitstoner" geschätzt.</li>
                    <li><strong>Erfahrung:</strong> "Verdünnte Milch"-Textur, zieht schnell ein, klebt nicht.</li>
                    <li><strong>Wirksamkeit:</strong> Milchproteine sorgen für Aufhellung und Straffung. Beruhigt wintermüde Haut.</li>
                    <li><strong>Preis-Leistung:</strong> 300ml Volumen und Doppelfunktion (Whitening/Anti-Falten).</li>
                </ul>
            `,
            [Language.ME]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>رأي السوق:</strong> يُعتبر "تونر مرطب لطيف بحجم كبير".</li>
                    <li><strong>تجربة المستخدم:</strong> قوام يشبه "الحليب المخفف"، كريمي ولكنه خفيف، سريع الامتصاص ولا يترك أثراً لزجاً.</li>
                    <li><strong>الفعالية:</strong> يفتح ويشد البشرة ببروتين الحليب. يهدئ البشرة الجافة والمتعبة.</li>
                    <li><strong>القيمة:</strong> حجم كبير 300 مل ووظيفة مزدوجة (تبييض/مكافحة التجاعيد).</li>
                </ul>
            `,
            [Language.RU]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Восприятие:</strong> "Мягкий увлажняющий тонер большого объема".</li>
                    <li><strong>Опыт:</strong> Текстура "разбавленного молока", быстро впитывается без липкости.</li>
                    <li><strong>Эффект:</strong> Осветляет и укрепляет благодаря молочным протеинам. Успокаивает сухую кожу.</li>
                    <li><strong>Ценность:</strong> Объем 300 мл и двойное действие (отбеливание/против морщин).</li>
                </ul>
            `,
            [Language.EL]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Αντίληψη:</strong> "Απαλό ενυδατικό τόνερ μεγάλης χωρητικότητας".</li>
                    <li><strong>Εμπειρία:</strong> Υφή "αραιωμένου γάλακτος", απορροφάται γρήγορα χωρίς να κολλάει.</li>
                    <li><strong>Αποτελεσματικότητα:</strong> Λάμψη και σύσφιξη με πρωτεΐνη γάλακτος. Καταπραΰνει το ξηρό δέρμα.</li>
                    <li><strong>Αξία:</strong> 300ml και διπλή λειτουργία (λεύκανση/αντιγήρανση).</li>
                </ul>
            `,
            [Language.HU]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Piaci Megítélés:</strong> "Gyengéd, nagy kiszerelésű hidratáló toner" néven elismert.</li>
                    <li><strong>Felhasználói Élmény:</strong> Egyedi "hígított tej" textúra – krémes, mégis könnyű, gyors felszívódással, ragacsos érzet nélkül.</li>
                    <li><strong>Hatékonyság:</strong> Tejfehérjével dúsítva, világosító és feszesítő tulajdonságokkal rendelkezik, durva savak használata nélkül. Téli bőrápolásra ajánlott.</li>
                    <li><strong>Értékajánlat:</strong> A jelentős 300 ml-es térfogat és a kettős funkció (fehérítés/ránctalanítás) a kulcs.</li>
                </ul>
            `
        },
        translations: {
            [Language.ES]: { name: 'WHITE IN MILK TONER', description: 'Tónico hidratante suave de gran formato (300ml) con proteína de leche.' },
            [Language.JP]: { name: 'ホワイトインミルクトナー', description: '300ml大容量。牛乳タンパク質配合で、しっとり明るい肌へ導く低刺激トナー。' },
            [Language.ME]: { name: 'تونر الحليب المبيض', description: 'تونر مرطب لطيف بحجم كبير (300 مل) مع بروتين الحليب.' },
            [Language.FR]: { name: 'WHITE IN MILK TONER', description: 'Tonique hydratant doux grand format (300ml) aux protéines de lait.' },
            [Language.DE]: { name: 'WHITE IN MILK TONER', description: 'Sanfter, feuchtigkeitsspendender Toner (300ml) mit Milchproteinen.' },
            [Language.KR]: { name: '화이트 인 밀크 토너', description: '300ml 대용량 순한 보습 토너. 우유 단백질 성분이 피부를 맑고 촉촉하게 가꿔줍니다.' },
            [Language.HU]: { name: 'WHITE IN MILK TONER', description: 'Gyengéd, nagy kiszerelésű (300ml) hidratáló toner. Tejfehérjével dúsítva a világosításért és hidratálásért.' }
        }
    },
    {
        id: 'g9-mask',
        brand: 'G9SKIN',
        name: 'SELF AESTHETIC MASK',
        description: 'Specialized aesthetic masks for targeted care of every body part.',
        imageUrl: getDriveUrl('1RRo3FBbWsTrSnue-CqwQD44ZWpv3oxty'),
        subNeed: ['mask'],
        tags: ['Aesthetic', 'Total'],
        snsFeedback: {
            [Language.US]: `
                <p>Gaining traction in Europe (via retailers like MiiN Cosmetics) and globally as a unique "self-care" gift item due to its distinct magazine-style packaging.</p>
            `,
            [Language.KR]: `
                <p>잡지 같은 독특한 패키지 디자인으로 '셀프 케어' 선물용으로 유럽(MiiN Cosmetics 등) 및 전 세계적으로 주목받고 있습니다.</p>
            `,
            [Language.JP]: `
                <p>雑誌のようなユニークなパッケージデザインで、「セルフケア」ギフトとしてヨーロッパ（MiiN Cosmeticsなど）や世界中で人気を集めています。</p>
            `,
            [Language.CN]: `
                <p>凭借独特的杂志风格包装，作为“自我关爱”礼品，在欧洲（如MiiN Cosmetics）及全球范围内备受关注。</p>
            `,
            [Language.ES]: `
                <p>Popular en Europa y globalmente como regalo de "autocuidado" por su diseño único estilo revista.</p>
            `,
            [Language.FR]: `
                <p>Succès en Europe et dans le monde comme cadeau "self-care" grâce à son packaging style magazine unique.</p>
            `,
            [Language.DE]: `
                <p>Gewinnt in Europa und weltweit an Beliebtheit als einzigartiges "Self-Care"-Geschenk dank des Magazin-Style-Packagings.</p>
            `,
            [Language.ME]: `
                <p>يكتسب شعبية في أوروبا وعالمياً كهدية "عناية ذاتية" فريدة بفضل عبوته المميزة التي تشبه المجلة.</p>
            `,
            [Language.RU]: `
                <p>Популярен в Европе и мире как подарок для "заботы о себе" благодаря уникальной упаковке в стиле журнала.</p>
            `,
            [Language.EL]: `
                <p>Κερδίζει έδαφος στην Ευρώπη και παγκοσμίως ως μοναδικό δώρο "self-care" χάρη στη συσκευασία στυλ περιοδικού.</p>
            `,
            [Language.HU]: `
                <p>Európában (pl. MiiN Cosmetics) és világszerte népszerű, mint egyedi "öngondoskodás" ajándék, köszönhetően különleges, magazin stílusú csomagolásának.</p>
            `
        },
        translations: {
            [Language.ES]: { name: 'SELF AESTHETIC MASK', description: 'Mascarillas especializadas para el cuidado integral de cada parte del cuerpo.' },
            [Language.JP]: { name: 'セルフエステマスク', description: '全身を磨き上げる部位別専門マスク。おうちで本格エステ。' },
            [Language.ME]: { name: 'أقنعة سيلف إستيتيك', description: 'أقنعة جمالية متخصصة للعناية بكل جزء من الجسم.' },
            [Language.FR]: { name: 'SELF AESTHETIC MASQUE', description: 'Masques esthétiques experts pour chaque zone du corps.' },
            [Language.DE]: { name: 'SELF AESTHETIC MASKE', description: 'Spezialisierte Wirkstoffmasken für die gezielte Pflege jeder Körperpartie.' },
            [Language.KR]: { name: '셀프 에스테틱 마스크', description: '머리부터 발끝까지, 집에서 즐기는 부위별 맞춤 에스테틱 홈케어.' },
            [Language.HU]: { name: 'SELF AESTHETIC MASK', description: 'Speciális esztétikai maszkok minden testrész célzott ápolására.' }
        }
    },
    {
        id: 'amill-oil',
        brand: 'AMILL',
        name: 'AMILL CLEANSING OIL',
        description: 'Mild cleansing oil with Korean Rice to gently remove makeup and impurities.',
        imageUrl: getDriveUrl('1sglXdGWlpQQPCYVo1euIyTSjTGnSlKG6'),
        subNeed: ['oil'],
        tags: ['Rice', 'Clean'],
        translations: {
            [Language.ES]: { name: 'AMILL CLEANSING OIL', description: 'Aceite de arroz coreano que elimina el maquillaje con máxima suavidad.' },
            [Language.JP]: { name: 'クレンジングオイル', description: '韓国産の米エキス配合。肌への負担を抑えながらメイクを完璧にオフ。' },
            [Language.ME]: { name: 'زيت تنظيف أميل', description: 'زيت تنظيف الأرز الكوري اللطيف لإزالة المكياج والشوائب.' },
            [Language.FR]: { name: 'HUILE NETTOYANTE AMILL', description: "Huile démaquillante au riz coréen pour un nettoyage en douceur." },
            [Language.DE]: { name: 'AMILL REINIGUNGSÖL', description: 'Mildes Reinigungsöl mit koreanischem Reis zur sanften Entfernung von Unreinheiten.' },
            [Language.KR]: { name: '에이밀 클렌징 오일', description: '순한 쌀겨 성분이 메이크업을 부드럽게 녹여주는 저자극 클렌징 오일.' },
            [Language.HU]: { name: 'AMILL CLEANSING OIL', description: 'Gyengéd tisztító olaj koreai rizzsel a smink és szennyeződések kíméletes eltávolítására.' }
        }
    },
    {
        id: 'amill-foam',
        brand: 'AMILL',
        name: 'AMILL CLEANSING FOAM',
        description: 'A creamy grain-based foam that purifies pores without stripping moisture.',
        imageUrl: getDriveUrl('1oDqkAmw147FUc2Xg1Ena-DsKxP9pU5I-'),
        subNeed: ['bubble'],
        tags: ['Purify', 'Creamy'],
        translations: {
            [Language.ES]: { name: 'AMILL CLEANSING FOAM', description: 'Limpiador cremoso que purifica los poros respetando la hidratación natural.' },
            [Language.JP]: { name: 'クレンジングフォーム', description: '韓国産の米エキス配合。肌への負担を抑えながらメイクを完璧にオフ。' },
            [Language.ME]: { name: 'رغوة تنظيف أميل', description: 'رغوة كريمية منظفة تنقي المسام وتحافظ على رطوبة البشرة.' },
            [Language.FR]: { name: 'MOUSSE NETTOYANTE AMILL', description: 'Nettoyant onctueux aux grains pour purifier sans dessécher.' },
            [Language.DE]: { name: 'AMILL REINIGUNGSSCHAUM', description: 'Cremiger Reinigungsschaum auf Getreidebasis für porentiefe Reinheit.' },
            [Language.KR]: { name: '에이밀 클렌징 폼', description: '곡물 에너지로 모공 속 노폐물까지 말끔하게 씻어내는 크리미한 폼.' },
            [Language.HU]: { name: 'AMILL CLEANSING FOAM', description: 'Krémes, gabona alapú hab, amely tisztítja a pórusokat anélkül, hogy szárítana.' }
        }
    },
    {
        id: 'amill-bubble',
        brand: 'AMILL',
        name: 'AMILL BUBBLE FOAM',
        description: 'Instant micro-bubble cleanser for a thorough grain-based purification.',
        imageUrl: getDriveUrl('1lutIEojWdHDva3BqQVvXJmA4YCq2E3Sm'),
        subNeed: ['bubble'],
        tags: ['MicroBubble', 'Grain'],
        translations: {
            [Language.ES]: { name: 'AMILL BUBBLE FOAM', description: 'Microburbujas instantáneas para una limpieza profunda y calmante.' },
            [Language.JP]: { name: 'バブルフォーム', description: 'ワンプッシュで極細泡。穀物の力で毛穴の奥までクレンジング。' },
            [Language.ME]: { name: 'رغوة فقاعية منظفة', description: 'منظف فقاعي فوري لتنقية البشرة بالحبوب بعمق.' },
            [Language.FR]: { name: 'AMILL BUBBLE FOAM', description: 'Micro-bulles instantanées pour une purification aux céréales.' },
            [Language.DE]: { name: 'AMILL BUBBLE FOAM', description: 'Mikroblasen-Reiniger für eine sanfte und gründliche Reinigung.' },
            [Language.KR]: { name: '에이밀 버블 폼', description: '풍성한 마이크로 버블이 자극 없이 딥 클렌징을 도와주는 곡물 버블 폼.' },
            [Language.HU]: { name: 'AMILL BUBBLE FOAM', description: 'Azonnali mikro-buborékos tisztító az alapos, gabona alapú tisztításért.' }
        }
    },
    {
        id: 'coscell-eye',
        brand: 'COSCELL',
        name: 'RETINOL EYEBAG CREAM',
        description: 'Instant wrinkle reduction and lifting effect for the under-eye area in 1 min.',
        imageUrl: getDriveUrl('1wqzQKpP9ufrkpsYyhTW2ROtzNqG-WbdY'),
        subNeed: ['wrinkle_eye'],
        tags: ['Retinol', 'Instant'],
        snsFeedback: {
            [Language.US]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Market Solution:</strong> Positioned as a non-invasive alternative to clinical procedures, targeting eye bags, dark circles, and fine lines.</li>
                    <li><strong>Rapid Efficacy:</strong> The primary marketing claim driving consumer interest is its speed; reviews highlight its ability to reduce the appearance of eye bags and fine lines within 60 seconds.</li>
                </ul>
            `
        },
        translations: {
            [Language.ES]: { name: 'CREMA RETINOL OJOS', description: 'Efecto lifting inmediato. Reduce arrugas y bolsas en solo 1 minuto.' },
            [Language.JP]: { name: 'レチノールボリュームアイバッククリーム', description: '1分で目元の印象を変化させる。シワを目立ちにくくし、ハリを与えるアイバッグクリーム。' },
            [Language.ME]: { name: 'كريم الريتينول للعين', description: 'تقليل فوري للتجاعيد وتأثير شد لمنطقة تحت العين في دقيقة واحدة.' },
            [Language.FR]: { name: 'CRÈME YEUX RÉTINOL', description: 'Réduction instantanée des rides et effet lifting en 1 minute.' },
            [Language.DE]: { name: 'RETINOL AUGENCREME', description: 'Sofortige Faltenreduzierung und Lifting-Effekt für die Augenpartie.' },
            [Language.KR]: { name: '레티놀 볼륨 아이백 크림', description: '단 1분 만에 경험하는 기적. 눈밑 지방과 주름을 즉각적으로 개선하는 리프팅 크림.' },
            [Language.HU]: { name: 'RETINOL EYEBAG CREAM', description: 'Azonnali ránc- és táskacsökkentő hatás a szem alatt 1 perc alatt.' }
        }
    },
    {
        id: 'coscell-neck',
        brand: 'COSCELL',
        name: 'NECK CREAM',
        description: 'Advanced neck cream tailored to smooth out wrinkles and restore firmness.',
        imageUrl: getDriveUrl('1w-8d0j5cOpJ_2T8qT2Y6JDvVngfW-Q7L'),
        subNeed: ['wrinkle_neck'],
        tags: ['Firming', 'Smooth'],
        translations: {
            [Language.ES]: { name: 'CREMA CUELLO', description: 'Crema avanzada para alisar arrugas y restaurar la firmeza del cuello.' },
            [Language.JP]: { name: 'ネッククリーム', description: '首元のシワをケアし、ハリを取り戻す専用クリーム。' },
            [Language.ME]: { name: 'كريم الرقبة', description: 'كريم متطور للرقبة مصمم لتنعيم التجاعيد واستعادة المرونة.' },
            [Language.FR]: { name: 'CRÈME COU', description: 'Crème avancée pour lisser les rides et raffermir le cou.' },
            [Language.DE]: { name: 'HALS CREME', description: 'Fortschrittliche Halscreme zur Glättung von Falten und Straffung.' },
            [Language.KR]: { name: '넥 크림', description: '목 주름을 집중 케어하여 매끈하고 탄력 있는 목 라인을 완성합니다.' },
            [Language.HU]: { name: 'NECK CREAM', description: 'Fejlett nyakkrém a ráncok kisimítására és a feszesség helyreállítására.' }
        }
    },
    {
        id: 'coscell-serum',
        brand: 'COSCELL',
        name: 'RETINO GALVANIC SERUM 100',
        description: 'Microcurrent-inspired serum that boosts retinol absorption for maximum efficacy.',
        imageUrl: getDriveUrl('1qI6G5ZfCgP44_Qn4r0qE1O0T0k2d8r'),
        subNeed: ['serum_care'],
        tags: ['Galvanic', 'Boost'],
        snsFeedback: {
            [Language.US]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Innovative Technology (Galvanic):</strong> The formulation incorporates Microcurrent (Galvanic) technology. This delivery system allows the Retinol to penetrate deeper into the skin without causing the irritation (redness or flaking) typically associated with retinoids, making it suitable for the sensitive periorbital area.</li>
                </ul>
            `,
            [Language.KR]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>피부과 시술에서 착안한 혁신 기술 (갈바닉):</strong> 미세전류(갈바닉) 기술을 적용하여 피부 흡수율을 극대화했습니다. 이 전달 시스템은 레티놀이 피부 깊숙이 침투하도록 돕는 동시에, 레티놀 특유의 자극(붉어짐, 각질 등)을 최소화하여 예민한 눈가 피부에도 안심하고 사용할 수 있습니다.</li>
                </ul>
            `,
            [Language.JP]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>革新的テクノロジー（ガルバニック）：</strong> 美顔器の微弱電流（ガルバニック）技術を応用。レチノールを肌の奥深くまで浸透させると同時に、レチノール特有の刺激（赤みや皮剥け）を抑え、デリケートな目元にも安心して使用できます。</li>
                </ul>
            `,
            [Language.CN]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>创新技术 (电流)：</strong> 采用微电流 (Galvanic) 技术。该输送系统能使视黄醇更深层地渗透肌肤，同时避免视黄醇常见的刺激（红肿或脱皮），使其适用于敏感的眼周区域。</li>
                </ul>
            `,
            [Language.ES]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Tecnología Innovadora (Galvánica):</strong> Incorpora tecnología de microcorriente. Permite que el retinol penetre profundamente sin la irritación típica, ideal para el área sensible de los ojos.</li>
                </ul>
            `,
            [Language.FR]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Technologie Innovante (Galvanique) :</strong> Intègre la micro-courant. Permet au rétinol de pénétrer profondément sans l'irritation habituelle, adapté à la zone sensible des yeux.</li>
                </ul>
            `,
            [Language.DE]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Innovative Technologie (Galvanic):</strong> Nutzt Mikrostrom-Technologie für tiefere Penetration ohne Reizungen. Ideal für die empfindliche Augenpartie.</li>
                </ul>
            `,
            [Language.ME]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>تكنولوجيا مبتكرة (جلفانيك):</strong> تتضمن تقنية التيارات الدقيقة. يسمح هذا النظام للريتينول بالتغلغل بعمق دون تهيج، مما يجعله مناسباً لمنطقة حول العين الحساسة.</li>
                </ul>
            `,
            [Language.RU]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Инновационная технология (Гальваника):</strong> Использует микротоки для глубокого проникновения ретинола без раздражения. Идеально для чувствительной зоны вокруг глаз.</li>
                </ul>
            `,
            [Language.EL]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Καινοτόμος Τεχνολογία (Galvanic):</strong> Ενσωματώνει μικρορεύματα για βαθύτερη διείσδυση της ρετινόλης χωρίς ερεθισμούς. Ιδανικό για την ευαίσθητη περιοχή των ματιών.</li>
                </ul>
            `,
            [Language.HU]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Innovatív Technológia (Galván):</strong> Mikroáramú (Galván) technológiát tartalmaz. Ez lehetővé teszi a retinol mélyebb behatolását irritáció nélkül, így alkalmas az érzékeny szemkörnyékre is.</li>
                </ul>
            `
        },
        translations: {
            [Language.ES]: { name: 'SÉRUM GALVÁNICO', description: 'Sérum inspirado en microcorrientes que potencia la absorción del retinol.' },
            [Language.JP]: { name: 'レチノガルバニックセラム100', description: '美顔器の原理を応用。レチノールの吸収を極大化し、肌の奥まで届けます。' },
            [Language.ME]: { name: 'سيروم جلفاني', description: 'سيروم مستوحى من التيارات الدقيقة يعزز امتصاص الريتينول.' },
            [Language.FR]: { name: 'SÉRUM GALVANIQUE', description: 'Sérum inspiré des micro-courants pour une absorption maximale du rétinol.' },
            [Language.DE]: { name: 'GALVANIC SERUM', description: 'Von Mikrostrom inspiriertes Serum, das die Retinolaufnahme verstärkt.' },
            [Language.KR]: { name: '레티노 갈바닉 세럼 100', description: '갈바닉 미세전류 기술로 레티놀 흡수율을 극대화한 고기능성 세럼.' },
            [Language.HU]: { name: 'RETINO GALVANIC SERUM 100', description: 'Mikroáram ihlette szérum, amely fokozza a retinol felszívódását a maximális hatékonyságért.' }
        }
    },
    {
        id: 'coscell-papaya-ampoule',
        brand: 'COSCELL',
        name: 'GREEN PAPAYA PDRN AMPOULE',
        description: 'A concentrated ampoule that refines pores and smooths texture using PDRN.',
        imageUrl: getDriveUrl('1HD11vzXvT4jbk7b7wkOhmv1uHYMb4lhg'),
        subNeed: ['green_papaya'],
        tags: ['PDRN', 'PoreCare'],
        translations: {
            [Language.ME]: { name: 'أمبولة البابايا PDRN', description: 'أمبولة مركزة لتصغير المسام وتحسين ملمس البشرة بتقنية PDRN.' },
            [Language.FR]: { name: 'AMPOULE PAPAYE PDRN', description: 'Ampoule concentrée pour affiner les pores et lisser le grain de peau.' },
            [Language.DE]: { name: 'GRÜNE PAPAYA AMPOULE', description: 'Konzentrat zur Porenverfeinerung und Hautglättung auf PDRN-Basis.' },
            [Language.KR]: { name: '그린 파파야 PDRN 앰플', description: 'PDRN 성분이 모공을 촘촘하게 케어하고 피부결을 매끈하게 정돈해주는 고농축 앰플.' },
            [Language.HU]: { name: 'GREEN PAPAYA PDRN AMPOULE', description: 'Koncentrált ampulla, amely finomítja a pórusokat és simítja a textúrát PDRN segítségével.' }
        }
    },
    {
        id: 'coscell-papaya-foam',
        brand: 'COSCELL',
        name: 'GREEN PAPAYA GOMAGE FOAM',
        description: 'Exfoliating foam that removes impurities while refining skin texture.',
        imageUrl: getDriveUrl('1EtxDxKCrFp9LemmU96kJC3T8Z6Btr1uq'),
        subNeed: ['green_papaya'],
        tags: ['Gomage', 'Smooth'],
        translations: {
            [Language.ES]: { name: 'GREEN PAPAYA GOMAGE FOAM', description: 'Exfoliación suave que elimina impurezas y deja la piel aterciopelada.' },
            [Language.JP]: { name: 'グリーンパパイヤPDRNゴマージュフォーム', description: '古い角質を優しくオフ。洗うたびに透明感あふれる素肌へ。' },
            [Language.ME]: { name: 'رغوة البابايا المقشرة', description: 'رغوة منظفة مقشرة تزيل الشوائب وتنقي سطح البشرة.' },
            [Language.FR]: { name: 'MOUSSE GOMMAGE PAPAYE', description: 'Mousse exfoliante douce pour un teint lisse et clarifié.' },
            [Language.DE]: { name: 'GREEN PAPAYA PEELINGSCHAUM', description: 'Verfeinernder Peelingschaum für ein seidig glattes Hautgefühl.' },
            [Language.KR]: { name: '그린 파파야 고마쥬 폼', description: '묵은 각질과 노폐물을 부드럽게 제거하여 맑고 깨끗한 피부로 가꿔주는 고마쥬 폼.' },
            [Language.HU]: { name: 'GREEN PAPAYA GOMAGE FOAM', description: 'Hámlasztó hab, amely eltávolítja a szennyeződéseket, miközben finomítja a bőr textúráját.' }
        }
    },
    {
        id: 'coscell-vita-cream',
        brand: 'COSCELL',
        name: 'VITA CAPSULE CREAM',
        description: 'Encapsulated vitamin C gel cream that restores radiance and vitality.',
        imageUrl: getDriveUrl('18g7V9hQupIkPn4XQdjVBksd-TWwutNgG'),
        subNeed: ['vita_line'],
        tags: ['VitaC', 'Bright'],
        snsFeedback: {
            [Language.US]: `
                <h4 class="font-bold mb-2">Vita C Capsules: Glass Skin Radiance</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Product Positioning:</strong> A high-potency brightening solution designed to deliver immediate radiance, frequently associated with the "Glass Skin" trend.</li>
                    <li><strong>Key Ingredients & Formulation:</strong> The product differentiates itself with a highly concentrated formula containing 99% Pure Vitamin C and 66% Vitamin Tree Water.</li>
                    <li><strong>Application & Texture:</strong> Unlike traditional serums, this product features a unique capsule format that melts instantly upon contact with the skin, ensuring fresh delivery of active ingredients.</li>
                    <li><strong>Consumer Benefits:</strong> Users report an "instant glow-up" effect, making it highly effective for revitalizing dull or fatigued skin, particularly during harsh winter conditions.</li>
                </ul>
            `,
            [Language.KR]: `
                <h4 class="font-bold mb-2">비타 C 캡슐: 유리알 광채 피부의 완성</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>제품 포지셔닝:</strong> 즉각적인 광채를 선사하는 고효능 브라이트닝 솔루션으로, 최근 트렌드인 "글래스 스킨(물광 피부)"을 완성해줍니다.</li>
                    <li><strong>핵심 성분 & 처방:</strong> 99% 순수 비타민 C와 비타민 나무수 66%를 함유한 고농축 포뮬러로 차별화된 효능을 자랑합니다.</li>
                    <li><strong>사용감 & 텍스처:</strong> 일반적인 세럼과 달리, 독특한 캡슐 형태가 피부에 닿는 순간 즉시 녹아들며 신선한 유효 성분을 그대로 전달합니다.</li>
                    <li><strong>사용자 혜택:</strong> "바르는 즉시 살아나는 안색"을 경험할 수 있으며, 칙칙하고 피로한 피부에 생기를 불어넣어 줍니다. 특히 건조한 겨울철 스킨케어에 탁월합니다.</li>
                </ul>
            `,
            [Language.JP]: `
                <h4 class="font-bold mb-2">ビタCカプセル：ガラス玉のような輝く肌へ</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>製品の特徴：</strong> 瞬時に輝きを与える高機能ブライトニングソリューション。「グラススキン（水光肌）」トレンドを牽引するアイテムです。</li>
                    <li><strong>成分 & フォーミュラ：</strong> 純度99%のビタミンCとビタミンツリーウォーター66%を配合した高濃縮処方が特徴です。</li>
                    <li><strong>使用感 & テクスチャー：</strong> 通常のセラムとは異なり、ユニークなカプセルが肌に触れた瞬間に溶け込み、新鮮な有効成分をダイレクトに届けます。</li>
                    <li><strong>効果：</strong> 塗った瞬間に肌が明るくなる「インスタント・グロウアップ」効果を実感。くすみや疲れが気になる肌に活力を与え、特に冬のスキンケアに最適です。</li>
                </ul>
            `,
            [Language.CN]: `
                <h4 class="font-bold mb-2">维他命C胶囊：打造水光玻璃肌</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>产品定位：</strong> 高效美白方案，带来即时光彩，完美契合“玻璃肌”潮流。</li>
                    <li><strong>核心成分：</strong> 蕴含99%纯维生素C和66%沙棘水的高浓缩配方，功效卓越。</li>
                    <li><strong>质地与使用：</strong> 独特的胶囊形态，触肤即融，确保活性成分新鲜直达肌底。</li>
                    <li><strong>用户收益：</strong> 用户反馈有“瞬间焕亮”效果，能有效改善暗沉疲劳肌肤，特别适合冬季护肤。</li>
                </ul>
            `,
            [Language.ES]: `
                <h4 class="font-bold mb-2">Vita C Capsules: Radiancia Efecto Cristal</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Posicionamiento:</strong> Solución iluminadora de alta potencia para un efecto "Glass Skin" inmediato.</li>
                    <li><strong>Ingredientes Clave:</strong> 99% Vitamina C Pura y 66% Agua de Árbol de Vitamina.</li>
                    <li><strong>Textura:</strong> Cápsulas únicas que se funden al contacto, entregando ingredientes frescos.</li>
                    <li><strong>Beneficios:</strong> Efecto "glow-up" instantáneo, revitaliza la piel apagada, ideal para el invierno.</li>
                </ul>
            `,
            [Language.FR]: `
                <h4 class="font-bold mb-2">Vita C Capsules : Éclat Peau de Verre</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Positionnement :</strong> Solution éclaircissante puissante pour un effet "Glass Skin" immédiat.</li>
                    <li><strong>Ingrédients :</strong> 99% Vitamine C Pure et 66% Eau d'Argousier.</li>
                    <li><strong>Texture :</strong> Capsules uniques qui fondent au contact de la peau.</li>
                    <li><strong>Bénéfices :</strong> Effet "glow-up" instantané, revitalise les peaux ternes, idéal en hiver.</li>
                </ul>
            `,
            [Language.DE]: `
                <h4 class="font-bold mb-2">Vita C Kapseln: Glass Skin Ausstrahlung</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Positionierung:</strong> Hochwirksame Aufhellung für sofortigen "Glass Skin"-Effekt.</li>
                    <li><strong>Inhaltsstoffe:</strong> 99% reines Vitamin C und 66% Sanddornwasser.</li>
                    <li><strong>Textur:</strong> Einzigartige Kapseln, die bei Kontakt schmelzen und frische Wirkstoffe freisetzen.</li>
                    <li><strong>Vorteile:</strong> Sofortiger "Glow-up"-Effekt, revitalisiert müde Haut, besonders im Winter.</li>
                </ul>
            `,
            [Language.ME]: `
                <h4 class="font-bold mb-2">كبسولات فيتا سي: إشراقة البشرة الزجاجية</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>المكانة:</strong> حل تفتيح عالي الفعالية لإشراقة فورية، يرتبط بصيحة "البشرة الزجاجية".</li>
                    <li><strong>المكونات:</strong> تركيبة مركزة تحتوي على 99% فيتامين سي نقي و66% ماء شجرة الفيتامين.</li>
                    <li><strong>القوام:</strong> كبسولات فريدة تذوب فور ملامستها للبشرة لضمان نضارة المكونات.</li>
                    <li><strong>الفوائد:</strong> تأثير "توهج فوري"، ينشط البشرة الباهتة، مثالي لفصل الشتاء.</li>
                </ul>
            `,
            [Language.RU]: `
                <h4 class="font-bold mb-2">Капсулы Vita C: Сияние стеклянной кожи</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Позиционирование:</strong> Мощное осветление для мгновенного эффекта "Glass Skin".</li>
                    <li><strong>Ингредиенты:</strong> 99% чистый Витамин С и 66% облепиховой воды.</li>
                    <li><strong>Текстура:</strong> Уникальные капсулы тают при контакте, доставляя свежие ингредиенты.</li>
                    <li><strong>Преимущества:</strong> Эффект мгновенного сияния, оживляет тусклую кожу, идеально для зимы.</li>
                </ul>
            `,
            [Language.EL]: `
                <h4 class="font-bold mb-2">Κάψουλες Vita C: Λάμψη Glass Skin</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Τοποθέτηση:</strong> Ισχυρή λύση λεύκανσης για άμεση λάμψη "Glass Skin".</li>
                    <li><strong>Συστατικά:</strong> 99% Καθαρή Βιταμίνη C και 66% Νερό Ιπποφαούς.</li>
                    <li><strong>Υφή:</strong> Μοναδικές κάψουλες που λιώνουν στην επαφή.</li>
                    <li><strong>Οφέλη:</strong> Άμεσο "glow-up", αναζωογονεί το θαμπό δέρμα, ιδανικό για τον χειμώνα.</li>
                </ul>
            `,
            [Language.HU]: `
                <h4 class="font-bold mb-2">Vita C Kapszulák: Üvegbőr Ragyogás</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Termékpozícionálás:</strong> Nagy hatékonyságú világosító megoldás az azonnali ragyogásért, gyakran társítva a "Glass Skin" trenddel.</li>
                    <li><strong>Fő Összetevők:</strong> 99% tiszta C-vitamint és 66% vitaminfa vizet tartalmazó, magasan koncentrált formula.</li>
                    <li><strong>Alkalmazás és Textúra:</strong> Egyedi kapszula formátum, amely a bőrrel érintkezve azonnal elolvad, friss hatóanyagokat biztosítva.</li>
                    <li><strong>Előnyök:</strong> "Azonnali ragyogás" hatás, ideális a fakó vagy fáradt bőr revitalizálására, különösen télen.</li>
                </ul>
            `
        },
        translations: {
            [Language.ES]: { name: 'VITA CAPSULE CREAM', description: 'Crema en gel con cápsulas de Vitamina C pura para una piel luminosa.' },
            [Language.JP]: { name: 'ビタCカプセルクリーム', description: '高濃度ビタミンCを凝縮。シミやくすみをケアするスペシャルケアアイテム。' },
            [Language.ME]: { name: 'كريم كبسولات فيتا', description: 'كريم جل غني بكبسولات فيتامين سي لاستعادة حيوية البشرة.' },
            [Language.FR]: { name: 'VITA CAPSULE CRÈME', description: "Crème gel aux capsules de vitamines pour restaurer l'éclat." },
            [Language.DE]: { name: 'VITA KAPSEL CREME', description: 'Gel-Creme mit verkapseltem Vitamin C für neue Vitalität und Ausstrahlung.' },
            [Language.HU]: { name: 'VITA CAPSULE CREAM', description: 'Kapszulázott C-vitamin gél krém, amely helyreállítja a ragyogást és a vitalitást.' }
        }
    },
    {
        id: 'coscell-vita-ampoule',
        brand: 'COSCELL',
        name: 'VITA C AMPOULE',
        description: 'High-potency vitamin C ampoule for intensive brightening and dark spot care.',
        imageUrl: getDriveUrl('1AVlFrGRUrje2k9pgcsvMH1V-rBYS-bh6'),
        subNeed: ['vita_line'],
        tags: ['Intensive', 'Glow'],
        translations: {
            [Language.ES]: { name: 'VITA C AMPOULE', description: 'Ampolla de Vitamina C de alta potencia para un brillo y claridad intensos.' },
            [Language.JP]: { name: 'ビタCアンプル', description: '高濃度ビタミンCを凝縮。シミやくすみをケアする スペシャルケアアイテム。' },
            [Language.ME]: { name: 'أمبولة فيتا سي', description: 'أمبولة فيتامين سي عالية الفعالية لتفتيح البشرة المكثف.' },
            [Language.FR]: { name: 'AMPOULE VITA C', description: 'Soin concentré à la vitamine C pour un éclat intense.' },
            [Language.DE]: { name: 'VITA C AMPOULE', description: 'Hochkonzentrierte Vitamin-C-Ampulle zur intensiven Aufhellung von Pigmentflecken.' },
            [Language.HU]: { name: 'VITA C AMPOULE', description: 'Nagy hatékonyságú C-vitamin ampulla az intenzív világosításért és a sötét foltok kezelésére.' }
        }
    }
];

export const BRAND_INTRODUCE_URL = 'https://drive.google.com/drive/folders/1aj_ywbMoTFFoquVHwGn8Y41ldE0jEPfF?usp=drive_link';

export const getBuyingLink = (language: Language, product: Product | undefined): string => {
    // 1. France -> Paris K Beauty
    if (language === Language.FR) {
        return 'https://pariskbeauty.com/collections/all';
    }

    // 2. Japan -> Qoo10
    if (language === Language.JP) {
        return 'https://www.qoo10.jp/shop/Cosmelabofficial';
    }

    // 3. Germany -> SHR Germany
    if (language === Language.DE) {
        if (product?.brand === 'BERRISOM') return 'https://shr-germany-onlineshop.de/brand/245-berrisom?s=&fix-result=1';
        if (product?.brand === 'G9SKIN') return 'https://shr-germany-onlineshop.de/brand/244-g9skin?s=&fix-result=1';
        if (product?.brand === 'AMILL') return 'https://shr-germany-onlineshop.de/brand/246-amill?s=&fix-result=1';
        if (product?.brand === 'COSCELL') return 'https://shr-germany-onlineshop.de/brand/248-coscell?s=&fix-result=1';
        return 'https://shr-germany-onlineshop.de/';
    }

    // 4. Arabic -> Boutiqaat
    if (language === Language.ME) {
        return 'https://www.boutiqaat.com/en-kw/women/g9-skin';
    }

    // 5. Group 1: English, Spanish, Russian, Greek -> Amazon
    if ([Language.US, Language.ES, Language.RU, Language.EL].includes(language)) {
        const brand = product?.brand;
        if (brand === 'BERRISOM') return 'https://www.amazon.com/s?srs=9400023011';
        if (brand === 'G9SKIN') return 'https://www.amazon.com/g9skin/s?k=g9skin';
        if (brand === 'AMILL') return 'https://www.amazon.com/stores/AmillOfficial/page/01AE994B-2102-4BA6-B89E-DB2A113070C1';
        if (brand === 'COSCELL') return 'https://www.amazon.com/s?k=coscell&i=beauty&crid=1A8TMANOH3WB&sprefix=co%2Cbeauty%2C771&ref=nb_sb_noss_2';
    }

    // 6. Korea -> Cafe24 (Specific URL provided by user)
    if (language === Language.KR) {
        return 'https://cosmelab06.cafe24.com/';
    }

    return '#';
};
