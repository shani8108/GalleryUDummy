import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { Row, Col, Collapse } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import classname from "classnames";

//Import Icons
import Icon from "@ailibs/feather-react-ts";

//i18n
import { withTranslation } from "react-i18next";

//redux
import { useSelector } from "react-redux";

const Navbar = (props: any) => {
  const { leftMenu } = useSelector((state: any) => ({
    leftMenu: state.Layout.leftMenu,
  }));

  const [ui, setui] = useState<boolean>(false);
  const [app, setapp] = useState<boolean>(false);
  const [email, setemail] = useState<boolean>(false);
  const [contact, setcontact] = useState<boolean>(false);
  const [component, setcomponent] = useState<boolean>(false);
  const [form, setform] = useState<boolean>(false);
  const [table, settable] = useState<boolean>(false);
  const [chart, setchart] = useState<boolean>(false);
  const [icon, seticon] = useState<boolean>(false);
  const [map, setmap] = useState<boolean>(false);
  const [extra, setextra] = useState<boolean>(false);
  const [invoice, setinvoice] = useState<boolean>(false);
  const [auth, setauth] = useState<boolean>(false);
  const [utility, setutility] = useState<boolean>(false);

  useEffect(() => {
    var matchingMenuItem = null;
    var ul: any = document.getElementById("navigation");
    var items: any = ul.getElementsByTagName("a");
    for (var i = 0; i < items.length; ++i) {
      if (props.location.pathname === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  });
  function activateParentDropdown(item: any) {
    item.classList.add("active");
    const parent = item.parentElement;
    if (parent) {
      parent.classList.add("active"); // li
      const parent2 = parent.parentElement;
      parent2.classList.add("active"); // li
      const parent3 = parent2.parentElement;
      if (parent3) {
        parent3.classList.add("active"); // li
        const parent4 = parent3.parentElement;
        if (parent4) {
          parent4.classList.add("active"); // li
          const parent5 = parent4.parentElement;
          if (parent5) {
            parent5.classList.add("active"); // li
            const parent6 = parent5.parentElement;
            if (parent6) {
              parent6.classList.add("active"); // li
            }
          }
        }
      }
    }
    return false;
  }

  return (
    <React.Fragment>
      <div className="topnav">
        <div className="container-fluid">
          <nav
            className="navbar navbar-light navbar-expand-lg topnav-menu"
            id="navigation"
          >
            <Collapse
              isOpen={leftMenu}
              className="navbar-collapse"
              id="topnav-menu-content"
            >
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/dashboard"
                  >
                    <Icon name="home" />
                    <span>{props.t("Dashboard")}</span>
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setui(!ui);
                    }}
                    className="nav-link dropdown-toggle arrow-none"
                  >
                    <Icon name="briefcase" />
                    {props.t("Elements")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname(
                      "dropdown-menu mega-dropdown-menu dropdown-menu-left dropdown-mega-menu-xl",
                      { show: ui }
                    )}
                  >
                    <div className="ps-2 p-lg-0">
                      <Row>
                        <Col lg={8}>
                          <div>
                            <div className="menu-title">
                              {props.t("Elements")}
                            </div>
                            <Row>
                              <Col lg={5}>
                                <div>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Alerts")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Buttons")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Cards")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Carousel")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Dropdowns")}
                                  </Link>
                                  <Link to="#" className="dropdown-item">
                                    {props.t("Grid")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Images")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Modals")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Offcanvas")}
                                  </Link>
                                </div>
                              </Col>
                              <Col lg={5}>
                                <div>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Progress Bars")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Placeholders")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Tabs & Accordions")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Typography")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Toasts")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Video")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("General")}
                                  </Link>
                                  <Link
                                    to="#"
                                    className="dropdown-item"
                                  >
                                    {props.t("Colors")}
                                  </Link>
                                </div>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col lg={4}>
                          <div>
                            <div className="menu-title">
                              {props.t("Extended")}
                            </div>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Lightbox")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Range Slider")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Session Timeout")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Rating")}
                            </Link>
                            <Link
                              to="#"
                              className="dropdown-item"
                            >
                              {props.t("Notifications")}
                            </Link>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setapp(!app);
                    }}
                    className="nav-link dropdown-togglez arrow-none"
                  >
                    <Icon name="grid" />
                    {props.t("Apps")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: app })}>
                    <Link to="#" className="dropdown-item">
                      {props.t("Calendar")}
                    </Link>
                    <Link to="#" className="dropdown-item">
                      {props.t("Chat")}
                    </Link>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setemail(!email);
                        }}
                      >
                        {props.t("Email")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: email })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Inbox")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Read Email")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setinvoice(!invoice);
                        }}
                      >
                        {props.t("Invoices")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: invoice,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Invoice List")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Invoice Detail")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setcontact(!contact);
                        }}
                      >
                        {props.t("Contacts")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: contact,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("User Grid")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("User List")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Profile")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    to="/#"
                    className="nav-link dropdown-toggle arrow-none"
                    onClick={(e) => {
                      e.preventDefault();
                      setcomponent(!component);
                    }}
                  >
                    <Icon name="box" />
                    {props.t("Components")} <div className="arrow-down"></div>
                  </Link>
                  <div
                    className={classname("dropdown-menu", { show: component })}
                  >
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setform(!form);
                        }}
                      >
                        {props.t("Forms")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: form })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Basic Elements")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Validation")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Advanced Plugins")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Editors")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("File Upload")}{" "}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Wizard")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Form Mask")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          settable(!table);
                        }}
                      >
                        {props.t("Tables")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: table })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Bootstrap Basic")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Data Tables")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Responsive")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Editable")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setchart(!chart);
                        }}
                      >
                        {props.t("Charts")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: chart })}
                      >
                        <Link to="#" className="dropdown-item">
                          {" "}
                          {props.t("Apex charts")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {" "}
                          {props.t("E Charts")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {" "}
                          {props.t("Chartjs")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Sparkline")}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          seticon(!icon);
                        }}
                      >
                        {props.t("Icons")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: icon })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Boxicons")}
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                        >
                          {props.t("Material Design")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Dripicons")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Font awesome")}{" "}
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setmap(!map);
                        }}
                      >
                        {props.t("Maps")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: map })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Google")}{" "}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Vector")}{" "}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Leaflet")}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle arrow-none"
                    to="/#"
                    onClick={(e) => {
                      e.preventDefault();
                      setextra(!extra);
                    }}
                  >
                    <Icon name="file-text" />
                    {props.t("Extra pages")} <div className="arrow-down"></div>
                  </Link>
                  <div className={classname("dropdown-menu", { show: extra })}>

                    <div className="dropdown">
                      <Link
                        to="/#"
                        className="dropdown-item dropdown-toggle arrow-none"
                        onClick={(e) => {
                          e.preventDefault();
                          setauth(!auth);
                        }}
                      >
                        {props.t("Authentication")}{" "}
                        <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", { show: auth })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Login")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Register")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Recover Password")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Lock Screen")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Confirm Mail")}
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                        >
                          {props.t("Email Verification")}
                        </Link>
                        <Link
                          to="#"
                          className="dropdown-item"
                        >
                          {props.t("Two Step Verification")}
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown">
                      <Link
                        className="dropdown-item dropdown-toggle arrow-none"
                        to="/#"
                        onClick={(e) => {
                          e.preventDefault();
                          setutility(!utility);
                        }}
                      >
                        {props.t("Utility")} <div className="arrow-down"></div>
                      </Link>
                      <div
                        className={classname("dropdown-menu", {
                          show: utility,
                        })}
                      >
                        <Link to="#" className="dropdown-item">
                          {props.t("Starter Page")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Maintenance")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Coming Soon")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Timeline")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("FAQs")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Pricing")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Error 404")}
                        </Link>
                        <Link to="#" className="dropdown-item">
                          {props.t("Error 500")}
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </Collapse>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  leftMenu: PropTypes.any,
  location: PropTypes.any,
  menuOpen: PropTypes.any,
  t: PropTypes.any,
};

export default withTranslation()(withRouter(Navbar));
