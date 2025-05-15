import React, { useEffect, useState } from "react";
import RobotImage from "../../assets/ai-robot.png";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import css from "./style.module.css";
const Home = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div
      className={`justify-between items-center flex-row container max-w-6xl mx-auto h-screen flex pt-[100px] transition-all duration-1000 ease-in transform ${
        animate ? "translate-x-0" : "translate-y-32 opacity-0"
      }`}
    >
      <div className="justify-center flex flex-col w-[640px] gap-y-14">
        <p className="text-7xl font-bold">
          Манай технологи хөгжлийг{" "}
          <span className="text-[#5f41fb]">хурдасгана</span>
        </p>
        <p className="text-3xl text-[#565353]">
          Дэвшилдэт технологи ашиглан таны бизнесийн ашгийг нэмэгдүүлж, хяналтыг
          сайжруулна
        </p>
        <Link to="/contact" className={css.button}>
          Бидэнтэй холбогдох
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>
      </div>
      <div>
        <img
          src={RobotImage}
          alt=""
          className={`h-[500px] w-auto transition-all duration-1000 ease-in transform ${
            animate ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};
export default Home;
