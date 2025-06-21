import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Maria Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Enrolling at Edusity has been a life-changing experience for me.
                The welcoming environment, advanced learning resources, and
                unwavering focus on academic success have far surpassed what I
                hoped for. I feel proud and grateful to be a part of such a
                vibrant educational community.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>William Johnson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Tessa Edward</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Being a part of Edusity has been a truly rewarding experience.
                From the modern classrooms to the encouraging mentors,
                everything is designed to help students thrive. The skills and
                values I've gained here will stay with me for life.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Jacob Martin</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Studying at Edusity has been an incredible journey. The faculty
                is not only knowledgeable but genuinely invested in student
                success. The learning atmosphere here fosters growth,
                innovation, and confidence. I couldn't have asked for a better
                place to shape my future.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
