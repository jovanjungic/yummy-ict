/**
 * Template Name: Yummy
 * Template URL: https://bootstrapmade.com/yummy-bootstrap-restaurant-website-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Initiate Pure Counter
   */
  new PureCounter();

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      new Swiper(swiperElement, config);
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();

// ODAVDE PA NADALJE JE MOJ JAVASCRIPT KOD

const menuItems = [
  {
    name: "Beef Carpaccio",
    price: 12.95,
    category: "Starters",
    image: "assets/img/menu/starter1.png",
  },
  {
    name: "Caesar Salad",
    price: 10.95,
    category: "Starters",
    image: "assets/img/menu/starter2.png",
  },
  {
    name: "Grilled Octopus",
    price: 14.95,
    category: "Starters",
    image: "assets/img/menu/starter3.png",
  },
  {
    name: "Mushroom Risotto",
    price: 11.95,
    category: "Starters",
    image: "assets/img/menu/starter4.png",
  },
  {
    name: "Tuna Tataki",
    price: 13.95,
    category: "Starters",
    image: "assets/img/menu/starter5.png",
  },
  {
    name: "Shrimp Cocktail",
    price: 10.95,
    category: "Starters",
    image: "assets/img/menu/starter6.png",
  },
  {
    name: "Eggs Benedict",
    price: 10.95,
    category: "Breakfast",
    image: "assets/img/menu/breakfast1.png",
  },
  {
    name: "Pancakes",
    price: 11.95,
    category: "Breakfast",
    image: "assets/img/menu/breakfast2.png",
  },
  {
    name: "French Toast",
    price: 10.95,
    category: "Breakfast",
    image: "assets/img/menu/breakfast3.png",
  },
  {
    name: "Shakshuka",
    price: 12.95,
    category: "Breakfast",
    image: "assets/img/menu/breakfast4.png",
  },
  {
    name: "Smoked Salmon & Avocado Toast",
    price: 10.95,
    category: "Breakfast",
    image: "assets/img/menu/breakfast5.png",
  },
  {
    name: "Breakfast Burrito",
    price: 13.95,
    category: "Breakfast",
    image: "assets/img/menu/breakfast6.png",
  },
  {
    name: "Grilled Salmon",
    price: 14.95,
    category: "Lunch",
    image: "assets/img/menu/lunch1.png",
  },
  {
    name: "Margherita Pizza",
    price: 8.95,
    category: "Lunch",
    image: "assets/img/menu/lunch2.png",
  },
  {
    name: "Pasta Carbonara",
    price: 12.95,
    category: "Lunch",
    image: "assets/img/menu/lunch3.png",
  },
  {
    name: "Beef Burger",
    price: 12.95,
    category: "Lunch",
    image: "assets/img/menu/lunch4.png",
  },
  {
    name: "Chicken Wings",
    price: 12.95,
    category: "Lunch",
    image: "assets/img/menu/lunch5.png",
  },
  {
    name: "Fish & Chips",
    price: 12.95,
    category: "Lunch",
    image: "assets/img/menu/lunch6.png",
  },
  {
    name: "Lamb Chops",
    price: 15.95,
    category: "Dinner",
    image: "assets/img/menu/dinner1.png",
  },
  {
    name: "Beef Wellington",
    price: 15.95,
    category: "Dinner",
    image: "assets/img/menu/dinner2.png",
  },
  {
    name: "Buttered Lobster",
    price: 12.95,
    category: "Dinner",
    image: "assets/img/menu/dinner3.png",
  },
  {
    name: "Peking Duck",
    price: 15.95,
    category: "Dinner",
    image: "assets/img/menu/dinner4.png",
  },
  {
    name: "Pan Seared Scallops",
    price: 12.95,
    category: "Dinner",
    image: "assets/img/menu/dinner5.png",
  },
  {
    name: "Wild Boar Ragu",
    price: 15.95,
    category: "Dinner",
    image: "assets/img/menu/dinner6.png",
  },
];

function createMenuCard(item) {
  return `
    <div class="col-lg-4 col-md-6 text-center">
      <a href="${item.image}">
        <img src="${item.image}" class="img-fluid w-100 menu-img mb-3" alt="${item.name}">
      </a>
      <h4 class="mb-2">${item.name}</h4>
      <p class="price fw-bold mb-0">$${item.price}</p>
    </div>
  `;
}

function renderMenuItems(category) {
  const container = document.getElementById("menu-items-container");
  const menuTitle = document.querySelector(".menu-title");

  if (!container) return;

  const filteredItems = menuItems.filter((item) => item.category == category);

  container.innerHTML = "";

  if (filteredItems.length == 0) {
    // Mada nikad nece doci do ovoga
    container.innerHTML =
      '<div class="col-12 text-center"><p>No items available in this category.</p></div>';
    if (menuTitle) menuTitle.textContent = category;
    return;
  }

  const cardsHTML = filteredItems.map((item) => createMenuCard(item)).join("");

  container.innerHTML = cardsHTML;

  if (menuTitle) {
    menuTitle.textContent = category;
  }
}

function initMenu() {
  const filterButtons = document.querySelectorAll(".menu-filter-btn");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      renderMenuItems(category);
    });
  });
  renderMenuItems("Starters");
}

initMenu();

function bookATable() {
  console.log("Pokusaj submita");

  const nameInput = document.getElementById("book-a-table-name");
  const emailInput = document.getElementById("book-a-table-email");
  const phoneInput = document.getElementById("book-a-table-phone");
  const dateInput = document.getElementById("book-a-table-date");
  const timeInput = document.getElementById("book-a-table-time");
  const peopleInput = document.getElementById("book-a-table-people");
  const messageInput = document.getElementById("book-a-table-message");
  const form = document.getElementById("book-a-table-form");

  // Brisi error klase
  [
    nameInput,
    emailInput,
    phoneInput,
    dateInput,
    timeInput,
    peopleInput,
    messageInput,
  ].forEach((input) => {
    if (input) {
      input.classList.remove("is-invalid");
    }
  });

  let isValid = true;
  const errors = [];

  // Ime
  const nameRegex = /^[A-ZŽĆČĐŠa-zžćčđš\s]{2,50}$/;
  if (!nameInput || !nameInput.value.trim()) {
    errors.push("Name is required");
    if (nameInput) nameInput.classList.add("is-invalid");
    isValid = false;
  } else if (!nameRegex.test(nameInput.value.trim())) {
    errors.push(
      "Name must be 2-50 characters and contain only letters and spaces."
    );
    nameInput.classList.add("is-invalid");
    isValid = false;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput || !emailInput.value.trim()) {
    errors.push("Email is required");
    if (emailInput) emailInput.classList.add("is-invalid");
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    errors.push("Please enter a valid email address");
    emailInput.classList.add("is-invalid");
    isValid = false;
  }

  // Telefon
  const phoneRegex =
    /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
  if (!phoneInput || !phoneInput.value.trim()) {
    errors.push("Phone number is required");
    if (phoneInput) phoneInput.classList.add("is-invalid");
    isValid = false;
  } else if (!phoneRegex.test(phoneInput.value.trim())) {
    errors.push("Please enter a valid phone number");
    phoneInput.classList.add("is-invalid");
    isValid = false;
  }

  // Datum
  if (!dateInput || !dateInput.value) {
    errors.push("Date is required");
    if (dateInput) dateInput.classList.add("is-invalid");
    isValid = false;
  } else {
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selectedDate < today) {
      errors.push("Reservation date must be today or after today.");
      dateInput.classList.add("is-invalid");
      isValid = false;
    }
  }

  // Vreme
  if (!timeInput || !timeInput.value) {
    errors.push("Time is required");
    if (timeInput) timeInput.classList.add("is-invalid");
    isValid = false;
  } else {
    const timeValue = timeInput.value.split(":");
    const hours = parseInt(timeValue[0]);

    if (hours < 11 || hours > 23) {
      errors.push("Reservation time must be between 11:00 and 23:00");
      timeInput.classList.add("is-invalid");
      isValid = false;
    }
  }

  // Ljudi
  if (!peopleInput || !peopleInput.value) {
    errors.push("Number of people is required");
    if (peopleInput) peopleInput.classList.add("is-invalid");
    isValid = false;
  } else {
    const people = parseInt(peopleInput.value);
    if (isNaN(people) || people < 1 || people > 20) {
      errors.push("Number of people must be between 1 and 20");
      peopleInput.classList.add("is-invalid");
      isValid = false;
    }
  }

  // Poruka
  if (messageInput && messageInput.value.trim()) {
    if (messageInput.value.trim().length > 500) {
      errors.push("Message must be 500 characters or less");
      messageInput.classList.add("is-invalid");
      isValid = false;
    }
  }

  const errorDiv = form.querySelector(".error-message");
  
  if (!isValid) {
    if (errorDiv) {
      errorDiv.textContent = errors.join(", ");
      errorDiv.style.display = "block";
    }
    return false;
  }

  if (errorDiv) {
    errorDiv.style.display = "none";
  }

  const sentMessage = form.querySelector(".sent-message");
  if (sentMessage) {
    sentMessage.style.display = "block";
  }

  return true;
}

const form = document.getElementById("book-a-table-form");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if(bookATable()) {
      form.reset();
    }
  });
}

function contactForm() {
  const nameInput = document.getElementById("contact-form-name");
  const emailInput = document.getElementById("contact-form-email");
  const subjectInput = document.getElementById("contact-form-subject");
  const messageInput = document.getElementById("contact-form-message");
  const form = document.getElementById("contact-form");

  // Brisi error klase
  [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
    if (input) {
      input.classList.remove("is-invalid");
    }
  });

  let isValid = true;
  const errors = [];

  // Ime
  const nameRegex = /^[A-ZŽĆČĐŠa-zžćčđš\s]{2,50}$/;
  if (!nameInput || !nameInput.value.trim()) {
    errors.push("Name is required");
    if (nameInput) nameInput.classList.add("is-invalid");
    isValid = false;
  } else if (!nameRegex.test(nameInput.value.trim())) {
    errors.push(
      "Name must be 2-50 characters and contain only letters and spaces."
    );
    nameInput.classList.add("is-invalid");
    isValid = false;
  }

  // Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailInput || !emailInput.value.trim()) {
    errors.push("Email is required");
    if (emailInput) emailInput.classList.add("is-invalid");
    isValid = false;
  } else if (!emailRegex.test(emailInput.value.trim())) {
    errors.push("Please enter a valid email address");
    emailInput.classList.add("is-invalid");
    isValid = false;
  }

  // Subject
  if (!subjectInput || !subjectInput.value.trim()) {
    errors.push("Subject is required");
    if (subjectInput) subjectInput.classList.add("is-invalid");
    isValid = false;
  } else if (
    subjectInput.value.trim().length < 3 ||
    subjectInput.value.trim().length > 100
  ) {
    errors.push("Subject must be between 3 and 100 characters");
    subjectInput.classList.add("is-invalid");
    isValid = false;
  }

  // Message
  if (!messageInput || !messageInput.value.trim()) {
    errors.push("Message is required");
    if (messageInput) messageInput.classList.add("is-invalid");
    isValid = false;
  } else if (messageInput.value.trim().length > 500) {
    errors.push("Message must be 500 characters or less");
    messageInput.classList.add("is-invalid");
    isValid = false;
  }

  if (!isValid) {
    const errorDiv = form.querySelector(".error-message");
    if (errorDiv) {
      errorDiv.textContent = errors.join(", ");
      errorDiv.style.display = "block";
    }
    return false;
  }

  const errorDiv = form.querySelector(".error-message");
  if (errorDiv) {
    errorDiv.style.display = "none";
  }

  const sentMessage = form.querySelector(".sent-message");
  if (sentMessage) {
    sentMessage.style.display = "block";
  }

  return true;
}

const contact = document.getElementById("contact-form");
if (contact) {
  contact.addEventListener("submit", function (e) {
    e.preventDefault();
    if(contactForm()) {
      contact.reset();
    }
  });
}

// Easter Egg

function createRollingEgg() {
  const egg = document.createElement('div');
  egg.className = 'rolling-egg';
  egg.innerHTML = '<i class="bi bi-egg-fill"></i>';
  
  const randomTop = Math.random() * 70 + 10;
  egg.style.top = randomTop + '%';

  egg.style.left = '-50px';
  document.body.appendChild(egg);
  
  setTimeout(() => {
    egg.style.left = 'calc(100% + 50px)';
    egg.style.transition = 'left 3s linear';
  }, 10);
  
  setTimeout(() => {
    if (egg.parentNode) {
      egg.parentNode.removeChild(egg);
    }
  }, 3010);
}

let egg = setInterval(createRollingEgg, 8000);