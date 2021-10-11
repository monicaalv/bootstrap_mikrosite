gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("#section1, #section4, #section6");

sections.forEach((section) => {
  const h2 = section.querySelector("h2");
  const h3 = section.querySelectorAll("h3");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%",
        end: "+=200",
        scrub: true,
        markers: true,
      },
    })
    .from(h2, {
      duration: 1,
      opacity: 0,
    })
    .from(h3, {
      y: 100,
      duration: 1,
      opacity: 0,
      stagger: 1,
    });
});
