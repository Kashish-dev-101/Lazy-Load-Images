// app.js

const data = {
  images: [
    {
      name: "just me, being me._qTxOojFwr.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/just%20me,%20being%20me._qTxOojFwr.jpg",
    },
    {
      name: "Picture taken for CouponSna..._kOX-M-Ot3.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/Picture%20taken%20for%20CouponSna..._kOX-M-Ot3.jpg",
    },
    {
      name: "Portrait of a brunette woma..._8M9jN6Yvn.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/Portrait%20of%20a%20brunette%20woma..._8M9jN6Yvn.jpg",
    },
    {
      name: "Faces in different places_odzjVuKXW.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/Faces%20in%20different%20places_odzjVuKXW.jpg",
    },
    {
      name: "portrait photography of man_MDQ926JLI.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/portrait%20photography%20of%20man_MDQ926JLI.jpg",
    },
    {
      name: "Happy daughter_uuqnhToxV.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/Happy%20daughter_uuqnhToxV.jpg",
    },
    {
      name: "Smile_t2oV0fxJZ.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/Smile_t2oV0fxJZ.jpg",
    },
    {
      name: "people laughing and talking..._af4pgiNHXQ.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/people%20laughing%20and%20talking..._af4pgiNHXQ.jpg",
    },
    {
      name: "pexels-almightyshilref-3432268__H6s3dAnI.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/pexels-almightyshilref-3432268__H6s3dAnI.jpg",
    },
    {
      name: "pexels-ezekixl-6957184_3mUnbVql6.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/pexels-ezekixl-6957184_3mUnbVql6.jpg",
    },
    {
      name: "pexels-pixabay-532303_-IGCtCUDv.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/pexels-pixabay-532303_-IGCtCUDv.jpg",
    },
    {
      name: "pexels-shkrabaanthony-5475777_SQsDUttLO.jpg",
      url: "https://ik.imagekit.io/Kashish12345/Demo/Responsive%20Image/pexels-shkrabaanthony-5475777_SQsDUttLO.jpg",
    },
  ],
};

const grid = document.getElementById("imageGrid");

// ImageKit transforms
const blurUrl = (url) => `${url}?tr=w-60,bl-20,q-20`;
const finalUrl = (url) => `${url}?tr=w-800`;

// 1) Render: blur goes in src, real image goes in data-src
data.images.forEach((item, index) => {
  const wrap = document.createElement("div");
  wrap.className = "imgWrap";

  const title = document.createElement("p");
  title.className = "imgTitle";
  title.textContent = `${index + 1}. ${item.name}`;

  const img = document.createElement("img");
  img.className = "demoImg isBlur";
  img.alt = item.name;

  img.src = blurUrl(item.url); // loads immediately (small + blurred)
  img.dataset.src = finalUrl(item.url); // saved for later (not loaded yet)

  wrap.appendChild(title);
  wrap.appendChild(img);
  grid.appendChild(wrap);
});

// 2) Observer: when image comes near viewport, swap to the real URL
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const img = entry.target; // the <img> element that is near viewport
      img.src = img.dataset.src; // load real image now
      img.classList.remove("isBlur"); // remove blur styling

      observer.unobserve(img); // stop watching this image (load only once)
    });
  },
  {
    root: null, // observe against the browser viewport
    rootMargin: "0px 0px -30% 0px", // shrink detection zone by 30% from bottom — image must scroll 30% into viewport before triggering
    threshold: 0.1, // fire callback when at least 10% of the image is inside the detection zone
  }
);

// 3) Start watching all images
document
  .querySelectorAll("img.demoImg")
  .forEach((img) => observer.observe(img));
