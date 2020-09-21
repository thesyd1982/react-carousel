import React from "react";

const localImagesUrl = process.env.PUBLIC_URL + "/img/slides/";

const slides = [
  {
    id: 1,
    image: localImagesUrl + "slide1.jpg",
    children: (
      <>
        <h1 className="slide-title"> slide 1 </h1>
        <p className="slide-description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
          provident! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Ullam beatae ducimus, quam iste, officia nesciunt eum enim veniam
          eligendi dolor laboriosam magni suscipit? Accusantium similique
          laudantium doloremque, porro et reiciendis.
        </p>
      </>
    ),
  },
  {
    id: 2,
    image: localImagesUrl + "slide6.jpg",
    children: <h1 className="slide-title"> slide 2 </h1>,
  },
  {
    id: 3,
    image: localImagesUrl + "slide3.jpg",
    children: <h1 className="slide-title"> slide 3 </h1>,
  },
  {
    id: 4,
    image: localImagesUrl + "slide4.jpg",
    children: <h1 className="slide-title"> slide 4 </h1>,
  },
  {
    id: 5,
    image: localImagesUrl + "slide5.jpg",
    children: <h1 className="slide-title"> slide 5 </h1>,
  },
];
export default slides;
