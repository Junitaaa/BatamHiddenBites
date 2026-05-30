const foodData = [
  { id:1, name:"Mie Ayam", category:"berat", umkm:"Mie Ayam dan Bakso Mantul", price:"Rp 14.000 / porsi", rating:4.9, ratingCount:1240, badge:"hot",
    img:"img/mie ayam.png", photos:["img/mie ayam.png","img/mie ayam.png","img/mie ayam.png"],
    tags:["Mie","Ayam","Pedas"], desc:"Mie ayam, toping ayam suwir, dan kuah kaldu yang kaya rempah.", bestMenu:"Mie Ayam Bakso Urat", lat:1.1192898, lng:103.9772625 },
  { id:2, name:"Bakso", category:"berat", umkm:"Mie Ayam dan Bakso Mantul", price:"Rp 15.000 / porsi", rating:4.8, ratingCount:3420, badge:"top",
    img:"img/bakso.png", photos:["img/bakso.png","img/bakso.png","img/bakso.png"],
    tags:["Bakso","Daging","Gurih"], desc:"Bakso daging asli dengan kuah gurih.", bestMenu:"Bakso Urat", lat:1.1192898, lng:103.9772625 },
  { id:3, name:"Bakso Urat", category:"berat", umkm:"Mie Ayam dan Bakso Mantul", price:"Rp 20.000 / porsi", rating:4.7, ratingCount:850, badge:null,
    img:"img/bakso urat.png", photos:["img/bakso urat.png","img/bakso urat.png","img/bakso urat.png"],
    tags:["Bakso","Daging","Gurih"], desc:"Bakso daging asli dengan kuah gurih.", bestMenu:"Bakso Urat", lat:1.1192898, lng:103.9772625 },
  { id:4, name:"Jus Alpukat", category:"minuman", umkm:"Titik", price:"Rp 10.000 / gelas", rating:4.6, ratingCount:560, badge:"new",
    img:"img/jus.png", photos:["img/jus.png","img/jus.png","img/jus.png"],
    tags:["Jus","Buah","Segar"], desc:"Jus buah segar, manis asli buah.", bestMenu:"Jus Alpukat", lat:1.1618644, lng:104.0435249 },
  { id:5, name:"Churos", category:"ringan", umkm:"Uweita Churos", price:"Rp 3.000 / biji", rating:4.5, ratingCount:2100, badge:"hot",
    img:"img/churos.png", photos:["img/churos.png","img/churos.png","img/churos.png"],
    tags:["Churros","Goreng","Krispi"], desc:"Churos renyah dengan berbagai pilihan topping manis.", bestMenu:"Churos Coklat", lat:1.0422012, lng:103.9764657 },
  { id:6, name:"Tahu Crispy", category:"ringan", umkm:"Tahu Crispy", price:"Rp 10.000 - 15.000 / porsi", rating:4.8, ratingCount:1750, badge:"top",
    img:"img/tahu.png", photos:["img/tahu.png","img/tahu.png","img/tahu.png"],
    tags:["Tahu","Goreng","Crispy"], desc:"Tahu crispy dengan berbagai pilihan bumbu.", bestMenu:"Tahu Crispy Bumbu Balado", lat:1.161299, lng:104.042231 },
  { id:7, name:"Ice Cream", category:"dessert", umkm:"Ice Cream", price:"Rp 20.000 / porsi", rating:4.7, ratingCount:980, badge:null,
    img:"img/ice cream.png", photos:["img/ice cream.png","img/ice cream.png","img/ice cream.png"],
    tags:["Ice","Cream","Segar"], desc:"Ice cream yang menyegarkan.", bestMenu:"Ice cream", lat:1.1301, lng:104.0529 },
  { id:8, name:"Bakso Bakar", category:"ringan", umkm:"Bakso Bakar", price:"Rp 2.000 / tusuk", rating:4.6, ratingCount:430, badge:"new",
    img:"img/bakso bakar.png", photos:["img/bakso bakar.png","img/bakso bakar.png","img/bakso bakar.png"],
    tags:["Bakso","Bakar","Gurih"], desc:"Bakso bakar yang kenyal dengan bumbu bakar yang gurih.", bestMenu:"Bakso Bakar", lat:1.1291635, lng:104.0338627 },
  { id:9, name:"Risol", category:"ringan", umkm:"Risol Pudo", price:"Rp 3.000 - 4.000 / biji", rating:4.9, ratingCount:2340, badge:"hot",
    img:"img/risol.png", photos:["img/risol.png","img/risol.png","img/risol.png"],
    tags:["Risol","Goreng","Gurih"], desc:"Risol mayo dengan berbagai varian isi.", bestMenu:"Risol Mayo", lat:1.1531704, lng:104.0373216 },
  { id:10, name:"Apam Balik", category:"ringan", umkm:"Apam Balik", price:"Rp 5.000 / porsi", rating:4.8, ratingCount:1890, badge:"hot",
    img:"img/apam balik.jpeg", photos:["img/apam balik.jpeg","img/apam balik.jpeg","img/apam balik.jpeg"],
    tags:["Apam","Balik","Rasa"], desc:"Apam balik dengan berbagai varian toping.", bestMenu:"Apam balik toping coklat", lat:1.1440112, lng:104.0118314 },
  { id:11, name:"Cuanki", category:"berat", umkm:"Cuanki khas Bandung", price:"Rp 10.000 / porsi", rating:4.7, ratingCount:2210, badge:"top",
    img:"img/cuanki.jpeg", photos:["img/cuanki.jpeg","img/cuanki.jpeg","img/cuanki.jpeg"],
    tags:["Cuanki","Gurih","Kuah"], desc:"Perpaduan cuanki kenyal dengan kuah gurih khas Bandung.", bestMenu:"Cuanki", lat:1.1446114, lng:104.0366588 },
  { id:12, name:"Kopi", category:"minuman", umkm:"Fomo Coffe", price:"Rp 10.000 / gelas", rating:4.5, ratingCount:3100, badge:null,
    img:"img/kopi.jpeg", photos:["img/kopi.jpeg","img/kopi.jpeg","img/kopi.jpeg"],
    tags:["Kopi","Susu","Hangat"], desc:"Kopi susu yang nikmat dan menghangatkan, diseduh dari biji kopi pilihan.", bestMenu:"Kopi Susu", lat:1.1610421, lng:104.041943 },
];

let currentFilter = 'all';
let currentRating = 0;
let uploadedPhotos = [];
const communityReviews = JSON.parse(localStorage.getItem('communityReviews')) || [];

let photoPreview = null;
let photoAddBtn = null;


function loadDropdowns() {
  const umkmSelect = document.getElementById('inputUmkm');
  const foodSelect = document.getElementById('inputFood');

  if (umkmSelect) {
    umkmSelect.innerHTML = '<option value="">-- Pilih UMKM --</option>';
    const uniqueUmkm = [...new Set(foodData.map(item => item.umkm))];
    uniqueUmkm.forEach(name => {
      const opt = document.createElement('option');
      opt.value = name;
      opt.textContent = name;
      umkmSelect.appendChild(opt);
    });

  
    umkmSelect.addEventListener('change', () => {
      const selectedUmkm = umkmSelect.value;
      foodSelect.innerHTML = '<option value="">-- Pilih Makanan --</option>';
      if (!selectedUmkm) return;
      const filtered = foodData.filter(item => item.umkm === selectedUmkm);
      filtered.forEach(item => {
        const opt = document.createElement('option');
        opt.value = item.name;
        opt.textContent = item.name;
        foodSelect.appendChild(opt);
      });
 
      if (filtered.length === 1) foodSelect.value = filtered[0].name;
    });
  }

  // Makanan awalnya kosong, menunggu UMKM dipilih
  if (foodSelect) {
    foodSelect.innerHTML = '<option value="">-- Pilih Makanan --</option>';
  }
}

function loadUmkm() {
  // Placeholder
}

function createParticles() {
  const container = document.getElementById('particles');
  if (!container) return;
  const emojis = ['🌶️','🍜','🥘','🍱','🫙','🌿','✨'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    p.style.cssText = `left:${Math.random()*100}%;font-size:${Math.random()*1+0.6}rem;animation-duration:${Math.random()*18+12}s;animation-delay:${Math.random()*-20}s;`;
    container.appendChild(p);
  }
}

function animateCounter(el, target, suffix='') {
  if (!el) return;
  let count = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    count = Math.min(count + step, target);
    el.textContent = Math.floor(count).toLocaleString('id-ID') + suffix;
    if (count >= target) clearInterval(timer);
  }, 25);
}

function renderCards(data) {
  const grid = document.getElementById('cardsGrid');
  const noResults = document.getElementById('noResults');
  if (!grid) return;
  grid.innerHTML = '';
  if (data.length === 0) { noResults.style.display = 'block'; return; }
  noResults.style.display = 'none';
  const catLabels = { berat:'Makanan Berat', ringan:'Makanan Ringan', minuman:'Minuman', dessert:'Dessert', tradisional:'Tradisional' };
  const badgeMap = { hot:'🔥 HOT', top:'🏆 TOP', new:'✨ BARU' };
  data.forEach((item, index) => {
    const badge = item.badge ? `<div class="card-badge ${item.badge}">${badgeMap[item.badge]}</div>` : '';
    const heroImg = item.photos && item.photos.length > 0 ? item.photos[0] : item.img;
    const card = document.createElement('div');
    card.className = 'food-card';
    card.style.animationDelay = `${index * 0.08}s`;
    card.setAttribute('data-category', item.category);
    card.innerHTML = `
      <div class="card-image-wrapper">
        ${badge}
        <img src="${heroImg}" alt="${item.name}" class="food-png" onerror="this.src='${item.img}'">
        <div class="card-img-overlay"></div>
      </div>
      <div class="card-body">
        <div class="card-category">${catLabels[item.category] || item.category}</div>
        <div class="card-title">${item.name}</div>
        <div class="card-umkm">${item.umkm}</div>
        <div class="card-footer">
          <div class="card-price">${item.price}</div>
          <button class="card-btn" onclick="openModal(${item.id})">Lihat Detail</button>
        </div>
      </div>`;
    grid.appendChild(card);
  });
}

function filterCategory(cat, btn) {
  currentFilter = cat;
  document.querySelectorAll('.cat-icon-pill').forEach(p => p.classList.toggle('active', p.dataset.filter === cat));
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.toggle('active', b.dataset.filter === cat));
  filterCards();
}

function filterCards() {
  const query = (document.getElementById('searchInput')?.value || '').toLowerCase();
  const filtered = foodData.filter(item => {
    const matchCat = currentFilter === 'all' || item.category === currentFilter;
    const matchSearch = !query || item.name.toLowerCase().includes(query) || item.umkm.toLowerCase().includes(query) || item.tags.some(t => t.toLowerCase().includes(query));
    return matchCat && matchSearch;
  });
  renderCards(filtered);
}

function openModal(id) {
  const item = foodData.find(f => f.id === id);
  if (!item) return;
  document.getElementById('modalCategory').textContent = item.category.toUpperCase();
  document.getElementById('modalTitle').textContent = item.name;
  document.getElementById('modalUmkm').textContent = item.umkm;
  document.getElementById('modalPrice').textContent = item.price;
  document.getElementById('modalBestMenu').textContent = item.bestMenu;
  document.getElementById('modalDesc').textContent = item.desc;
  document.getElementById('modalTags').innerHTML = item.tags.map(t=>`<span class="modal-tag-pill">${t}</span>`).join('');
  const heroSrc = (item.photos && item.photos.length > 0) ? item.photos[0] : item.img;
  document.getElementById('modalImageContainer').innerHTML =
    `<img src="${heroSrc}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.src='${item.img}'">`;
  const gallery = document.getElementById('modalPhotoGallery');
  if (gallery) {
    const photos = (item.photos || []).slice(1, 3);
    if (photos.length === 0) {
      gallery.innerHTML = '<div class="modal-gallery-empty">📷 Belum ada foto tersedia</div>';
    } else {
      gallery.innerHTML = photos.map((src, i) => `
        <div class="modal-gallery-item" onclick="openLightbox('${src}')">
          <img src="${src}" class="modal-gallery-img" alt="Foto ${i+2}" loading="lazy"
            onerror="this.closest('.modal-gallery-item').style.display='none'">
          <div class="modal-gallery-overlay"><span class="modal-gallery-zoom">🔍 Perbesar</span></div>
        </div>`).join('');
    }
  }
  const mapsBtn = document.querySelector('.modal-btn-primary');
  if (mapsBtn) {
    if (item.lat && item.lng) {
      mapsBtn.onclick = () => window.open(`https://maps.google.com/?q=${item.lat},${item.lng}`, '_blank');
      mapsBtn.style.display = '';
    } else {
      mapsBtn.style.display = 'none';
    }
  }
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e.target === document.getElementById('modalOverlay')) forceCloseModal();
}
function forceCloseModal() {
  document.getElementById('modalOverlay').classList.remove('active');
  document.body.style.overflow = '';
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3200);
}

function selectStar(val) {
  currentRating = val;
  document.querySelectorAll('.star-btn').forEach((btn, i) => btn.classList.toggle('active', i < val));
  const labels = ['','Kurang 😕','Lumayan 🙂','Bagus 👍','Enak 😋','Sempurna! 🤩'];
  document.getElementById('starLabel').textContent = labels[val];
}

function handleFormSubmit(e) {
  e.preventDefault();
  if (!currentRating) { showToast('⭐ Pilih rating dulu ya!'); return; }
  const name = document.getElementById('inputName').value.trim();
  const umkm = document.getElementById('inputUmkm').value.trim();
  const food = document.getElementById('inputFood').value.trim();
  const text = document.getElementById('inputReview').value.trim();
  const colors = ['#E8632A','#2D6A4F','#D4A843','#3D2B1F','#40916C'];
  communityReviews.unshift({ id:Date.now(), name, food, umkm, text, rating:currentRating, color:colors[Math.floor(Math.random()*colors.length)], time:new Date().toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit'}), photos:[...uploadedPhotos] });
  localStorage.setItem('communityReviews', JSON.stringify(communityReviews));
  renderCommunityReviews(); updateReviewStats();
  e.target.reset(); currentRating=0; uploadedPhotos=[];
  document.querySelectorAll('.star-btn').forEach(b=>b.classList.remove('active'));
  document.getElementById('starLabel').textContent='Klik bintang untuk memberi rating';
  document.getElementById('photoPreview').innerHTML='';
  document.getElementById('charCount').textContent='0';
  document.getElementById('inputFood').innerHTML = '<option value="">-- Pilih Makanan --</option>';
  showToast('🎉 Review berhasil dikirim! Terima kasih!');
}

function renderCommunityReviews() {
  const container = document.getElementById('communityReviewsList');
  if (!container) return;
  container.innerHTML = communityReviews.map((r,i)=>`<div class="community-review-card ${i===0?'new-review':''}" id="cr-${r.id}">${i===0?'<div class="cr-new-badge">BARU</div>':''}<div class="cr-header"><div class="cr-user"><div class="cr-avatar" style="background:${r.color}">${r.name[0].toUpperCase()}</div><div><div class="cr-name">${r.name}</div><div class="cr-meta">Ulasan untuk <span class="cr-food-tag">${r.food}</span> · ${r.time}</div></div></div><div style="display:flex;align-items:center;gap:0.5rem"><span class="cr-rating">${'★'.repeat(r.rating)}</span><button class="delete-btn" onclick="deleteReview(${r.id})">Hapus</button></div></div><div class="cr-text">"${r.text}"</div>${r.photos.length?'<div class="cr-photos">'+r.photos.map(p=>`<img src="${p}" class="cr-photo" onclick="openLightbox('${p}')">`).join('')+'</div>':''}</div>`).join('');
}

function updateReviewStats() {
  const total = communityReviews.length;
  const avg = total?(communityReviews.reduce((s,r)=>s+r.rating,0)/total).toFixed(1):'0.0';
  document.getElementById('panelTotalReview').textContent=total;
  document.getElementById('panelAvgRating').textContent=avg;
  document.getElementById('liveCountBadge').textContent=`${total} Live`;
}

function deleteReview(id) {
  const idx=communityReviews.findIndex(r=>r.id===id);
  if(idx>-1) communityReviews.splice(idx,1);
  localStorage.setItem('communityReviews', JSON.stringify(communityReviews));
  renderCommunityReviews(); updateReviewStats();
}

function openLightbox(src) {
  const lb=document.createElement('div');
  lb.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.88);z-index:9999;display:flex;align-items:center;justify-content:center;cursor:zoom-out;animation:lbFadeIn 0.3s ease';
  lb.innerHTML=`<img src="${src}" style="max-width:90vw;max-height:85vh;border-radius:18px;box-shadow:0 24px 70px rgba(0,0,0,0.6);object-fit:contain">`;
  lb.onclick=()=>lb.remove();
  document.body.appendChild(lb);
}

function renderPhotoPreview() {
  if(!photoPreview) return;
  photoPreview.innerHTML=uploadedPhotos.map((src,i)=>`<div class="photo-thumb-wrap"><img src="${src}" class="photo-thumb" onclick="openLightbox('${src}')"><button class="photo-remove-btn" onclick="removePhoto(${i})">✕</button></div>`).join('');
  if(photoAddBtn) photoAddBtn.style.display=uploadedPhotos.length>=3?'none':'flex';
}

window.removePhoto = function(i) { uploadedPhotos.splice(i,1); renderPhotoPreview(); };

document.addEventListener('DOMContentLoaded', () => {
  photoPreview = document.getElementById('photoPreview');
  photoAddBtn  = document.getElementById('photoAddBtn');
  const photoInput = document.getElementById('photoInput');
  const textarea   = document.getElementById('inputReview');
  const charCount  = document.getElementById('charCount');

  if (textarea) textarea.addEventListener('input', () => {
    charCount.textContent = textarea.value.length;
  });

  if (photoInput) {
    photoInput.addEventListener('change', (e) => {
      const files = [...e.target.files];
      const remaining = 3 - uploadedPhotos.length;
      files.slice(0, remaining).forEach(file => {
        const reader = new FileReader();
        reader.onload = (ev) => { uploadedPhotos.push(ev.target.result); renderPhotoPreview(); };
        reader.readAsDataURL(file);
      });
      photoInput.value = '';
    });
  }

  filterCards();
  renderCommunityReviews();
  updateReviewStats();
  loadUmkm();
  loadDropdowns();

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  createParticles();

  setTimeout(() => {
    animateCounter(document.getElementById('statUMKM'), 2847, '+');
    animateCounter(document.getElementById('statReview'), 48293);
    animateCounter(document.getElementById('statKota'), 34);
  }, 600);

  const mapEl = document.getElementById('umkmMap');
  if (mapEl) mapObserver.observe(mapEl);
});

// ── DATA LOKASI UMKM ──
const umkmLocations = [
  { id:1, name:"Mie Ayam", umkm:"Mie Ayam dan Bakso Mantul", category:"berat", price:"Rp 14.000 / porsi", address:"Jl. Tiban 1 No 2, Patam Lestari, Kota Batam", img:"img/mie ayam.png", lat:1.1192898, lng:103.9772625 },
  { id:2, name:"Bakso", umkm:"Mie Ayam dan Bakso Mantul", category:"berat", price:"Rp 15.000 / porsi", address:"Jl. Tiban 1 No 2, Patam Lestari, Kota Batam", img:"img/bakso.png", lat:1.1192898, lng:103.9772625 },
  { id:3, name:"Tahu Crispy", umkm:"Tahu Crispy", category:"ringan", price:"Rp 10.000 - 15.000 / porsi", address:"Bengkong, Golden Prawn, Batam", img:"img/tahu.png", lat:1.161299, lng:104.042231 },
  { id:4, name:"Churos", umkm:"Uweita Churos", category:"ringan", price:"Rp 3.000 / biji", address:"Uweita Churros, Sungai Langkai, Sagulung, Kota Batam", img:"img/churos.png", lat:1.0422012, lng:103.9764657 },
  { id:5, name:"Jus Alpukat", umkm:"Titik", category:"minuman", price:"Rp 10.000 / gelas", address:"Jl. Golden Prawn, Tj. Buntung, Kec. Bengkong, Kota Batam", img:"img/jus.png", lat:1.1618644, lng:104.0435249 },
  { id:6, name:"Ice Cream", umkm:"Ice Cream", category:"dessert", price:"Rp 20.000 / cone", address:"Tlk. Tering, Kota Batam", img:"img/ice cream.png", lat:1.1520, lng:104.0450 },
  { id:7, name:"Bakso Bakar", umkm:"Bakso Bakar", category:"ringan", price:"Rp 2.000 / tusuk", address:"Jl. Kintanami, Sungai Panas, Kota Batam", img:"img/bakso bakar.png", lat:1.1291635, lng:104.0338627 },
  { id:8, name:"Kopi", umkm:"Fomo Coffe", category:"minuman", price:"Rp 10.000 / gelas", address:"Jl. Golden City Residence, Bengkong Laut, Kota Batam", img:"img/kopi.jpeg", lat:1.1610421, lng:104.041943 },
  { id:9, name:"Apam Balik", umkm:"Apam Balik", category:"ringan", price:"Rp 5.000 / porsi", address:"Jl. Imam Bonjol - Nagoya, Lubuk Baja, Kota Batam", img:"img/apam balik.jpeg", lat:1.1440112, lng:104.0118314 },
  { id:10, name:"Bakso Urat", umkm:"Mie Ayam dan Bakso Mantul", category:"berat", price:"Rp 20.000 / porsi", address:"Jl. Tiban 1 No 2, Patam Lestari, Kota Batam", img:"img/bakso urat.png", lat:1.1192898, lng:103.9772625 },
  { id:11, name:"Risol", umkm:"Risol Pudo", category:"ringan", price:"Rp 3.000 - 4.000 / biji", address:"Jl. Bengkong Sadai, Sadai, Kec. Bengkong, Kota Batam", img:"img/risol.png", lat:1.1531704, lng:104.0373216 },
  { id:12, name:"Cuanki", umkm:"Cuanki khas Bandung", category:"berat", price:"Rp 10.000 / porsi", address:"Jl. Cahaya Garden, Sadai, Kec. Bengkong, Kota Batam", img:"img/cuanki.jpeg", lat:1.1446114, lng:104.0366588 },
];

const markerColors = { berat:'#E8632A', ringan:'#40916C', minuman:'#4A90D9', dessert:'#D4A843' };

let mapInstance = null;
let allMarkers = [];
let selectedLocation = null;

function createCustomIcon(color) {
  return L.divIcon({
    className: '',
    html: `<div style="width:32px;height:32px;background:${color};border:3px solid white;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 4px 12px rgba(0,0,0,0.25);"></div>`,
    iconSize:[32,32], iconAnchor:[16,32], popupAnchor:[0,-34],
  });
}

function initUmkmMap() {
  if (mapInstance) return;
  mapInstance = L.map('umkmMap', { center:[1.1301, 104.0529], zoom:12, zoomControl:true });
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/">OpenStreetMap</a>', maxZoom:19,
  }).addTo(mapInstance);
  umkmLocations.forEach(loc => {
    const color = markerColors[loc.category.toLowerCase()] || '#E8632A';
    const icon = createCustomIcon(color);
    const marker = L.marker([loc.lat, loc.lng], { icon }).addTo(mapInstance);
    marker.on('click', () => {
      selectedLocation = loc;
      showMapInfoPanel(loc);
      mapInstance.panTo([loc.lat, loc.lng]);
      const el = marker.getElement();
      if (el) {
        el.style.transition = 'transform 0.15s ease';
        el.style.transform = 'scale(1.3)';
        setTimeout(() => { el.style.transform = 'scale(1)'; }, 300);
      }
    });
    allMarkers.push({ marker, category: loc.category.toLowerCase() });
  });
}

function showMapInfoPanel(loc) {
  document.getElementById('mapInfoPlaceholder').style.display = 'none';
  const content = document.getElementById('mapInfoContent');
  content.style.display = 'flex';
  content.style.flexDirection = 'column';
  content.style.height = '100%';
  const catLabels = { berat:'Makanan Berat', ringan:'Makanan Ringan', minuman:'Minuman', dessert:'Dessert' };
  document.getElementById('mipImg').src = loc.img;
  document.getElementById('mipImg').onerror = function() { this.style.display='none'; };
  document.getElementById('mipCategory').textContent = catLabels[loc.category.toLowerCase()] || loc.category;
  document.getElementById('mipName').textContent = loc.name;
  document.getElementById('mipUmkm').textContent = '📍 ' + loc.umkm;
  document.getElementById('mipPrice').textContent = loc.price;
  document.getElementById('mipAddress').textContent = '🗺 ' + loc.address;
}

function openDirections() {
  if (selectedLocation) window.open(`https://maps.google.com/?q=${selectedLocation.lat},${selectedLocation.lng}`, '_blank');
}

function filterMapMarkers(cat, btn) {
  document.querySelectorAll('.map-chip').forEach(c => c.classList.remove('active'));
  btn.classList.add('active');
  allMarkers.forEach(({ marker, category }) => {
    if (cat === 'all' || category === cat) marker.addTo(mapInstance);
    else marker.remove();
  });
  document.getElementById('mapInfoPlaceholder').style.display = 'flex';
  document.getElementById('mapInfoContent').style.display = 'none';
  selectedLocation = null;
}

const mapObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting && !mapInstance) initUmkmMap(); });
}, { threshold: 0.1 });