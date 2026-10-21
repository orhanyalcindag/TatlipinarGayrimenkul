/**
 * Tatlıpınar Gayrimenkul — Veri Modeli ve Başlangıç Portföyü
 * T.C. Ticaret Bakanlığı Taşınmaz Ticareti Yetki Belge No: 3900628 (EİDS Onaylı)
 */

const DEFAULT_LISTINGS = [
  {
    id: "1340575505",
    title: "Lüleburgaz Kurtuluş Mahallesi'nde Lüks 3+1 Satılık Daire",
    category: "konut",
    type: "satilik",
    price: 4790000,
    priceFormatted: "4.790.000 ₺",
    currency: "₺",
    city: "Kırklareli",
    district: "Lüleburgaz",
    neighborhood: "Kurtuluş Mah.",
    address: "Kurtuluş Mahallesi, İstasyon Cad. Yakını, Lüleburgaz / Kırklareli",
    grossM2: 125,
    netM2: 115,
    roomCount: "3+1",
    buildingAge: "2 Yaşında",
    floor: "4. Kat",
    totalFloors: "7",
    heating: "Kombi (Doğalgaz)",
    bathrooms: 2,
    balcony: "2 Balkon (1 Cam Balkon)",
    elevator: "Var (Çift Asansör)",
    parking: "Kapalı ve Açık Otopark",
    furnished: "Hayır",
    deedStatus: "Kat Mülkiyetli",
    creditEligible: true,
    eidsApproved: true,
    featured: true,
    status: "active",
    date: "2026-10-18",
    dateFormatted: "18 Ekim 2026",
    images: [
      "images/ilan-kurtulus-3plus1.jpg",
      "images/ofis-ic-mekan.jpg",
      "images/ofis-dis-cephe.jpg"
    ],
    description: `Kurtuluş Mahallesi'nin en nezih ve merkezi noktasında, prestijli site içerisinde yer alan lüks 3+1 dairemiz satılıktır.

Daire Özellikleri:
- 125 m² brüt, 115 m² son derece kullanışlı net alan
- Ebeveyn banyolu geniş yatak odası
- Lüks ankastre setli ada mutfak konsepti
- Çift balkon, güney-batı cephe, gün boyu aydınlık ve ferah
- Birinci sınıf derzli laminant parke, Lake kapılar, ithal seramikler
- Isı ve ses yalıtımlı modern mimari
- T.C. Ticaret Bakanlığı EİDS onaylı, krediye uygun, hemen tapu devri.`,
    interiorFeatures: [
      "Ankastre Fırın & Ocak & Davlumbaz",
      "Ebeveyn Banyosu",
      "Görüntülü Diyafon",
      "Çelik Kapı",
      "Klima Altyapısı",
      "Giyinme Odası",
      "Spot & LED Aydınlatma",
      "Hilton Banyo & Duşakabin",
      "Fiber İnternet Altyapısı"
    ],
    exteriorFeatures: [
      "Çift Asansör",
      "Kapalı Otopark",
      "Açık Otopark",
      "Isı Yalıtımı (Mantolama)",
      "Güvenlik Kamerası (7/24)",
      "Su Deposu & Hidrofor",
      "Çocuk Oyun Parkı"
    ],
    locationFeatures: [
      "Çarşı Merkezine 5 dk",
      "Toplu Taşıma Duraklarına 50 m",
      "Market ve Okul Yakını",
      "Sağlık Ocağı & Eczane Çevresi",
      "Park & Yürüyüş Yolu Cepheli"
    ],
    consultant: {
      name: "Orkun Tatlıpınar",
      title: "Broker / Kurucu Danışman",
      phone: "+90 537 832 59 39",
      mobile: "+90 541 634 72 76",
      authNo: "3900628"
    }
  },
  {
    id: "1340575506",
    title: "Lüleburgaz Hamzabey'de İmar Planı İçerisinde Konut İmarlı Arsa",
    category: "arsa",
    type: "satilik",
    price: 2450000,
    priceFormatted: "2.450.000 ₺",
    currency: "₺",
    city: "Kırklareli",
    district: "Lüleburgaz",
    neighborhood: "Hamzabey Köyü",
    address: "Hamzabey Köy İçi İmar Sınırı, Lüleburgaz / Kırklareli",
    grossM2: 540,
    netM2: 540,
    roomCount: "Arsa / Parsel",
    buildingAge: "—",
    floor: "Müstakil Parsel",
    totalFloors: "2.5 Kat İzinli (KAKS: 0.60)",
    heating: "Altyapı Mevcut (Elektrik/Su/Yol)",
    bathrooms: 0,
    balcony: "—",
    elevator: "—",
    parking: "Müstakil Bahçe Alanı",
    furnished: "—",
    deedStatus: "Müstakil Parsel (Tek Tapu)",
    creditEligible: true,
    eidsApproved: true,
    featured: true,
    status: "active",
    date: "2026-10-15",
    dateFormatted: "15 Ekim 2026",
    images: [
      "images/ilan-hamzabey-arsa.jpg",
      "images/hero-bg.jpg"
    ],
    description: `Kendi evinizi inşa etmenin özgürlüğünü yaşayın!

Lüleburgaz'ın hızla değer kazanan ve doğayla iç içe müstakil yaşam fırsatı sunan Hamzabey bölgesinde, onaylı konut imar planı içerisinde yer alan son köşe parsellerden biridir.

Öne Çıkan Ayrıntılar:
- 540 m² müstakil tek tapulu arsa
- 2.5 kat villa/müstakil ev yapımına uygun
- Elektrik, şebeke suyu ve asfalt yol bağlantısı hazır
- Köy merkezine ve ana arterlere çok yakın mesafe
- Lüleburgaz ilçe merkezine yalnızca 8 km (10 dakika) sürüş mesafesinde
- Yatırım için yüksek değer artış potansiyeli ve hemen inşaata başlama imkanı.`,
    interiorFeatures: [],
    exteriorFeatures: [
      "Asfalt Yol Cepheli",
      "Elektrik Hattı Mevcut",
      "Şebeke Suyu Bağlantılı",
      "Çevresinde Yeni Villalar Mevcut",
      "Zemin Etüdü Yapılmış"
    ],
    locationFeatures: [
      "Lüleburgaz Merkeze 8 km",
      "Köy Merkezine Yürüme Mesafesinde",
      "Doğa Manzaralı & Sessiz Sakin Konum",
      "Otogar ve Otoyol Bağlantısına Yakın"
    ],
    consultant: {
      name: "Orkun Tatlıpınar",
      title: "Broker / Kurucu Danışman",
      phone: "+90 537 832 59 39",
      mobile: "+90 541 634 72 76",
      authNo: "3900628"
    }
  },
  {
    id: "1340575507",
    title: "Kocasinan Otogar Mevkii Cadde Üzeri Yatırımlık Kiralık Ticari Dükkan",
    category: "ticari",
    type: "kiralik",
    price: 32000,
    priceFormatted: "32.000 ₺ / Ay",
    currency: "₺",
    city: "Kırklareli",
    district: "Lüleburgaz",
    neighborhood: "Kocasinan Mah.",
    address: "İstiklal Caddesi Üzeri, Otogar Kavşağı Civarı No: 13, Lüleburgaz",
    grossM2: 140,
    netM2: 125,
    roomCount: "Geniş Mağaza + Depo",
    buildingAge: "5 Yaşında",
    floor: "Giriş (Düzayak)",
    totalFloors: "5",
    heating: "Doğalgaz Kombi",
    bathrooms: 1,
    balcony: "Yok",
    elevator: "Var",
    parking: "Önünde Müşteri Otoparkı",
    furnished: "Hayır",
    deedStatus: "Kat Mülkiyetli Ticari",
    creditEligible: true,
    eidsApproved: true,
    featured: true,
    status: "active",
    date: "2026-10-12",
    dateFormatted: "12 Ekim 2026",
    images: [
      "images/ilan-kocasinan-isyeri.jpg",
      "images/ofis-dis-cephe.jpg"
    ],
    description: `Lüleburgaz'ın en hareketli ticari aksı olan İstiklal Caddesi / Otogar mevkisinde, yüksek tabela değerine ve yaya-araç trafiğine sahip düzayak ticari dükkan kiralıktır.

Özellikler:
- 140 m² brüt, 125 m² net kullanım alanı (Giriş kat + arka ofis/depo + WC)
- 8 metre geniş vitrin cephesi
- Kurumsal market, medikal, eczane, showroom, sigorta ofisi, güzellik merkezi veya gıda sektörüne uygun
- Otogar ve çevre yolu bağlantısına sıfır konum.`,
    interiorFeatures: [
      "Sanayi Elektriği Altyapısı",
      "Otomatik Kepenk Sistemi",
      "Mutfak Nişi & Personel WC",
      "Doğalgaz Kombi",
      "LED Aydınlatma Panelleri"
    ],
    exteriorFeatures: [
      "Geniş Vitrin Cephesi (8 m)",
      "Ön Kullanım Alanı (Sundurma)",
      "Müşteri Park Alanı",
      "Alüminyum Doğrama Vitrin"
    ],
    locationFeatures: [
      "Ana Cadde Üzeri",
      "Otogar Mevkii & Yoğun Trafik",
      "Bankalar ve Kurumsal Firmalar Civarı",
      "Toplu Ulaşım Güzergahında"
    ],
    consultant: {
      name: "Orkun Tatlıpınar",
      title: "Broker / Kurucu Danışman",
      phone: "+90 537 832 59 39",
      mobile: "+90 541 634 72 76",
      authNo: "3900628"
    }
  },
  {
    id: "1340575508",
    title: "Babaeski / Trakya Sanayi & Tarım Aksında Yatırımlık 18.500 m² Müstakil Tarla",
    category: "tarla",
    type: "satilik",
    price: 3650000,
    priceFormatted: "3.650.000 ₺",
    currency: "₺",
    city: "Kırklareli",
    district: "Babaeski",
    neighborhood: "Karahalil Yolu",
    address: "Babaeski - Kırklareli Yolu Üzeri, Karahalil Aksı",
    grossM2: 18500,
    netM2: 18500,
    roomCount: "Tarla / Arazi",
    buildingAge: "—",
    floor: "Düz Arazi",
    totalFloors: "—",
    heating: "—",
    bathrooms: 0,
    balcony: "—",
    elevator: "—",
    parking: "Geniş Araç Girişi",
    furnished: "—",
    deedStatus: "Müstakil Parsel (Hisseli Değil)",
    creditEligible: true,
    eidsApproved: true,
    featured: false,
    status: "active",
    date: "2026-10-10",
    dateFormatted: "10 Ekim 2026",
    images: [
      "images/ilan-babaeski-tarla.jpg",
      "images/ilan-hamzabey-arsa.jpg"
    ],
    description: `Trakya'nın hızla değerlenen tarım ve lojistik gelişim bölgesinde, 18.500 m² tek tapulu müstakil tarla.

Öne Çıkanlar:
- Resmi kadastro yolu mevcut, yılın 12 ayı binek araçla ulaşım
- Verimli toprak yapısı (ayçiçeği, buğday, mısır ve meyvecilik için ideal)
- Çiftlik, sera veya agro-turizm projeleri için yüksek uygunluk
- Bölgedeki organize sanayi ve hızlı tren projelerine yakın lokasyon.`,
    interiorFeatures: [],
    exteriorFeatures: [
      "Resmi Kadastro Yolu Mevcut",
      "Düz ve Eğimsiz Taban Arazi",
      "Su Sondajına Uygun Yeraltı Kaynağı"
    ],
    locationFeatures: [
      "Ana Asfalt Yola 400 m",
      "Babaeski İlçe Merkezine 6 km",
      "Lüleburgaz Merkeze 22 km",
      "Hızlı Tren Güzergahına Yakın"
    ],
    consultant: {
      name: "Orkun Tatlıpınar",
      title: "Broker / Kurucu Danışman",
      phone: "+90 537 832 59 39",
      mobile: "+90 541 634 72 76",
      authNo: "3900628"
    }
  },
  {
    id: "1340575509",
    title: "Lüleburgaz İstiklal Mahallesi'nde 2+1 Arakat Sıfır Kiralık Daire",
    category: "konut",
    type: "kiralik",
    price: 18500,
    priceFormatted: "18.500 ₺ / Ay",
    currency: "₺",
    city: "Kırklareli",
    district: "Lüleburgaz",
    neighborhood: "İstiklal Mah.",
    address: "İstiklal Mahallesi, Fatih Cad. Yakını, Lüleburgaz",
    grossM2: 95,
    netM2: 85,
    roomCount: "2+1",
    buildingAge: "0 (Sıfır Bina)",
    floor: "2. Kat (Arakat)",
    totalFloors: "4",
    heating: "Yerden Isıtma (Doğalgaz Kombi)",
    bathrooms: 1,
    balcony: "1 Geniş Balkon",
    elevator: "Var",
    parking: "Açık Otopark",
    furnished: "Hayır",
    deedStatus: "Kat Mülkiyetli",
    creditEligible: true,
    eidsApproved: true,
    featured: false,
    status: "active",
    date: "2026-10-08",
    dateFormatted: "08 Ekim 2026",
    images: [
      "images/ilan-kurtulus-3plus1.jpg",
      "images/ofis-ic-mekan.jpg"
    ],
    description: `İstiklal Mahallesi'nde yeni tamamlanan butik apartmanda, arakat, yerden ısıtmalı ve modern tasarımlı 2+1 sıfır daire kiralıktır.

- 95 m² brüt, 85 m² net
- Asansörlü, açık otoparklı
- Çarşıya, okullara ve toplu ulaşıma yürüme mesafesinde
- İlk oturan siz olun!`,
    interiorFeatures: [
      "Yerden Isıtma",
      "Ankastre Set",
      "Görüntülü Diyafon",
      "Çelik Kapı",
      "Duşakabin",
      "Laminant Parke"
    ],
    exteriorFeatures: [
      "Asansör",
      "Açık Otopark",
      "Mantolama (Isı Yalıtım)",
      "Şifreli Bina Girişi"
    ],
    locationFeatures: [
      "Çarşıya 4 dk",
      "Okullara Yürüme Mesafesinde",
      "Toplu Taşıma Hattı Üzeri"
    ],
    consultant: {
      name: "Orkun Tatlıpınar",
      title: "Broker / Kurucu Danışman",
      phone: "+90 537 832 59 39",
      mobile: "+90 541 634 72 76",
      authNo: "3900628"
    }
  },
  {
    id: "1340575510",
    title: "Lüleburgaz Yıldız Mahallesi'nde Müstakil Bahçeli 4+1 Dubleks Villa",
    category: "villa",
    type: "satilik",
    price: 7850000,
    priceFormatted: "7.850.000 ₺",
    currency: "₺",
    city: "Kırklareli",
    district: "Lüleburgaz",
    neighborhood: "Yıldız Mah.",
    address: "Yıldız Mahallesi Villalar Bölgesi, Lüleburgaz",
    grossM2: 240,
    netM2: 210,
    roomCount: "4+1 Dubleks",
    buildingAge: "1 Yaşında",
    floor: "Müstakil (2 Kat)",
    totalFloors: "2",
    heating: "Yerden Isıtma + Şömine",
    bathrooms: 3,
    balcony: "Geniş Veranda + 2 Teras",
    elevator: "Yok",
    parking: "Özel Kapalı Garaj (2 Araç)",
    furnished: "Kısmi Eşyalı",
    deedStatus: "Kat Mülkiyetli Villa",
    creditEligible: true,
    eidsApproved: true,
    featured: true,
    status: "active",
    date: "2026-10-05",
    dateFormatted: "05 Ekim 2026",
    images: [
      "images/hero-bg.jpg",
      "images/ilan-kurtulus-3plus1.jpg",
      "images/ofis-ic-mekan.jpg"
    ],
    description: `Lüleburgaz'ın seçkin villa yerleşiminde, 450 m² arsa payı içinde 240 m² kullanım alanlı ultra lüks müstakil dubleks villa.

- 4 yatak odası, geniş salon, kış bahçesi, şömine
- Akıllı ev otomasyonu, alarm ve 360 kamera sistemi
- Özel peyzajlı bahçe ve otomatik sulama
- Krediye uygun, sorunsuz tapu teslim.`,
    interiorFeatures: [
      "Akıllı Ev Sistemi",
      "Şömine",
      "Ebeveyn Banyosu & Jakuzi",
      "Giyinme Odası",
      "Kış Bahçesi",
      "Yerden Isıtma",
      "Özel İtalyan Mutfak"
    ],
    exteriorFeatures: [
      "Özel Kapalı Garaj",
      "Peyzajlı Müstakil Bahçe",
      "Otomatik Sulama Sistemi",
      "Güvenlik Kameraları",
      "Taş Kaplama Dış Cephe"
    ],
    locationFeatures: [
      "Nezih Villa Bölgesi",
      "Huzurlu ve Sessiz Muhit",
      "Şehir Merkezine 6 dk"
    ],
    consultant: {
      name: "Orkun Tatlıpınar",
      title: "Broker / Kurucu Danışman",
      phone: "+90 537 832 59 39",
      mobile: "+90 541 634 72 76",
      authNo: "3900628"
    }
  }
];

const APP_CONFIG = {
  brand: "Tatlıpınar Gayrimenkul",
  broker: "Orkun Tatlıpınar",
  licenseNo: "3900628",
  ministry: "T.C. Ticaret Bakanlığı Taşınmaz Ticareti Yetki Belgesi",
  eidsApproved: true,
  phones: {
    primary: "+90 537 832 59 39",
    primaryRaw: "905378325939",
    secondary: "+90 541 634 72 76",
    secondaryRaw: "905416347276"
  },
  address: {
    full: "Otogar Mevkii, Kocasinan Mah., İstiklal Cd. No: 13/A, 39750 Lüleburgaz / Kırklareli",
    short: "İstiklal Cd. No: 13/A, Lüleburgaz / Kırklareli",
    placeId: "ChIJs1UWg2OltBQRpXu-lkXggXs",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2983.844379435676!2d27.351225576579255!3d41.40428797129759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b4a563831655b3%3A0x7b81e04596beefa5!2sTatl%C4%B1p%C4%B1nar%20Gayrimenkul!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
  },
  social: {
    instagram: "https://www.instagram.com/tatlipinargayrimenkul/",
    instagramUsername: "@tatlipinargayrimenkul"
  },
  hours: {
    weekdays: { open: "08:30", close: "19:00", text: "Pazartesi – Cumartesi: 08:30 – 19:00" },
    sunday: { open: "11:00", close: "16:00", text: "Pazar: 11:00 – 16:00" }
  },
  adminPin: "3900628" // Varsayılan yetki belgesi no
};

// LocalStorage Helper
function getStoredListings() {
  const stored = localStorage.getItem("tatlipinar_listings");
  if (!stored) {
    localStorage.setItem("tatlipinar_listings", JSON.stringify(DEFAULT_LISTINGS));
    return DEFAULT_LISTINGS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error parsing stored listings, resetting to default:", e);
    localStorage.setItem("tatlipinar_listings", JSON.stringify(DEFAULT_LISTINGS));
    return DEFAULT_LISTINGS;
  }
}

function saveStoredListings(listings) {
  localStorage.setItem("tatlipinar_listings", JSON.stringify(listings));
}
