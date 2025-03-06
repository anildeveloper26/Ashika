const { animate, inView, stagger } = window.Motion;

// Hero Slider Text Animation
const heroSlides = document.querySelectorAll(
  ".swiper-hero-slider .swiper-slide"
);
heroSlides.forEach((slide) => {
  inView(slide, ({ target }) => {
    const elements = [
      target.querySelector("h1"),
      target.querySelector("p"),
      target.querySelector(".exp-btn"),
    ].filter(Boolean);

    animate(
      elements,
      {
        opacity: [0, 1],
        transform: ["translateY(30px)", "translateY(0)"],
      },
      {
        duration: 1.5,
        easing: "ease-out",
        delay: stagger(0.2, { start: 0.3 }),
      }
    );

    animate(
      target.querySelector(".exp-btn"),
      { opacity: [0, 1], transform: ["scale(0.5)", "scale(1)"] },
      { duration: 1, easing: "ease-out", delay: 0.7 }
    );

    return () => {
      animate(
        elements,
        { opacity: 0, transform: "translateY(-30px)" }, // Reverse: slide up
        { duration: 0.5, easing: "ease-in" }
      );
      animate(
        target.querySelector(".exp-btn"),
        { opacity: 0, transform: "scale(0.5)" }, // Already reverses naturally
        { duration: 0.5, easing: "ease-in" }
      );
    };
  });
});

// About Section Animation
const aboutTitles = document.querySelectorAll(".About, .img"); // Corrected selector syntax
aboutTitles.forEach((title, index) => {
  inView(title, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateX(-50%)", "translateX(0)"] },
      { duration: 1.5, easing: "ease-out", delay: index * 0.1 }
    );
    return () =>
      animate(
        target,
        { opacity: 0, transform: "translateX(50%)" }, // Corrected to slide right
        { duration: 1.5, easing: "ease-in-out" }
      );
  });
});

const Unlocking = document.querySelectorAll(".Unlocking"); // Corrected selector syntax
Unlocking.forEach((title, index) => {
  inView(title, ({ target }) => {
    animate(
      target,
      { opacity: [0, 1], transform: ["translateX(-50%)", "translateX(0)"] },
      { duration: 1.5, easing: "ease-out", delay: index * 0.1 }
    );
    return () =>
      animate(
        target,
        { opacity: 0, transform: "translateX(50%)" }, // Corrected to slide right
        { duration: 1.5, easing: "ease-in-out" }
      );
  });
});
const aboutParagraphs = document.querySelectorAll(".AboutP");
inView(
  ".AboutP",
  () => {
    animate(
      aboutParagraphs,
      { opacity: [0, 1], transform: ["translateY(50%)", "translateY(0)"] },
      { duration: 0.5, easing: "ease-out" }
    );
    return () =>
      animate(
        aboutParagraphs,
        { opacity: 0, transform: "translateY(50%)" }, // Reverse: slide up
        { duration: 0.5, easing: "ease-in" }
      );
  },
  { amount: 0.3 }
);

// Approach Section Animation
const approachCards = document.querySelectorAll(".ApproachCards .PeopleCard");
inView(".ApproachCards", () => {
  animate(
    approachCards,
    { opacity: [0, 1], transform: ["scale(0.5)", "scale(1)"] },
    { duration: 1, easing: "ease-out", delay: stagger(0.2) }
  );
  return () =>
    animate(
      approachCards,
      { opacity: 0, transform: "scale(0.5)" }, // Already reverses naturally
      { duration: 0.5, easing: "ease-in" }
    );
});

const dontInvestCards = document.querySelectorAll(".DontInvestIn .right-block");
inView(".DontInvestIn", () => {
  animate(
    dontInvestCards,
    { opacity: [0, 1], transform: ["translateX(10%)", "translateX(0)"] },
    { duration: 1, easing: "ease-out", delay: stagger(0.2) }
  );
  return () =>
    animate(
      dontInvestCards,
      { opacity: 0, transform: "translateX(-50%)" }, // Reverse: slide left
      { duration: 0.5, easing: "ease-in" }
    );
});

// Investment Criteria Animation
const investmentBlocks = document.querySelectorAll(".Investment .each-block");
inView(".Investment", () => {
  animate(
    investmentBlocks,
    { opacity: [0, 1], transform: ["translateY(50%)", "translateY(0)"] },
    { duration: 0.8, easing: "ease-out", delay: stagger(0.2) }
  );
  return () =>
    animate(
      investmentBlocks,
      { opacity: 0, transform: "translateY(-50%)" }, // Reverse: slide up
      { duration: 0.5, easing: "ease-in" }
    );
});

// Portfolio Animation
const portfolioBlocks = document.querySelectorAll(
  ".swiper-portfolio-slider .each-block"
);
inView(".swiper-portfolio-slider", () => {
  animate(
    portfolioBlocks,
    { opacity: [0, 1], transform: ["scale(0.5)", "scale(1)"] },
    { duration: 0.8, easing: "ease-out", }
  );
  return () =>
    animate(
      portfolioBlocks,
      { opacity: 0, transform: "scale(0.95)" }, // Already reverses naturally
      { duration: 0.5, easing: "ease-in" }
    );
});

// Resources Animation (Team Section)
const resourceBlocks = document.querySelectorAll("#team-private");
resourceBlocks.forEach((block) => {
  inView(block, ({ target }) => {
    const teamCards = target.querySelectorAll(".block");
    animate(
      teamCards,
      {
        opacity: [0, 1],
        transform: ["translateY(30px)", "translateY(0)"],
      },
      { duration: 1, easing: "ease-out", delay: stagger(0.2) }
    );
    return () =>
      animate(
        teamCards,
        { opacity: 0, transform: "translateY(-30px)" }, // Reverse: slide up
        { duration: 0.5, easing: "ease-in" }
      );
  });
});

// Footer Animation
const footerElements = document.querySelectorAll("#footer-private .col-lg-4");
inView("#footer-private", () => {
  animate(
    footerElements,
    { opacity: [0, 1], transform: ["translateY(20px)", "translateY(0)"] },
    { duration: 1, easing: "ease-out", delay: stagger(0.2) }
  );
  return () =>
    animate(
      footerElements,
      { opacity: 0, transform: "translateY(-20px)" }, // Reverse: slide up
      { duration: 0.5, easing: "ease-in" }
    );
});
