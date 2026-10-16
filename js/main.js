/**
 * AALA PHARMA - Main JavaScript Application File
 * Version: 1.0.0
 * Architecture: Vanilla ES6+ (No jQuery or external frameworks)
 * Features:
 *   - Product Catalogue Array (easily swappable with PHP/MySQL backend API)
 *   - Interactive Product Search, Filter & Detail Modal
 *   - Animated Number Counters with IntersectionObserver
 *   - Accessible Testimonial Slider / Carousel
 *   - Robust Form Validation with Accessible Feedback & PHP-ready payloads
 *   - Sticky Navigation Header & Back-To-Top Controller
 *   - Mobile Hamburger Menu Controller
 *   - Scroll-Reveal Staggered Animations
 *   - Dynamic Nav Link Highlighting
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. PRODUCTS DATA STORE (Easily swappable with PHP / MySQL / REST API)
  // =========================================================================
  const AALA_PRODUCTS = [
    {
      id: 'prod-001',
      name: 'AALAMOXY-CV 625',
      category: 'tablets',
      therapeutic: 'Anti-Infective / Antibiotic',
      composition: 'Amoxicillin Trihydrate 500mg + Potassium Clavulanate 125mg',
      packing: '10 x 1 x 10 Alu-Alu Strip',
      dosageForm: 'Film-Coated Tablet',
      indications: 'Upper & lower respiratory tract infections, UTI, skin and soft tissue infections, dental abscesses.',
      storage: 'Store in a cool, dry place protected from light and moisture. Below 25°C.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 'prod-002',
      name: 'AALAPANT-DSR',
      category: 'capsules',
      therapeutic: 'Gastroenterology',
      composition: 'Pantoprazole Sodium 40mg + Domperidone 30mg (SR)',
      packing: '10 x 10 Alu-Alu Strip',
      dosageForm: 'Sustained Release Capsule',
      indications: 'Gastroesophageal Reflux Disease (GERD), acid peptic disorders, dyspepsia and nausea.',
      storage: 'Store in a cool place away from moisture and direct sunlight.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 'prod-003',
      name: 'AALAFENAC-SP',
      category: 'tablets',
      therapeutic: 'Analgesic & Anti-Inflammatory',
      composition: 'Aceclofenac 100mg + Paracetamol 325mg + Serratiopeptidase 15mg',
      packing: '10 x 10 Blister Pack',
      dosageForm: 'Enteric Coated Tablet',
      indications: 'Post-operative inflammation, osteoarthritis, rheumatoid arthritis, dental pain and sports injuries.',
      storage: 'Store below 30°C in a dry place.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 'prod-004',
      name: 'AALA-KOF BR SYRUP',
      category: 'syrups',
      therapeutic: 'Respiratory / Cough Care',
      composition: 'Terbutaline Sulphate 1.25mg + Bromhexine HCl 4mg + Guaiphenesin 50mg + Menthol 2.5mg / 5ml',
      packing: '100ml PET Bottle with Measuring Cap',
      dosageForm: 'Oral Expectorant Syrup',
      indications: 'Productive wet cough, bronchitis, bronchial asthma, and emphysema.',
      storage: 'Keep bottle tightly closed. Protect from freezing and direct light.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 'prod-005',
      name: 'AALATRION-1G',
      category: 'injectables',
      therapeutic: 'Critical Care / Antibiotic',
      composition: 'Ceftriaxone Sodium Sterile USP 1000mg with Sterile Water for Injection',
      packing: 'Vial with 10ml WFI in Mono Carton',
      dosageForm: 'Dry Powder for Injection (IV/IM)',
      indications: 'Bacterial meningitis, septicemia, bone and joint infections, surgical prophylaxis.',
      storage: 'Store below 25°C. Protect from light. Do not freeze reconstituted solution.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 'prod-006',
      name: 'AALADERM-PLUS',
      category: 'ointments',
      therapeutic: 'Dermatology',
      composition: 'Clobetasol Propionate 0.05% + Neomycin Sulphate 0.5% + Miconazole Nitrate 2.0% w/w',
      packing: '15g Lami Tube in Carton',
      dosageForm: 'Topical Ointment',
      indications: 'Mixed dermatological infections, eczema, fungal and bacterial pruritic dermatoses.',
      storage: 'Store in a cool place. Do not freeze. For external topical use only.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      featured: true
    },
    {
      id: 'prod-007',
      name: 'AALAPRES-AT',
      category: 'tablets',
      therapeutic: 'Cardiovascular Care',
      composition: 'Amlodipine Besylate 5mg + Atenolol 50mg',
      packing: '10 x 14 Strip Pack',
      dosageForm: 'Uncoated Bilayer Tablet',
      indications: 'Essential hypertension, chronic stable angina pectoris and coronary artery disease.',
      storage: 'Store protected from moisture and light at temperature not exceeding 30°C.',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 'prod-008',
      name: 'AALA-VIT GOLD',
      category: 'capsules',
      therapeutic: 'Nutraceuticals & Wellness',
      composition: 'Ginseng Extract + Multivitamins + Multiminerals + Antioxidants',
      packing: '3 x 10 Blister Pack',
      dosageForm: 'Soft Gelatin Capsule',
      indications: 'General weakness, fatigue, convalescence, stress and immunity enhancement.',
      storage: 'Store in a cool, dry and dark place below 25°C.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 'prod-009',
      name: 'AALACEF-O 200',
      category: 'tablets',
      therapeutic: 'Anti-Infective / Antibiotic',
      composition: 'Cefixime Trihydrate 200mg',
      packing: '10 x 10 Alu-Alu Strip',
      dosageForm: 'Film-Coated Tablet',
      indications: 'Typhoid fever, uncomplicated urinary tract infections, otitis media, pharyngitis.',
      storage: 'Store below 25°C in a dry place.',
      image: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 'prod-010',
      name: 'AALALAC-SYRUP',
      category: 'syrups',
      therapeutic: 'Gastroenterology',
      composition: 'Lactulose Solution USP 10g / 15ml',
      packing: '200ml Bottle with Measure',
      dosageForm: 'Palatable Oral Liquid',
      indications: 'Chronic constipation, hepatic encephalopathy, pre-operative bowel clearance.',
      storage: 'Store at room temperature between 15°C and 30°C. Do not freeze.',
      image: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 'prod-011',
      name: 'AALAMIK-500',
      category: 'injectables',
      therapeutic: 'Critical Care / Antibiotic',
      composition: 'Amikacin Sulphate IP 500mg / 2ml',
      packing: '2ml Ampoule in Tray',
      dosageForm: 'Aqueous Solution for Injection',
      indications: 'Severe multidrug-resistant gram-negative bacterial infections, septicemia, intra-abdominal infections.',
      storage: 'Store between 15°C and 30°C. Protect from light.',
      image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=600&q=80',
      featured: false
    },
    {
      id: 'prod-012',
      name: 'AALACIN-G GEL',
      category: 'ointments',
      therapeutic: 'Dermatology / Acne Care',
      composition: 'Clindamycin Phosphate 1.0% + Nicotinamide 4.0% w/w',
      packing: '20g Aluminum Collapsible Tube',
      dosageForm: 'Topical Gel',
      indications: 'Acne vulgaris, inflammatory papules, pustules, and epidermal blemishes.',
      storage: 'Keep tube tightly capped after use. Store below 25°C.',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
      featured: false
    }
  ];

  // =========================================================================
  // 2. STICKY HEADER & BACK-TO-TOP BUTTON
  // =========================================================================
  const header = document.querySelector('.header');
  const backToTopBtn = document.querySelector('.back-to-top');

  const handleScroll = () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    // Header styling
    if (header) {
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back to top visibility
    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('is-visible');
      } else {
        backToTopBtn.classList.remove('is-visible');
      }
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // =========================================================================
  // 3. MOBILE MENU TOGGLE (Accessible with focus and outside-click handle)
  // =========================================================================
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navBackdrop = document.querySelector('.mobile-nav-backdrop');

  const toggleMobileNav = (forceClose = false) => {
    if (!hamburger || !navMenu) return;

    const isOpen = forceClose ? false : !navMenu.classList.contains('is-active');

    hamburger.classList.toggle('is-active', isOpen);
    navMenu.classList.toggle('is-active', isOpen);
    document.body.classList.toggle('nav-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    if (navBackdrop) {
      navBackdrop.classList.toggle('is-active', isOpen);
    }
  };

  if (hamburger) {
    hamburger.addEventListener('click', () => toggleMobileNav());
  }

  if (navBackdrop) {
    navBackdrop.addEventListener('click', () => toggleMobileNav(true));
  }

  // Close mobile nav when clicking a link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 1024) {
        toggleMobileNav(true);
      }
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('is-active')) {
      toggleMobileNav(true);
    }
  });

  // =========================================================================
  // 4. ACTIVE NAVIGATION LINK HIGHLIGHTING
  // =========================================================================
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (linkHref === currentPath || (currentPath === '' && linkHref === 'index.html')) {
      link.classList.add('active');
    }
  });

  // =========================================================================
  // 5. ANIMATED NUMBER COUNTERS (IntersectionObserver)
  // =========================================================================
  const counterElements = document.querySelectorAll('.stat-number');

  if (counterElements.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const targetValue = parseFloat(counter.getAttribute('data-target') || '0');
          const suffix = counter.getAttribute('data-suffix') || '';
          const duration = 1800; // ms
          const startTime = performance.now();

          const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease-out cubic calculation
            const easeOutProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = Math.floor(easeOutProgress * targetValue);

            counter.innerHTML = `${currentVal.toLocaleString()}<span class="suffix">${suffix}</span>`;

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerHTML = `${targetValue.toLocaleString()}<span class="suffix">${suffix}</span>`;
            }
          };

          requestAnimationFrame(updateCounter);
          observer.unobserve(counter);
        }
      });
    }, { threshold: 0.25 });

    counterElements.forEach(counter => counterObserver.observe(counter));
  }

  // =========================================================================
  // 6. SCROLL REVEAL ANIMATIONS
  // =========================================================================
  const revealElements = document.querySelectorAll('.reveal');

  if (revealElements.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '0px 0px -60px 0px',
      threshold: 0.1
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback if IntersectionObserver unsupported
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  // =========================================================================
  // 7. PRODUCT CATALOGUE RENDER, FILTER & SEARCH
  // =========================================================================
  const productsGrid = document.getElementById('products-catalogue-grid');
  const featuredGrid = document.getElementById('featured-products-grid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  const searchInput = document.getElementById('product-search-input');
  const resultsCount = document.getElementById('product-results-count');

  // Modal elements
  const productModal = document.getElementById('product-detail-modal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');

  // Helper to build a product card HTML
  const createProductCardHTML = (prod) => {
    return `
      <article class="product-card reveal is-visible" data-id="${prod.id}" data-category="${prod.category}">
        <div class="product-image">
          <span class="product-category-tag">${prod.category}</span>
          <img src="${prod.image}" alt="${prod.name} packaging" loading="lazy">
        </div>
        <div class="product-body">
          <div class="product-therapeutic-tag">${prod.therapeutic}</div>
          <h3 class="product-name">${prod.name}</h3>
          <p class="product-composition">${prod.composition}</p>
          <div class="product-meta-row">
            <span><i class="fa-solid fa-box-archive"></i> ${prod.packing}</span>
            <span><i class="fa-solid fa-pills"></i> ${prod.dosageForm}</span>
          </div>
          <div class="product-actions">
            <button type="button" class="btn btn-primary btn-sm view-product-details-btn" data-product-id="${prod.id}">
              <i class="fa-solid fa-circle-info"></i> View Details
            </button>
            <a href="contact.html?product=${encodeURIComponent(prod.name)}" class="btn btn-outline-primary btn-sm">
              <i class="fa-solid fa-envelope"></i> Enquire
            </a>
          </div>
        </div>
      </article>
    `;
  };

  // Render on Homepage Featured Section
  if (featuredGrid) {
    const featuredList = AALA_PRODUCTS.filter(p => p.featured);
    featuredGrid.innerHTML = featuredList.map(createProductCardHTML).join('');
  }

  // Render & Filter on Products Page
  if (productsGrid) {
    let currentCategory = 'all';
    let currentSearchTerm = '';

    const filterAndRenderProducts = () => {
      const filtered = AALA_PRODUCTS.filter(prod => {
        const matchesCategory = currentCategory === 'all' || prod.category === currentCategory;
        const matchesSearch = currentSearchTerm === '' ||
          prod.name.toLowerCase().includes(currentSearchTerm) ||
          prod.composition.toLowerCase().includes(currentSearchTerm) ||
          prod.therapeutic.toLowerCase().includes(currentSearchTerm);
        return matchesCategory && matchesSearch;
      });

      if (filtered.length === 0) {
        productsGrid.innerHTML = `
          <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem;">
            <i class="fa-solid fa-magnifying-glass" style="font-size: 3rem; color: #94A3B8; margin-bottom: 1rem;"></i>
            <h3>No products found</h3>
            <p>Try searching with another keyword or selecting a different dosage category.</p>
          </div>
        `;
      } else {
        productsGrid.innerHTML = filtered.map(createProductCardHTML).join('');
      }

      if (resultsCount) {
        resultsCount.textContent = `Showing ${filtered.length} of ${AALA_PRODUCTS.length} formulations`;
      }
    };

    // Category button click
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.getAttribute('data-filter') || 'all';
        filterAndRenderProducts();
      });
    });

    // Search input typing
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        currentSearchTerm = e.target.value.trim().toLowerCase();
        filterAndRenderProducts();
      });
    }

    // Initial render
    filterAndRenderProducts();
  }

  // =========================================================================
  // 8. PRODUCT DETAIL MODAL CONTROLLER
  // =========================================================================
  const openProductModal = (productId) => {
    const product = AALA_PRODUCTS.find(p => p.id === productId);
    if (!product || !productModal) return;

    // Fill in modal details
    const modalImage = productModal.querySelector('.modal-img-tag');
    const modalTitle = productModal.querySelector('.modal-title');
    const modalComp = productModal.querySelector('.modal-comp');
    const modalTherapeutic = productModal.querySelector('.modal-therapeutic');
    const modalDosage = productModal.querySelector('.modal-dosage');
    const modalPacking = productModal.querySelector('.modal-packing');
    const modalIndications = productModal.querySelector('.modal-indications');
    const modalStorage = productModal.querySelector('.modal-storage');
    const modalEnquiryBtn = productModal.querySelector('.modal-enquiry-btn');

    if (modalImage) modalImage.src = product.image;
    if (modalTitle) modalTitle.textContent = product.name;
    if (modalComp) modalComp.textContent = product.composition;
    if (modalTherapeutic) modalTherapeutic.textContent = product.therapeutic;
    if (modalDosage) modalDosage.textContent = product.dosageForm;
    if (modalPacking) modalPacking.textContent = product.packing;
    if (modalIndications) modalIndications.textContent = product.indications;
    if (modalStorage) modalStorage.textContent = product.storage;
    if (modalEnquiryBtn) {
      modalEnquiryBtn.href = `contact.html?product=${encodeURIComponent(product.name)}`;
    }

    productModal.classList.add('is-open');
    document.body.classList.add('nav-open');
  };

  const closeProductModal = () => {
    if (!productModal) return;
    productModal.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  };

  // Delegate click for detail buttons
  document.addEventListener('click', (e) => {
    const detailBtn = e.target.closest('.view-product-details-btn');
    if (detailBtn) {
      const prodId = detailBtn.getAttribute('data-product-id');
      openProductModal(prodId);
    }
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeProductModal);
  }

  if (productModal) {
    productModal.addEventListener('click', (e) => {
      if (e.target === productModal) {
        closeProductModal();
      }
    });
  }

  // =========================================================================
  // 9. TESTIMONIAL SLIDER / CAROUSEL
  // =========================================================================
  const testimonialTrack = document.querySelector('.testimonial-track');
  const prevTestimonialBtn = document.querySelector('.testimonial-arrow.prev');
  const nextTestimonialBtn = document.querySelector('.testimonial-arrow.next');
  const testimonialDotsContainer = document.querySelector('.testimonial-dots');

  if (testimonialTrack) {
    const slides = Array.from(testimonialTrack.children);
    let currentIndex = 0;
    let autoSlideInterval = null;

    // Create dot indicators
    if (testimonialDotsContainer) {
      testimonialDotsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('div');
        dot.classList.add('testimonial-dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        testimonialDotsContainer.appendChild(dot);
      });
    }

    const updateSlider = () => {
      testimonialTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      if (testimonialDotsContainer) {
        const dots = testimonialDotsContainer.querySelectorAll('.testimonial-dot');
        dots.forEach((dot, idx) => {
          dot.classList.toggle('active', idx === currentIndex);
        });
      }
    };

    const goToSlide = (index) => {
      currentIndex = (index + slides.length) % slides.length;
      updateSlider();
    };

    const startAutoSlide = () => {
      stopAutoSlide();
      autoSlideInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5500);
    };

    const stopAutoSlide = () => {
      if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
      }
    };

    if (prevTestimonialBtn) {
      prevTestimonialBtn.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
        startAutoSlide();
      });
    }

    if (nextTestimonialBtn) {
      nextTestimonialBtn.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
        startAutoSlide();
      });
    }

    testimonialTrack.addEventListener('mouseenter', stopAutoSlide);
    testimonialTrack.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
  }

  // =========================================================================
  // 10. FORM VALIDATION & PHP-READY SUBMISSION
  // =========================================================================
  const formsToValidate = document.querySelectorAll('form[data-validate="true"]');

  const showInputError = (input, message) => {
    input.classList.add('is-invalid');
    let feedback = input.parentElement.querySelector('.form-feedback');
    if (!feedback) {
      feedback = document.createElement('div');
      feedback.classList.add('form-feedback');
      input.parentElement.appendChild(feedback);
    }
    feedback.textContent = message;
    feedback.classList.add('is-visible');
    input.setAttribute('aria-invalid', 'true');
  };

  const clearInputError = (input) => {
    input.classList.remove('is-invalid');
    const feedback = input.parentElement.querySelector('.form-feedback');
    if (feedback) {
      feedback.classList.remove('is-visible');
    }
    input.removeAttribute('aria-invalid');
  };

  formsToValidate.forEach(form => {
    // Realtime input clearing
    const formInputs = form.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
      input.addEventListener('input', () => clearInputError(input));
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate Name
      const nameInput = form.querySelector('[name="fullname"], [name="name"]');
      if (nameInput) {
        if (!nameInput.value.trim() || nameInput.value.trim().length < 3) {
          showInputError(nameInput, 'Please provide your full name (minimum 3 characters).');
          isValid = false;
        } else {
          clearInputError(nameInput);
        }
      }

      // Validate Email
      const emailInput = form.querySelector('[name="email"]');
      if (emailInput) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
          showInputError(emailInput, 'Please enter a valid official email address.');
          isValid = false;
        } else {
          clearInputError(emailInput);
        }
      }

      // Validate Phone
      const phoneInput = form.querySelector('[name="phone"], [name="mobile"]');
      if (phoneInput) {
        // Indian 10-digit mobile number format
        const phoneRegex = /^[6-9]\d{9}$/;
        const cleanPhone = phoneInput.value.replace(/[\s\-\(\)\+]/g, '').slice(-10);
        if (!phoneRegex.test(cleanPhone)) {
          showInputError(phoneInput, 'Please enter a valid 10-digit mobile number.');
          isValid = false;
        } else {
          clearInputError(phoneInput);
        }
      }

      // Validate Message / Cover Letter
      const messageInput = form.querySelector('[name="message"]');
      if (messageInput) {
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
          showInputError(messageInput, 'Please write your message or enquiry (at least 10 characters).');
          isValid = false;
        } else {
          clearInputError(messageInput);
        }
      }

      // If valid, simulate submission and prepare for PHP endpoint
      if (isValid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalBtnHTML = submitBtn ? submitBtn.innerHTML : 'Submit';
        
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing...';
        }

        // Simulate network latency (2 seconds)
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
          }

          // Show status alert
          let statusAlert = form.querySelector('.form-status-alert');
          if (!statusAlert) {
            statusAlert = document.createElement('div');
            statusAlert.classList.add('form-status-alert');
            form.prepend(statusAlert);
          }

          statusAlert.className = 'form-status-alert alert-success';
          statusAlert.innerHTML = `
            <i class="fa-solid fa-circle-check"></i>
            <div>
              <strong>Thank you for contacting AALA Pharma!</strong>
              <p style="margin: 0; font-size: 0.85rem; color: inherit;">
                Your enquiry has been received. Our regulatory & medical team will connect with you at your provided details shortly.
              </p>
            </div>
          `;
          statusAlert.style.display = 'flex';

          // Reset form fields
          form.reset();

          // Scroll to alert
          statusAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 1200);
      }
    });
  });

  // =========================================================================
  // 11. PRE-POPULATE ENQUIRY FROM URL QUERY PARAMS
  // =========================================================================
  const urlParams = new URLSearchParams(window.location.search);
  const enquiryProductParam = urlParams.get('product');
  if (enquiryProductParam) {
    const subjectField = document.getElementById('contact-subject');
    const messageField = document.getElementById('contact-message');
    if (subjectField) {
      subjectField.value = 'Product Distributorship / Franchise Enquiry';
    }
    if (messageField) {
      messageField.value = `Hello AALA Pharma team,\n\nI am interested in exploring distribution, wholesale pricing, or franchise availability for: ${enquiryProductParam}.\n\nPlease share the detailed product specifications, commercial catalog, and minimum order requirements.`;
    }
  }

});
