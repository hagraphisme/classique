/**
 * ==========================================================================
 * LA MAISON DES CYCLADES — SCRIPT PRINCIPAL (VERSION CORRIGÉE & OPTIMISÉE)
 * ==========================================================================
 */

// --- 1. BASE DE DONNÉES DES PLATS, MENUS & BOISSONS ---
const dishesData = {
  // MENUS
  "menu-ios": {
    title: "MENU IOS",
    img: "images_plats/menu-ios.jpg",
    ingredients: "Entrée + Plat OU Plat + Dessert (au choix sur la carte)",
    allergens: "Dépend des plats choisis.",
    nutrition: { cal: "620 kcal", prot: "24 g", glu: "52 g", lip: "32 g" }
  },
  "menu-santorini": {
    title: "MENU SANTORINI",
    img: "images_plats/menu-santorini.jpg",
    ingredients: "Entrée + Plat + Dessert (au choix sur la carte)",
    allergens: "Dépend des plats choisis.",
    nutrition: { cal: "880 kcal", prot: "30 g", glu: "85 g", lip: "44 g" }
  },

  // ENTRÉES
  "dolmades": {
    title: "DOLMADES",
    img: "images_plats/dolmades.jpg",
    ingredients: "Feuilles de vigne, riz rond, oignons, aneth, menthe, citron, huile d'olive vierge extra, épices.",
    allergens: "Sulfites (feuilles de vigne conservées).",
    nutrition: { cal: "180 kcal", prot: "4 g", glu: "22 g", lip: "9 g" }
  },
  "tarama": {
    title: "TARAMA",
    img: "images_plats/tzatziki.jpg",
    ingredients: "Œufs de cabillaud fumés, huile de colza, chapelure (blé), citron, oignon.",
    allergens: "Poisson, Gluten (blé).",
    nutrition: { cal: "450 kcal", prot: "8 g", glu: "5 g", lip: "45 g" }
  },
  "dolmade1": {
    title: "DOLMADES PETIT MÉZEDES",
    img: "images_plats/dolmades-petit-mezedes.jpg",
    ingredients: "Assortiment varié : Tzatziki, Tarama, Taboulé, Caviar d'aubergine, Féta, etc.",
    allergens: "Lait, Gluten, Poisson, Sulfites.",
    nutrition: { cal: "300 kcal", prot: "8 g", glu: "15 g", lip: "20 g" }
  },
  "xoriatiki": {
    title: "SALADE GRECQUE",
    img: "images_plats/salade-grecque.jpg",
    ingredients: "Tomates, concombres, olives, féta, câpres, huile d'olive.",
    allergens: "Lait (féta).",
    nutrition: { cal: "320 kcal", prot: "8 g", glu: "10 g", lip: "25 g" }
  },
  "taboule": {
    title: "TABOULÉ GREC",
    img: "images_plats/taboule.jpg",
    ingredients: "Boulgour, persil, menthe, tomates, citron, huile d'olive.",
    allergens: "Gluten.",
    nutrition: { cal: "200 kcal", prot: "5 g", glu: "30 g", lip: "8 g" }
  },
  "assortiment": {
    title: "ASSORTIMENT DE 4 MÉZÉS",
    img: "images_plats/assortiment-4-mezes.jpg",
    ingredients: "Tzatziki, Tarama, 2 Dolmades, Hommos.",
    allergens: "Lait, Gluten, Sésame, Poisson.",
    nutrition: { cal: "400 kcal", prot: "10 g", glu: "20 g", lip: "30 g" }
  },

  // PLATS
  "moussaka": {
    title: "MOUSSAKA",
    img: "images_plats/moussaka.jpg",
    ingredients: "Aubergines, viande de bœuf hachée, pommes de terre, tomates, oignons, béchamel.",
    allergens: "Lait (lactose), Gluten (farine), Œufs.",
    nutrition: { cal: "350 kcal", prot: "15 g", glu: "20 g", lip: "22 g" }
  },
  "imam": {
    title: "IMAM",
    img: "images_plats/imam.jpg",
    ingredients: "Aubergine, tomates, oignons, pignons de pin, huile d'olive.",
    allergens: "Fruits à coque (pignons de pin).",
    nutrition: { cal: "250 kcal", prot: "4 g", glu: "12 g", lip: "20 g" }
  },
  "papoutsakia": {
    title: "PAPOUTSAKIA",
    img: "images_plats/papoutsakia.jpg",
    ingredients: "Aubergine, viande hachée, béchamel.",
    allergens: "Lait, Gluten, Œufs.",
    nutrition: { cal: "380 kcal", prot: "14 g", glu: "15 g", lip: "25 g" }
  },
  "soutsoukakia": {
    title: "SOUTSOUKAKIA",
    img: "images_plats/soutsoukakia.jpg",
    ingredients: "Boulettes de bœuf, sauce tomate, cumin, épices grecques.",
    allergens: "Gluten (chapelure).",
    nutrition: { cal: "320 kcal", prot: "20 g", glu: "10 g", lip: "18 g" }
  },
  "keftedes": {
    title: "KEFTEDES",
    img: "images_plats/keftedes.jpg",
    ingredients: "Viande de bœuf aux herbes grecques ou courgette-féta.",
    allergens: "Lait, Œufs, Gluten.",
    nutrition: { cal: "280 kcal", prot: "18 g", glu: "8 g", lip: "16 g" }
  },
  "salade-calamar": {
    title: "CALAMAR FARCI",
    img: "images_plats/salade-calamar.jpg",
    ingredients: "Calamar, riz, crevettes, pignons de pin, sauce tomate.",
    allergens: "Mollusques, Crustacés.",
    nutrition: { cal: "300 kcal", prot: "25 g", glu: "20 g", lip: "12 g" }
  },
  "piperia": {
    title: "PIPERIA",
    img: "images_plats/piperia.jpg",
    ingredients: "Poivron, viande hachée, riz, pignons de pin, menthe, aneth.",
    allergens: "Aucun.",
    nutrition: { cal: "260 kcal", prot: "15 g", glu: "25 g", lip: "10 g" }
  },

  // DESSERTS
  "yaourt": {
    title: "YAOURT GREC",
    img: "images_plats/yaourt-grec.jpg",
    ingredients: "Lait de brebis pasteurisé, ferments lactiques, miel de thym, noix/pralines.",
    allergens: "Lait, Fruits à coque (selon topping).",
    nutrition: { cal: "130 kcal", prot: "6 g", glu: "14 g", lip: "8 g" }
  },
  "patisserie": {
    title: "PÂTISSERIE GRECQUE",
    img: "images_plats/patisserie-grecque.jpg",
    ingredients: "Pâte filo, noix, miel, beurre (Baklava, Kadaïf, Samousada ou Mélomakarona).",
    allergens: "Gluten, Lait, Fruits à coque.",
    nutrition: { cal: "450 kcal", prot: "6 g", glu: "40 g", lip: "28 g" }
  },
  "portokalopita": {
    title: "PORTOKALOPITA",
    img: "images_plats/portokalopita.jpg",
    ingredients: "Orange, pâte filo, yaourt grec, sirop.",
    allergens: "Gluten, Lait, Œufs.",
    nutrition: { cal: "380 kcal", prot: "5 g", glu: "50 g", lip: "15 g" }
  },
  "galaktobureko": {
    title: "GALAKTOBUREKO",
    img: "images_plats/galaktobureko.jpg",
    ingredients: "Semoule fine, lait, œufs, pâte filo.",
    allergens: "Gluten, Lait, Œufs.",
    nutrition: { cal: "350 kcal", prot: "8 g", glu: "45 g", lip: "12 g" }
  },
  "chocolatopita": {
    title: "CHOCOLATOPITA",
    img: "images_plats/chocolatopita.jpg",
    ingredients: "Chocolat Merenda, pâte filo.",
    allergens: "Gluten, Lait, Soja.",
    nutrition: { cal: "420 kcal", prot: "6 g", glu: "48 g", lip: "22 g" }
  },
  "cafe-gourmand": {
    title: "CAFÉ GOURMAND",
    img: "images_plats/cafe-gourmand.jpg",
    ingredients: "Café accompagné d'un loukoum de Syros ou d'un kourabié.",
    allergens: "Voir pâtisseries.",
    nutrition: { cal: "150 kcal", prot: "2 g", glu: "20 g", lip: "5 g" }
  },

  // BOISSONS
  "ouzo": {
    title: "OUZO PLOMARI",
    img: "images_plats/ouzo-plomari.jpg",
    ingredients: "Boisson anisée traditionnelle (4cl / 20cl).",
    allergens: "Aucun.",
    nutrition: { cal: "110 kcal", prot: "0 g", glu: "11 g", lip: "0 g" }
  },
  "muscat": {
    title: "MUSCAT DE SAMOS",
    img: "images_plats/muscat-samos.jpg",
    ingredients: "Vin doux naturel Grand Cru de Samos (6cl).",
    allergens: "Sulfites.",
    nutrition: { cal: "90 kcal", prot: "0 g", glu: "5 g", lip: "0 g" }
  },
  "metaxa": {
    title: "METAXA",
    img: "images_plats/metaxa.jpg",
    ingredients: "Spiritueux grec ambré (4cl).",
    allergens: "Aucun.",
    nutrition: { cal: "220 kcal", prot: "0 g", glu: "0 g", lip: "0 g" }
  },
  "tsipouro": {
    title: "TSIPOURO",
    img: "images_plats/tsipouro.jpg",
    ingredients: "Eau-de-vie de marc de raisin grecque (4cl).",
    allergens: "Aucun.",
    nutrition: { cal: "200 kcal", prot: "0 g", glu: "0 g", lip: "0 g" }
  },
  "rakomelo": {
    title: "RAKOMELO",
    img: "images_plats/rakomelo.jpg",
    ingredients: "Raki au miel, cannelle et clou de girofle (4cl / 20cl).",
    allergens: "Aucun.",
    nutrition: { cal: "240 kcal", prot: "0 g", glu: "20 g", lip: "0 g" }
  },
  "eau": {
    title: "EAU MINÉRALE / GAZEUSE",
    img: "images_plats/eau-minerale.jpg",
    ingredients: "Eau de source plate ou gazeuse (50cl).",
    allergens: "Aucun.",
    nutrition: { cal: "0 kcal", prot: "0 g", glu: "0 g", lip: "0 g" }
  },
  "sodas": {
    title: "SODAS",
    img: "images_plats/sodas.jpg",
    ingredients: "Coca-Cola, Limonade citron, Thé pêche, Orangeade (33cl).",
    allergens: "Voir canette.",
    nutrition: { cal: "140 kcal", prot: "0 g", glu: "35 g", lip: "0 g" }
  },
  "mythos": {
    title: "BIÈRE MYTHOS",
    img: "images_plats/mythos.jpg",
    ingredients: "Bière blonde grecque (malt d'orge).",
    allergens: "Gluten.",
    nutrition: { cal: "150 kcal", prot: "1 g", glu: "10 g", lip: "0 g" }
  },
  "cafe": {
    title: "CAFÉ NESPRESSO",
    img: "images_plats/cafe-nespresso.jpg",
    ingredients: "Café torréfié.",
    allergens: "Aucun.",
    nutrition: { cal: "2 kcal", prot: "0 g", glu: "0 g", lip: "0 g" }
  },

  // FALLBACK SÉCURISÉ
  "default": {
    title: "DÉTAILS DU PLAT",
    img: "images_resto/facade.jpg",
    ingredients: "Demandez au chef pour la liste précise des ingrédients de ce plat fait maison.",
    allergens: "Traces possibles de fruits à coque, gluten et lactose.",
    nutrition: { cal: "-", prot: "-", glu: "-", lip: "-" }
  }
};

// --- 2. NAVIGATION PAR ONGLETS (TABS) ---
const navItems = document.querySelectorAll('.nav-item');
const tabContents = document.querySelectorAll('.tab-content');

navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    navItems.forEach(nav => {
      nav.classList.remove('active');
      nav.setAttribute('aria-selected', 'false');
    });

    item.classList.add('active');
    item.setAttribute('aria-selected', 'true');

    tabContents.forEach(content => content.classList.remove('active'));

    const targetId = item.getAttribute('data-target');
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add('active');
    }
  });
});

// --- 3. GESTION DES MODALES (CERTIFS, PLAT & LIGHTBOX) ---
const certifsModal = document.getElementById('certifs-modal');
const dishModal = document.getElementById('dish-modal');
const lightboxModal = document.getElementById('lightbox-modal');
const allModals = [certifsModal, dishModal, lightboxModal];

function openModal(modal) {
  if (!modal) return;
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeAllModals() {
  allModals.forEach(modal => {
    if (modal) {
      modal.classList.remove('active');
      modal.setAttribute('aria-hidden', 'true');
    }
  });
  document.body.classList.remove('modal-open');
}

// Bouton Certifications
const certifsBtn = document.getElementById('open-certifs');
const stopProp = (e) => e.stopPropagation();

certifsBtn.addEventListener('mousedown', stopProp);
certifsBtn.addEventListener('touchstart', stopProp, { passive: true });
certifsBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  openModal(certifsModal);
});

// Ouverture Modale Détails d'un Plat
const menuItems = document.querySelectorAll('.menu-item');
const mImg = document.getElementById('modal-img');
const mTitle = document.getElementById('modal-title');
const mIng = document.getElementById('modal-ingredients');
const mAll = document.getElementById('modal-allergens');
const nCal = document.getElementById('nutri-cal');
const nProt = document.getElementById('nutri-prot');
const nGlu = document.getElementById('nutri-glu');
const nLip = document.getElementById('nutri-lip');
const nutriToggle = document.getElementById('nutrition-toggle');
const nutriContent = document.getElementById('nutrition-content');
const nutriIcon = document.getElementById('nutrition-icon');

// Fallback automatique si une image ne peut pas être chargée
mImg.addEventListener('error', () => {
  if (!mImg.src.endsWith('images_resto/facade.jpg')) {
    mImg.src = 'images_resto/facade.jpg';
  }
});

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    const id = item.getAttribute('data-id');
    const nameEl = item.querySelector('.item-name');
    const cleanName = nameEl
      ? nameEl.childNodes[0].textContent.trim()
      : dishesData["default"].title;

    // Copie superficielle pour ne jamais muter dishesData["default"]
    const data = dishesData[id]
      ? dishesData[id]
      : {
          ...dishesData["default"],
          title: cleanName
        };

    mImg.src = data.img;
    mImg.alt = data.title;
    mTitle.textContent = data.title;
    mIng.textContent = data.ingredients;
    mAll.textContent = data.allergens;
    nCal.textContent = data.nutrition.cal;
    nProt.textContent = data.nutrition.prot;
    nGlu.textContent = data.nutrition.glu;
    nLip.textContent = data.nutrition.lip;

    // Réinitialisation de l'accordéon nutrition
    nutriContent.classList.remove('open');
    nutriToggle.setAttribute('aria-expanded', 'false');
    nutriIcon.className = 'fas fa-chevron-down';

    openModal(dishModal);
  });
});

// Fermeture des modales (boutons X, clic sur l'overlay, touche Escape)
document.querySelectorAll('.close-modal').forEach(btn => {
  btn.addEventListener('click', closeAllModals);
});

document.getElementById('close-lightbox').addEventListener('click', closeAllModals);

window.addEventListener('click', (e) => {
  if (allModals.includes(e.target)) {
    closeAllModals();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  } else if (lightboxModal.classList.contains('active')) {
    if (e.key === 'ArrowRight') lightboxSlider.next();
    if (e.key === 'ArrowLeft') lightboxSlider.prev();
  }
});

// Accordéon Valeurs Nutritionnelles
nutriToggle.addEventListener('click', () => {
  const isOpen = nutriContent.classList.toggle('open');
  nutriToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  nutriIcon.className = isOpen ? 'fas fa-chevron-up' : 'fas fa-chevron-down';
});

// --- 4. COMPOSANT SLIDER ULTRA-FLUIDE (Header + Lightbox) ---
function setupSlider(containerId, trackId, dotsId, isLightbox = false) {
  const container = document.getElementById(containerId);
  const track = document.getElementById(trackId);
  const dotsContainer = dotsId ? document.getElementById(dotsId) : null;
  const dots = dotsContainer ? dotsContainer.querySelectorAll('.slider-dot') : [];
  const slides = track.querySelectorAll(isLightbox ? '.lightbox-slide' : '.header-slide');

  let currentIndex = 0;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let prevTranslate = 0;
  let isDragging = false;
  let isHorizontalSwipe = null;
  let startTime = 0;

  const updateDots = () => {
    dots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentIndex);
    });
  };

  const setPosition = (animate = true) => {
    const slideWidth = container.clientWidth;
    prevTranslate = currentIndex * -slideWidth;
    track.style.transition = animate
      ? 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)'
      : 'none';
    track.style.transform = `translate3d(${prevTranslate}px, 0, 0)`;
    updateDots();
  };

  const applyDragTransform = (rawDiff) => {
    let diff = rawDiff;
    // Résistance élastique douce aux extrémités (1ère et dernière image)
    if (
      (currentIndex === 0 && diff > 0) ||
      (currentIndex === slides.length - 1 && diff < 0)
    ) {
      diff = diff * 0.32;
    }
    track.style.transform = `translate3d(${prevTranslate + diff}px, 0, 0)`;
  };

  const finishDrag = (endX) => {
    if (!isDragging) return;
    isDragging = false;
    container.style.cursor = 'grab';

    const movedBy = endX - startX;
    const timeElapsed = Math.max(1, Date.now() - startTime);
    const velocity = movedBy / timeElapsed; // px par ms
    const slideWidth = container.clientWidth || 375;

    // Clic simple (Tap) -> ouvre la Lightbox
    if (!isLightbox && Math.abs(movedBy) < 8 && timeElapsed < 280) {
      openLightbox(currentIndex);
      setPosition(true);
      return;
    }

    // Seuil adaptatif : soit un mouvement rapide (flick), soit un déplacement de 14% de la largeur
    const threshold = Math.min(45, slideWidth * 0.14);
    const isFastFlick = Math.abs(velocity) > 0.25 && Math.abs(movedBy) > 15;

    if ((movedBy < -threshold || (isFastFlick && movedBy < 0)) && currentIndex < slides.length - 1) {
      currentIndex++;
    } else if ((movedBy > threshold || (isFastFlick && movedBy > 0)) && currentIndex > 0) {
      currentIndex--;
    }

    setPosition(true);
  };

  // Clic sur les points indicateurs
  dots.forEach((dot, idx) => {
    dot.addEventListener('click', (e) => {
      e.stopPropagation();
      currentIndex = idx;
      setPosition(true);
    });
  });

  // --- ÉVÉNEMENTS TACTILES (MOBILE) ---
  container.addEventListener('touchstart', (e) => {
    if (e.target.closest('.certifs-btn') || e.target.closest('.slider-dots')) return;
    const slideWidth = container.clientWidth;
    prevTranslate = currentIndex * -slideWidth;
    isDragging = true;
    isHorizontalSwipe = null;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    currentX = startX;
    startTime = Date.now();
    track.style.transition = 'none';
  }, { passive: true });

  container.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;
    const diffX = currentX - startX;
    const diffY = currentY - startY;

    // Détermine dès les premiers pixels si l'utilisateur swipe horizontalement ou scrolle la page
    if (isHorizontalSwipe === null && (Math.abs(diffX) > 4 || Math.abs(diffY) > 4)) {
      isHorizontalSwipe = Math.abs(diffX) >= Math.abs(diffY);
    }

    if (isHorizontalSwipe === false) {
      isDragging = false;
      setPosition(true);
      return;
    }

    if (e.cancelable) e.preventDefault();
    applyDragTransform(diffX);
  }, { passive: false });

  container.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const endX = e.changedTouches && e.changedTouches[0] ? e.changedTouches[0].clientX : currentX;
    finishDrag(endX);
  });

  container.addEventListener('touchcancel', () => {
    if (!isDragging) return;
    finishDrag(currentX);
  });

  // --- ÉVÉNEMENTS SOURIS (DESKTOP — écoute sur window pour ne jamais perdre le grip) ---
  container.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    if (e.target.closest('.certifs-btn') || e.target.closest('.slider-dots')) return;
    const slideWidth = container.clientWidth;
    prevTranslate = currentIndex * -slideWidth;
    isDragging = true;
    startX = e.clientX;
    currentX = startX;
    startTime = Date.now();
    track.style.transition = 'none';
    container.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    currentX = e.clientX;
    applyDragTransform(currentX - startX);
  });

  window.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    finishDrag(e.clientX);
  });

  // Recalcul automatique au redimensionnement de la fenêtre
  window.addEventListener('resize', () => {
    setPosition(false);
  });

  return {
    goTo: (index, animate = true) => {
      currentIndex = index;
      setPosition(animate);
    },
    next: () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        setPosition(true);
      }
    },
    prev: () => {
      if (currentIndex > 0) {
        currentIndex--;
        setPosition(true);
      }
    }
  };
}

// Initialisation des deux sliders
const headerSlider = setupSlider('header-container', 'header-track', 'header-dots', false);
const lightboxSlider = setupSlider('lightbox-container', 'lightbox-track', 'lightbox-dots', true);

function openLightbox(index) {
  openModal(lightboxModal);
  requestAnimationFrame(() => {
    lightboxSlider.goTo(index, false);
  });
}

document.getElementById('lb-prev').addEventListener('click', (e) => {
  e.stopPropagation();
  lightboxSlider.prev();
});

document.getElementById('lb-next').addEventListener('click', (e) => {
  e.stopPropagation();
  lightboxSlider.next();
});
