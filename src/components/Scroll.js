import "./Scrool.css";

const Slider = () => {
    document.addEventListener("DOMContentLoaded", () => {
    const slider = document.querySelector(".slider");
    const sliderImages = document.querySelector(".slider-images");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    let counter = 0;
    let startX = 0;
    let endX = 0;

    const slideNext = () => {
      const slideWidth = slider.offsetWidth;
      const numImages = sliderImages.children.length;
      counter = (counter + 1) % numImages;
      sliderImages.style.transform = `translateX(-${counter * slideWidth}px)`;
    };

    const slidePrev = () => {
      const slideWidth = slider.offsetWidth;
      const numImages = sliderImages.children.length;
      counter = (counter - 1 + numImages) % numImages;
      sliderImages.style.transform = `translateX(-${counter * slideWidth}px)`;
    };

    const handleSwipeStart = (event) => {
      startX = event.touches[0].clientX;
    };

    const handleSwipeMove = (event) => {
      endX = event.touches[0].clientX;
    };

    const handleSwipeEnd = () => {
      const swipeThreshold = slider.offsetWidth / 4;
      if (startX - endX > swipeThreshold) {
        slideNext();
      } else if (endX - startX > swipeThreshold) {
        slidePrev();
      }
    };

    nextBtn.addEventListener("click", slideNext);
    prevBtn.addEventListener("click", slidePrev);

    sliderImages.addEventListener("touchstart", handleSwipeStart);
    sliderImages.addEventListener("touchmove", handleSwipeMove);
    sliderImages.addEventListener("touchend", handleSwipeEnd);
});
  

  return (
    <div className="slider">
      <div className="slider-images">
        <img
          src="https://images.unsplash.com/photo-1585383234137-2367d3c5302d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2Vtc3RvbmVzfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="Image 1"
        />
        <img
          src="https://cdn.pixabay.com/photo/2015/03/09/13/56/colorful-665704__340.jpg"
          alt="Image 2"
        />
        <img
          src="https://images.unsplash.com/photo-1613843351058-1dd06fda7c02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2Vtc3RvbmV8ZW58MHx8MHx8&w=1000&q=80"
          alt="Image 3"
        />
        <img
          src="https://cdn.pixabay.com/photo/2014/05/10/18/51/purpurit-341399__340.jpg"
          alt="Image 4"
        />
      </div>

      <div class="slider-buttons">
        <button className="prev-btn">Prev</button>
        <button className="next-btn">Next</button>
      </div>
    </div>
  );
};

export default Slider;
