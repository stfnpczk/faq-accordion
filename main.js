//https://javascript.tutorialink.com/automatically-close-all-the-other-tags-after-opening-a-specific-tag/

const details = document.querySelectorAll("details");
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
