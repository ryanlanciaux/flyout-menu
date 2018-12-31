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
  <MenuProvider
    onClose={() => {
      console.log(" ON CLOSE FROM MAIN EXAMPLE ");
    }}
  >
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

            <p>
              Proident amet culpa dolor nisi et in do magna reprehenderit qui
              cupidatat ad amet. Aliquip consequat deserunt dolore anim sunt
              laboris nostrud reprehenderit cillum esse pariatur esse officia.
              Et sint labore velit ad.
              <a href="#">Something</a>
            </p>
            <p>
              Nulla proident ullamco aliquip est duis culpa cillum cillum ex.
              Veniam labore exercitation ipsum elit velit reprehenderit ea
              cupidatat do. Eiusmod elit labore tempor sint sint dolore minim.
              <a href="#">Something Else</a>
            </p>
            <p>
              Dolor duis pariatur dolore sint adipisicing veniam. Lorem fugiat
              consectetur quis excepteur ad quis commodo quis minim quis aute et
              velit. Eiusmod laboris laborum magna adipisicing. Veniam
              exercitation do velit ipsum do consectetur. Minim voluptate qui do
              adipisicing. Consequat laboris veniam ea aliqua eu minim.
              <a href="#">Third thing</a>
            </p>
            <p>
              Sunt minim id consequat deserunt ea aute laborum eiusmod. Est
              velit duis ut incididunt voluptate exercitation do velit cillum
              pariatur velit cupidatat in aliqua. Duis anim ex laborum quis
              ullamco fugiat amet minim magna non. Sint adipisicing adipisicing
              laboris eu eiusmod incididunt id laboris labore. Sit tempor id
              exercitation velit cupidatat quis cillum cupidatat nulla. Quis
              nostrud cupidatat tempor Lorem qui ex esse proident sint labore
              Lorem dolore. Aliquip amet ut sint quis amet eiusmod.
              <a href="#">Fourth thing</a>
            </p>
            <p>
              Nulla nulla dolor est quis commodo est fugiat non adipisicing
              dolor dolor. Eu magna exercitation Lorem ea occaecat elit cillum
              reprehenderit incididunt Lorem sit deserunt in adipisicing. Id
              culpa dolor ex culpa. Et laborum magna incididunt tempor laboris
              do qui laboris cillum magna ex quis. Id voluptate magna magna
              ullamco mollit ullamco et ex mollit eu qui ea in minim. Dolor quis
              ex exercitation sit sit magna. Cupidatat et labore ipsum consequat
              nulla sint in exercitation et.
              <a href="#">Fifth thing</a>
            </p>
            <p>
              Proident amet culpa dolor nisi et in do magna reprehenderit qui
              cupidatat ad amet. Aliquip consequat deserunt dolore anim sunt
              laboris nostrud reprehenderit cillum esse pariatur esse officia.
              Et sint labore velit ad.
              <a href="#">Something</a>
            </p>
            <p>
              Nulla proident ullamco aliquip est duis culpa cillum cillum ex.
              Veniam labore exercitation ipsum elit velit reprehenderit ea
              cupidatat do. Eiusmod elit labore tempor sint sint dolore minim.
              <a href="#">Something Else</a>
            </p>
            <p>
              Dolor duis pariatur dolore sint adipisicing veniam. Lorem fugiat
              consectetur quis excepteur ad quis commodo quis minim quis aute et
              velit. Eiusmod laboris laborum magna adipisicing. Veniam
              exercitation do velit ipsum do consectetur. Minim voluptate qui do
              adipisicing. Consequat laboris veniam ea aliqua eu minim.
              <a href="#">Third thing</a>
            </p>
            <p>
              Sunt minim id consequat deserunt ea aute laborum eiusmod. Est
              velit duis ut incididunt voluptate exercitation do velit cillum
              pariatur velit cupidatat in aliqua. Duis anim ex laborum quis
              ullamco fugiat amet minim magna non. Sint adipisicing adipisicing
              laboris eu eiusmod incididunt id laboris labore. Sit tempor id
              exercitation velit cupidatat quis cillum cupidatat nulla. Quis
              nostrud cupidatat tempor Lorem qui ex esse proident sint labore
              Lorem dolore. Aliquip amet ut sint quis amet eiusmod.
              <a href="#">Fourth thing</a>
            </p>
            <p>
              Nulla nulla dolor est quis commodo est fugiat non adipisicing
              dolor dolor. Eu magna exercitation Lorem ea occaecat elit cillum
              reprehenderit incididunt Lorem sit deserunt in adipisicing. Id
              culpa dolor ex culpa. Et laborum magna incididunt tempor laboris
              do qui laboris cillum magna ex quis. Id voluptate magna magna
              ullamco mollit ullamco et ex mollit eu qui ea in minim. Dolor quis
              ex exercitation sit sit magna. Cupidatat et labore ipsum consequat
              nulla sint in exercitation et.
              <a href="#">Fifth thing</a>
            </p>
            <p>
              Proident amet culpa dolor nisi et in do magna reprehenderit qui
              cupidatat ad amet. Aliquip consequat deserunt dolore anim sunt
              laboris nostrud reprehenderit cillum esse pariatur esse officia.
              Et sint labore velit ad.
              <a href="#">Something</a>
            </p>
            <p>
              Nulla proident ullamco aliquip est duis culpa cillum cillum ex.
              Veniam labore exercitation ipsum elit velit reprehenderit ea
              cupidatat do. Eiusmod elit labore tempor sint sint dolore minim.
              <a href="#">Something Else</a>
            </p>
            <p>
              Dolor duis pariatur dolore sint adipisicing veniam. Lorem fugiat
              consectetur quis excepteur ad quis commodo quis minim quis aute et
              velit. Eiusmod laboris laborum magna adipisicing. Veniam
              exercitation do velit ipsum do consectetur. Minim voluptate qui do
              adipisicing. Consequat laboris veniam ea aliqua eu minim.
              <a href="#">Third thing</a>
            </p>
            <p>
              Sunt minim id consequat deserunt ea aute laborum eiusmod. Est
              velit duis ut incididunt voluptate exercitation do velit cillum
              pariatur velit cupidatat in aliqua. Duis anim ex laborum quis
              ullamco fugiat amet minim magna non. Sint adipisicing adipisicing
              laboris eu eiusmod incididunt id laboris labore. Sit tempor id
              exercitation velit cupidatat quis cillum cupidatat nulla. Quis
              nostrud cupidatat tempor Lorem qui ex esse proident sint labore
              Lorem dolore. Aliquip amet ut sint quis amet eiusmod.
              <a href="#">Fourth thing</a>
            </p>
            <p>
              Nulla nulla dolor est quis commodo est fugiat non adipisicing
              dolor dolor. Eu magna exercitation Lorem ea occaecat elit cillum
              reprehenderit incididunt Lorem sit deserunt in adipisicing. Id
              culpa dolor ex culpa. Et laborum magna incididunt tempor laboris
              do qui laboris cillum magna ex quis. Id voluptate magna magna
              ullamco mollit ullamco et ex mollit eu qui ea in minim. Dolor quis
              ex exercitation sit sit magna. Cupidatat et labore ipsum consequat
              nulla sint in exercitation et.
              <a href="#">Fifth thing</a>
            </p>
          </React.Fragment>
        );
      }}
    </MenuConsumer>
  </MenuProvider>
);

export default Example;
