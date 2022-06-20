import React from "react";
import "./page_not_fouund_styles.scss";
import * as urls from "./../../urls";
import {strings} from "../../constants/strings";

const PageNotFound = () => {
  return (
    <div>
      <div className="main-error-block">
        <div className="stars">
          <div className="central-body">
            <div className="central-body__texts">
              <div className="text-404">404</div>
              <div>
                <span>{strings.page_not_found}</span>
              </div>
            </div>

            <a href={urls.HOME}>
              <div className="btn-go-home">{strings.go_back_home}</div>
            </a>
          </div>
          <div className="objects">
            <img
              alt="rocket"
              className="objects__rocket"
              src="https://salehriaz.com/404Page/img/rocket.svg"
              width="40px"
            />
            <div className="earth-moon">
              <img
                alt="earth"
                className="objects__earth"
                src="https://salehriaz.com/404Page/img/earth.svg"
                width="100px"
              />
              <img
                alt="moon"
                className="objects__moon"
                src="https://salehriaz.com/404Page/img/moon.svg"
                width="80px"
              />
            </div>
            <div className="box_astronaut">
              <img
                alt="astronaut"
                className="objects__astronaut"
                src="https://salehriaz.com/404Page/img/astronaut.svg"
                width="140px"
              />
            </div>
          </div>
          <div className="glowing_stars">
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
            <div className="star" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
