import { Language } from '../types';

export interface TranslationDictionary {
  bannerNotice: string;
  brandTagline: string;
  navCatalog: string;
  navFurniture: string;
  navDigitalSathi: string;
  navStartups: string;
  navCustom: string;
  heroTag: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBrowseBtn: string;
  heroSathiBtn: string;
  statDelivered: string;
  statArtisans: string;
  statSeasoned: string;
  statFreight: string;
  filterAll: string;
  filterFurniture: string;
  filterHandicraft: string;
  filterTextile: string;
  filterBrass: string;
  filterWoodAll: string;
  filterWoodSheesham: string;
  filterWoodTeak: string;
  filterWoodMango: string;
  directFairPrice: string;
  customSizeBtn: string;
  addToCartBtn: string;
  sathiHeadline: string;
  sathiSubhead: string;
  sathiPoint1Title: string;
  sathiPoint1Desc: string;
  sathiPoint2Title: string;
  sathiPoint2Desc: string;
  sathiPoint3Title: string;
  sathiPoint3Desc: string;
  openSathiModalBtn: string;
  customDimensionsTitle: string;
  customDimensionsSubhead: string;
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    bannerNotice: "Direct from Saharanpur, Jodhpur, Pali & Channapatna — No middleman markups!",
    brandTagline: "Village Craft & Wooden Works",
    navCatalog: "Explore Catalog",
    navFurniture: "Solid Wood",
    navDigitalSathi: "Digital Sathi (Village Network)",
    navStartups: "Startup Tie-ups",
    navCustom: "Custom Dimensions",
    heroTag: "Empowering Rural Carpenters & Craftspersons",
    heroTitle: "Authentic Handcrafted Furniture Directly From Rural Workshops",
    heroSubtitle: "Eliminating unfair middlemen markups. We bring seasoned Sheesham, Teak, and Mango wood masterpieces straight from the artisan's chisel to your home.",
    heroBrowseBtn: "Browse Wood & Crafts",
    heroSathiBtn: "Onboard Village Artisan",
    statDelivered: "₹1.4 Cr+ to Village Artisans",
    statArtisans: "180+ Master Badhai & Joiners",
    statSeasoned: "100% Kiln-Dry Certified Wood",
    statFreight: "Tailgate Truck Delivery to 28k Pincodes",
    filterAll: "All Works",
    filterFurniture: "Solid Wood Furniture",
    filterHandicraft: "Pottery & Decor",
    filterTextile: "Loom & Textiles",
    filterBrass: "Brass & Bell Metal",
    filterWoodAll: "All Timber Types",
    filterWoodSheesham: "Sheesham (Indian Rosewood)",
    filterWoodTeak: "Reclaimed Sagwan (Teak)",
    filterWoodMango: "Sustainable Mango Wood",
    directFairPrice: "Direct Fair Payout",
    customSizeBtn: "Custom Size",
    addToCartBtn: "Add to Cart",
    sathiHeadline: "How We Support Village Artisans Who Lack Tech Awareness",
    sathiSubhead: "Many senior woodcarvers and village craftspersons do not own smartphones or read English. Our Digital Sathi model solves this:",
    sathiPoint1Title: "Voice & Audio Note Listing",
    sathiPoint1Desc: "Artisans speak in their native tongue about dimensions, finish, and expected prices. Sathi transcribes and lists their items in minutes.",
    sathiPoint2Title: "3% Local Youth & CSC Commission",
    sathiPoint2Desc: "Village youth and CSC kiosk operators earn direct incentives for photography, catalog entry, and packaging assistance.",
    sathiPoint3Title: "Doorstep Freight Crate Pickup",
    sathiPoint3Desc: "Heavy furniture is packed in insured shock-proof crates and picked up directly from rural workshops by Porter and Rivigo logistics.",
    openSathiModalBtn: "Open Digital Sathi Listing Console",
    customDimensionsTitle: "Custom Made-to-Order Woodcraft",
    customDimensionsSubhead: "Direct collaboration with regional master carpenters for specific room dimensions and seasoned timber selections."
  },
  hi: {
    bannerNotice: "सहारनपुर, जोधपुर, पाली और चन्नापट्टना से सीधा — कोई दलाल या बिचौलिया नहीं!",
    brandTagline: "ग्रामीण हस्तकला और लकड़ी का शिल्प",
    navCatalog: "कैटलॉग देखें",
    navFurniture: "असली लकड़ी का फर्नीचर",
    navDigitalSathi: "डिजिटल साथी (ग्रामीण नेटवर्क)",
    navStartups: "स्टार्टअप साझेदारी",
    navCustom: "कस्टम साइज आर्डर",
    heroTag: "ग्रामीण बढ़ई और शिल्पकारों का सशक्तिकरण",
    heroTitle: "गाँव के बढ़ई और शिल्पकारों से सीधा असली लकड़ी का फर्नीचर",
    heroSubtitle: "बिना किसी बिचौलिए के। शीशम, सागवान और आम की असली नक्काशीदार लकड़ी सीधे कारीगर की छेनी से आपके घर तक।",
    heroBrowseBtn: "लकड़ी व शिल्प देखें",
    heroSathiBtn: "कारीगर को जोड़ें (डिजिटल साथी)",
    statDelivered: "₹1.4 करोड़+ कारीगरों के खाते में",
    statArtisans: "180+ प्रमाणित बढ़ई व कारीगर",
    statSeasoned: "100% सूखी व पक्की शीशम/सागवान",
    statFreight: "28,000 पिनकोड पर सुरक्षित ट्रक डिलीवरी",
    filterAll: "सभी कृतियां",
    filterFurniture: "लकड़ी का फर्नीचर",
    filterHandicraft: "मिट्टी व हस्तशिल्प",
    filterTextile: "हथकरघा व वस्त्र",
    filterBrass: "पीतल व बेल मेटल",
    filterWoodAll: "सभी लकड़ियां",
    filterWoodSheesham: "शीशम (रोज़वुड)",
    filterWoodTeak: "सागवान (टीक)",
    filterWoodMango: "आम की लकड़ी",
    directFairPrice: "सीधी उचित कीमत",
    customSizeBtn: "कस्टम साइज",
    addToCartBtn: "कार्ट में जोड़ें",
    sathiHeadline: "कम तकनीकी जानकारी वाले कारीगरों की सहायता कैसे होती है?",
    sathiSubhead: "कई बुजुर्ग बढ़ई स्मार्टफोन या अंग्रेजी का उपयोग नहीं करते। हमारा डिजिटल साथी मॉडल यह अंतर पाटता है:",
    sathiPoint1Title: "वॉइस नोट और बोली द्वारा लिस्टिंग",
    sathiPoint1Desc: "कारीगर अपनी स्थानीय बोली में फर्नीचर का माप और मूल्य बोलते हैं। साथी उसे तुरंत कैटलॉग में दर्ज करता है।",
    sathiPoint2Title: "गाँव के युवाओं को 3% प्रोत्साहन राशि",
    sathiPoint2Desc: "गाँव के सीएससी ऑपरेटर और युवक फोटो खींचने व लिस्टिंग में सहायता के लिए 3% सीधा कमीशन पाते हैं।",
    sathiPoint3Title: "दरवाजे से भारी फ्रेट क्रेट पिकअप",
    sathiPoint3Desc: "कारीगर को भारी लॉजिस्टिक्स की चिंता नहीं; पोर्टर और भारी ट्रक सीधे कार्यशाला से पैकिंग उठाकर लाते हैं।",
    openSathiModalBtn: "डिजिटल साथी अपलोड कंसोल खोलें",
    customDimensionsTitle: "कस्टम नाप व डिजाइन आर्डर",
    customDimensionsSubhead: "अपने घर के आकार और पसंद की लकड़ी के अनुसार मास्टर बढ़ई से सीधा संपर्क करें।"
  },
  kn: {
    bannerNotice: "ಚನ್ನಪಟ್ಟಣ, ಸಹಾರನ್‌ಪುರ ಮತ್ತು ಜೋಧ್‌ಪುರದಿಂದ ನೇರವಾಗಿ — ಮಧ್ಯವರ್ತಿಗಳಿಲ್ಲ!",
    brandTagline: "ಗ್ರಾಮೀಣ ಕಲೆ ಮತ್ತು ಮರದ ಕರಕುಶಲತೆ",
    navCatalog: "ಕ್ಯಾಟಲಾಗ್ ನೋಡಿ",
    navFurniture: "ಘನ ಮರದ ಪೀಠೋಪಕರಣ",
    navDigitalSathi: "ಡಿಜಿಟಲ್ ಸಾಥಿ (ಗ್ರಾಮೀಣ ಸಹಾಯಕ)",
    navStartups: "ಸ್ಟಾರ್ಟ್‌ಅಪ್ ಪಾಲುದಾರಿಕೆ",
    navCustom: "ಕಸ್ಟಮ್ ಗಾತ್ರಗಳು",
    heroTag: "ಗ್ರಾಮೀಣ ಬಡಗಿಗಳು ಮತ್ತು ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ಶಕ್ತಿ",
    heroTitle: "ಗ್ರಾಮೀಣ ಕಾರ್ಯಾಗಾರಗಳಿಂದ ನೇರವಾಗಿ ಕೈಯಿಂದ ಮಾಡಿದ ಮರದ ಪೀಠೋಪಕರಣಗಳು",
    heroSubtitle: "ಮಧ್ಯವರ್ತಿಗಳ ಕಮಿಷನ್ ಇಲ್ಲದೆ ಸಾಂಪ್ರದಾಯಿಕ ಶೀಶಮ್, ತೇಗ ಮತ್ತು ಮಾವಿನ ಮರದ ಉತ್ತಮ ಪೀಠೋಪಕರಣಗಳನ್ನು ನೇರವಾಗಿ ನಿಮ್ಮ ಮನೆಗೆ ಪಡೆಯಿರಿ.",
    heroBrowseBtn: "ಮರದ ವಸ್ತುಗಳನ್ನು ನೋಡಿ",
    heroSathiBtn: "ಕುಶಲಕರ್ಮಿಯನ್ನು ನೋಂದಾಯಿಸಿ",
    statDelivered: "₹1.4 ಕೋಟಿ+ ಕುಶಲಕರ್ಮಿಗಳ ಖಾತೆಗೆ",
    statArtisans: "180+ ನುರಿತ ಬಡಗಿಗಳು",
    statSeasoned: "100% ಕೀಲ್ನ್ ಡ್ರೈ ಪ್ರಮಾಣೀಕೃತ ಮರ",
    statFreight: "28 ಸಾವಿರ ಪಿನ್‌ಕೋಡ್‌ಗಳಿಗೆ ನೇರ ರವಾನೆ",
    filterAll: "ಎಲ್ಲಾ ಕೃತಿಗಳು",
    filterFurniture: "ಮರದ ಪೀಠೋಪಕರಣ",
    filterHandicraft: "ಮಣ್ಣಿನ ಮತ್ತು ಆಲಂಕಾರಿಕ ವಸ್ತುಗಳು",
    filterTextile: "ಮಗ್ಗ ಮತ್ತು ಜವಳಿ",
    filterBrass: "ಹಿತ್ತಾಳೆ ಮತ್ತು ಬೆಲ್ ಮೆಟಲ್",
    filterWoodAll: "ಎಲ್ಲಾ ಮರದ ವಿಧಗಳು",
    filterWoodSheesham: "ಶೀಶಮ್ (ರೋಸ್‌ವುಡ್)",
    filterWoodTeak: "ತೇಗದ ಮರ (ಸಾಗುವಾನಿ)",
    filterWoodMango: "ಮಾವಿನ ಮರ",
    directFairPrice: "ನೇರ ನ್ಯಾಯಯುತ ಬೆಲೆ",
    customSizeBtn: "ಕಸ್ಟಮ್ ಗಾತ್ರ",
    addToCartBtn: "ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ",
    sathiHeadline: "ತಂತ್ರಜ್ಞಾನದ ಅರಿವಿಲ್ಲದ ಕುಶಲಕರ್ಮಿಗಳಿಗೆ ನಮ್ಮ ನೆರವು ಹೇಗೆ?",
    sathiSubhead: "ಹಿರಿಯ ಕುಶಲಕರ್ಮಿಗಳು ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಬಳಸುವುದಿಲ್ಲ. ನಮ್ಮ ಡಿಜಿಟಲ್ ಸಾಥಿ ಮಾದರಿ ಈ ಅಂತರವನ್ನು ನಿವಾರಿಸುತ್ತದೆ:",
    sathiPoint1Title: "ಧ್ವನಿ ರೆಕಾರ್ಡಿಂಗ್ ಮೂಲಕ ಲಿಸ್ಟಿಂಗ್",
    sathiPoint1Desc: "ಕುಶಲಕರ್ಮಿಗಳು ಕನ್ನಡದಲ್ಲಿ ಅಳತೆ ಮತ್ತು ಬೆಲೆಯನ್ನು ಹೇಳಿದರೆ ಸಾಕು; ಸಾಥಿ ಅದನ್ನು ಸುಲಭವಾಗಿ ಪಟ್ಟಿಗೆ ಸೇರಿಸುತ್ತಾರೆ.",
    sathiPoint2Title: "ಸ್ಥಳೀಯ ಯುವಕರಿಗೆ 3% ಕಮಿಷನ್",
    sathiPoint2Desc: "ಗ್ರಾಮ ಮಟ್ಟದಲ್ಲಿ ಫೋಟೋ ತೆಗೆಯಲು ಮತ್ತು ಪ್ಯಾಕಿಂಗ್ ಮಾಡಲು ನೆರವಾಗುವ ಸ್ಥಳೀಯರಿಗೆ 3% ಪ್ರೋತ್ಸಾಹಧನ ಸಿಗುತ್ತದೆ.",
    sathiPoint3Title: "ಕಾರ್ಯಾಗಾರದಿಂದಲೇ ನೇರ ಸರಕು ಸಾಗಾಣಿಕೆ",
    sathiPoint3Desc: "ಭಾರವಾದ ಮರದ ಪೀಠೋಪಕರಣಗಳನ್ನು ಪೋರ್ಟರ್ ಮತ್ತು ರಿವಿಗೋ ಮೂಲಕ ಸುರಕ್ಷಿತ ಕ್ರೇಟ್‌ಗಳಲ್ಲಿ ಸಾಗಿಸಲಾಗುತ್ತದೆ.",
    openSathiModalBtn: "ಡಿಜಿಟಲ್ ಸಾಥಿ ಕನ್ಸೋಲ್ ತೆರೆಯಿರಿ",
    customDimensionsTitle: "ನಿಮ್ಮ ಅಳತೆಯ ಕಸ್ಟಮ್ ಪೀಠೋಪಕರಣ",
    customDimensionsSubhead: "ನಿಮ್ಮ ಮನೆಯ ಜಾಗಕ್ಕೆ ತಕ್ಕಂತೆ ಬಡಗಿಗಳೊಂದಿಗೆ ನೇರವಾಗಿ ಮಾತನಾಡಿ ಆರ್ಡರ್ ಮಾಡಿ."
  },
  te: {
    bannerNotice: "సహారన్‌పూర్, జోధ్‌పూర్ & చన్నపట్నం నుండి నేరుగా — దళారులు లేని ధరలు!",
    brandTagline: "గ్రామీణ కలప & హస్తకళల వేదిక",
    navCatalog: "కేటలాగ్ చూడండి",
    navFurniture: "స్వచ్ఛమైన చెక్క ఫర్నిచర్",
    navDigitalSathi: "డిజిటల్ సాథి (గ్రామ సహాయక వ్యవస్థ)",
    navStartups: "స్టార్టప్ భాగస్వామ్యాలు",
    navCustom: "కస్టమ్ సైజులు",
    heroTag: "గ్రామీణ వడ్రంగులు & కళాకారులకు సాధికారత",
    heroTitle: "గ్రామీణ కళాకారుల చేతితో తయారుచేసిన కొయ్య ఫర్నిచర్",
    heroSubtitle: "మధ్యవర్తులు లేకుండా నేరుగా గ్రామాల నుండి స్వచ్ఛమైన టేకు, రోజ్‌వుడ్ మరియు మామిడి కలప వస్తువులు మీ గడప వద్దకు.",
    heroBrowseBtn: "కలప ఉత్పత్తులను చూడండి",
    heroSathiBtn: "కళాకారుడిని చేర్చండి",
    statDelivered: "₹1.4 కోట్లు+ కళాకారుల బ్యాంక్ ఖాతాలకు",
    statArtisans: "180+ నిపుణులైన వడ్రంగులు",
    statSeasoned: "100% పకడ్బందీగా ఆరబెట్టిన నాణ్యమైన కలప",
    statFreight: "28,000 పిన్‌కోడ్‌లకు సురక్షిత ట్రక్ డెలివరీ",
    filterAll: "అన్ని రకాలు",
    filterFurniture: "చెక్క ఫర్నిచర్",
    filterHandicraft: "మట్టి & అలంకరణ వస్తువులు",
    filterTextile: "చేనేత వస్త్రాలు",
    filterBrass: "ఇత్తడి & బెల్ మెటల్",
    filterWoodAll: "అన్ని కలప రకాలు",
    filterWoodSheesham: "శీశమ్ (రోజ్‌వుడ్)",
    filterWoodTeak: "టేకు (సాగ్వాన్)",
    filterWoodMango: "మామిడి కలప",
    directFairPrice: "నేరుగా సరసమైన ధర",
    customSizeBtn: "కస్టమ్ సైజు",
    addToCartBtn: "కార్ట్‌కు చేర్చండి",
    sathiHeadline: "టెక్నాలజీ తెలియని గ్రామీణ కళాకారులకు మా సహాయం ఎలా ఉంటుంది?",
    sathiSubhead: "చాలామంది కళాకారులకు స్మార్ట్‌ఫోన్ లేదా ఆంగ్లం తెలియదు. మా డిజిటల్ సాథి వ్యవస్థ వారికి ఇలా తోడ్పడుతుంది:",
    sathiPoint1Title: "వాయిస్ నోట్ ద్వారా సులభంగా లిస్టింగ్",
    sathiPoint1Desc: "కళాకారులు తమ స్థానిక భాషలో కొలతలు, ధరలు చెబితే డిజిటల్ సాథి వెంటనే ఆన్‌లైన్ కేటలాగ్‌లో ఉంచుతారు.",
    sathiPoint2Title: "గ్రామీణ యువతకు 3% ప్రోత్సాహకం",
    sathiPoint2Desc: "ఫొటోలు తీయడం, వివరాలు నమోదు చేయడంలో సహాయం చేసినందుకు గ్రామ యువతకు 3% కమీషన్ లభిస్తుంది.",
    sathiPoint3Title: "ఇంటి వద్దకే హెవీ ఫ్రైట్ పికప్",
    sathiPoint3Desc: "పోర్టర్ మరియు రివిగో ప్రత్యేక వుడెన్ క్రేట్లలో భారీ ఫర్నిచర్‌ను సురక్షితంగా రవాణా చేస్తాయి.",
    openSathiModalBtn: "డిజిటల్ సాథి కన్సోల్ తెరవండి",
    customDimensionsTitle: "కస్టమ్ మేడ్ ఆర్డర్లు",
    customDimensionsSubhead: "మీ ఇంటి కొలతలకు అనుగుణంగా అనుభవజ్ఞులైన వడ్రంగులతో నేరుగా తయారు చేయించండి."
  }
};
