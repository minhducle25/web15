import React, { Component } from "react";
import styled from "styled-components";
import "./buoi1.css";
import { Link } from "react-router-dom";
export default class Buoi1 extends Component {
  render() {
    const renderHtml = () => {
      return (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Minh <span>Le</span>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    Trang chủ <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Giới thiệu
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Khóa học
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a className="dropdown-item" href="#">
                      Front end
                    </a>
                    <a className="dropdown-item" href="#">
                      Back end
                    </a>
                    <a className="dropdown-item" href="#">
                      Data science
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    };

    return (
      <div className="demo">
        {renderHtml()}
        <Link to="/buoi2"> chuyển hướng trang</Link>
      </div>
    );
  }
}
