const testimonialBodyItems = document.querySelectorAll(
    ".fui-testimonial-1 .testimonialBodyItem"
  );
  const testimoniaPersonalItems = document.querySelectorAll(
    ".fui-testimonial-1 .testimoniaPersonalItem"
  );
  
  // handle click tab testimonial
  let numberTabTestimonial = 0;
  
  testimoniaPersonalItems.forEach((itemPersonal) =>
    itemPersonal.addEventListener("click", () => {
      let PersonalTab = itemPersonal.dataset.tab;
      numberTabTestimonial = itemPersonal.dataset.tab;
      testimoniaPersonalItems.forEach((item) => {
        item.classList.remove("active");
      });
      testimonialBodyItems.forEach((itemContent) => {
        itemContent.classList.remove("active");
        if (PersonalTab === itemContent.dataset.tab) {
          itemPersonal.classList.add("active");
          itemContent.classList.add("active");
        }
      });
    })
  );
  
  setInterval(() => {
    numberTabTestimonial++;
    if (numberTabTestimonial > 7) {
      numberTabTestimonial = 0;
    }
    testimoniaPersonalItems.forEach((item) => {
      item.classList.remove("active");
    });
  
    testimonialBodyItems.forEach((item) => {
      item.classList.remove("active");
    });
    testimoniaPersonalItems[numberTabTestimonial].classList.add("active");
    testimonialBodyItems[numberTabTestimonial].classList.add("active");
  }, 4000);