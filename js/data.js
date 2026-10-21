/**
 * Tatlıpınar Gayrimenkul — Veri Modeli ve 25 Adet Gerçekçi Portföy Listesi
 * T.C. Ticaret Bakanlığı Taşınmaz Ticareti Yetki Belge No: 3900628 (EİDS Onaylı)
 * 5 Kategori (Konut, Villa, Arsa, Tarla, Ticari) x 5 İlan = Toplam 25 İlan
 */

const DEFAULT_LISTINGS = [
  {
    "id": "1340575501",
    "title": "Lüleburgaz Kurtuluş Mahallesi'nde Lüks 3+1 Sıfır Daire",
    "category": "konut",
    "type": "satilik",
    "price": 4850000,
    "priceFormatted": "4.850.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Kurtuluş Mah.",
    "address": "Kurtuluş Mahallesi, İstasyon Cad. Yakını, Lüleburgaz / Kırklareli",
    "grossM2": 135,
    "netM2": 120,
    "roomCount": "3+1",
    "buildingAge": "0 (Sıfır)",
    "floor": "3. Kat",
    "totalFloors": "5",
    "heating": "Kombi (Doğalgaz)",
    "bathrooms": 2,
    "balcony": "2 Balkon (1 Cam Balkon)",
    "elevator": "Var (Çift Asansör)",
    "parking": "Kapalı ve Açık Otopark",
    "furnished": "Hayır",
    "deedStatus": "Kat Mülkiyetli",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-20",
    "dateFormatted": "20 Ekim 2026",
    "images": [
      "images/ilan-konut-1.jpg",
      "images/ilan-konut-2.jpg",
      "images/ofis-ic-mekan.jpg"
    ],
    "description": "Kurtuluş Mahallesi'nin en nezih ve merkezi noktasında, prestijli site içerisinde yer alan lüks 3+1 sıfır dairemiz satılıktır.\n\nDaire Özellikleri:\n- 135 m² brüt, 120 m² son derece kullanışlı net alan\n- Ebeveyn banyolu geniş yatak odası\n- Lüks ankastre setli ada mutfak konsepti\n- Çift balkon, güney-batı cephe, gün boyu aydınlık ve ferah\n- Birinci sınıf derzli laminant parke, lake kapılar, ithal seramikler\n- Isı ve ses yalıtımlı modern mimari\n- T.C. Ticaret Bakanlığı EİDS onaylı, krediye uygun, hemen tapu devri.",
    "interiorFeatures": [
      "Ankastre Fırın & Ocak",
      "Ebeveyn Banyosu",
      "Görüntülü Diyafon",
      "Çelik Kapı",
      "Klima Altyapısı",
      "Giyinme Odası",
      "Spot & LED Aydınlatma"
    ],
    "exteriorFeatures": [
      "Çift Asansör",
      "Kapalı Otopark",
      "Isı Yalıtımı",
      "Site İçi Güvenlik",
      "Çocuk Oyun Parkı",
      "Jeneratör"
    ],
    "locationFeatures": [
      "Caddeye Yakın",
      "Toplu Taşımaya Yakın",
      "Okul ve Kolej Bölgesi",
      "Sağlık Ocağı & Eczane",
      "Market & AVM"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575502",
    "title": "Zafer Mahallesi Park Cepheli Geniş 2+1 Akıllı Daire",
    "category": "konut",
    "type": "satilik",
    "price": 3450000,
    "priceFormatted": "3.450.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Zafer Mah.",
    "address": "Zafer Mahallesi, Şehit Pilot Üsteğmen Parkı Karşısı, Lüleburgaz",
    "grossM2": 105,
    "netM2": 92,
    "roomCount": "2+1",
    "buildingAge": "1 Yaşında",
    "floor": "2. Kat",
    "totalFloors": "6",
    "heating": "Yerden Isıtma",
    "bathrooms": 1,
    "balcony": "Geniş Park Manzaralı Balkon",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "deedStatus": "Kat Mülkiyetli",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-19",
    "dateFormatted": "19 Ekim 2026",
    "images": [
      "images/ilan-konut-2.jpg",
      "images/ilan-konut-1.jpg"
    ],
    "description": "Zafer Mahallesi'nin kalbinde, geniş yeşil park manzarasına hakim 2+1 akıllı ev konseptli modern daire.\n\nÖne Çıkanlar:\n- 105 m² brüt, ferah ve kullanışlı kat planı\n- Yerden ısıtma konforu ve akıllı oda termostatları\n- Özel tasarım lake mutfak dolapları ve granit tezgah\n- Açık ve kapalı çocuk oyun alanları, nezih aile apartmanı\n- Okullara ve çarşıya yürüme mesafesinde.",
    "interiorFeatures": [
      "Yerden Isıtma",
      "Akıllı Ev Sistemi",
      "Görüntülü Diyafon",
      "Çelik Kapı",
      "Laminant Parke",
      "Duşakabin"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Güvenlik Kamerası",
      "Isı Yalıtımı",
      "Sığınak & Depo"
    ],
    "locationFeatures": [
      "Park Karşısı",
      "Toplu Taşımaya 50m",
      "Zincir Marketler Yanı",
      "Hükümet Konağına Yakın"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575503",
    "title": "İstasyon Caddesi Mevkii Panoramik Teraslı 4+1 Dubleks",
    "category": "konut",
    "type": "satilik",
    "price": 6200000,
    "priceFormatted": "6.200.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Sevgi Mah.",
    "address": "Sevgi Mahallesi, İstasyon Caddesi Paraleli, Lüleburgaz / Kırklareli",
    "grossM2": 195,
    "netM2": 175,
    "roomCount": "4+1",
    "buildingAge": "3 Yaşında",
    "floor": "Çatı Dubleksi (5. Kat)",
    "totalFloors": "5",
    "heating": "Kombi (Doğalgaz)",
    "bathrooms": 2,
    "balcony": "2 Balkon + 35 m² Panoramik Teras",
    "elevator": "Var (10 Kişilik)",
    "parking": "Kapalı Garaj",
    "furnished": "Hayır",
    "deedStatus": "Kat Mülkiyetli",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-18",
    "dateFormatted": "18 Ekim 2026",
    "images": [
      "images/ilan-konut-3.jpg",
      "images/ilan-konut-4.jpg"
    ],
    "description": "Geniş aileler ve ferah yaşam alanlarını sevenler için eşsiz 4+1 teras dubleks.\n\nÖzellikler:\n- 195 m² brüt alan, 35 m² camla kapatılabilir barbekülü özel teras\n- Alt katta ferah salon, mutfak, 2 yatak odası ve banyo\n- Üst katta ebeveyn süiti, giyinme odası, hobi odası ve teras çıkışı\n- Birinci sınıf malzeme kalitesi, tavan yüksekliği 2.90m.",
    "interiorFeatures": [
      "Teras & Barbekü",
      "Ebeveyn Banyosu",
      "Giyinme Odası",
      "Çelik Kapı",
      "Spot Aydınlatma",
      "Hilton Lavabo"
    ],
    "exteriorFeatures": [
      "Geniş Asansör",
      "Kapalı Garaj",
      "Merkezi Uydu Sistemi",
      "Su Deposu"
    ],
    "locationFeatures": [
      "İstasyon Caddesine 100m",
      "Tren Garına Yakın",
      "Semt Pazarına Yürüme",
      "Hastaneye Yakın"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575504",
    "title": "8 Kasım Mahallesi'nde Masrafsız Ön Cephe 3+1 Aile Dairesi",
    "category": "konut",
    "type": "satilik",
    "price": 3950000,
    "priceFormatted": "3.950.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "8 Kasım Mah.",
    "address": "8 Kasım Mahallesi, Eski Sanayi Yolu Yakını, Lüleburgaz",
    "grossM2": 125,
    "netM2": 110,
    "roomCount": "3+1",
    "buildingAge": "4 Yaşında",
    "floor": "1. Kat (Ara Kat)",
    "totalFloors": "4",
    "heating": "Kombi (Doğalgaz)",
    "bathrooms": 1,
    "balcony": "2 Balkon",
    "elevator": "Var",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "deedStatus": "Kat Mülkiyetli",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-17",
    "dateFormatted": "17 Ekim 2026",
    "images": [
      "images/ilan-konut-4.jpg",
      "images/ilan-konut-1.jpg"
    ],
    "description": "8 Kasım Mahallesi'nin sakin ve yerleşik sokaklarında, masrafsız taşınmaya hazır ara kat 3+1.\n\nDetaylar:\n- Ön cephe, sabah ve öğleden sonra tam güneş alan aydınlık odalar\n- Bireysel yoğuşmalı kombi, düşük doğalgaz sarfiyatı\n- Ayrı alaturka tuvalet ve ana banyo\n- Temiz tapu, borçsuz ve hemen devredilebilir durumdadır.",
    "interiorFeatures": [
      "Kombi",
      "Duşakabin",
      "Çelik Kapı",
      "Pimapen Doğrama",
      "Kartonpiyer",
      "Laminant Zemin"
    ],
    "exteriorFeatures": [
      "Asansör",
      "Açık Otopark",
      "Mantolama",
      "Görüntülü Zil"
    ],
    "locationFeatures": [
      "İlkokul ve Ortaokul Yanı",
      "Halk Pazarına Yakın",
      "Otobüs Durağı Kapıda"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575505",
    "title": "Siteler Bölgesi Prestijli Sitede Eşyalı 2+1 Kiralık Daire",
    "category": "konut",
    "type": "kiralik",
    "price": 19500,
    "priceFormatted": "19.500 ₺/ay",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "İnönü Mah.",
    "address": "İnönü Mahallesi, Murat Hüdavendigar Cad. Lüleburgaz",
    "grossM2": 95,
    "netM2": 85,
    "roomCount": "2+1",
    "buildingAge": "2 Yaşında",
    "floor": "4. Kat",
    "totalFloors": "7",
    "heating": "Merkezi (Pay Ölçer)",
    "bathrooms": 1,
    "balcony": "Cam Balkon",
    "elevator": "Var (Çift Asansör)",
    "parking": "Kapalı & Açık Otopark",
    "furnished": "Evet (Tam Eşyalı)",
    "deedStatus": "Kat Mülkiyetli",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-19",
    "dateFormatted": "19 Ekim 2026",
    "images": [
      "images/ilan-konut-5.jpg",
      "images/ilan-konut-2.jpg"
    ],
    "description": "Kurumsal çalışanlar ve aileler için modern mobilyalarla donatılmış, taşınmaya hazır kiralık 2+1.\n\nEşya Donanımı:\n- Sıfır ayarında beyaz eşyalar (Buzdolabı, çamaşır, bulaşık makinesi, TV)\n- L koltuk takımı, yemek masası, çift kişilik bazalı yatak ve gardırop\n- Fiber internet altyapısı hazır, 24 saat güvenlikli site içerisindedir.",
    "interiorFeatures": [
      "Tam Mobilyalı",
      "Beyaz Eşyalı",
      "Cam Balkon",
      "Klima",
      "Görüntülü Diyafon",
      "Fiber İnternet"
    ],
    "exteriorFeatures": [
      "7/24 Güvenlik",
      "Çift Asansör",
      "Kapalı Otopark",
      "Fitness Alanı",
      "Peyzaj Alanı"
    ],
    "locationFeatures": [
      "Ana Cadde Üzeri",
      "Servis Güzergahında",
      "Market & Kafe Yanı"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575506",
    "title": "Burgaz Country Villaları'nda Özel Havuzlu 5+2 Akıllı Malikane",
    "category": "villa",
    "type": "satilik",
    "price": 14500000,
    "priceFormatted": "14.500.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Sakızköy Yolu",
    "address": "Sakızköy Yolu Mevkii, Burgaz Country Villaları, Lüleburgaz",
    "grossM2": 420,
    "netM2": 370,
    "roomCount": "5+2",
    "buildingAge": "0 (Sıfır)",
    "floor": "Triplex",
    "totalFloors": "3",
    "heating": "Yerden Isıtma (Isı Pompası)",
    "bathrooms": 4,
    "balcony": "3 Teras & Havuz Başı Veranda",
    "elevator": "Var (Özel Villa Asansörü)",
    "parking": "2 Araçlık Kapalı Garaj",
    "furnished": "Kısmen",
    "deedStatus": "Kat Mülkiyetli",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-21",
    "dateFormatted": "21 Ekim 2026",
    "images": [
      "images/ilan-villa-1.jpg",
      "images/ilan-villa-2.jpg",
      "images/hero-bg.jpg"
    ],
    "description": "Lüleburgaz'ın en seçkin villa projesinde, 750 m² müstakil bahçe içerisinde özel yüzme havuzlu ultra lüks malikane.\n\nMimari Özellikler:\n- 420 m² brüt kapalı alan, 5 ebeveyn banyolu süit oda\n- 9x4 metre özel tuzlu sistem yüzme havuzu ve güneşlenme terası\n- Isı pompalı yerden ısıtma ve VRF merkezi iklimlendirme\n- Otomatik sulama sistemli botanik peyzaj ve kış bahçesi\n- KNX tam otomasyonlu akıllı ev sistemi ve villa içi cam asansör.",
    "interiorFeatures": [
      "Özel Villa Asansörü",
      "Şömine",
      "Sauna & Jakuzi",
      "Giyinme Odaları",
      "Akıllı Ev Sistemi",
      "Ada Mutfak"
    ],
    "exteriorFeatures": [
      "Özel Yüzme Havuzu",
      "2 Araçlık Kapalı Garaj",
      "Kış Bahçesi",
      "Otomatik Bahçe Sulama",
      "7/24 Güvenlik"
    ],
    "locationFeatures": [
      "Doğa İçinde",
      "TEM Otoyoluna 4 dk",
      "Şehir Merkezine 8 dk",
      "Huzurlu ve İzole Yaşam"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575507",
    "title": "Ahmetbey Yolu Mevkii Özel Bahçeli 4+1 Müstakil Taş Villa",
    "category": "villa",
    "type": "satilik",
    "price": 9800000,
    "priceFormatted": "9.800.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Ahmetbey Yolu",
    "address": "Ahmetbey Yolu Mevkii 3. km, Lüleburgaz / Kırklareli",
    "grossM2": 280,
    "netM2": 240,
    "roomCount": "4+1",
    "buildingAge": "1 Yaşında",
    "floor": "Dubleks",
    "totalFloors": "2",
    "heating": "Şömine & Yerden Isıtma",
    "bathrooms": 3,
    "balcony": "Geniş Taş Veranda & Teras",
    "elevator": "Yok",
    "parking": "Açık Otopark (3 Araç)",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Parsel",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-20",
    "dateFormatted": "20 Ekim 2026",
    "images": [
      "images/ilan-villa-2.jpg",
      "images/ilan-villa-1.jpg"
    ],
    "description": "Geleneksel Trakya taş işçiliği ile çağdaş mimarinin buluştuğu, 600 m² arsa paylı özel dubleks taş villa.\n\nAyrıcalıklar:\n- Doğal taş kaplama dış cephe ve yüksek tavanlı ferah galeri boşluğu\n- Salonun merkezinde fonksiyonel döküm kuzineli şömine\n- Masif ahşap merdivenler ve lake mutfak\n- Bahçede barbekü alanı, artezyen su kuyusu ve meyve ağaçları.",
    "interiorFeatures": [
      "Şömine",
      "Ebeveyn Banyosu",
      "Yerden Isıtma",
      "Ahşap Detaylar",
      "Kiler & Çamaşır Odası"
    ],
    "exteriorFeatures": [
      "Doğal Taş Mimari",
      "Geniş Bahçe",
      "Barbekü Alanı",
      "Su Kuyusu & Depo",
      "Açık Otopark"
    ],
    "locationFeatures": [
      "Müstakil Konum",
      "Ana Yola 150m",
      "Doğa ve Tarla Manzaralı"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575508",
    "title": "Hamzabey Doğa İçinde 1.200 m² Bahçeli 3+1 Çiftlik Evi & Villa",
    "category": "villa",
    "type": "satilik",
    "price": 6750000,
    "priceFormatted": "6.750.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Hamzabey Köyü",
    "address": "Hamzabey Köy İçi Mevkii, Lüleburgaz / Kırklareli",
    "grossM2": 190,
    "netM2": 165,
    "roomCount": "3+1",
    "buildingAge": "2 Yaşında",
    "floor": "Tek Kat Müstakil",
    "totalFloors": "1",
    "heating": "Kombi (Doğalgaz)",
    "bathrooms": 2,
    "balcony": "45 m² Üstü Kapalı Geniş Veranda",
    "elevator": "Yok",
    "parking": "Geniş Bahçe İçi Park Alanı",
    "furnished": "Hayır",
    "deedStatus": "Köy İçi İmarlı Müstakil Tapu",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-18",
    "dateFormatted": "18 Ekim 2026",
    "images": [
      "images/ilan-villa-3.jpg",
      "images/hero-bg.jpg"
    ],
    "description": "Şehrin gürültüsünden uzak, organik bahçe tarımı ve doğayla baş başa yaşam için 1.200 m² arsa içinde tek katlı müstakil taş/ahşap konsept çiftlik evi.\n\nÖne Çıkanlar:\n- 1.200 m² etrafı panel çitle çevrili güvenlikli özel bahçe\n- Otomatik garaj kapısı, 40 adet yetişkin meyve ağacı\n- Tek katlı engelsiz ergonomik mimari, geniş veranda\n- Doğalgaz bağlantısı hazır, kombi sistemi kurulu.",
    "interiorFeatures": [
      "Veranda Çıkışı",
      "Ebeveyn Banyosu",
      "Seramik & Ahşap Zemin",
      "Çelik Kapı",
      "Geniş Salon"
    ],
    "exteriorFeatures": [
      "1200 m² Bahçe",
      "Meyve Bahçesi",
      "Tavuk/Kümes Alanı",
      "Artezyen & Şebeke Suyu"
    ],
    "locationFeatures": [
      "Köy Merkezine Yürüme",
      "Lüleburgaz'a 6 km",
      "Havadar Tepe Konum"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575509",
    "title": "Evrensekiz Prestij Konakları'nda 4+2 Özel Garajlı Lüks Villa",
    "category": "villa",
    "type": "satilik",
    "price": 11900000,
    "priceFormatted": "11.900.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Evrensekiz",
    "address": "Evrensekiz Beldesi, Gölet Yolu Mevkii, Lüleburgaz",
    "grossM2": 350,
    "netM2": 310,
    "roomCount": "4+2",
    "buildingAge": "0 (Sıfır)",
    "floor": "Triplex",
    "totalFloors": "3",
    "heating": "Yerden Isıtma",
    "bathrooms": 3,
    "balcony": "2 Balkon & Çatı Terası",
    "elevator": "Yok",
    "parking": "Kapalı Otopark",
    "furnished": "Hayır",
    "deedStatus": "Kat Mülkiyetli",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-19",
    "dateFormatted": "19 Ekim 2026",
    "images": [
      "images/ilan-villa-4.jpg",
      "images/ilan-villa-2.jpg"
    ],
    "description": "Evrensekiz Göleti yakınında prestijli villa sitesi içinde, 500 m² müstakil bahçeli sıfır triplex villa.\n\nTeknik Detaylar:\n- 350 m² brüt kullanım, 4 yatak odası, 2 salon, sinema/hobi odası\n- Yerden ısıtmalı, akıllı elektrik ve aydınlatma paneli\n- Isı yalıtımlı antrasit alüminyum doğramalar ve konfor camlar\n- Ortak tenis kortu, basketbol sahası ve yürüyüş parkurları.",
    "interiorFeatures": [
      "Hobi/Sinema Odası",
      "Yerden Isıtma",
      "Ebeveyn Banyosu",
      "Giyinme Odası",
      "Çelik Kapı"
    ],
    "exteriorFeatures": [
      "Site İçi Güvenlik",
      "Tenis Kortu",
      "Kapalı Garaj",
      "Peyzaj Düzenlemesi"
    ],
    "locationFeatures": [
      "Gölet Yakını",
      "TEM Otoyol Bağlantısına 5 dk",
      "Tertemiz Orman Havası"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575510",
    "title": "Kırklareli Merkez Dereköy Yolu Doğal Taş Mimari 3+1 Köy Villası",
    "category": "villa",
    "type": "satilik",
    "price": 4650000,
    "priceFormatted": "4.650.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Kırklareli",
    "neighborhood": "Dereköy Yolu",
    "address": "Dereköy Yolu 8. km, Kırklareli Merkez",
    "grossM2": 155,
    "netM2": 135,
    "roomCount": "3+1",
    "buildingAge": "3 Yaşında",
    "floor": "Dubleks",
    "totalFloors": "2",
    "heating": "Kat Kaloriferi & Şömine",
    "bathrooms": 2,
    "balcony": "Balkon & Bahçe Verandası",
    "elevator": "Yok",
    "parking": "Açık Otopark",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Parsel",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-16",
    "dateFormatted": "16 Ekim 2026",
    "images": [
      "images/ilan-villa-5.jpg",
      "images/ilan-villa-3.jpg"
    ],
    "description": "Istranca ormanlarının eteklerinde, temiz dağ havası ve huzurlu köy atmosferinde taş kaplamalı müstakil ev.\n\nÖzellikler:\n- 450 m² müstakil bahçe içerisinde 155 m² dubleks kullanım\n- Otantik şömine, katı yakıtlı kat kaloriferi altyapısı\n- Geniş bahçesinde barbekü, kamelya ve otopark alanı\n- Hafta sonu kaçamağı veya emeklilik için ideal yaşam alanı.",
    "interiorFeatures": [
      "Şömine",
      "Ahşap Tavan",
      "Laminant Parke",
      "Seramik Islak Zeminler"
    ],
    "exteriorFeatures": [
      "Doğal Taş Bahçe Duvarı",
      "Kamelya",
      "Barbekü",
      "Otopark"
    ],
    "locationFeatures": [
      "Istranca Etekleri",
      "Orman Manzarası",
      "Kırklareli Merkeze 10 dk"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575511",
    "title": "Hamzabey Gelişim Bölgesinde 650 m² %40 2.5 Kat Konut İmarı",
    "category": "arsa",
    "type": "satilik",
    "price": 2650000,
    "priceFormatted": "2.650.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Hamzabey Mah.",
    "address": "Hamzabey Yeni İmar Sahası, 248 Ada 12 Parsel, Lüleburgaz",
    "grossM2": 650,
    "netM2": 650,
    "roomCount": "Konut İmarı",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "2.5 Kat İzinli (%40 İmar)",
    "heating": "Doğalgaz & Elektrik Altyapısı",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Parsel (Tek Tapu)",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-21",
    "dateFormatted": "21 Ekim 2026",
    "images": [
      "images/ilan-arsa-1.jpg",
      "images/ilan-hamzabey-arsa.jpg"
    ],
    "description": "Lüleburgaz'ın en hızlı prim yapan ve yapılaşan Hamzabey Gelişim Bölgesi'nde, müstakil villa ya da dubleks konut inşasına hemen uygun köşe parsel.\n\nİmar & Konum Özellikleri:\n- 650 m² müstakil tapulu arsa\n- Emsal: %40 taban oturumu, 2.5 kat yapılaşma izni\n- Elektrik, su, doğalgaz ve kanalizasyon gibi tüm altyapılar parselin önünde\n- Hızlı tren güzergahına ve yeni çevre yoluna yakın, yüksek yatırım potansiyeli.",
    "interiorFeatures": [
      "Müstakil Tek Tapu",
      "Hemen İnşaata Hazır",
      "Sorunsuz İmar"
    ],
    "exteriorFeatures": [
      "Köşe Parsel",
      "Geniş Cephe (24m)",
      "Kadastro Yolu Açık"
    ],
    "locationFeatures": [
      "Hızlı Tren Hattına Yakın",
      "Yeni Çevre Yolu Aksında",
      "Villa Siteleri Komşusu"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575512",
    "title": "Kurtuluş Çevre Yolu Cepheli 1.150 m² Ticari + Konut İmarlı Arsa",
    "category": "arsa",
    "type": "satilik",
    "price": 6400000,
    "priceFormatted": "6.400.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Kurtuluş Mah.",
    "address": "Kurtuluş Çevre Yolu Bağlantı Aksı, Lüleburgaz / Kırklareli",
    "grossM2": 1150,
    "netM2": 1150,
    "roomCount": "Ticari + Konut",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "4 Kat İzinli (TAKS 0.35, KAKS 1.40)",
    "heating": "Tüm Altyapı Kapıda",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Parsel",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-19",
    "dateFormatted": "19 Ekim 2026",
    "images": [
      "images/ilan-arsa-2.jpg",
      "images/ilan-arsa-1.jpg"
    ],
    "description": "Kurtuluş Mahallesi'nin genişleyen ana arterinde, altı dükkan üstü lüks konut projesi yapımına uygun eşsiz köşe başı arsa.\n\nDetaylar:\n- 1.150 m² düz zemin, inşaat maliyetini düşüren sağlam zemin yapısı\n- 4 kat imarlı, alt katlar ticari dükkan olarak projelendirilebilir\n- Yüksek araç ve tabela görünürlüğü\n- Müteahhitler ve kurumsal yatırımcılar için kaçırılmayacak fırsat.",
    "interiorFeatures": [
      "Ticari + Konut Fonksiyonu",
      "Yüksek KAKS Oranı",
      "Müstakil Parsel"
    ],
    "exteriorFeatures": [
      "Çevre Yoluna 35m Cephe",
      "Köşe Başı",
      "Düz Zemin"
    ],
    "locationFeatures": [
      "Ana Cadde Üzeri",
      "Otogar Bağlantısına Yakın",
      "Gelişen Ticari Aks"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575513",
    "title": "Kocasinan Mahallesi Köşe Başında 480 m² Kat Karşılığına Uygun Arsa",
    "category": "arsa",
    "type": "satilik",
    "price": 3350000,
    "priceFormatted": "3.350.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Kocasinan Mah.",
    "address": "Kocasinan Mahallesi, Okullar Bölgesi Yakını, Lüleburgaz",
    "grossM2": 480,
    "netM2": 480,
    "roomCount": "Konut İmarı",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "3 Kat İzinli",
    "heating": "Şehir Şebekesi Hazır",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Kat İttifakına Hazır Tek Tapu",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-18",
    "dateFormatted": "18 Ekim 2026",
    "images": [
      "images/ilan-arsa-3.jpg",
      "images/ilan-arsa-2.jpg"
    ],
    "description": "Kocasinan Mahallesi'nde yerleşik konut dokusunun içinde, hemen apartman inşaatına başlanabilecek 480 m² köşe arsa.\n\nÖzellikler:\n- 3 kat imar hakkı ile 6 adet 2+1 veya 3+1 daire üretilebilecek potansiyel\n- İki sokağa cepheli köşe parsel konumu sayesinde tüm daireler aydınlık ve ön cepheli olacaktır\n- Kat karşılığı veya doğrudan nakit alıma uygundur.",
    "interiorFeatures": [
      "Konut Alanı",
      "Hemen Ruhsat Alınabilir"
    ],
    "exteriorFeatures": [
      "Çift Cephe Köşe",
      "Asfalt Yol Cepheli"
    ],
    "locationFeatures": [
      "Çarşı Merkezine 500m",
      "Okul Karşısı",
      "Sessiz ve Güvenli Sokak"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575514",
    "title": "Büyükkarıştıran Sanayi Aksında 2.200 m² Küçük Sanayi İmarlı Arsa",
    "category": "arsa",
    "type": "satilik",
    "price": 8800000,
    "priceFormatted": "8.800.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Büyükkarıştıran",
    "address": "Büyükkarıştıran OSB Yanı, Lüleburgaz / Kırklareli",
    "grossM2": 2200,
    "netM2": 2200,
    "roomCount": "Küçük Sanayi & Depolama",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "Hmax: 9.50 m (Emsal: 0.60)",
    "heating": "Yüksek Gerilim Trafo Yakını",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Sanayi İmarlı Tek Tapu",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-17",
    "dateFormatted": "17 Ekim 2026",
    "images": [
      "images/ilan-arsa-4.jpg",
      "images/ilan-arsa-1.jpg"
    ],
    "description": "Büyükkarıştıran Organize Sanayi Bölgesi girişinde, imalat atölyesi, lojistik depo veya fabrika binası yapımına uygun 2.200 m² sanayi arsası.\n\nAyrıcalıklar:\n- Hmax: 9.50 metre, vinç montajına uygun tavan yüksekliği\n- Tır ve ağır tonajlı araç giriş çıkışına müsait geniş asfalt yol cephesi\n- Yüksek enerji kapasitesi ve su altyapısı hazır.",
    "interiorFeatures": [
      "Sanayi İmarı",
      "Depolama ve Üretim İzni"
    ],
    "exteriorFeatures": [
      "Tır Girişine Uygun",
      "Geniş Ön Cephe",
      "Düz Topografya"
    ],
    "locationFeatures": [
      "E-5 Karayoluna 800m",
      "OSB Yanı",
      "Lojistik Merkezinde"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575515",
    "title": "Kırıkköy Girişinde Doğa Manzaralı 780 m² Müstakil Villa Parseli",
    "category": "arsa",
    "type": "satilik",
    "price": 1980000,
    "priceFormatted": "1.980.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Kırıkköy",
    "address": "Kırıkköy Girişi, Tepe Mevkii, Lüleburgaz",
    "grossM2": 780,
    "netM2": 780,
    "roomCount": "Villa İmarlı",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "2 Kat İzinli (%30)",
    "heating": "Elektrik ve Su Hattı Mevcut",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Parsel",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-15",
    "dateFormatted": "15 Ekim 2026",
    "images": [
      "images/ilan-arsa-5.jpg",
      "images/ilan-arsa-3.jpg"
    ],
    "description": "Kırıkköy'ün havadar ve manzaralı tepe noktasında, huzurlu bir bahçeli villa inşa etmek isteyenler için 780 m² müstakil tapulu arsa.\n\nÖzellikler:\n- %30 taban oturumu, 2 kat villa yapımına izinli\n- Doğa ve gün batımı manzarası kesinlikle kapanmaz konumda\n- Köy merkezine 2 dakika, Lüleburgaz'a sadece 10 dakika sürüş mesafesinde.",
    "interiorFeatures": [
      "Konut İmarı",
      "Müstakil Tapu"
    ],
    "exteriorFeatures": [
      "Kapanmaz Doğa Manzarası",
      "Elektrik & Su Hazır"
    ],
    "locationFeatures": [
      "Köy Girişinde",
      "Ulaşımı Kolay Asfalt Yol"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575516",
    "title": "Babaeski D-100 Karayolu Cepheli 15.400 m² Yatırımlık Düz Tarla",
    "category": "tarla",
    "type": "satilik",
    "price": 4150000,
    "priceFormatted": "4.150.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Babaeski",
    "neighborhood": "Nadırlı Köyü",
    "address": "D-100 Karayolu Nadırlı Mevkii, Babaeski / Kırklareli",
    "grossM2": 15400,
    "netM2": 15400,
    "roomCount": "Müstakil Tarla",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "-",
    "heating": "-",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Tapu (Tek Kişi)",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-21",
    "dateFormatted": "21 Ekim 2026",
    "images": [
      "images/ilan-tarla-1.jpg",
      "images/ilan-babaeski-tarla.jpg"
    ],
    "description": "Babaeski - Lüleburgaz aksında, D-100 ana karayoluna 110 metre geniş cepheli 15.400 m² (15.4 Dönüm) değer kazanan tarla.\n\nYatırım Avantajları:\n- Dümdüz zemin yapısı, taşsız ve 1. sınıf verimli tarım toprağı\n- Ana yola cephesi sayesinde tarımsal tesis, depolama, akaryakıt istasyonu veya çiftlik projelerine uygunluk\n- Kadastro yolu resmi olarak açık, sulama imkanları yakın\n- Hisseli değil, tek imza hemen satışa hazır durumdadır.",
    "interiorFeatures": [
      "Müstakil Parsel",
      "Hisse/İpotek Yok"
    ],
    "exteriorFeatures": [
      "D-100 Karayolu Cepheli",
      "110 Metre Cephe",
      "Düz Topografya"
    ],
    "locationFeatures": [
      "Babaeski'ye 5 km",
      "Lüleburgaz'a 14 km",
      "Ulaşım Ağı Üzerinde"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575517",
    "title": "Lüleburgaz Eskitaşlı Mevkii Sulak Alanda 24.000 m² Verimli Tarım Arazisi",
    "category": "tarla",
    "type": "satilik",
    "price": 4900000,
    "priceFormatted": "4.900.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Eskitaşlı Köyü",
    "address": "Eskitaşlı Ovası, Dere Yolu Mevkii, Lüleburgaz",
    "grossM2": 24000,
    "netM2": 24000,
    "roomCount": "Sulu Tarım Arazisi",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "-",
    "heating": "Yeraltı Sondaj Suyu",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Tek Tapu Müstakil",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-19",
    "dateFormatted": "19 Ekim 2026",
    "images": [
      "images/ilan-tarla-2.jpg",
      "images/ilan-tarla-1.jpg"
    ],
    "description": "Trakya'nın en yüksek mahsul verimine sahip Eskitaşlı Ovası'nda, mısır, ayçiçeği, buğday ve şeker pancarı tarımına son derece elverişli 24 dönüm arazi.\n\nÖzellikler:\n- Sulama kanalına ve yerel dereye sınır, sınırsız sulama imkanı\n- Taban suyu yüksek, kuraklık riskinden uzak zengin alüvyon toprak\n- Yıllık yüksek kira ve ürün getirisi potansiyeli.",
    "interiorFeatures": [
      "Sulu Tarım İmkanı",
      "Müstakil Tapu"
    ],
    "exteriorFeatures": [
      "Dere Boyu",
      "Kadastro Yolu Mevcut",
      "Düz Taban Arazi"
    ],
    "locationFeatures": [
      "Lüleburgaz Merkeze 7 km",
      "Traktör ve Biçerdöver Ulaşımı Kolay"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575518",
    "title": "Pınarhisar Yolu Üzerinde 32.500 m² Güneş Enerjisi Santraline (GES) Uygun Arazi",
    "category": "tarla",
    "type": "satilik",
    "price": 8250000,
    "priceFormatted": "8.250.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Pınarhisar",
    "neighborhood": "Ceylanköy",
    "address": "Ceylanköy Yolu Mevkii, Pınarhisar / Kırklareli",
    "grossM2": 32500,
    "netM2": 32500,
    "roomCount": "Yatırımlık Arazi",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "-",
    "heating": "Trafo Yakını",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Parsel",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-18",
    "dateFormatted": "18 Ekim 2026",
    "images": [
      "images/ilan-tarla-3.jpg",
      "images/ilan-tarla-2.jpg"
    ],
    "description": "Pınarhisar ana yolu yakınında, güney eğimli ve gün boyu doğrudan güneş ışınımı alan, GES (Güneş Enerji Santrali) ve lisanssız elektrik üretimine son derece elverişli 32.5 Dönüm arazi.\n\nAvantajlar:\n- Orta gerilim enerji nakil hattına ve trafo merkezine yakın mesafe\n- Hafif güney eğimli ideal topografya\n- Marjinal tarım arazisi statüsüne uygunluk başvurusu yapılabilir\n- Büyük ölçekli kurumsal enerji ve sanayi yatırımları için idealdir.",
    "interiorFeatures": [
      "GES Uygunluk Potansiyeli",
      "Geniş Parsel"
    ],
    "exteriorFeatures": [
      "Güney Eğimli Zemin",
      "Resmi Kadastro Yolu",
      "Trafo Hattı Yakını"
    ],
    "locationFeatures": [
      "Pınarhisar'a 6 km",
      "Ana Karayoluna 400m"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575519",
    "title": "Ahmetbey Ovasında Kadastro Yolu Olan 19.800 m² Ekili Buğday Tarlası",
    "category": "tarla",
    "type": "satilik",
    "price": 3250000,
    "priceFormatted": "3.250.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Ahmetbey Ovası",
    "address": "Ahmetbey Beldesi, Kavacık Mevkii, Lüleburgaz",
    "grossM2": 19800,
    "netM2": 19800,
    "roomCount": "Ekili Tarla",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "-",
    "heating": "-",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Parsel",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-17",
    "dateFormatted": "17 Ekim 2026",
    "images": [
      "images/ilan-tarla-4.jpg",
      "images/ilan-tarla-1.jpg"
    ],
    "description": "Ahmetbey Ovası'nın merkezinde, dört mevsim binek araçla dahi ulaşılabilecek nitelikte kadastro yoluna sahip 19.8 dönüm ekilebilir tarla.\n\nÖzellikler:\n- Taşsız, humuslu koyu renk verimli Trakya toprağı\n- Ayçiçeği, buğday ve kanola rotasyonuna uygun\n- Komşu parsellerde faal çiftlikler ve tarımsal elektrik bulunmaktadır.",
    "interiorFeatures": [
      "Verimli Toprak",
      "Müstakil Tapu"
    ],
    "exteriorFeatures": [
      "Kadastro Yolu Açık",
      "Düzlük Arazi"
    ],
    "locationFeatures": [
      "Ahmetbey'e 3 km",
      "Lüleburgaz'a 12 km"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575520",
    "title": "Vize Kıyıköy Aksında 13.500 m² Orman Bitişiği Eko-Turizme Uygun Doğa Arazisi",
    "category": "tarla",
    "type": "satilik",
    "price": 3750000,
    "priceFormatted": "3.750.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Vize",
    "neighborhood": "Kışlacık Köyü",
    "address": "Kışlacık Köyü Mevkii, Vize / Kırklareli",
    "grossM2": 13500,
    "netM2": 13500,
    "roomCount": "Doğa Arazisi",
    "buildingAge": "-",
    "floor": "-",
    "totalFloors": "-",
    "heating": "Doğal Kaynak Suyu",
    "bathrooms": 0,
    "balcony": "-",
    "elevator": "-",
    "parking": "-",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Tapu",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-16",
    "dateFormatted": "16 Ekim 2026",
    "images": [
      "images/ilan-tarla-5.jpg",
      "images/ilan-tarla-3.jpg"
    ],
    "description": "Istranca meşe ve gürgen ormanlarına sınır, parsel içerisinden doğal tatlı su kaynağı geçen doğa harikası 13.5 dönüm arazi.\n\nPotansiyel:\n- Bungalov köyü, glamping, arıcılık veya ceviz/fındık bahçesi kurulumuna çok uygun\n- Oksijen deposu, doğayla baş başa izole yaşam arayanlar için emsalsiz fırsat.",
    "interiorFeatures": [
      "Eko-Turizme Uygun",
      "Temiz Tapu"
    ],
    "exteriorFeatures": [
      "Orman Sınırı",
      "Kaynak Suyu Mevcut",
      "Manzaralı"
    ],
    "locationFeatures": [
      "Vize Merkeze 8 km",
      "Kıyıköy Plajına 22 km",
      "İstanbul'a 1.5 Saat"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575521",
    "title": "Kocasinan Mahallesi Otogar Karşısı 190 m² Kurumsal Kiracılı Satılık Dükkan",
    "category": "ticari",
    "type": "satilik",
    "price": 8950000,
    "priceFormatted": "8.950.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Kocasinan Mah.",
    "address": "Kocasinan Mahallesi, İstiklal Caddesi Otogar Karşısı, Lüleburgaz",
    "grossM2": 190,
    "netM2": 175,
    "roomCount": "Geniş Cephe Dükkan",
    "buildingAge": "2 Yaşında",
    "floor": "Düz Giriş",
    "totalFloors": "4 Katlı Bina Altı",
    "heating": "Merkezi / VRF",
    "bathrooms": 1,
    "balcony": "-",
    "elevator": "Var",
    "parking": "Önü Açık Müşteri Otoparkı",
    "furnished": "Hayır",
    "deedStatus": "Ticari Kat Mülkiyetli",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-21",
    "dateFormatted": "21 Ekim 2026",
    "images": [
      "images/ilan-ticari-1.jpg",
      "images/ilan-kocasinan-isyeri.jpg"
    ],
    "description": "Lüleburgaz Şehirlerarası Otobüs Terminali karşısında, İstiklal Caddesi'nin en yüksek yaya ve araç sirkülasyonuna sahip noktasında kurumsal kiracılı ticari mülk.\n\nÖzellikler:\n- 190 m² brüt, 175 m² düz ayak net kullanım alanı, 11 metre cam vitrin cephesi\n- Halihazırda 5 yıllık kontratlı ulusal zincir market kiracılı\n- Düzenli ve yüksek kira getirisi, amortisman süresi cazip\n- Tavan yüksekliği: 3.80 m, her türlü kurumsal sektöre uygun altyapı.",
    "interiorFeatures": [
      "Geniş Vitrin",
      "Yüksek Tavan (3.80m)",
      "WC & Mutfak Nişi",
      "Otomatik Kepenk",
      "Sanayi Elektriği"
    ],
    "exteriorFeatures": [
      "Geniş Kaldırım Payı",
      "Müşteri Otoparkı",
      "Tabela Görünürlüğü"
    ],
    "locationFeatures": [
      "Otogar Karşısı",
      "İstiklal Caddesi Üzeri",
      "Merkezi Lokasyon"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575522",
    "title": "İstiklal Caddesi Yaya Trafiğinde 95 m² Köşe Başı Kiralık Mağaza",
    "category": "ticari",
    "type": "kiralik",
    "price": 42000,
    "priceFormatted": "42.000 ₺/ay",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Dere Mah.",
    "address": "İstiklal Caddesi Çarşı İçi, Dere Mahallesi, Lüleburgaz",
    "grossM2": 95,
    "netM2": 88,
    "roomCount": "Vitrinli Mağaza",
    "buildingAge": "5 Yaşında",
    "floor": "Zemin Kat",
    "totalFloors": "5 Katlı",
    "heating": "İnverter Klima & Doğalgaz",
    "bathrooms": 1,
    "balcony": "-",
    "elevator": "-",
    "parking": "Cadde Üzeri",
    "furnished": "Hayır",
    "deedStatus": "Ticari Tapulu",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-20",
    "dateFormatted": "20 Ekim 2026",
    "images": [
      "images/ilan-ticari-2.jpg",
      "images/ilan-ticari-1.jpg"
    ],
    "description": "Lüleburgaz çarşısının en hareketli yaya trafiğine sahip İstiklal Caddesi üzerinde köşe başı konumlu kiralık mağaza.\n\nAyrıcalıklar:\n- Çift cepheli köşe cam vitrin sayesinde olağanüstü reklam ve marka görünürlüğü\n- Butik, eczane, medikal, optik, teknoloji mağazası veya kuyumcu için ideal\n- Baca çıkışı ve doğalgaz bağlantısı mevcuttur.",
    "interiorFeatures": [
      "Çift Cephe Vitrin",
      "Klima",
      "Granit Zemin",
      "Alarm ve Güvenlik Altyapısı"
    ],
    "exteriorFeatures": [
      "Yoğun Yaya Trafiği",
      "Köşe Başı Konum",
      "Spot Tabela Alanı"
    ],
    "locationFeatures": [
      "Çarşı Göbeği",
      "Bankalar ve Mağazalar Sırası"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575523",
    "title": "Lüleburgaz Yeni Sanayi Sitesi'nde 260 m² Vinç Altyapılı Satılık Atölye",
    "category": "ticari",
    "type": "satilik",
    "price": 5650000,
    "priceFormatted": "5.650.000 ₺",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Sanayi Mah.",
    "address": "Yeni Sanayi Sitesi 14. Blok No: 28, Lüleburgaz",
    "grossM2": 260,
    "netM2": 245,
    "roomCount": "Sanayi Dükkanı",
    "buildingAge": "4 Yaşında",
    "floor": "Zemin + Asma Kat",
    "totalFloors": "2 Katlı",
    "heating": "Sanayi Tipi Isıtma Altyapısı",
    "bathrooms": 1,
    "balcony": "-",
    "elevator": "-",
    "parking": "Özel Ön Sundurma & Otopark",
    "furnished": "Hayır",
    "deedStatus": "Kat Mülkiyetli Sanayi Tapusu",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": false,
    "status": "active",
    "date": "2026-10-19",
    "dateFormatted": "19 Ekim 2026",
    "images": [
      "images/ilan-ticari-3.jpg",
      "images/ilan-ticari-2.jpg"
    ],
    "description": "Yeni Sanayi Sitesi'nin ana giriş caddesinde, 5 tonluk gezer köprülü vinç montajına uygun tavan yüksekliğine sahip 260 m² satılık atölye/iş yeri.\n\nÖzellikler:\n- 180 m² zemin çalışma alanı + 65 m² idari ofis ve mutfak asma katı\n- 80 kW sanayi elektriği tahsisli\n- 5.50 metre tır girişine uygun otomatik seksiyonel kapı\n- Metal işleri, otomotiv, torna, talaşlı imalat veya depolama için kusursuz.",
    "interiorFeatures": [
      "Vinç Kirişleri Hazır",
      "İdari Ofis Bölümü",
      "Sanayi Elektriği (80 kW)",
      "Epoksi Zemin"
    ],
    "exteriorFeatures": [
      "Seksiyonel Kapı",
      "Ön Sundurma",
      "Geniş Sokak Payı"
    ],
    "locationFeatures": [
      "Sanayi Ana Girişinde",
      "D-100 Bağlantısına 2 dk"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575524",
    "title": "Fatih Caddesi Üzerinde 3 Katlı 340 m² Komple Kiralık Ticari Plaza Binası",
    "category": "ticari",
    "type": "kiralik",
    "price": 68000,
    "priceFormatted": "68.000 ₺/ay",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Siteler Mah.",
    "address": "Fatih Caddesi Üzeri No: 42, Lüleburgaz / Kırklareli",
    "grossM2": 340,
    "netM2": 310,
    "roomCount": "Komple Müstakil Bina",
    "buildingAge": "1 Yaşında",
    "floor": "3 Kat Komple",
    "totalFloors": "3 Katlı",
    "heating": "VRF İklimlendirme & Kombi",
    "bathrooms": 3,
    "balcony": "Çatı Terası",
    "elevator": "Var (Müstakil Asansörlü)",
    "parking": "Bina Önü ve Arkası Otopark",
    "furnished": "Hayır",
    "deedStatus": "Müstakil Ticari",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-18",
    "dateFormatted": "18 Ekim 2026",
    "images": [
      "images/ilan-ticari-4.jpg",
      "images/ilan-ticari-1.jpg"
    ],
    "description": "Fatih Caddesi üzerinde kurumsal genel müdürlük, poliklinik, tıp merkezi, dershane, yazılım ofisi veya banka şubesine uygun sıfır müstakil plaza binası.\n\nDonanım:\n- 3 katlı, her katta bağımsız WC ve mutfak altyapısı\n- Bina içi hidrolik modern asansör\n- Bağımsız jeneratör ve yangın merdiveni altyapısı\n- Kurumsal giydirme cephe ve cam balkonlu toplantı odaları.",
    "interiorFeatures": [
      "Müstakil Asansör",
      "VRF Klima Tesisatı",
      "Yangın Sensörleri",
      "Her Katta WC & Mutfak"
    ],
    "exteriorFeatures": [
      "Komple Bina",
      "Giydirme Cam Cephe",
      "Özel Otopark Alanı",
      "Jeneratör Yeri"
    ],
    "locationFeatures": [
      "Fatih Caddesi Üzeri",
      "Trafik Akışı Yüksek",
      "Prestijli Ticari Konum"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
    }
  },
  {
    "id": "1340575525",
    "title": "E-5 Karayolu Cepheli 1.400 m² Kapalı Alanlı Lojistik Depo & Antrepo",
    "category": "ticari",
    "type": "kiralik",
    "price": 98000,
    "priceFormatted": "98.000 ₺/ay",
    "currency": "₺",
    "city": "Kırklareli",
    "district": "Lüleburgaz",
    "neighborhood": "Büyükkarıştıran",
    "address": "E-5 Karayolu Üzeri, Büyükkarıştıran Mevkii, Lüleburgaz",
    "grossM2": 1400,
    "netM2": 1350,
    "roomCount": "Depo & Sundurma",
    "buildingAge": "3 Yaşında",
    "floor": "Düz Giriş",
    "totalFloors": "Hmax: 8.50 m",
    "heating": "Sanayi Isıtması",
    "bathrooms": 2,
    "balcony": "-",
    "elevator": "-",
    "parking": "Geniş Tır Manevra Sahası",
    "furnished": "Hayır",
    "deedStatus": "Lojistik Depolama Alanı",
    "creditEligible": true,
    "eidsApproved": true,
    "featured": true,
    "status": "active",
    "date": "2026-10-17",
    "dateFormatted": "17 Ekim 2026",
    "images": [
      "images/ilan-ticari-5.jpg",
      "images/ilan-ticari-4.jpg"
    ],
    "description": "İstanbul - Edirne E-5 karayolu üzerinde, tır yanaşma rampalı ve 8.50 metre tavan yüksekliğine sahip A sınıfı lojistik depolama tesisi.\n\nTesis Özellikleri:\n- 1.400 m² kolon aralıkları geniş kapalı alan + 800 m² betonarme tır manevra sahası\n- 2 adet hidrolik seviye ayarlayıcı yükleme rampası\n- Helikopter perdahlı ağır yük zemin betonu (tonaj garantili)\n- Sprinkler yangın söndürme sistemi ve 24 saat güvenlik kulübesi.",
    "interiorFeatures": [
      "8.50m Net Tavan",
      "Yükleme Rampaları",
      "Yangın Sprinkler",
      "Yüksek Tonaj Zemin"
    ],
    "exteriorFeatures": [
      "Tır Manevra Alanı",
      "Güvenlik Kulübesi",
      "Çevre Aydınlatma",
      "Tel Örgü Çit"
    ],
    "locationFeatures": [
      "E-5 Karayoluna Sıfır",
      "TEM Gişelerine 6 km",
      "Trakya Lojistik Omurgasında"
    ],
    "consultant": {
      "name": "Orkun Tatlıpınar",
      "title": "Sorumlu Emlak Danışmanı",
      "phone": "+90 537 832 59 39",
      "mobile": "+90 541 634 72 76",
      "authNo": "3900628"
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

// Veri Sürümü: Tarayıcı önbelleğindeki eski ilanları otomatik günceller
const LISTINGS_DATA_VERSION = "2.5.0";

// LocalStorage Helper
function getStoredListings() {
  const storedVer = localStorage.getItem("tatlipinar_listings_ver");
  const stored = localStorage.getItem("tatlipinar_listings");
  
  // Eğer eski sürüm varsa veya veri yoksa, 25 ilanlık yeni portföyü yükle
  if (!stored || storedVer !== LISTINGS_DATA_VERSION) {
    localStorage.setItem("tatlipinar_listings", JSON.stringify(DEFAULT_LISTINGS));
    localStorage.setItem("tatlipinar_listings_ver", LISTINGS_DATA_VERSION);
    return DEFAULT_LISTINGS;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Error parsing stored listings, resetting to default:", e);
    localStorage.setItem("tatlipinar_listings", JSON.stringify(DEFAULT_LISTINGS));
    localStorage.setItem("tatlipinar_listings_ver", LISTINGS_DATA_VERSION);
    return DEFAULT_LISTINGS;
  }
}

function saveStoredListings(listings) {
  localStorage.setItem("tatlipinar_listings", JSON.stringify(listings));
}
