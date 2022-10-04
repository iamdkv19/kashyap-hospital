import React from "react";
import "./card.scss";

const Card = () => {
  return (
    <div className="col-lg-3 col-md-6 col-12 px-2 card_wrp">
      <div className="card_details border-0 mt-5 p-4">
        <div className="top">
          <div className="image">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Group 11">
                <circle
                  id="Ellipse 5"
                  cx="40"
                  cy="40"
                  r="39.5"
                  stroke="#FC1B15"
                  stroke-dasharray="2 2"
                />
                <circle
                  id="Ellipse 6"
                  cx="11.5"
                  cy="67.5"
                  r="5.5"
                  fill="#FC1B15"
                />
                <circle
                  id="Ellipse 7"
                  cx="65.5"
                  cy="10.5"
                  r="5.5"
                  fill="#FC1B15"
                />
              </g>
            </svg>
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M13 24L11.115 22.2736C4.42 16.1657 0 12.1373 0 7.19346C0 3.16512 3.146 0 7.15 0C9.412 0 11.583 1.0594 13 2.73352C14.417 1.0594 16.588 0 18.85 0C22.854 0 26 3.16512 26 7.19346C26 12.1373 21.58 16.1657 14.885 22.2866L13 24Z"
                fill="#FC1B15"
              />
            </svg>
          </div>
        </div>

        <div className="down">
          <h5 className="my-2">Cardiology</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing eu</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
