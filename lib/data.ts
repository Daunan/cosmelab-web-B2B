import { Category, Product, Language, CategoryData } from './types';
export { Language };
export type { Product };

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
            desc: "Expertly curated solutions from Berrisom, G9SKIN, AMILL, and COSCELL."
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
            desc: "Soluciones de expertos de Berrisom, G9SKIN, AMILL y COSCELL."
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
            desc: "حلول مختارة بعناية من Berrisom وG9SKIN وAMILL وCOSCELL."
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
            desc: "Berrisom、G9SKIN、AMILL、COSCELLが提供する、専門家が厳選したソリューション。"
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
            desc: "Des solutions sélectionnées par des experts de Berrisom, G9SKIN, AMILL et COSCELL."
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
            desc: "Meisterhaft kuratierte Lösungen von Berrisom, G9SKIN, AMILL und COSCELL."
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
            desc: "베리썸, G9SKIN, 에이밀, 코스셀이 제공하는 전문적인 큐레이션 솔루션."
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
            desc: "Berrisom, G9SKIN, AMILL, COSCELL四大K-Beauty品牌专家推荐方案。"
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
            desc: "Экспертные решения от Berrisom, G9SKIN, AMILL и COSCELL."
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
            title: "COSMELAB\nPREMIUM\nΦΡΟΝΤΙΔΑ.",
            desc: "Ειδικά επιλεγμένες λύσεις από Berrisom, G9SKIN, AMILL και COSCELL."
        },
        phases: ["ΒΗΜΑ 01: Κατηγορία", "ΒΗΜΑ 02: Πρόβλημα", "Η Ρουτίνα Σας"],
        instructions: ["Επιλέξτε κατηγορία φροντίδας", "Ποιο είναι το κύριο πρόβλημά σας;", "Επιλέξαμε αυτά τα προϊόντα για εσάς:"],
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
            desc: "Berrisom, G9SKIN, AMILL és COSCELL szakértői megoldások."
        },
        phases: ["01. LÉPÉS: Fókusz", "02. LÉPÉS: Probléma", "Személyre Szabott Megoldás"],
        instructions: ["Válassza ki az elsődleges célt", "Mi a fő bőrproblémája?", "Ezeket a prémium termékeket választottuk Önnek:"],
        snsFeedbackBtn: "SNS Visszajelzés a világból"
    },
    [Language.ET]: {
        start: "ALUSTA",
        next: "EDASI",
        back: "TAGASI",
        reset: "LÄHTESTA",
        buyingLink: "OSTA VEEBIST",
        brandFile: "BRÄNDI JUHEND",
        catalog: "LAE KATALOOG",
        contact: "KONTAKT",
        b2b: "B2B JA GLOBAALNE PARTNERLUS",
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nPREMIUM\nKURATSIOON.",
            desc: "Berrisom, G9SKIN, AMILL ja COSCELL ekspertlahendused."
        },
        sidebar: ["AVALEHT", "HOOLDUS", "VAJADUS", "SOOVITUS"],
        phases: ["SAMM 01: Fookus", "SAMM 02: Probleem", "Meie Soovitus"],
        instructions: ["Vali hoolduse kategooria", "Mis on sinu peamine nahamure?", "Valisime sulle need tooted:"],
        snsFeedbackBtn: "SNS Tagasiside maailmast"
    },
    [Language.VI]: {
        start: "BẮT ĐẦU CHẨN ĐOÁN",
        next: "TIẾP THEO",
        back: "QUAY LẠI",
        reset: "ĐẶT LẠI",
        buyingLink: "MUA NGAY",
        brandFile: "HỒ SƠ THƯƠNG HIỆU",
        catalog: "TẢI DANH MỤC",
        contact: "LIÊN HỆ",
        b2b: "HỢP TÁC B2B TOÀN CẦU",
        hero: {
            sub: "CosmeLab Co., Ltd.",
            title: "COSMELAB\nTUYỂN CHỌN\nCAO CẤP.",
            desc: "Giải pháp được chuyên gia tuyển chọn từ Berrisom, G9SKIN, AMILL và COSCELL."
        },
        sidebar: ["TRANG CHỦ", "DANH MỤC", "NHU CẦU", "KẾT QUẢ"],
        phases: ["BƯỚC 01: Danh Mục", "BƯỚC 02: Nhu Cầu", "Giải Pháp Dành Cho Bạn"],
        instructions: ["Chọn danh mục chăm sóc của bạn", "Nhu cầu chính của da bạn là gì?", "Chúng tôi đã chọn những sản phẩm cao cấp này cho bạn:"],
        snsFeedbackBtn: "Phản hồi từ khách hàng toàn cầu"
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
            [Language.RU]: { title: 'Тату-макияж', subtitle: 'Berrisom: Профессиональная стойкость' },
            [Language.EL]: { title: 'Μακιγιάζ Τατουάζ', subtitle: 'Berrisom: Επαγγελματική Διάρκεια' },
            [Language.HU]: { title: 'Smink Tetoválás', subtitle: 'Berrisom: Professzionális Tartós Megoldások' },
            [Language.ET]: { title: 'Meik ja Tätoveering', subtitle: 'Berrisom: Professionaalsed kauakestvad lahendused' },
            [Language.VI]: { title: 'Trang Điểm Tattoo', subtitle: 'Berrisom: Giải Pháp Trang Điểm Bền Màu Chuyên Nghiệp' }
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
                    [Language.RU]: { label: 'Уход за губами', sub: 'Стойкие тинты-тату' },
                    [Language.EL]: { label: 'Φροντίδα Χειλιών', sub: 'Tint τατουάζ μακράς διάρκειας' },
                    [Language.HU]: { label: 'Ajakápolás', sub: 'Hosszan tartó tetoválás ajaktinták' },
                    [Language.ET]: { label: 'Huulehooldus', sub: 'Kauakestvad tätoveeringu huulevärvid' },
                    [Language.VI]: { label: 'Chăm Sóc Môi', sub: 'Tint tattoo bền màu, giữ màu lâu' }
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
                    [Language.RU]: { label: 'Уход за бровями', sub: 'Естественный вид на 8 дней' },
                    [Language.EL]: { label: 'Φροντίδα Φρυδιών', sub: 'Φυσικό σχήμα για 8 ημέρες' },
                    [Language.HU]: { label: 'Szemöldök Ápolás', sub: '8 napig tartó természetes definiálás' },
                    [Language.ET]: { label: 'Kulmude Hooldus', sub: '8 päeva püsiv loomulik kuju' },
                    [Language.VI]: { label: 'Chăm Sóc Lông Mày', sub: 'Định hình tự nhiên, bền đến 8 ngày' }
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
                    [Language.RU]: { label: '3D Контуринг', sub: 'Стойкость на 7 дней' },
                    [Language.EL]: { label: 'Contouring', sub: '3D αποτέλεσμα για 7 ημέρες' },
                    [Language.HU]: { label: 'Árnyékoló Tetoválás', sub: '7 napig tartó 3D kontúrozás' },
                    [Language.ET]: { label: 'Varjutav Tätoveering', sub: '7 päeva püsiv 3D kontuurimine' },
                    [Language.VI]: { label: 'Tạo Khối 3D', sub: 'Tạo khối lập thể, giữ màu 7 ngày' }
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
            [Language.RU]: { title: 'Уход за кожей', subtitle: 'G9SKIN: Глубокое увлажнение с молоком' },
            [Language.EL]: { title: 'Φροντίδα Δέρματος', subtitle: 'G9SKIN: Ενυδάτωση με Γάλα' },
            [Language.HU]: { title: 'Bőrápolás', subtitle: 'G9SKIN: Jellegzetes Tej és Hidratálás' },
            [Language.ET]: { title: 'Nahahooldus', subtitle: 'G9SKIN: Piima ja niisutav hooldus' },
            [Language.VI]: { title: 'Chăm Sóc Da', subtitle: 'G9SKIN: Dưỡng Ẩm Đặc Trưng Với Sữa' }
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
                    [Language.RU]: { label: 'Осветление', sub: 'Крем для мгновенного сияния' },
                    [Language.EL]: { label: 'Λάμψη', sub: 'Κρέμα άμεσης φωτεινότητας' },
                    [Language.HU]: { label: 'Tónusjavítás', sub: 'Azonnali ragyogást adó krém' },
                    [Language.ET]: { label: 'Tooniv Hooldus', sub: 'Kohene sära andev kreem' },
                    [Language.VI]: { label: 'Chăm Sóc Tông Màu', sub: 'Kem dưỡng sáng da tức thì' }
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
                    [Language.RU]: { label: 'Увлажнение', sub: 'Глубокое увлажнение' },
                    [Language.EL]: { label: 'Ενυδάτωση', sub: 'Βαθιά ενυδάτωση' },
                    [Language.HU]: { label: 'Hidratálás', sub: 'Mélyhidratáló ápolás' },
                    [Language.ET]: { label: 'Niisutav Hooldus', sub: 'Sügavniisutus' },
                    [Language.VI]: { label: 'Dưỡng Ẩm Sâu', sub: 'Cấp ẩm chuyên sâu cho da' }
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
                    [Language.RU]: { label: 'Маски', sub: 'Профессиональный эстетический уход' },
                    [Language.EL]: { label: 'Μάσκες', sub: 'Επαγγελματική αισθητική περιποίηση' },
                    [Language.HU]: { label: 'Maszk Ápolás', sub: 'Professzionális esztétikai maszkok' },
                    [Language.ET]: { label: 'Maski Hooldus', sub: 'Professisonaalsed esteetilised maskid' },
                    [Language.VI]: { label: 'Mặt Nạ', sub: 'Mặt nạ thẩm mỹ chuyên nghiệp' }
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
            [Language.RU]: { title: 'Глубокое очищение', subtitle: 'AMILL: Очищение суперзлаками' },
            [Language.EL]: { title: 'Βαθύς Καθαρισμός', subtitle: 'AMILL: Καθαρισμός με δημητριακά' },
            [Language.HU]: { title: 'Mélytisztítás', subtitle: 'AMILL: Szuper Gabona Tisztítás' },
            [Language.ET]: { title: 'Sügavpuhastus', subtitle: 'AMILL: Superteravilja puhastus' },
            [Language.VI]: { title: 'Làm Sạch Sâu', subtitle: 'AMILL: Thanh Lọc Với Tinh Chất Ngũ Cốc' }
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
                    [Language.RU]: { label: 'Пенка', sub: 'Кремовая пенка со злаками' },
                    [Language.EL]: { label: 'Αφρός', sub: 'Κρεμώδης αφρός καθαρισμού' },
                    [Language.HU]: { label: 'Hab Típus', sub: 'Krémes gabona tisztító hab' },
                    [Language.ET]: { label: 'Vahtpuitastus', sub: 'Kreemjas teraviljavaht' },
                    [Language.VI]: { label: 'Sữa Rửa Mặt Bọt', sub: 'Bọt ngũ cốc làm sạch sâu lỗ chân lông' }
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
                    [Language.RU]: { label: 'Гидрофильное масло', sub: 'Мягкое рисовое масло' },
                    [Language.EL]: { label: 'Λάδι Καθαρισμού', sub: 'Απαλό λάδι ρυζιού' },
                    [Language.HU]: { label: 'Olaj Termék', sub: 'Kíméletes rizs tisztító olaj' },
                    [Language.ET]: { label: 'Õlipuhastus', sub: 'Mahe riisi puhastusõli' },
                    [Language.VI]: { label: 'Dầu Tẩy Trang', sub: 'Dầu gạo nhẹ dịu, tẩy trang sạch' }
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
            [Language.RU]: { title: 'Антивозрастной уход', subtitle: 'COSCELL: Клиническое восстановление' },
            [Language.EL]: { title: 'Αντιγήρανση', subtitle: 'COSCELL: Κλινική Επανόρθωση' },
            [Language.HU]: { title: 'Öregedésgátlás', subtitle: 'COSCELL: Klinikai Szintű Helyreállítás' },
            [Language.ET]: { title: 'Vananemisvastane', subtitle: 'COSCELL: Kliiniline nahaparandus' },
            [Language.VI]: { title: 'Chống Lão Hóa', subtitle: 'COSCELL: Phục Hồi Chuẩn Lâm Sàng' }
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
                    [Language.RU]: { label: 'Уход за зоной вокруг глаз', sub: 'Ретиноловый уход' },
                    [Language.EL]: { label: 'Περιοχή Ματιών', sub: 'Θεραπεία ρετινόλης' },
                    [Language.HU]: { label: 'Szemtáska Ápolás', sub: 'Retinolos szemkezelés' },
                    [Language.ET]: { label: 'Silmakotid', sub: 'Retinooliga silmaravi' },
                    [Language.VI]: { label: 'Chăm Sóc Bọng Mắt', sub: 'Điều trị vùng mắt với Retinol' }
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
                    [Language.RU]: { label: 'Уход за шеей', sub: 'Восстановление упругости за 1 мин' },
                    [Language.EL]: { label: 'Φροντίδα Λαιμού', sub: 'Σύσφιξη σε 1 λεπτό' },
                    [Language.HU]: { label: 'Nyak Ápolás', sub: 'Feszesség helyreállítása 1 perc alatt' },
                    [Language.ET]: { label: 'Kaelahooldus', sub: 'Trimmib 1 minutiga' },
                    [Language.VI]: { label: 'Chăm Sóc Cổ', sub: 'Phục Hồi Độ Đàn Hồi Trong 1 Phút' }
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
                    [Language.RU]: { label: 'Сыворотка', sub: 'Гальванический и ретиноловый уход' },
                    [Language.EL]: { label: 'Ορός', sub: 'Θεραπεία ρετινόλης και ρεύματος' },
                    [Language.HU]: { label: 'Szérum Ápolás', sub: 'Galván és Retinol kezelés' },
                    [Language.ET]: { label: 'Seerumhooldus', sub: 'Galvaaniline ja retinoolhooldus' },
                    [Language.VI]: { label: 'Chăm Sóc Serum', sub: 'Điều trị Galvanic & Retinol' }
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
                    [Language.RU]: { label: 'Линия Green Papaya', sub: 'Уход за порами с PDRN' },
                    [Language.EL]: { label: 'Σειρά Green Papaya', sub: 'Φροντίδα πόρων με PDRN' },
                    [Language.HU]: { label: 'Zöld Papaya Család', sub: 'PDRN pórusápoló család' },
                    [Language.ET]: { label: 'Rohelise Papaia Sari', sub: 'PDRN pooride hooldus' },
                    [Language.VI]: { label: 'Dòng Đu Đủ Xanh', sub: 'Dòng chăm sóc lỗ chân lông PDRN' }
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
                    [Language.RU]: { label: 'Линия VITA', sub: 'Капсулы с 99% витамином C' },
                    [Language.EL]: { label: 'Σειρά VITA', sub: 'Κάψουλες με 99% Βιταμίνη C' },
                    [Language.HU]: { label: 'VITA CSALÁD', sub: 'C-vitamin 99% kapszula család' },
                    [Language.ET]: { label: 'VITA SARI', sub: '99% C-vitamiini kapslid' },
                    [Language.VI]: { label: 'DÒNG VITA', sub: 'Dòng viên nang Vitamin C 99%' }
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
            `,
            [Language.ET]: `
                <h4 class="font-bold mb-2">Huule Tätoveeringu Tint: Elav Värv 5 Minutiga</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Mugav Pealekandmine & Kohene Pigmentatsioon:</strong> Kandke paks kiht, laske 5 minutit kuivada ja koorige maha koheseks ja elavaks värviks. Integreeritud silikoonotsik tagab täpse pealekandmise.</li>
                    <li><strong>Ei Määri:</strong> Pärast koorimist ei jäta jälgi tassidele, maskidele ega kätele.</li>
                    <li><strong>Erakordne Püsivus:</strong> Üks kord peale kandes püsib terve päeva. Sobib nii loomulikuks üleminekuks kui ka läikiva huuleõliga kandmiseks.</li>
                </ul>
            `
        },
        translations: {
            
            [Language.RU]: { name: 'ЛЮКСОВЫЙ ТИНТ-ТАТУ ДЛЯ ГУБ', description: 'Нанесите, подождите 5 минут и снимите. Обеспечивает яркий цвет на 32 часа без отпечатков.' },
            [Language.EL]: { name: 'TINT ΤΑΤΟΥΑΖ ΧΕΙΛΙΩΝ', description: 'Εφαρμόστε, αφήστε 5 λεπτά και αφαιρέστε. Εξασφαλίζει ζωντανό χρώμα για 32 ώρες χωρίς να λερώνει.' },
            [Language.CN]: { name: '唇纹身染唇液', description: '涂抹5分钟后撕拉，实现32小时持色不沾杯。' },
            [Language.ES]: { name: 'LIP TATTOO TINT PACK', description: 'Aplica, deja actuar 5 min y retira. Garantiza 32 horas de color vibrante sin transferencias.' },
            [Language.JP]: { name: 'リップタトゥーパック', description: '塗って5分後にはがすだけ。32時間、色移りせずに鮮の発色を持続します。' },
            [Language.ME]: { name: 'تاتو الشفاه الأصلي', description: 'ضعيه، اتركيه يجف 5 دقائق ثم انزعيه. لون حيوي يدوم 32 ساعة بلا تلطيخ نهائيًا.' },
            [Language.FR]: { name: 'LIP TATTOO TINT PACK', description: 'Appliquer, laisser 5 min et décoller. Offre 32 heures de couleur vibrante sans transfert.' },
            [Language.DE]: { name: 'LIP TATTOO TINT PACK', description: 'Auftragen, 5 Min. warten, abziehen. Sorgt 32 Stunden lang für lebendige, wischfeste Farbe.' },
            [Language.KR]: { name: '립 타투 틴트 팩', description: '바르고 5분 뒤 떼어내면 32시간동안 묻어남 없이 색이 지속된다.' },
            [Language.HU]: { name: 'LIP TATTOO TINT PACK', description: 'Vigye fel, hagyja 5 percig száradni, majd húzza le. 32 órán át tartó élénk, elkenődésmentes szín.' },
            [Language.ET]: { name: 'LIP TATTOO TINT PACK', description: 'Kanna peale, lase 5 min mõjuda ja koori. Tagab 32 tundi erksa ja määrimiskindla värvi.' },
            [Language.VI]: { name: 'LIP TATTOO TINT PACK', description: 'Thoa lên môi, chờ 5 phút rồi bóc ra. Giữ màu rực rỡ 32 giờ, không lem.' },
            [Language.US]: { name: 'LIP TATTOO TINT PACK', description: 'Apply, let sit for 5 mins, peel off. Provides 32 hours of vibrant, transfer-proof color.' }
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
            
            [Language.RU]: { name: 'ГЕЛЕВЫЙ ТИНТ-ТАТУ', description: 'Яркий цвет держится 3-4 часа без отпечатков с глянцевым желеобразным эффектом.' },
            [Language.EL]: { name: 'JELLY ΤΑΤΟΥΑΖ TINT', description: 'Το χρώμα διαρκεί 3-4 ώρες χωρίς μεταφορά, με έντονο εφέ ζελέ.' },
            [Language.CN]: { name: '果冻纹身染唇液', description: '持妆3~4小时不沾杯，极致展现水润光泽的果冻感。' },
            [Language.ES]: { name: 'JELLY TATTOO TINT', description: 'Color vivo que dura 3-4 horas sin transferencias, con efecto gelatina brillante.' },
            [Language.JP]: { name: 'ジェリータトゥーティント', description: '色移りせず3〜4時間鮮やかな発色をキープ。グロッシーなジェリー感が極立ちます。' },
            [Language.ME]: { name: 'جيلي تاتو تينت', description: 'لون حيوي يدوم 3-4 ساعات دون تلطيخ، ليعزز تأثير الجيلي اللامع.' },
            [Language.FR]: { name: 'JELLY TATTOO TINT', description: 'Couleur vive 3-4h sans transfert, avec un effet gelée brillant.' },
            [Language.DE]: { name: 'JELLY TATTOO TINT', description: 'Vivid Farbe hält 3-4 Stunden ohne Transfer, mit glänzendem Jelly-Effekt.' },
            [Language.KR]: { name: '젤리 타투 틴트', description: '색이 3~4시간 동안 묻어남 없이 유지되고 비비드한 컬러로 젤리 느낌 즉 그로시한 효과가 극대화 되는 제품' },
            [Language.HU]: { name: 'JELLY TATTOO TINT', description: 'Az élénk szín 3-4 órán át tart, elkenődés nélkül, fényes, zselés hatással.' },
            [Language.ET]: { name: 'JELLY TATTOO TINT', description: 'Elav värv püsib 3-4 tundi ilma määrimata, läikiva želee-efektiga.' },
            [Language.VI]: { name: 'JELLY TATTOO TINT', description: 'Màu rực rỡ bền 3-4 giờ không lem, hiệu ứng thạch bóng mượt tối đa.' },
            [Language.US]: { name: 'JELLY TATTOO TINT', description: 'Vivid color lasts 3-4 hours with zero transfer, maximizing a glossy, vibrant jelly effect.' }
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
            `,
            [Language.ET]: `
                <h4 class="font-bold mb-2">Kulmude Tätoveeringu Pakk: Erakordne Püsivus</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Võrratu Püsivus:</strong> Toode püsib 5-7 päeva ühe kasutuse järel. See vähendab oluliselt igahommikust meikimist.</li>
                    <li><strong>Loomulik Tulemus:</strong> Jätab loomuliku, mitte kunstliku mulje. Küünelaki pintsli sarnane aplikaator teeb kasutamise lihtsaks ka algajatele.</li>
                </ul>
            `
        },
        translations: {
            
            [Language.RU]: { name: 'ТИНТ ДЛЯ БРОВЕЙ', description: 'Профессиональное решение для бровей, стойкость до 8 дней и естественный вид.' },
            [Language.EL]: { name: 'ΤΑΤΟΥΑΖ ΦΡΥΔΙΩΝ', description: 'Επαγγελματική λύση για τα φρύδια που διαρκεί έως και 8 ημέρες με φυσικό αποτέλεσμα.' },
            [Language.CN]: { name: '持久纹身染眉膏', description: '长效8天自然野生眉，专业级持妆。' },
            [Language.ES]: { name: 'OOPS MY BROW TATTOO', description: 'Cejas perfectas hasta por 8 días. Definición natural de nivel profesional.' },
            [Language.JP]: { name: 'アイブロウタトゥー', description: '最長8日間持続。毎朝のメイクを楽にする、自然な仕上がりの眉タトゥー。' },
            [Language.ME]: { name: 'تاتو الحواجب أوبس', description: 'حل احترافي للحواجب يدوم حتى 8 أيام بمظهر طبيعي للغاية.' },
            [Language.FR]: { name: 'OOPS MY BROW TATTOO', description: 'Teinture sourcils professionnelle tenue 8 jours, fini naturel.' },
            [Language.DE]: { name: 'OOPS MY BROW TATTOO', description: 'Professionelles Augenbrauen-Tattoo für ein natürliches Aussehen, hält bis zu 8 Tage.' },
            [Language.KR]: { name: '웁스 마이 아이브로우 타투', description: '최대 8일 지속. 매일 그릴 필요 없는 자연스러운 눈썹 문신 효과.' },
            [Language.HU]: { name: 'OOPS MY BROW TATTOO', description: 'Professzionális szemöldök megoldás, amely akár 8 napig is tart természetes megjelenéssel.' },
            [Language.ET]: { name: 'OOPS MY BROW TATTOO', description: 'Professisonaalne kulmuvärv, mis püsib kuni 8 päeva loomuliku välimusega.' },
            [Language.VI]: { name: 'OOPS MY BROW TATTOO', description: 'Giải pháp lông mày chuyên nghiệp, bền đến 8 ngày với vẻ tự nhiên.' }
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
            [Language.ET]: `
                <h4 class="font-bold mb-2">Mitme Tsooni Rakendus</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li>Lisaks huultele ja kulmudele sobib nina, juuksepiiri ja silmade aluse kontuurimiseks. Loob selged näojooned, andes enesekindlust ka ilma meigita.</li>
                    <li><strong>Täismeigi Efekt:</strong> Pakub "täismeigi" visuaalset efekti, mis sobib aktiivseks tegevuseks, reisimiseks või veespordiks.</li>
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
            
            [Language.RU]: { name: 'ТИНТ ДЛЯ КОНТУРИНГА', description: 'Подчеркните контуры вашего лица с помощью точного и стойкого 3D-финиша.' },
            [Language.EL]: { name: 'ΤΑΤΟΥΑΖ ΣΚΙΑΣΗΣ', description: 'Σμιλέψτε τα περιγράμματα του προσώπου σας με ακριβές, τρισδιάστατο φινίρισμα μεγάλης διάρκειας.' },
            [Language.CN]: { name: '3D立体修容膏', description: '精准勾勒脸部轮廓，持久打造3D立体感无暇阴影。' },
            [Language.ES]: { name: 'SHADING TATTOO', description: 'Define y esculpe el rostro con un acabado 3D impecable y duradero.' },
            [Language.JP]: { name: 'シェーディングタトゥー', description: '理想の陰影メイクをデザイン。7日間持続する３D立体メイク。' },
            [Language.ME]: { name: 'تاتو التظليل', description: 'حدد ونحت ملامح الوجه بلمسة ثلاثية الأبعاد تدوم طويلاً.' },
            [Language.FR]: { name: 'SHADING TATTOO', description: 'Définissez et sculptez vos contours pour un fini 3D durable.' },
            [Language.DE]: { name: 'SHADING TATTOO', description: 'Definieren und modellieren Sie Ihre Gesichtskonturen mit langanhaltendem 3D-Finish.' },
            [Language.KR]: { name: '쉐딩 타투', description: '7일 동안 지속되는 입체 윤곽. 땀과 물에도 지워지지 않는 강력한 3D 페이스 라인.' },
            [Language.HU]: { name: 'SHADING TATTOO', description: 'Definiálja és formálja arcvonásait precíz, hosszan tartó 3D felülettel.' },
            [Language.ET]: { name: 'SHADING TATTOO', description: 'Määratle ja vormi oma näojooni täpse, kauakestva 3D viimistlusega.' },
            [Language.VI]: { name: 'SHADING TATTOO', description: 'Tạo khối và điêu khắc đường nét khuôn mặt với lớp hoàn thiện 3D bền lâu.' }
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
            `,
            [Language.ET]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Viraalne Hitt:</strong> Tuntud kui "Piimapaki nahahooldus", populaarne oma Instagrami-sõbraliku pakendi ja unikaalse tekstuuri poolest.</li>
                    <li><strong>Tekstuur:</strong> "Värske vahukoore" laadne konsistents, mis sulab koheselt nahka.</li>
                    <li><strong>Tulemus:</strong> "Mängumuutja" tuhmi naha jaoks, pakkudes kohest tooni parandavat efekti "meigivaba" välimuse saavutamiseks. Katab tõhusalt iluvead.</li>
                </ul>
            `,
            [Language.VI]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Phản Hồi Thị Trường:</strong> Được đánh giá cao là "toner dưỡng ẩm nhẹ dịu dung tích lớn".</li>
                    <li><strong>Trải Nghiệm:</strong> Kết cấu "sữa loãng" độc đáo, mịn nhưng nhẹ, thấm nhanh không dính tay.</li>
                    <li><strong>Hiệu Quả:</strong> Chứa protein sữa, làm sáng và săn chắc da không cần acid mạnh. Phù hợp cho da khô mùa đông.</li>
                    <li><strong>Giá Trị:</strong> Dung tích 300ml và chức năng kép (làm trắng/chống nhăn) là điểm bán hàng chính.</li>
                </ul>
            `
        },
        translations: {
            
            [Language.RU]: { name: 'МОЛОЧНЫЙ ТОНЕР', description: 'Нежный, увлажняющий тонер большого объема (300 мл). Обогащен молочным протеином.' },
            [Language.EL]: { name: 'ΤΟΝΕΡ ΓΑΛΑΚΤΟΣ', description: 'Απαλό ενυδατικό τόνερ (300ml) εμπλουτισμένο με πρωτεΐνη γάλακτος.' },
            [Language.CN]: { name: '牛奶保湿爽肤水', description: '温和大容量(300ml)爽肤水，富含牛奶蛋白，保湿提亮。' },
            [Language.ES]: { name: 'WHITE IN MILK TONER', description: 'Tónico hidratante suave de gran formato (300ml) con proteína de leche.' },
            [Language.JP]: { name: 'ホワイトインミルクトナー', description: '300ml大容量。牛乳タンパク質配合で、しっとり明るい肌へ導く低刺激トナー。' },
            [Language.ME]: { name: 'تونر الحليب المبيض', description: 'تونر مرطب لطيف بحجم كبير (300 مل) مع بروتين الحليب.' },
            [Language.FR]: { name: 'WHITE IN MILK TONER', description: 'Tonique hydratant doux grand format (300ml) aux protéines de lait.' },
            [Language.DE]: { name: 'WHITE IN MILK TONER', description: 'Sanfter, feuchtigkeitsspendender Toner (300ml) mit Milchproteinen.' },
            [Language.KR]: { name: '화이트 인 밀크 토너', description: '300ml 대용량 순한 보습 토너. 우유 단백질 성분이 피부를 맑고 촉촉하게 가꿔줍니다.' },
            [Language.HU]: { name: 'WHITE IN MILK TONER', description: 'Gyengéd, nagy kiszerelésű (300ml) hidratáló toner. Tejfehérjével dúsítva a világosításért és hidratálásért.' },
            [Language.ET]: { name: 'WHITE IN MILK TONER', description: 'Õrn, suure mahutavusega (300ml) niisutav toonik. Rikastatud piimavalguga helestamiseks ja niisutamiseks.' },
            [Language.VI]: { name: 'WHITE IN MILK TONER', description: 'Toner dưỡng ẩm nhẹ dịu dung tích lớn (300ml). Chứa protein sữa làm sáng và dưỡng ẩm da.' }
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
            `,
            [Language.ET]: `
                <p>Populaarne Euroopas (nt MiiN Cosmetics) ja kogu maailmas kui unikaalne "enesehoolduse" kingitus tänu oma erilisele ajakirja stiilis pakendile.</p>
            `,
            [Language.VI]: `
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Công Nghệ Tiên Tiến (Galvanic):</strong> Sử dụng vi dòng điện (Galvanic) giúp Retinol thẩm thấu sâu hơn mà không gây kích ứng, phù hợp cho vùng da nhạy cảm quanh mắt.</li>
                </ul>
            `,
            [Language.VI]: `
                <h4 class="font-bold mb-2">Viên Nang Vita C: Rạng Rỡ Như Làn Da Kính</h4>
                <ul class="list-disc pl-5 space-y-1 text-sm">
                    <li><strong>Định Vị:</strong> Giải pháp làm sáng da mạnh mẽ, tạo hiệu ứng "Glass Skin" tức thì.</li>
                    <li><strong>Thành Phần:</strong> Công thức cô đặc 99% Vitamin C thuần khiết và 66% nước cây Vitamin.</li>
                    <li><strong>Kết Cấu:</strong> Viên nang độc đáo tan ngay khi chạm da, đưa dưỡng chất tươi mới vào sâu.</li>
                    <li><strong>Lợi Ích:</strong> Hiệu ứng "glow-up" tức thì, hồi sinh làn da xỉn màu, đặc biệt hiệu quả trong mùa đông.</li>
                </ul>
            `
        },
        translations: {
            
            [Language.RU]: { name: 'КАПСУЛЬНЫЙ КРЕМ VITA', description: 'Клинически доказанное улучшение пигментации на 27.33% и уровня меланина на 7.67%.' },
            [Language.EL]: { name: 'ΚΡΕΜΑ VITA', description: 'Κλινικά αποδεδειγμένη βελτίωση μελάγχρωσης 27.33% και επιπέδου μελανίνης 7.67%.' },
            [Language.CN]: { name: '维他命C胶囊面霜', description: '临床验证：色斑改善27.33%，黑色素水平降低7.67%。' },
            [Language.ES]: { name: 'VITA CAPSULE CREAM', description: 'Efecto iluminador comprobado: Pigmentación mejorada en 27.33% y nivel de melanina en 7.67%.' },
            [Language.JP]: { name: 'ビタCカプセルクリーム', description: '臨床試験で色素沈着27.33%改善、メラニンレベル7.67%改善が証明されたクリーム。' },
            [Language.ME]: { name: 'كريم كبسولات فيتا', description: 'تحسن التصبغ بنسبة 27.33% ومستوى الميلانين بنسبة 7.67% مثبت سريرياً.' },
            [Language.FR]: { name: 'VITA CAPSULE CRÈME', description: 'Amélioration cliniquement prouvée de la pigmentation de 27.33% et de la mélanine de 7.67%.' },
            [Language.DE]: { name: 'VITA KAPSEL CREME', description: 'Klinisch erwiesen: Pigmentierung um 27.33% und Melanin um 7.67% verbessert.' },
            [Language.KR]: { name: '비타 캡슐 크림', description: 'PIGMENTATION 27.33% 개선과 멜라닌 레벨 7.67% 개선 효과가 검증된 일루미네이팅 겔 크림.' },
            [Language.HU]: { name: 'VITA CAPSULE CREAM', description: 'Klinikailag bizonyítottan 27.33%-os pigmentáció és 7.67%-os melanin szint javulás.' },
            [Language.ET]: { name: 'VITA CAPSULE CREAM', description: 'Kliiniliselt tõestatud pigmentatsiooni 27.33% ja melaniini taseme 7.67% paranemine.' },
            [Language.VI]: { name: 'KEM VIÊN NANG VITAMIN C', description: 'Kliiniliselt tõestatud pigmentatsiooni 27.33% ja melaniini taseme 7.67% paranemine.' }
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
            
            [Language.RU]: { name: 'АМПУЛА VITA C', description: 'Сыворотка: Пигментация уменьшена на 27.33%, уровень меланина на 7.67%.' },
            [Language.EL]: { name: 'ΑΜΠΟΥΛΑ VITA C', description: 'Ορός: Μείωση μελάγχρωσης κατά 27.33% και επιπέδου μελανίνης κατά 7.67%.' },
            [Language.CN]: { name: '高浓缩维他命C安瓶', description: '浓缩安瓶：色斑改善27.33%，黑色素水平降低7.67%。' },
            [Language.ES]: { name: 'VITA C AMPOULE', description: 'Ampolla: Reducción probada de pigmentación en 27.33% y nivel de melanina en 7.67%.' },
            [Language.JP]: { name: 'ビタCアンプル', description: '色素沈着27.33%減少、メラニンレベル7.67%改善が証明された美白アンプル。' },
            [Language.ME]: { name: 'أمبولة فيتا سي', description: 'أمبولة: انخفاض التصبغ بنسبة 27.33% ومستوى الميلانين بنسبة 7.67%.' },
            [Language.FR]: { name: 'AMPOULE VITA C', description: 'Ampoule : Pigmentation réduite de 27.33% et mélanine de 7.67%.' },
            [Language.DE]: { name: 'VITA C AMPOULE', description: 'Ampulle: Pigmentierung um 27.33% und Melanin um 7.67% reduziert.' },
            [Language.KR]: { name: '비타 C 앰플', description: 'PIGMENTATION 27.33% 개선과 멜라닌 레벨 7.67% 감소가 입증된 강력 미백 앰플.' },
            [Language.HU]: { name: 'VITA C AMPOULE', description: 'Ampulla: Pigmentáció csökkenés 27.33%-kal, melanin 7.67%-kal.' },
            [Language.ET]: { name: 'VITA C AMPOULE', description: 'Ampull: Pigmentatsiooni vähenemine 27.33% ja melaniini taseme paranemine 7.67%.' }
        }
    }
];

export const BRAND_INTRODUCE_URL = 'https://drive.google.com/drive/folders/1aj_ywbMoTFFoquVHwGn8Y41ldE0jEPfF?usp=drive_link';

export const getBuyingLink = (language: Language, product: Product | undefined): string => {
    // 0. Estonia -> Geeliekspert
    if (language === Language.ET) {
        return 'https://hoolbeauty.ee/password';
    }

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

    // 5. Group 1: English, Spanish, Russian, Greek, Hungarian -> Amazon
    if ([Language.US, Language.ES, Language.RU, Language.EL, Language.HU].includes(language)) {
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
