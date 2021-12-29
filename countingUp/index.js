function counterAnimationHandler() {
  const counters = document.querySelectorAll(".counter ");
  counters.forEach((counter) => {
    counter.innerText = "0";
    counter.dataset.count = 0;
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.dataset.count;
      let speed = 200000;
      const increment = target / speed;

      if (count < target) {
        const newCount = Math.ceil(count + increment);
        counter.dataset.count = newCount;
        counter.innerText = numberWithCommas(newCount);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = numberWithCommas(target);
      }
    };

    updateCounter();
  });

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

counterAnimationHandler();
