import React from "react";
import styled from "styled-components";
import {
  Menu,
  HamburgerButton,
  NavList,
  NavListItem,
  MenuProvider,
  MenuConsumer,
  Backdrop
} from "react-flyout-menu";

const Example = () => (
  <MenuProvider>
    <MenuConsumer>
      {({ toggleElement, closeElement, setToggleElement, setCloseElement }) => {
        return (
          <React.Fragment>
            <HamburgerButton
              setToggleElement={setToggleElement}
              closeElement={closeElement}
            />
            <Menu
              setCloseElement={setCloseElement}
              toggleElement={toggleElement}
            >
              <NavList>
                <NavListItem>
                  <a href="#">One</a>
                </NavListItem>
                <NavListItem>
                  <a href="#">Two</a>
                </NavListItem>
                <NavListItem>
                  <a href="#">Three</a>
                </NavListItem>
                <NavListItem>
                  <NavList>
                    <NavListItem>
                      <a href="#">Four Point One</a>
                    </NavListItem>
                    <NavListItem>
                      <a href="#">Four Point Two</a>
                    </NavListItem>
                    <NavListItem>
                      <a href="#">Four Point Three</a>
                    </NavListItem>
                  </NavList>
                </NavListItem>
              </NavList>
            </Menu>
            <Backdrop />
          </React.Fragment>
        );
      }}
    </MenuConsumer>
  </MenuProvider>
);

export default Example;
