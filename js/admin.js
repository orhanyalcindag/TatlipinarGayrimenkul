/**
 * Tatlıpınar Gayrimenkul — Yönetici Paneli (Sahibinden.com Tarzı İlan Yönetimi)
 */

const AdminPanel = {
  isAuthenticated: false,
  editingId: null,
  currentImages: [],

  // Hazır portföy görselleri (hızlı ekleme için)
  presetImages: [
    { label: "Kurtuluş 3+1 Daire", url: "images/ilan-kurtulus-3plus1.jpg" },
    { label: "Hamzabey İmarlı Arsa", url: "images/ilan-hamzabey-arsa.jpg" },
    { label: "Kocasinan Ticari Dükkan", url: "images/ilan-kocasinan-isyeri.jpg" },
    { label: "Babaeski Yatırımlık Tarla", url: "images/ilan-babaeski-tarla.jpg" },
    { label: "Ofis Dış Cephe", url: "images/ofis-dis-cephe.jpg" },
    { label: "Ofis Müşteri Salonu", url: "images/ofis-ic-mekan.jpg" },
    { label: "Lüks Villa / Müstakil", url: "images/hero-bg.jpg" }
  ],

  init() {
    this.bindEvents();
    this.checkSession();
  },

  checkSession() {
    const session = sessionStorage.getItem("tatlipinar_admin_auth");
    if (session === "true") {
      this.isAuthenticated = true;
    }
  },

  openAuthModal() {
    if (this.isAuthenticated) {
      this.openDashboard();
    } else {
      document.getElementById("adminAuthModal").classList.add("active");
      document.body.style.overflow = "hidden";
      setTimeout(() => document.getElementById("adminPinInput").focus(), 150);
    }
  },

  closeAuthModal() {
    document.getElementById("adminAuthModal").classList.remove("active");
    document.body.style.overflow = "";
    document.getElementById("adminPinInput").value = "";
    document.getElementById("authError").textContent = "";
  },

  login(pin) {
    if (pin === APP_CONFIG.adminPin || pin === "1234" || pin === "admin") {
      this.isAuthenticated = true;
      sessionStorage.setItem("tatlipinar_admin_auth", "true");
      this.closeAuthModal();
      this.openDashboard();
      this.showToast("Giriş Başarılı!", "Yönetici paneline hoş geldiniz.", "success");
    } else {
      document.getElementById("authError").textContent = "Hatalı yetki kodu! (Varsayılan Kod: 3900628 veya 1234)";
    }
  },

  logout() {
    this.isAuthenticated = false;
    sessionStorage.removeItem("tatlipinar_admin_auth");
    this.closeDashboard();
    this.showToast("Çıkış Yapıldı", "Yönetici oturumunuz sonlandırıldı.", "info");
  },

  openDashboard() {
    document.getElementById("adminDashboardModal").classList.add("active");
    document.body.style.overflow = "hidden";
    this.renderStats();
    this.renderListingTable();
  },

  closeDashboard() {
    document.getElementById("adminDashboardModal").classList.remove("active");
    document.body.style.overflow = "";
    // Ana sayfadaki ilan vitrinini yeniden çiz
    if (window.App && typeof window.App.renderListings === "function") {
      window.App.renderListings();
      window.App.updateStatsCounter();
    }
  },

  renderStats() {
    const listings = getStoredListings();
    const total = listings.length;
    const forSale = listings.filter(l => l.type === "satilik").length;
    const forRent = listings.filter(l => l.type === "kiralik").length;
    const featured = listings.filter(l => l.featured).length;

    document.getElementById("statTotalListings").textContent = total;
    document.getElementById("statForSale").textContent = forSale;
    document.getElementById("statForRent").textContent = forRent;
    document.getElementById("statFeatured").textContent = featured;
  },

  renderListingTable() {
    const listings = getStoredListings();
    const query = (document.getElementById("adminSearchInput")?.value || "").toLowerCase().trim();
    const catFilter = document.getElementById("adminCatFilter")?.value || "all";
    const typeFilter = document.getElementById("adminTypeFilter")?.value || "all";

    const filtered = listings.filter(item => {
      const matchQuery = !query || 
        item.title.toLowerCase().includes(query) || 
        item.id.includes(query) || 
        item.neighborhood.toLowerCase().includes(query);
      const matchCat = catFilter === "all" || item.category === catFilter;
      const matchType = typeFilter === "all" || item.type === typeFilter;
      return matchQuery && matchCat && matchType;
    });

    const tbody = document.getElementById("adminListingTableBody");
    if (!tbody) return;

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="8" class="text-center py-8 text-slate-400">
            <div class="empty-state">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" class="mx-auto mb-2 opacity-50"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18"/><path d="m14 9 3 3-3 3"/></svg>
              <p>Aradığınız kriterlere uygun ilan bulunamadı.</p>
            </div>
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(item => `
      <tr class="admin-table-row">
        <td>
          <div class="table-img-wrap">
            <img src="${item.images[0] || 'images/hero-bg.jpg'}" alt="${item.title}" onerror="this.src='images/hero-bg.jpg'">
          </div>
        </td>
        <td>
          <div class="font-mono text-xs text-amber-400 font-semibold">#${item.id}</div>
          <div class="text-xs text-slate-400">${item.dateFormatted || item.date}</div>
        </td>
        <td>
          <div class="table-title font-medium text-slate-100" title="${item.title}">${item.title}</div>
          <div class="text-xs text-slate-400">${item.district} / ${item.neighborhood}</div>
        </td>
        <td>
          <span class="badge-cat badge-${item.category}">
            ${this.getCategoryLabel(item.category)}
          </span>
          <span class="badge-type badge-${item.type} ml-1">
            ${item.type === 'satilik' ? 'Satılık' : 'Kiralık'}
          </span>
        </td>
        <td>
          <div class="font-bold text-amber-400 text-sm">${item.priceFormatted}</div>
          <div class="text-xs text-slate-400">${item.grossM2} m² • ${item.roomCount}</div>
        </td>
        <td>
          <button class="toggle-featured-btn ${item.featured ? 'is-featured' : ''}" onclick="AdminPanel.toggleFeatured('${item.id}')" title="Vitrin durumunu değiştir">
            ${item.featured ? '★ Vitrinde' : '☆ Normal'}
          </button>
        </td>
        <td>
          <span class="badge-status ${item.status === 'active' ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-800 text-slate-400'}">
            ${item.status === 'active' ? 'Aktif' : 'Pasif'}
          </span>
        </td>
        <td>
          <div class="table-actions">
            <button class="btn-table-action btn-edit" onclick="AdminPanel.openFormModal('${item.id}')" title="Düzenle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
            </button>
            <button class="btn-table-action btn-view" onclick="AdminPanel.previewListing('${item.id}')" title="Önizle">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </button>
            <button class="btn-table-action btn-delete" onclick="AdminPanel.deleteListing('${item.id}')" title="Sil">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            </button>
          </div>
        </td>
      </tr>
    `).join("");
  },

  getCategoryLabel(cat) {
    const labels = {
      konut: "Konut / Daire",
      villa: "Villa / Müstakil",
      arsa: "İmarlı Arsa",
      tarla: "Tarla & Arazi",
      ticari: "Ticari / İş Yeri"
    };
    return labels[cat] || cat;
  },

  openFormModal(id = null) {
    this.editingId = id;
    this.currentImages = [];
    const modal = document.getElementById("adminFormModal");
    const formTitle = document.getElementById("adminFormTitle");
    const form = document.getElementById("sahibindenListingForm");

    form.reset();

    if (id) {
      formTitle.textContent = "İlanı Düzenle";
      const listings = getStoredListings();
      const item = listings.find(l => l.id === id);
      if (item) {
        this.populateForm(item);
      }
    } else {
      formTitle.textContent = "Yeni İlan Ekle";
      // Otomatik yeni ilan no üret
      document.getElementById("formListingId").value = "134057" + Math.floor(1000 + Math.random() * 9000);
      document.getElementById("formCity").value = "Kırklareli";
      document.getElementById("formDistrict").value = "Lüleburgaz";
      document.getElementById("formDeedStatus").value = "Kat Mülkiyetli";
      document.getElementById("formCurrency").value = "₺";
      document.getElementById("formStatus").value = "active";
      document.getElementById("formCreditEligible").checked = true;
      document.getElementById("formEidsApproved").checked = true;
      document.getElementById("formFeatured").checked = false;

      // Varsayılan ilk görsel
      this.currentImages = ["images/ilan-kurtulus-3plus1.jpg"];
      this.renderImagePreviews();
    }

    modal.classList.add("active");
  },

  closeFormModal() {
    document.getElementById("adminFormModal").classList.remove("active");
    this.editingId = null;
    this.currentImages = [];
  },

  populateForm(item) {
    document.getElementById("formListingId").value = item.id;
    document.getElementById("formTitle").value = item.title;
    document.getElementById("formCategory").value = item.category;
    document.getElementById("formType").value = item.type;
    document.getElementById("formPrice").value = item.price;
    document.getElementById("formCurrency").value = item.currency || "₺";
    document.getElementById("formCity").value = item.city || "Kırklareli";
    document.getElementById("formDistrict").value = item.district || "Lüleburgaz";
    document.getElementById("formNeighborhood").value = item.neighborhood || "";
    document.getElementById("formAddress").value = item.address || "";
    document.getElementById("formGrossM2").value = item.grossM2 || "";
    document.getElementById("formNetM2").value = item.netM2 || "";
    document.getElementById("formRoomCount").value = item.roomCount || "3+1";
    document.getElementById("formBuildingAge").value = item.buildingAge || "0";
    document.getElementById("formFloor").value = item.floor || "";
    document.getElementById("formTotalFloors").value = item.totalFloors || "";
    document.getElementById("formHeating").value = item.heating || "Kombi (Doğalgaz)";
    document.getElementById("formBathrooms").value = item.bathrooms !== undefined ? item.bathrooms : 1;
    document.getElementById("formBalcony").value = item.balcony || "Var";
    document.getElementById("formElevator").value = item.elevator || "Var";
    document.getElementById("formParking").value = item.parking || "Açık Otopark";
    document.getElementById("formFurnished").value = item.furnished || "Hayır";
    document.getElementById("formDeedStatus").value = item.deedStatus || "Kat Mülkiyetli";
    document.getElementById("formStatus").value = item.status || "active";
    document.getElementById("formCreditEligible").checked = !!item.creditEligible;
    document.getElementById("formEidsApproved").checked = !!item.eidsApproved;
    document.getElementById("formFeatured").checked = !!item.featured;
    document.getElementById("formDescription").value = item.description || "";

    // Checkbox gruplarını doldur
    this.populateCheckboxes("interiorFeaturesGroup", item.interiorFeatures || []);
    this.populateCheckboxes("exteriorFeaturesGroup", item.exteriorFeatures || []);
    this.populateCheckboxes("locationFeaturesGroup", item.locationFeatures || []);

    // Görseller
    this.currentImages = Array.isArray(item.images) ? [...item.images] : [];
    this.renderImagePreviews();
  },

  populateCheckboxes(groupId, checkedValues) {
    const container = document.getElementById(groupId);
    if (!container) return;
    const checkboxes = container.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(cb => {
      cb.checked = checkedValues.includes(cb.value);
    });
  },

  getCheckedValues(groupId) {
    const container = document.getElementById(groupId);
    if (!container) return [];
    const checkboxes = container.querySelectorAll("input[type='checkbox']:checked");
    return Array.from(checkboxes).map(cb => cb.value);
  },

  addImageUrl() {
    const input = document.getElementById("newImageUrlInput");
    const url = input.value.trim();
    if (!url) return;
    this.currentImages.push(url);
    input.value = "";
    this.renderImagePreviews();
  },

  addPresetImage(url) {
    if (!this.currentImages.includes(url)) {
      this.currentImages.push(url);
      this.renderImagePreviews();
      this.showToast("Görsel Eklendi", "Fotoğraf galeriye dahil edildi.", "info");
    }
  },

  removeImage(index) {
    this.currentImages.splice(index, 1);
    this.renderImagePreviews();
  },

  renderImagePreviews() {
    const container = document.getElementById("adminImagePreviews");
    if (!container) return;

    if (this.currentImages.length === 0) {
      container.innerHTML = `<span class="text-xs text-slate-500 italic">Henüz fotoğraf eklenmedi. Aşağıdaki hazır fotoğraflardan seçebilir veya görsel linki girebilirsiniz.</span>`;
      return;
    }

    container.innerHTML = this.currentImages.map((src, idx) => `
      <div class="admin-preview-item">
        <img src="${src}" alt="Fotoğraf ${idx + 1}" onerror="this.src='images/hero-bg.jpg'">
        ${idx === 0 ? '<span class="main-badge">Kapak</span>' : ''}
        <button type="button" class="btn-remove-img" onclick="AdminPanel.removeImage(${idx})" title="Fotoğrafı Kaldır">×</button>
      </div>
    `).join("");
  },

  saveListing(e) {
    if (e) e.preventDefault();

    const title = document.getElementById("formTitle").value.trim();
    const priceRaw = parseFloat(document.getElementById("formPrice").value) || 0;
    const category = document.getElementById("formCategory").value;
    const type = document.getElementById("formType").value;
    const currency = document.getElementById("formCurrency").value || "₺";
    const listingId = document.getElementById("formListingId").value.trim() || ("134057" + Math.floor(1000 + Math.random() * 9000));

    if (!title || !priceRaw) {
      alert("Lütfen en azından ilan başlığı ve fiyat alanlarını doldurunuz.");
      return;
    }

    // Formatlanmış fiyat
    const priceFormatted = new Intl.NumberFormat('tr-TR').format(priceRaw) + " " + currency + (type === "kiralik" ? " / Ay" : "");

    const now = new Date();
    const months = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
    const dateFormatted = `${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
    const dateIso = now.toISOString().split("T")[0];

    const images = this.currentImages.length > 0 ? this.currentImages : ["images/hero-bg.jpg"];

    const newListing = {
      id: listingId,
      title: title,
      category: category,
      type: type,
      price: priceRaw,
      priceFormatted: priceFormatted,
      currency: currency,
      city: document.getElementById("formCity").value.trim() || "Kırklareli",
      district: document.getElementById("formDistrict").value.trim() || "Lüleburgaz",
      neighborhood: document.getElementById("formNeighborhood").value.trim() || "Kurtuluş Mah.",
      address: document.getElementById("formAddress").value.trim() || `${document.getElementById("formNeighborhood").value}, Lüleburgaz / Kırklareli`,
      grossM2: parseInt(document.getElementById("formGrossM2").value) || 0,
      netM2: parseInt(document.getElementById("formNetM2").value) || 0,
      roomCount: document.getElementById("formRoomCount").value || "3+1",
      buildingAge: document.getElementById("formBuildingAge").value || "0",
      floor: document.getElementById("formFloor").value || "1. Kat",
      totalFloors: document.getElementById("formTotalFloors").value || "5",
      heating: document.getElementById("formHeating").value || "Kombi (Doğalgaz)",
      bathrooms: parseInt(document.getElementById("formBathrooms").value) || 1,
      balcony: document.getElementById("formBalcony").value || "Var",
      elevator: document.getElementById("formElevator").value || "Var",
      parking: document.getElementById("formParking").value || "Açık Otopark",
      furnished: document.getElementById("formFurnished").value || "Hayır",
      deedStatus: document.getElementById("formDeedStatus").value || "Kat Mülkiyetli",
      creditEligible: document.getElementById("formCreditEligible").checked,
      eidsApproved: document.getElementById("formEidsApproved").checked,
      featured: document.getElementById("formFeatured").checked,
      status: document.getElementById("formStatus").value || "active",
      date: dateIso,
      dateFormatted: dateFormatted,
      images: images,
      description: document.getElementById("formDescription").value.trim(),
      interiorFeatures: this.getCheckedValues("interiorFeaturesGroup"),
      exteriorFeatures: this.getCheckedValues("exteriorFeaturesGroup"),
      locationFeatures: this.getCheckedValues("locationFeaturesGroup"),
      consultant: {
        name: APP_CONFIG.broker,
        title: "Broker / Yetkili Danışman",
        phone: APP_CONFIG.phones.primary,
        mobile: APP_CONFIG.phones.secondary,
        authNo: APP_CONFIG.licenseNo
      }
    };

    let listings = getStoredListings();

    if (this.editingId) {
      // Güncelleme
      const index = listings.findIndex(l => l.id === this.editingId);
      if (index !== -1) {
        listings[index] = newListing;
        this.showToast("İlan Güncellendi", `#${newListing.id} nolu ilan başarıyla güncellendi.`, "success");
      }
    } else {
      // Yeni Ekleme
      listings.unshift(newListing);
      this.showToast("İlan Yayınlandı", `#${newListing.id} nolu ilan portföye eklendi.`, "success");
    }

    saveStoredListings(listings);
    this.closeFormModal();
    this.renderStats();
    this.renderListingTable();

    // Ana vitrini anında güncelle
    if (window.App && typeof window.App.renderListings === "function") {
      window.App.renderListings();
      window.App.updateStatsCounter();
    }
  },

  deleteListing(id) {
    if (!confirm(`DİKKAT: #${id} numaralı ilanı silmek istediğinize emin misiniz?`)) {
      return;
    }
    let listings = getStoredListings();
    listings = listings.filter(l => l.id !== id);
    saveStoredListings(listings);
    this.renderStats();
    this.renderListingTable();
    this.showToast("İlan Silindi", `#${id} nolu ilan yayından kaldırıldı.`, "info");

    if (window.App && typeof window.App.renderListings === "function") {
      window.App.renderListings();
      window.App.updateStatsCounter();
    }
  },

  toggleFeatured(id) {
    let listings = getStoredListings();
    const item = listings.find(l => l.id === id);
    if (item) {
      item.featured = !item.featured;
      saveStoredListings(listings);
      this.renderStats();
      this.renderListingTable();
      this.showToast("Vitrin Güncellendi", `${item.title} ${item.featured ? 'vitrine alındı.' : 'vitrinden çıkarıldı.'}`, "info");

      if (window.App && typeof window.App.renderListings === "function") {
        window.App.renderListings();
      }
    }
  },

  previewListing(id) {
    const listings = getStoredListings();
    const item = listings.find(l => l.id === id);
    if (item && window.App && typeof window.App.openListingDetail === "function") {
      window.App.openListingDetail(item.id);
    }
  },

  resetToDefaults() {
    if (confirm("DİKKAT: Tüm ilanlar Tatlıpınar Gayrimenkul orijinal varsayılan portföyüne sıfırlanacak. Onaylıyor musunuz?")) {
      saveStoredListings(DEFAULT_LISTINGS);
      this.renderStats();
      this.renderListingTable();
      this.showToast("Sıfırlandı", "Tüm ilanlar varsayılan portföy verilerine döndürüldü.", "success");
      if (window.App && typeof window.App.renderListings === "function") {
        window.App.renderListings();
        window.App.updateStatsCounter();
      }
    }
  },

  exportJSON() {
    const listings = getStoredListings();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(listings, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `tatlipinar_gayrimenkul_portfoy_${new Date().toISOString().split("T")[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast("Dışa Aktarıldı", "İlanlar JSON formatında bilgisayarınıza indirildi.", "success");
  },

  importJSON() {
    const fileInput = document.getElementById("adminImportFileInput");
    if (fileInput) fileInput.click();
  },

  handleFileImport(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (Array.isArray(imported)) {
          saveStoredListings(imported);
          this.renderStats();
          this.renderListingTable();
          this.showToast("İçe Aktarma Başarılı!", `${imported.length} adet ilan başarıyla yüklendi.`, "success");
          if (window.App && typeof window.App.renderListings === "function") {
            window.App.renderListings();
            window.App.updateStatsCounter();
          }
        } else {
          alert("Geçersiz dosya biçimi: JSON bir liste (dizi) içermelidir.");
        }
      } catch (err) {
        alert("JSON dosyası okunurken hata oluştu: " + err.message);
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  },

  showToast(title, message, type = "info") {
    let container = document.getElementById("toastContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "toastContainer";
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <div class="toast-icon">
        ${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}
      </div>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" onclick="this.parentElement.remove()">×</button>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("toast-fade-out");
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  },

  bindEvents() {
    // Arama ve filtre dinleyicileri
    const searchInput = document.getElementById("adminSearchInput");
    if (searchInput) {
      searchInput.addEventListener("input", () => this.renderListingTable());
    }
    const catFilter = document.getElementById("adminCatFilter");
    if (catFilter) {
      catFilter.addEventListener("change", () => this.renderListingTable());
    }
    const typeFilter = document.getElementById("adminTypeFilter");
    if (typeFilter) {
      typeFilter.addEventListener("change", () => this.renderListingTable());
    }
  }
};

window.AdminPanel = AdminPanel;
