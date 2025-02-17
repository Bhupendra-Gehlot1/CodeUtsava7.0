import React from "react";

import { useState, useEffect } from "react";

import "./Section3.css";

import EventCard from "../../../../components/eventCard/EventCard";
import Slider from "react-slick";
import { sliderSettings } from "../../../../motionUtils";
import { motion } from "framer-motion";

import Events from "../../../../assets/data/eventsData";

import { previousYear, baseUrl } from "../../../../constants";

import frank from "../../../../assets/images/frakenstein.png";

import axios from "axios";

const Section3 = () => {
  const url = baseUrl + "events/" + previousYear;
  const [state, setState] = useState({
    data: [],
    loading: true,
  });
  console.log(url);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(url);
      setState({
        data: data.data.data,
        loading: false,
      });
    };
    fetchData();
  }, []);

  console.log(state.data);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: false }}
      className="codeutsava__section3"
      id="events"
    >
      <div className="codeutsava__section3-title">
        <img src={frank}></img>
        Events
      </div>
      <div className="codeutsava__section3-events-container">
        <Slider {...sliderSettings} className="slider">
          {Events.map((event, index) => (
            <EventCard
              key={index}
              img={event.img}
              title={event.title}
              date={event.date}
              link={event.link}
            />
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Section3;
