const { animate, inView, stagger } = window.Motion;

const brings = document.querySelectorAll(".About");

brings.forEach((bring, index) => {
  inView(bring, ({ target }) => {
    animate(
      target,
      {
        opacity: [0, 1],
        transform: ["translatex(-100%)", "translateY(0%)"],
      },
      {
        duration: 1,
        easing: "ease-out",
        delay: index * 0,
      }
    );
    return () => animate(target, { opacity: 0, transform: "translateY(100%)" });
  });
});


const Unlocking = document.querySelectorAll(".Unlocking");


Unlocking.forEach((bring, index) => {
  inView(bring, ({ target }) => {
    animate(
      target,
      {
        opacity: [0, 1],
        transform: ["translatex(100%)", "translateY(0%)"],
      },
      {
        duration: 1,
        easing: "ease-out",
        delay: index * 0,
      }
    );
    return () => animate(target, { opacity: 0, transform: "translateY(100%)" });
  });
});

const AboutP = document.querySelectorAll(".AboutP p");


AboutP.forEach((bring, index) => {
  inView(bring, ({ target }) => {
    animate(
      target,
      {
        opacity: [0, 1],
        transform: ["translatey(100%)", "translateY(0%)"],
      },
      {
        duration: 1,
        easing: "ease-out",
        delay: index * 0,
      }
    );
    return () => animate(target, { opacity: 0, transform: "translateY(100%)" });
  });
});



const IMG = document.querySelectorAll(".img");


IMG.forEach((bring, index) => {
  inView(bring, ({ target }) => {
    animate(
      target,
      {
        opacity: [0, 1],
        transform: ["scale(0)", "scale(1)"],
      },
      {
        duration: 1,
        easing: "ease-out",
        delay: index * 0,
      },
      { delay: stagger(1) }
    );
    return () => animate(target, { opacity: 0, transform: "translateY(100%)" });
  });
});

const PeopleCard = document.querySelectorAll(".ApproachCards div");


PeopleCard.forEach((bring, index) => {
  inView(bring, ({ target }) => {
    animate(
      target,
      {
        opacity: [0, 1],
        transform: ["scale(0.9)", "scale(1)"],
        stagger:10
      },
      {
        duration: 1,
        easing: "ease-out",
        delay: index * 0,
      }
    );
    return () => animate(target, { opacity: 0, transform: "translateY(100%)" });
  });
});




const DontInvestIn = document.querySelectorAll(".DontInvestIn div");


DontInvestIn.forEach((bring, index) => {
  inView(bring, ({ target }) => {
    animate(
      target,
      {
        opacity: [0, 1],
        transform: ["translatex(100%)", "translate(0)"],
        stagger:10
      },
      {
        duration: 1,
        easing: "ease-out",
        delay: index * 0,
      }
    );
    return () => animate(target, { opacity: 0, transform: "translateY(100%)" });
  });
});

