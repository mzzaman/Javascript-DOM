//
function changeImage(type) {
  let img = document.getElementById("image");
  let title = document.getElementById("title");
  let alt = document.getElementById("alt");

  let images = {
    image1: {
      src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Red Placeholder Image",
      title: "Red Image",
    },
    image2: {
      src: "https://images.unsplash.com/photo-1599651515421-43a8e7dbf212?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Green Placeholder Image",
      title: "Green Image",
    },
    image3: {
      src: "https://images.unsplash.com/photo-1532171875345-9712d9d4f65a?q=80&w=1015&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Blue Placeholder Image",
      title: "Blue Image",
    },
  };

  if (img.hasAttribute("src")) {
    img.setAttribute("src", images[type].src);
  }

  if (img.hasAttribute("alt")) {
    img.setAttribute("alt", images[type].alt);
  }
  if (img.hasAttribute("title")) {
    img.setAttribute("title", images[type].title);
  }
  title.innerHTML = `Title: ${images[type].title}`;
  alt.innerHTML = `Alt: ${images[type].alt}`;
}
