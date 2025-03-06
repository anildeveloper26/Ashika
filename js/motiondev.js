const { animate, inView, stagger } = window.Motion;

// Hero Slider Text Animation
const heroSlides = document.querySelectorAll(".swiper-hero-slider .swiper-slide");
heroSlides.forEach((slide) => {
  inView(slide, ({ target }) => {
    animate(
      target.querySelector("h1"),
      { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] },
      { duration: 1.5, easing: "ease-out", delay: 0.3 }
    );
    animate(
      target.querySelector("p"),
      { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] },
      { duration: 1.5, easing: "ease-out", delay: 0.5 }
    );
    animate(
      target.querySelector(".exp-btn"),
      { opacity: [0, 1], transform: ["scale(0.9)", "scale(1)"] },
      { duration: 1, easing: "ease-out", delay: 0.7 }
    );

    return () => {
      animate(target.querySelector("h1"), 
        { opacity: 0, transform: "translateY(30px)" }, 
        { duration: 0.5, easing: "ease-in" }
      );
      animate(target.querySelector("p"), 
        { opacity: 0, transform: "translateY(20px)" }, 
        { duration: 0.5, easing: "ease-in" }
      );
      animate(target.querySelector(".exp-btn"), 
        { opacity: 0, transform: "scale(0.9)" }, 
        { duration: 0.5, easing: "ease-in" }
      );
    };
  });
});

// About Section Animation
const aboutTitles = document.querySelectorAll(".About");
aboutTitles.forEach((title) => {
  inView(title, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateX(-100%)", "translateX(0)"] },
      { duration: 1, easing: "ease-out" }
    );
    return () => animate(target, 
      { opacity: 0, transform: "translateX(-100%)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

const aboutHeadings = document.querySelectorAll(".Unlocking");
aboutHeadings.forEach((heading) => {
  inView(heading, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateX(100%)", "translateX(0)"] },
      { duration: 1, easing: "ease-out" }
    );
    return () => animate(target, 
      { opacity: 0, transform: "translateX(100%)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

const aboutParagraphs = document.querySelectorAll(".AboutP p");
aboutParagraphs.forEach((paragraph, index) => {
  inView(paragraph, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateY(100px)", "translateY(0)"] },
      { duration: 1, easing: "ease-out", delay: index * 0.2 }
    );
    return () => animate(target, 
      { opacity: 0, transform: "translateY(100px)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

const aboutImages = document.querySelectorAll(".img");
aboutImages.forEach((image) => {
  inView(image, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["scale(0.8)", "scale(1)"] },
      { duration: 1, easing: "ease-out" }
    );
    return () => animate(target, 
      { opacity: 0, transform: "scale(0.8)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

// Approach Section Animation
const approachCards = document.querySelectorAll(".ApproachCards .PeopleCard");
approachCards.forEach((card, index) => {
  inView(card, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["scale(0.9)", "scale(1)"] },
      { duration: 1, easing: "ease-out", delay: index * 0.2 }
    );
    return () => animate(target, 
      { opacity: 0, transform: "scale(0.9)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

const dontInvestCards = document.querySelectorAll(".DontInvestIn .right-block");
dontInvestCards.forEach((card, index) => {
  inView(card, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateX(100%)", "translateX(0)"] },
      { duration: 1, easing: "ease-out", delay: index * 0.2 }
    );
    return () => animate(target, 
      { opacity: 0, transform: "translateX(100%)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

// Investment Criteria Animation
const investmentBlocks = document.querySelectorAll(".Investment .each-block");
investmentBlocks.forEach((block, index) => {
  inView(block, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateY(50px)", "translateY(0)"] },
      { duration: 0.8, easing: "ease-out", delay: index * 0.2 }
    );
    return () => animate(target, 
      { opacity: 0, transform: "translateY(50px)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

// Team Section Animation
const teamBlocks = document.querySelectorAll("#team-private .block");
teamBlocks.forEach((block, index) => {
  inView(block, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateY(70px)", "translateY(0)"] },
      { duration: 1, easing: "ease-in-out", delay: index * 0.2 }
    );

    target.addEventListener("mouseenter", () => {
      animate(
        target,
        { transform: "translateY(-5px)", boxShadow: "0 5px 15px rgba(0,0,0,0.1)" },
        { duration: 0.5, easing: "ease-out" }
      );
    });

    target.addEventListener("mouseleave", () => {
      animate(
        target,
        { transform: "translateY(0)", boxShadow: "0 2px 10px rgba(0,0,0,0.05)" },
        { duration: 0.5, easing: "ease-out" }
      );
    });

    return () => 
      animate(target, 
        { opacity: 0, transform: "translateY(70px)" }, 
        { duration: 0.5, easing: "ease-in" }
      );
  });
});

// Portfolio Animation
const portfolioBlocks = document.querySelectorAll(".swiper-portfolio-slider .each-block");
portfolioBlocks.forEach((block, index) => {
  inView(block, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["scale(0.95)", "scale(1)"] },
      { duration: 0.8, easing: "ease-out", delay: index * 0.1 }
    );
    return () => animate(target, 
      { opacity: 0, transform: "scale(0.95)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

// Resources Animation
const resourceBlocks = document.querySelectorAll("#team-private");
resourceBlocks.forEach((block, index) => {
  inView(block, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0)"] },
      { duration: 1, easing: "ease-out", delay: index * 0.2 }
    );
    return () => animate(target, 
      { opacity: 0, transform: "translateY(30px)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});

// Footer Animation
const footerElements = document.querySelectorAll("#footer-private .col-lg-4");
footerElements.forEach((element, index) => {
  inView(element, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] },
      { duration: 1, easing: "ease-out", delay: index * 0.2 }
    );
    return () => animate(target, 
      { opacity: 0, transform: "translateY(20px)" }, 
      { duration: 0.5, easing: "ease-in" }
    );
  });
});