import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const menuContext = React.createContext();

export class MenuProvider extends React.Component {
  state = {
    closeElement: null,
    toggleElement: null,
    setCloseElement: closeElement => {
      this.setState({ closeElement });
    },
    setToggleElement: toggleElement => {
      this.setState({ toggleElement });
    }
  };

  render() {
    return (
      <menuContext.Provider value={this.state}>
        {this.props.children}
      </menuContext.Provider>
    );
  }
}

export class MenuConsumer extends React.Component {
  render() {
    return (
      <menuContext.Consumer>
        {({ closeElement, toggleElement, setCloseElement, setToggleElement }) =>
          this.props.children({
            closeElement,
            toggleElement,
            setCloseElement,
            setToggleElement
          })
        }
      </menuContext.Consumer>
    );
  }
}

const Bars = ({ size }) => <FontAwesomeIcon icon={faBars} size={size} />;
const Close = ({ size }) => <FontAwesomeIcon icon={faTimes} size={size} />;

const VisuallyHidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;

const ToggleButton = styled.a`
  display: inline-block;
  padding: 0.75em 15px;
  line-height: 1em;
  font-size: 1em;
  color: #333;

  &:hover {
    color: #555;
  }
  &:focus {
    color: #c00;
  }
`;

// See https://medium.com/@heyoka/responsive-pure-css-off-canvas-hamburger-menu-aebc8d11d793
const MainMenu = styled.nav`
  position: absolute;
  right: calc(-1 * ${props => props.width});
  top: 0;
  height: 100%;
  overflow-y: scroll;
  overflow-x: visible;
  transition: right 0.3s ease, box-shadow 0.3s ease;
  z-index: 999;
  width: ${props => props.width};
  background: #1a1a1a;

  & ul {
    list-style: none;
    margin: 0;
    padding: 2.5em 0 0;
    width: 100%;
  }

  & a {
    display: block;
    padding: 0.75em 15px;
    line-height: 1em;
    font-size: 1em;
    color: #fff;
    text-decoration: none;
  }

  & li:first-child a {
    border-top: 1px solid #383838;
  }

  & a:hover,
  & a:focus {
    background: #333;
    text-decoration: underline;
  }

  & .menu-close {
    align-self: center;
  }

  &:target,
  &[aria-expanded="true"] {
    right: 0;
    outline: none;
    box-shadow: 3px 0 12px rgba(0, 0, 0, 0.25);
  }

  &:target .menu-close,
  &[aria-expanded="true"] .menu-close {
    z-index: 1001;
  }

  &:target ul,
  &[aria-expanded="true"] ul {
    position: relative;
    z-index: 1000;
  }

  &:target + .backdrop,
  &[aria-expanded="true"] + .backdrop {
    position: absolute;
    display: block;
    content: "";
    right: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    background: #000;
    background: rgba(0, 0, 0, 0.85);
    cursor: default;
  }

  @supports (position: fixed) {
    &,
    &:target + .backdrop,
    &[aria-expanded="true"] + .backdrop {
      position: fixed;
    }
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: ${props =>
    props.menuPosition !== MenuPositions.left ? "row" : "row-reverse"};
  justify-content: space-between;
`;

const ReaderHidden = ({ children }) => (
  <span aria-hidden="true">{children}</span>
);

export class HamburgerButton extends React.Component {
  toggle = React.createRef();

  componentDidMount() {
    const { setToggleElement } = this.props;

    setToggleElement(this.toggle);
  }

  render() {
    const { closeElement, onClick, iconSize } = this.props;
    return (
      <ToggleButton
        href="#main-menu"
        className="menu-toggle"
        role="button"
        id="main-menu-toggle"
        aria-expanded="false"
        aria-controls="main-menu"
        aria-label="Open main menu"
        ref={this.toggle}
        onClick={() => {
          onClick && onClick();
          // TODO: Revisit this. Basically saying wait til the
          // menu is visible and focus it
          setTimeout(() => closeElement.current.focus(), 300);
        }}
      >
        <ReaderHidden>
          <Bars size={iconSize} />
        </ReaderHidden>
        <VisuallyHidden>Open Menu</VisuallyHidden>
      </ToggleButton>
    );
  }
}

export const NavList = styled.ul``;
export const NavListItem = styled.li``;

export const MenuPositions = {
  left: "left",
  right: "right"
};

export class Menu extends React.Component {
  state = { visible: false };
  close = React.createRef();
  menu = React.createRef();

  static defaultProps = {
    width: "90%",
    menuPosition: MenuPositions.right,
    Heading: () => (
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <h2 style={{ color: "#FFF" }}>Navigation</h2>
      </div>
    )
  };

  componentDidMount() {
    const { setCloseElement } = this.props;

    setCloseElement(this.close);
    this.menu.current.addEventListener(
      "transitionend",
      this.onTransitionEnd,
      false
    );
  }

  onTransitionEnd = e => {
    if (e.propertyName === "right" || e.propertyName === "left") {
      const style = getComputedStyle(this.menu.current);

      const value = style[e.propertyName];
      this.setState({ visible: !value.startsWith("-") });
    }
  };

  onClose = () => {
    if (this.props.onClose) {
      this.props.onClose();
    }
  };

  render() {
    const { children, width, menuPosition, Heading, iconSize } = this.props;

    return (
      <MainMenu
        id="main-menu"
        className="main-menu"
        role="navigation"
        aria-expanded="false"
        aria-hidden={!this.state.visible}
        aria-label="Main menu"
        width={width}
        ref={this.menu}
      >
        <Row menuPosition={menuPosition}>
          <a
            href="#main-menu-toggle"
            className="menu-close"
            role="button"
            id="main-menu-close"
            aria-expanded="false"
            aria-controls="main-menu"
            aria-label="Close main menu"
            onClick={this.onClose}
            ref={this.close}
          >
            <ReaderHidden>
              <Close size={iconSize} />
            </ReaderHidden>
            <VisuallyHidden>Close menu</VisuallyHidden>
          </a>
          <Heading />
        </Row>
        {children}
      </MainMenu>
    );
  }
}

export const Backdrop = () => (
  <a
    href="#main-menu-toggle"
    className="backdrop"
    tabIndex="-1"
    aria-hidden="true"
    hidden
  />
);
