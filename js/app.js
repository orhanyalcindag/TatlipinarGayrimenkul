/**
 * Tatlıpınar Gayrimenkul — Ana Uygulama Mantığı (UX, Vitrin, Detay Modalı, Filtreleme)
 */

const App = {
  activeTab: "all",
  activeSort: "featured",
  activeModalListing: null,
  activeCarouselIndex: 0,

  init() {
    this.renderListings();
    this.updateStatsCounter();
    this.setupWorkingHours();
    this.bindEvents();
    this.initHeroSearch();

    // Yönetici panelini başlat
    if (window.AdminPanel) {
      window.AdminPanel.init();
    }

    // URL hash'i #admin ise otomatik olarak /admin sayfasına yönlendir
    if (window.location.hash === '#admin') {
      window.location.href = 'admin';
    }
  },

  // Çalışma saatleri canlı göstergesi (Lüleburgaz Saati)
  setupWorkingHours() {
    const badgeElements = document.querySelectorAll(".live-hours-badge");
    if (!badgeElements.length) return;

    const now = new Date();
    const day = now.getDay(); // 0: Pazar, 1-6: Pzt-Cmt
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTime = hours + minutes / 60;

    let isOpen = false;
    let closingText = "";

    if (day === 0) {
      // Pazar 11:00 - 16:00
      if (currentTime >= 11.0 && currentTime < 16.0) {
        isOpen = true;
        closingText = "Bugün 16:00'ya kadar açığız";
      } else {
        closingText = "Pazartesi 08:30'da açılacak";
      }
    } else {
      // Pzt - Cmt 08:30 - 19:00
      if (currentTime >= 8.5 && currentTime < 19.0) {
        isOpen = true;
        closingText = "Bugün 19:00'a kadar açığız";
      } else {
        closingText = day === 6 ? "Yarın 11:00'de açılacak" : "Yarın 08:30'da açılacak";
      }
    }

    badgeElements.forEach(el => {
      el.innerHTML = `
        <span class="status-dot ${isOpen ? 'is-open' : 'is-closed'}"></span>
        <span class="status-text">${isOpen ? 'Şu An Açık' : 'Şu An Kapalı'}</span>
        <span class="status-sub">(${closingText})</span>
      `;
    });
  },

  // İlanları listele
  renderListings() {
    const container = document.getElementById("listingsGrid");
    if (!container) return;

    let listings = getStoredListings().filter(l => l.status === "active");

    // Tab filtresi
    if (this.activeTab === "satilik") {
      listings = listings.filter(l => l.type === "satilik" && (l.category === "konut" || l.category === "villa"));
    } else if (this.activeTab === "kiralik") {
      listings = listings.filter(l => l.type === "kiralik");
    } else if (this.activeTab === "arsa") {
      listings = listings.filter(l => l.category === "arsa" || l.category === "tarla");
    } else if (this.activeTab === "ticari") {
      listings = listings.filter(l => l.category === "ticari");
    }

    // Hero arama filtresi aktifse
    const searchCategory = document.getElementById("heroSearchCategory")?.value;
    const searchType = document.getElementById("heroSearchType")?.value;
    const searchDistrict = document.getElementById("heroSearchDistrict")?.value;
    const searchKeyword = document.getElementById("heroSearchKeyword")?.value?.toLowerCase().trim();

    if (searchCategory && searchCategory !== "all") {
      listings = listings.filter(l => l.category === searchCategory);
    }
    if (searchType && searchType !== "all") {
      listings = listings.filter(l => l.type === searchType);
    }
    if (searchDistrict && searchDistrict !== "all") {
      listings = listings.filter(l => l.neighborhood.includes(searchDistrict) || l.district.includes(searchDistrict));
    }
    if (searchKeyword) {
      listings = listings.filter(l => 
        l.title.toLowerCase().includes(searchKeyword) ||
        l.neighborhood.toLowerCase().includes(searchKeyword) ||
        l.district.toLowerCase().includes(searchKeyword) ||
        l.id.includes(searchKeyword)
      );
    }

    // Sıralama
    if (this.activeSort === "price-asc") {
      listings.sort((a, b) => a.price - b.price);
    } else if (this.activeSort === "price-desc") {
      listings.sort((a, b) => b.price - a.price);
    } else if (this.activeSort === "newest") {
      listings.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
      // featured first
      listings.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    }

    // Sayacı güncelle
    const countEl = document.getElementById("listingsResultCount");
    if (countEl) countEl.textContent = `${listings.length} ilan listeleniyor`;

    if (listings.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-16 text-center text-slate-400">
          <div class="empty-listings-box">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto mb-4 opacity-50"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            <h4 class="text-lg font-semibold text-slate-200 mb-2">Aradığınız Kriterlere Uygun İlan Bulunamadı</h4>
            <p class="text-sm text-slate-400 mb-4">Lütfen filtreleri temizleyip tekrar deneyin veya istediğiniz gayrimenkulü bize bildirin.</p>
            <button class="btn-gold-outline text-xs px-4 py-2" onclick="App.clearFilters()">Tüm İlanları Göster</button>
          </div>
        </div>
      `;
      return;
    }

    container.innerHTML = listings.map(item => this.createListingCardHtml(item)).join("");
  },

  createListingCardHtml(item) {
    const isRental = item.type === "kiralik";
    const typeLabel = isRental ? "Kiralık" : "Satılık";
    const mainImg = item.images && item.images.length > 0 ? item.images[0] : "images/hero-bg.jpg";

    return `
      <article class="listing-card ${item.featured ? 'is-featured' : ''}" data-id="${item.id}">
        <!-- Görsel ve Rozetler -->
        <div class="card-media">
          <img src="${mainImg}" alt="${item.title}" loading="lazy" onerror="this.src='images/hero-bg.jpg'">
          
          <div class="card-badges-top">
            <span class="pill-type ${isRental ? 'pill-rent' : 'pill-sale'}">${typeLabel}</span>
            <span class="pill-category">${this.getCategoryName(item.category)}</span>
            ${item.featured ? '<span class="pill-featured">★ Vitrin</span>' : ''}
          </div>

          <div class="card-badges-bottom">
            ${item.eidsApproved ? '<span class="pill-eids" title="T.C. Ticaret Bakanlığı EİDS Onaylı İlan"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg> EİDS ONAYLI</span>' : ''}
            <span class="pill-id font-mono">No: ${item.id}</span>
          </div>

          <div class="media-hover-overlay">
            <button class="btn-inspect-quick" onclick="App.openListingDetail('${item.id}')">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              İlanı İncele
            </button>
          </div>
        </div>

        <!-- İlan İçeriği -->
        <div class="card-content">
          <!-- Konum -->
          <div class="card-location">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-amber-400 shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            <span class="truncate">${item.district} / ${item.neighborhood}</span>
          </div>

          <!-- Başlık -->
          <h3 class="card-title" title="${item.title}" onclick="App.openListingDetail('${item.id}')">
            ${item.title}
          </h3>

          <!-- Sahibinden Tarzı Özellik Şeridi -->
          <div class="card-specs">
            <div class="spec-pill" title="Kullanım Alanı">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>
              <span>${item.grossM2} m²</span>
            </div>
            <div class="spec-pill" title="Oda Sayısı">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              <span>${item.roomCount}</span>
            </div>
            <div class="spec-pill" title="Bulunduğu Kat">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
              <span>${item.floor || 'Giriş'}</span>
            </div>
          </div>

          <!-- Alt Kısım: Fiyat & Aksiyonlar -->
          <div class="card-footer">
            <div class="card-price-box">
              <span class="price-label">Fiyat</span>
              <span class="price-val">${item.priceFormatted}</span>
            </div>

            <div class="card-actions">
              <button class="btn-card-wa" onclick="App.sendWhatsAppInquiry('${item.id}', event)" title="WhatsApp ile Bilgi Al">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.41c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.42c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.49-.07 1.47-.61 1.68-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.29"/></svg>
              </button>
              <button class="btn-card-detail" onclick="App.openListingDetail('${item.id}')">
                Detay
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  },

  getCategoryName(cat) {
    const map = {
      konut: "Daire",
      villa: "Villa",
      arsa: "İmarlı Arsa",
      tarla: "Tarla & Arazi",
      ticari: "Ticari / İş Yeri"
    };
    return map[cat] || cat;
  },

  // Sahibinden.com Tarzı Detay Modalı Aç
  openListingDetail(id) {
    const listings = getStoredListings();
    const item = listings.find(l => l.id === id);
    if (!item) return;

    const isAdmin = sessionStorage.getItem("tatlipinar_admin_auth") === "true";
    if (item.status === "passive" && !isAdmin) {
      alert("Bu ilan şu anda yayında değildir veya portföyden kaldırılmıştır.");
      return;
    }

    this.activeModalListing = item;
    this.activeCarouselIndex = 0;

    const modal = document.getElementById("listingDetailModal");
    const container = document.getElementById("listingDetailContent");

    const images = item.images && item.images.length > 0 ? item.images : ["images/hero-bg.jpg"];

    container.innerHTML = `
      ${item.status === 'passive' ? `
        <div class="passive-warning-banner">
          <div style="display: flex; align-items: center; gap: 10px;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-amber-400 shrink-0"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            <div>
              <strong>BU İLAN ŞU AN PASİFTİR:</strong> Web sitesinde ve arama sonuçlarında ziyaretçilere <strong>gösterilmemektedir</strong>.
            </div>
          </div>
          <button type="button" class="btn-activate-inline" onclick="AdminPanel.toggleStatus('${item.id}'); App.closeListingDetail();">
            ✓ İlanı Yayına Al
          </button>
        </div>
      ` : ''}

      <!-- Üst Başlık & Sahibinden Breadcrumbs -->
      <div class="modal-breadcrumb">
        <span>Tatlıpınar Portföy</span>
        <span>›</span>
        <span>${item.type === 'satilik' ? 'Satılık' : 'Kiralık'}</span>
        <span>›</span>
        <span>${this.getCategoryName(item.category)}</span>
        <span>›</span>
        <span>${item.city}</span>
        <span>›</span>
        <span>${item.district}</span>
        <span>›</span>
        <span class="text-amber-400">${item.neighborhood}</span>
      </div>

      <div class="modal-head-row">
        <div>
          <h2 class="modal-main-title">${item.title}</h2>
          <div class="modal-meta-row">
            <span class="meta-tag font-mono text-amber-400">İlan No: ${item.id}</span>
            <span class="meta-tag">İlan Tarihi: ${item.dateFormatted || item.date}</span>
            ${item.eidsApproved ? '<span class="meta-tag badge-eids-mini">✓ EİDS Onaylı (Yetki No: 3900628)</span>' : ''}
          </div>
        </div>
        <div class="modal-price-tag">
          <div class="text-xs text-slate-400 uppercase tracking-wider">İlan Fiyatı</div>
          <div class="text-2xl font-black text-amber-400">${item.priceFormatted}</div>
        </div>
      </div>

      <!-- İki Sütunlu Sahibinden Düzeni -->
      <div class="modal-layout-grid">
        <!-- Sol: Fotoğraf Galerisi -->
        <div class="gallery-col">
          <div class="main-carousel-view">
            <img id="detailMainImg" src="${images[0]}" alt="${item.title}" onerror="this.src='images/hero-bg.jpg'">
            ${images.length > 1 ? `
              <button class="carousel-nav-btn prev-btn" onclick="App.prevCarouselImg()">‹</button>
              <button class="carousel-nav-btn next-btn" onclick="App.nextCarouselImg()">›</button>
              <div class="carousel-indicator" id="carouselIndicator">1 / ${images.length}</div>
            ` : ''}
          </div>

          <!-- Küçük Küçük Resimler (Thumbnails) -->
          ${images.length > 1 ? `
            <div class="thumbnail-strip">
              ${images.map((img, idx) => `
                <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="App.setCarouselImg(${idx})">
                  <img src="${img}" alt="Küçük resim ${idx + 1}" onerror="this.src='images/hero-bg.jpg'">
                </div>
              `).join("")}
            </div>
          ` : ''}

          <!-- İlan Açıklaması -->
          <div class="detail-section mt-6">
            <h3 class="section-subhead">İlan Açıklaması</h3>
            <div class="description-box">
              ${(item.description || 'Bu ilan için özel bir açıklama girilmemiştir.').replace(/\n/g, '<br>')}
            </div>
          </div>

          <!-- Donanım ve Özellik Grupları -->
          ${(item.interiorFeatures && item.interiorFeatures.length) ? `
            <div class="detail-section">
              <h3 class="section-subhead">İç Donanım & Özellikler</h3>
              <div class="feature-tags-grid">
                ${item.interiorFeatures.map(f => `<span class="feature-chip"><span class="chip-check">✓</span> ${f}</span>`).join("")}
              </div>
            </div>
          ` : ''}

          ${(item.exteriorFeatures && item.exteriorFeatures.length) ? `
            <div class="detail-section">
              <h3 class="section-subhead">Dış Donanım & Bina Özellikleri</h3>
              <div class="feature-tags-grid">
                ${item.exteriorFeatures.map(f => `<span class="feature-chip"><span class="chip-check">✓</span> ${f}</span>`).join("")}
              </div>
            </div>
          ` : ''}

          ${(item.locationFeatures && item.locationFeatures.length) ? `
            <div class="detail-section">
              <h3 class="section-subhead">Konum & Muhit Özellikleri</h3>
              <div class="feature-tags-grid">
                ${item.locationFeatures.map(f => `<span class="feature-chip"><span class="chip-check">✓</span> ${f}</span>`).join("")}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- Sağ: Sahibinden Teknik Özellik Tablosu & Danışman Kartı -->
        <div class="spec-sidebar-col">
          <!-- Sahibinden Tarzı İlan Bilgileri Tablosu -->
          <div class="sahibinden-spec-card">
            <div class="spec-table-head">İlan Bilgileri</div>
            <table class="sahibinden-table">
              <tbody>
                <tr>
                  <td class="col-prop">İlan No</td>
                  <td class="col-val font-mono text-amber-400 font-bold">#${item.id}</td>
                </tr>
                <tr>
                  <td class="col-prop">İlan Tarihi</td>
                  <td class="col-val">${item.dateFormatted || item.date}</td>
                </tr>
                <tr>
                  <td class="col-prop">Emlak Tipi</td>
                  <td class="col-val">${this.getCategoryName(item.category)} (${item.type === 'satilik' ? 'Satılık' : 'Kiralık'})</td>
                </tr>
                <tr>
                  <td class="col-prop">m² (Brüt)</td>
                  <td class="col-val font-semibold">${item.grossM2} m²</td>
                </tr>
                <tr>
                  <td class="col-prop">m² (Net)</td>
                  <td class="col-val">${item.netM2 || Math.round(item.grossM2 * 0.9)} m²</td>
                </tr>
                <tr>
                  <td class="col-prop">Oda Sayısı</td>
                  <td class="col-val">${item.roomCount}</td>
                </tr>
                <tr>
                  <td class="col-prop">Bina Yaşı</td>
                  <td class="col-val">${item.buildingAge || '0'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Bulunduğu Kat</td>
                  <td class="col-val">${item.floor || 'Giriş Kat'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Kat Sayısı</td>
                  <td class="col-val">${item.totalFloors || '—'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Isıtma</td>
                  <td class="col-val">${item.heating || 'Kombi (Doğalgaz)'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Banyo Sayısı</td>
                  <td class="col-val">${item.bathrooms !== undefined ? item.bathrooms : '1'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Balkon</td>
                  <td class="col-val">${item.balcony || 'Var'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Asansör</td>
                  <td class="col-val">${item.elevator || 'Var'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Otopark</td>
                  <td class="col-val">${item.parking || 'Açık Otopark'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Eşyalı</td>
                  <td class="col-val">${item.furnished || 'Hayır'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Tapu Durumu</td>
                  <td class="col-val font-semibold text-slate-200">${item.deedStatus || 'Kat Mülkiyetli'}</td>
                </tr>
                <tr>
                  <td class="col-prop">Krediye Uygunluk</td>
                  <td class="col-val ${item.creditEligible ? 'text-emerald-400 font-bold' : 'text-slate-400'}">${item.creditEligible ? 'Evet' : 'Hayır'}</td>
                </tr>
                <tr>
                  <td class="col-prop">EİDS Durumu</td>
                  <td class="col-val text-emerald-400 font-semibold">T.C. Bakanlık Onaylı</td>
                </tr>
                <tr>
                  <td class="col-prop">Yetki Belge No</td>
                  <td class="col-val font-mono font-bold text-amber-400">3900628</td>
                </tr>
                <tr>
                  <td class="col-prop">Kimden</td>
                  <td class="col-val text-amber-400 font-semibold">Tatlıpınar Gayrimenkul</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Danışman / Ofis İletişim Kartı -->
          <div class="consultant-card">
            <div class="consultant-profile">
              <div class="avatar-ring">
                <img src="images/orkun-tatlipinar.jpg" alt="Orkun Tatlıpınar" onerror="this.src='images/logo.svg'">
              </div>
              <div>
                <h4 class="consultant-name">Orkun Tatlıpınar</h4>
                <div class="consultant-title">Broker / Kurucu Danışman</div>
                <div class="consultant-badge">Taşınmaz Yetki No: 3900628</div>
              </div>
            </div>

            <div class="consultant-contacts">
              <a href="tel:+905378325939" class="btn-sidebar-phone">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Hemen Ara: 0537 832 59 39</span>
              </a>

              <a href="tel:+905416347276" class="btn-sidebar-phone-sec">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>Portföy Hattı: 0541 634 72 76</span>
              </a>

              <button class="btn-sidebar-wa" onclick="App.sendWhatsAppInquiry('${item.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.19 8.19 0 0 1-5.82 2.41c-1.45 0-2.88-.38-4.14-1.11l-.3-.17-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.42c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.12-.14.17-.25.25-.42.08-.17.04-.31-.02-.44s-.56-1.35-.77-1.85c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1 1.49-.07 1.47-.61 1.68-1.2.21-.59.21-1.1.15-1.2-.06-.11-.23-.17-.48-.29"/></svg>
                <span>WhatsApp ile Detay İste</span>
              </button>
            </div>

            <div class="consultant-office-info">
              <div class="text-xs text-slate-400">Ofis Konumu:</div>
              <div class="text-xs text-slate-200 mt-0.5">Kocasinan Mah. İstiklal Cad. No: 13/A Lüleburgaz (Otogar Karşısı)</div>
            </div>
          </div>
        </div>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeListingDetail() {
    const modal = document.getElementById("listingDetailModal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "";
    this.activeModalListing = null;
  },

  setCarouselImg(index) {
    if (!this.activeModalListing) return;
    const images = this.activeModalListing.images || [];
    if (index < 0 || index >= images.length) return;

    this.activeCarouselIndex = index;
    const mainImg = document.getElementById("detailMainImg");
    if (mainImg) mainImg.src = images[index];

    const indicator = document.getElementById("carouselIndicator");
    if (indicator) indicator.textContent = `${index + 1} / ${images.length}`;

    const thumbs = document.querySelectorAll(".thumbnail-strip .thumb-item");
    thumbs.forEach((t, i) => {
      t.classList.toggle("active", i === index);
    });
  },

  nextCarouselImg() {
    if (!this.activeModalListing) return;
    const images = this.activeModalListing.images || [];
    let next = this.activeCarouselIndex + 1;
    if (next >= images.length) next = 0;
    this.setCarouselImg(next);
  },

  prevCarouselImg() {
    if (!this.activeModalListing) return;
    const images = this.activeModalListing.images || [];
    let prev = this.activeCarouselIndex - 1;
    if (prev < 0) prev = images.length - 1;
    this.setCarouselImg(prev);
  },

  sendWhatsAppInquiry(id, event) {
    if (event) event.stopPropagation();
    const listings = getStoredListings();
    const item = listings.find(l => l.id === id);
    if (!item || item.status === "passive") return;

    const message = `Merhaba Tatlıpınar Gayrimenkul,\n\n"${item.title}" (İlan No: ${item.id}, Fiyat: ${item.priceFormatted}) hakkında detaylı bilgi almak ve yerinde görmek istiyorum. Yardımcı olabilir misiniz?`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${APP_CONFIG.phones.primaryRaw}?text=${encoded}`, '_blank');
  },

  // "Mülkünü Sat / Kirala" Formunu WhatsApp Mesajına Dönüştür
  handlePropertyLeadSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("leadName").value.trim();
    const phone = document.getElementById("leadPhone").value.trim();
    const intent = document.getElementById("leadIntent").value; // Satmak / Kiralamak
    const propType = document.getElementById("leadType").value; // Daire / Arsa / vb.
    const location = document.getElementById("leadLocation").value.trim();
    const m2 = document.getElementById("leadM2").value.trim();
    const price = document.getElementById("leadPrice").value.trim();
    const notes = document.getElementById("leadNotes").value.trim();

    if (!name || !phone) {
      alert("Lütfen adınızı ve iletişim numaranızı giriniz.");
      return;
    }

    const msg = `*TATILIPINAR GAYRİMENKUL — MÜLK DEĞERLEME & PORTFÖY BAŞVURUSU*\n\n` +
      `👤 *Mülk Sahibi:* ${name}\n` +
      `📞 *Telefon:* ${phone}\n` +
      `📋 *Talep Türü:* ${intent === 'sat' ? 'Mülkümü Satmak İstiyorum' : 'Mülkümü Kiraya Vermek İstiyorum'}\n` +
      `🏢 *Gayrimenkul Tipi:* ${propType}\n` +
      `📍 *Konum / Mahalle:* ${location || 'Belirtilmedi'}\n` +
      `📐 *Büyüklük (m²):* ${m2 || 'Belirtilmedi'}\n` +
      `💰 *Düşünülen Fiyat:* ${price || 'Ekspertiz İstiyorum'}\n` +
      (notes ? `📝 *Ek Bilgiler:* ${notes}\n` : '') +
      `\nMülkümün piyasa analizi ve Tatlıpınar Gayrimenkul portföyüne eklenmesi için görüşmek istiyorum.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${APP_CONFIG.phones.primaryRaw}?text=${encoded}`, '_blank');

    if (window.AdminPanel) {
      window.AdminPanel.showToast("Başvurunuz Hazırlandı!", "WhatsApp uygulamasına yönlendiriliyorsunuz.", "success");
    }
  },

  // Hero Arama Barı
  initHeroSearch() {
    const btn = document.getElementById("heroSearchBtn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      this.renderListings();
      const el = document.getElementById("portfoySection");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    });
  },

  clearFilters() {
    this.activeTab = "all";
    document.querySelectorAll(".portfolio-tab").forEach(t => {
      t.classList.toggle("active", t.dataset.tab === "all");
    });
    if (document.getElementById("heroSearchCategory")) document.getElementById("heroSearchCategory").value = "all";
    if (document.getElementById("heroSearchType")) document.getElementById("heroSearchType").value = "all";
    if (document.getElementById("heroSearchDistrict")) document.getElementById("heroSearchDistrict").value = "all";
    if (document.getElementById("heroSearchKeyword")) document.getElementById("heroSearchKeyword").value = "";
    this.renderListings();
  },

  updateStatsCounter() {
    const listings = getStoredListings();
    const activeCount = listings.filter(l => l.status === "active").length;
    const dynamicCountEl = document.getElementById("heroLiveListingCount");
    if (dynamicCountEl) {
      dynamicCountEl.textContent = activeCount;
    }
  },

  openGalleryLightbox(src, caption) {
    const modal = document.getElementById("galleryLightboxModal");
    const img = document.getElementById("lightboxImg");
    const cap = document.getElementById("lightboxCaption");
    if (!modal || !img) return;

    img.src = src;
    if (cap) cap.textContent = caption || "Tatlıpınar Gayrimenkul";
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  },

  closeGalleryLightbox() {
    const modal = document.getElementById("galleryLightboxModal");
    if (modal) modal.classList.remove("active");
    document.body.style.overflow = "";
  },

  bindEvents() {
    // Portföy Tabları
    document.querySelectorAll(".portfolio-tab").forEach(tab => {
      tab.addEventListener("click", () => {
        document.querySelectorAll(".portfolio-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        this.activeTab = tab.dataset.tab;
        this.renderListings();
      });
    });

    // Sıralama
    const sortSelect = document.getElementById("listingsSortSelect");
    if (sortSelect) {
      sortSelect.addEventListener("change", (e) => {
        this.activeSort = e.target.value;
        this.renderListings();
      });
    }

    // Mülk Başvuru Formu
    const leadForm = document.getElementById("propertyLeadForm");
    if (leadForm) {
      leadForm.addEventListener("submit", (e) => this.handlePropertyLeadSubmit(e));
    }

    // Mobil Menü
    const mobileBtn = document.getElementById("mobileMenuBtn");
    const mobileMenu = document.getElementById("mobileNavMenu");
    if (mobileBtn && mobileMenu) {
      mobileBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
      });
      document.querySelectorAll(".mobile-nav-link").forEach(link => {
        link.addEventListener("click", () => {
          mobileMenu.classList.remove("active");
        });
      });
    }

    // ESC tuşu ile açık modalları kapat
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.closeListingDetail();
        this.closeGalleryLightbox();
        if (window.AdminPanel) {
          window.AdminPanel.closeFormModal();
          window.AdminPanel.closeAuthModal();
        }
      }
    });
  }
};

window.App = App;

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});
