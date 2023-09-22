import React from "react";

import { blog1, closeIcon, logo, menuIcon, video1 } from "../assets";
import { useEffect, useState } from "react";
import Article from "../components/common/Article";
import Container from "../components/layout/Container";
import Title from "../components/common/Title";
import Text from "../components/common/Text";
import Footer from "../components/layout/Footer";

export default function Blog() {
  const [menu, setMenu] = useState(false);
  const [submenu, setSubmenu] = useState(false);

  useEffect(() => {
    const links = document.querySelectorAll("header nav ul li a");

    links.forEach((element) => {
      element.addEventListener("click", () => {
        links.forEach((link) => {
          link.classList.remove("active");
        });

        element.classList.add("active");
      });
    });
  });
  return (
    <div className="w-full overflow-x-hidden">
      <section className="relative w-full h-96">
        <div className="w-full h-full bg-[#00000090] absolute top-0 left-0 z-10"></div>
        <video
          src={video1}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
        />

        <div className="absolute xs:px-8 lg:px-24 top-0 left-0 w-full z-20">
          <header className="w-full  items-center justify-between py-6 flex">
            <a href="">
              <img className="w-20" src={logo} alt="" />
            </a>

            <nav
              className={`lg: lg:flex lg:bg-transparent lg:translate-x-0 transition duration-150 lg:h-auto ${
                menu
                  ? "xs:fixed top-0 right-0 flex xs:bg-[#00000099] xs:transition z-10 w-[70%] xs:h-screen"
                  : "xs:hidden  relative"
              }`}
            >
              <ul className="flex xs:w-full lg:w-auto relative xs:flex-col xs:p-6 lg:p-0 lg:flex-row xs:items-start lg:items-center gap-8">
                <li>
                  <a
                    className="text-white ransition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="aboutUS"
                  >
                    Sobre
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="/#services"
                  >
                    Serviços
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="portfolio"
                  >
                    Portofólio
                  </a>
                </li>

                <li>
                  <a
                    className="text-white active transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="blog"
                  >
                    Blog
                  </a>
                </li>

                <li className="relative">
                  <a
                    className="text-white flex items-center gap-4 transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="#"
                    onMouseOver={() => setSubmenu(true)}
                    onMouseOut={() => setSubmenu(true)}
                  >
                    Documentos
                  </a>

                  <ul
                    onMouseLeave={() => setSubmenu(false)}
                    className={`absolute w-56 top-8 z-10 left-0 flex-col gap-4 bg-white p-4 rounded-md ${
                      submenu ? "flex" : "hidden"
                    }`}
                  >
                    <li className="flex-none">
                      <a
                        href="singilConpanyIntroduction"
                        className="text-sm hover:text-primary-color text-gray-500  transition duration-150"
                      >
                        Introdução da Empresa
                      </a>
                    </li>
                    <li className="flex-none">
                      <a
                        href="singilConpanyIntroduction"
                        className="text-sm hover:text-primary-color text-gray-500  transition duration-150"
                      >
                        Singil - Tecnologia
                      </a>
                    </li>
                    <li className="flex-none">
                      <a
                        href="singilConpanyIntroduction"
                        className="text-sm hover:text-primary-color text-gray-500  transition duration-150"
                      >
                        Singil - Medicina
                      </a>
                    </li>
                    <li className="flex-none">
                      <a
                        href="singilConpanyIntroduction"
                        className="text-sm hover:text-primary-color text-gray-500  transition duration-150"
                      >
                        Singil - Starlink
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a
                    className="text-white transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="#"
                  >
                    Contacts
                  </a>
                </li>

                <button
                  className={`lg:hidden right-6 top-6 absolute ${
                    !menu ? "hidden" : "block"
                  }`}
                  onClick={() => setMenu(false)}
                >
                  <img src={closeIcon} className="w-6" alt="" />
                </button>
              </ul>
            </nav>

            <button
              className={`lg:hidden ${menu ? "hidden" : "block"}`}
              onClick={() => setMenu(true)}
            >
              <img src={menuIcon} className="w-6" alt="" />
            </button>
          </header>

          <div className="w-full flex items-center justify-center gap-8 py-12 flex-col">
            <h1 className="text-white text-5xl font-poppinsBold text-center ">
              Blog
            </h1>

            <span className="flex text-white items-center gap-4">
              <a
                className="text-sm font-poppinsMedium hover:border-b-[1px] border-white text-white"
                href="/"
              >
                Home
              </a>{" "}
              /{" "}
              <a
                className="text-sm font-poppinsMedium text-primary-color"
                href="blog"
              >
                Blog
              </a>
            </span>
          </div>
        </div>
      </section>

      <Container className="flex-col py-32 items-center gap-4">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Publicações Recentes</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-center max-w-2xl text-sm">
          Estas são as publicações recentes do nosso blogue
        </Text>

        <div className="flex w-full justify-center items-start flex-wrap gap-4 mt-6">
          <Article
            image={blog1}
            author="Grupo SIngil"
            category="Petróleo e Gás"
            title="O grupo singil abasteceu 460 toneladas de combustível"
            date="06 de Setembro"
          />
          <Article
            image={blog1}
            author="Grupo SIngil"
            category="Petróleo e Gás"
            title="O grupo singil abasteceu 460 toneladas de combustível"
            date="06 de Setembro"
          />
          <Article
            image={blog1}
            author="Grupo SIngil"
            category="Petróleo e Gás"
            title="O grupo singil abasteceu 460 toneladas de combustível"
            date="06 de Setembro"
          />
          <Article
            image={blog1}
            author="Grupo SIngil"
            category="Petróleo e Gás"
            title="O grupo singil abasteceu 460 toneladas de combustível"
            date="06 de Setembro"
          />
          <Article
            image={blog1}
            author="Grupo SIngil"
            category="Petróleo e Gás"
            title="O grupo singil abasteceu 460 toneladas de combustível"
            date="06 de Setembro"
          />
          <Article
            image={blog1}
            author="Grupo SIngil"
            category="Petróleo e Gás"
            title="O grupo singil abasteceu 460 toneladas de combustível"
            date="06 de Setembro"
          />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
