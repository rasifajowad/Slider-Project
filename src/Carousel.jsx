import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Carousel = ({ list }) => {
  const [people, setPeople] = useState(list);
  const [currentPerson, setCurrentPerson] = useState(0);

  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newSlide = (oldPerson + 1) % people.length;
      return newSlide;
    });
  };
  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const newSlide = (oldPerson - 1 + people.length) % people.length;
      return newSlide;
    });
  };

  useEffect(() => {
    let sliderID = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      clearInterval(sliderID);
    };
  }, [currentPerson]);

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, title, name, image, quote } = person;
        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};

export default Carousel;
