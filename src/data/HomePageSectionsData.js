import characters from "../images/people.jpg";
import vehicles from "../images/vehicles.jpg";
import starships from "../images/starships.jpg";
export const HomePageSectionsData = {
  characters: {
    image: {
      src: characters,
      alt: "Characters",
      thanks: "Photo by Markus Spiske on Unsplash.",
    },
    text: {
      title: "Characters",
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corporis in accusamus reprehenderit, possimus provident unde! Harum, explicabo?",
      color: "",
    },
    button: {
      path: "/people",
      css: "btn-dark btn-large",
      text: "View characters",
    },
  },
  vehicles: {
    image: {
      src: vehicles,
      alt: "Vehicles",

      thanks: "Photo by Hello I'm Nik on Unsplash.",
    },
    text: {
      title: "Vehicles",
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corporis in accusamus reprehenderit, possimus provident unde! Harum, explicabo?",
      color: "",
    },
    button: {
      path: "/vehicles",
      css: "btn-dark btn-large",
      text: "View vehicles",
    },
  },
  starships: {
    image: {
      src: starships,
      alt: "Starships",

      thanks: "Photo by Brian McGowan on Unsplash.",
    },
    text: {
      title: "Starships",
      paragraph:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corporis in accusamus reprehenderit, possimus provident unde! Harum, explicabo?",
      color: "",
    },
    button: {
      path: "/starships",
      css: "btn-dark btn-large",
      text: "View starships",
    },
  },
};
