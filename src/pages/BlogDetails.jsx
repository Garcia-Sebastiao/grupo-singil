import React from "react";

import Comment from "../components/common/Comment";
import { useEffect, useState } from "react";
import Text from "../components/common/Text";
import Footer from "../components/layout/Footer";
import Container from "../components/layout/Container";
import RecentArticle from "../components/common/RecentArticle";
import {
  blog1,
  blog2,
  blog3,
  closeIcon,
  logo,
  menuIcon,
  team1,
  team4,
  video1,
} from "../assets";

export default function BlogDetails() {
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
              Leitura de Artigo
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
                Blog Details
              </a>
            </span>
          </div>
        </div>
      </section>

      <Container className="py-32 items-start gap-8 flex-wrap">
        <div className="flex-1 max-w-fit flex flex-col gap-6 items-start">
          <div className="w-full bg-white rounded-lg shadow-lg">
            <div className="w-full h-96">
              <img
                src={blog1}
                className="w-full h-full object-cover rounded-t-lg"
                alt=""
              />
            </div>

            <div className="flex flex-col items-start gap-8 p-6 flex-wrap">
              <h2 className="text-2xl font-poppinsSemiBold text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deleniti, eligendi. Rem minima ratione recusandae iure. Unde,
                voluptates?
              </h2>

              <div className="flex items-center flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <img src="" className="w-6" alt="" />
                  <span className="text-sm text-gray-500">
                    Laurindo Quintas
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="" className="w-6" alt="" />
                  <span className="text-sm text-gray-500">Abril, 2023</span>
                </div>
                <div className="flex items-center gap-3">
                  <img src="" className="w-6" alt="" />
                  <span className="text-sm text-gray-500">12 Comentários</span>
                </div>
              </div>

              <div className="flex flex-col items-start gap-6">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore consequatur error ut optio corrupti explicabo ex eum
                  quod, ipsum perspiciatis dolore, tempora deleniti recusandae
                  rem ad ducimus nesciunt veniam facere. Lorem ipsum dolor, sit
                  amet consectetur adipisicing elit. Perspiciatis, vel. Alias
                  cum repudiandae tempora, soluta a cupiditate debitis
                  recusandae nam eos iusto quis rerum ipsam cumque! Hic
                  reprehenderit ut libero.
                </Text>

                <Text>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Natus ducimus numquam quidem a alias nisi, nam perferendis
                  ipsa odio voluptatibus nesciunt, quae reiciendis totam quas
                  debitis unde ex! Culpa, quibusdam?
                </Text>

                <h3 className="text-xl font-poppinsSemiBold text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur.
                </h3>

                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                  impedit quidem voluptatibus suscipit eveniet, vitae iste!
                  Ipsum modi consequuntur nostrum commodi, natus molestiae nihil
                  dolores eligendi, consequatur aspernatur.
                </Text>
              </div>

              <div className="w-full flex flex-col gap-3">
                <div className="w-full bg-gray-300 h-[1px]"></div>

                <div className="flex items-center gap-6 flex-wrap">
                  <div className="flex items-center gap-3">
                    <img src="" className="w-6" alt="" />
                    <span className="text-sm text-gray-500">
                      Petróleo e Gás
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="" className="w-6" alt="" />
                    <span className="text-sm text-gray-500">Marketing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="" className="w-6" alt="" />
                    <span className="text-sm text-gray-500">Negócios</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex w-full p-8 rounded-lg bg-white shadow-lg items-center xs:flex-wrap md:flex-nowrap justify-center gap-4">
            <div className="rounded-full flex-none w-32 h-32">
              <img
                src={team1}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>

            <div className="flex flex-col md:items-start gap-3 xs:items-center">
              <h2 className="text-lg font-poppinsSemiBold text-gray-600">
                Laurindo Quintas
              </h2>

              <div className="flex items-start gap-3"></div>

              <div>
                <p className="text-sm xs:text-center md:text-left leading-relaxed italic text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur hic libero maxime, laboriosam dicta natus
                  dolores. Temporibus neque vel dolorem. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>

          <div className="flex mt-6 flex-col gap-4">
            <h2 className="text-2xl font-poppinsSemiBold text-gray-800">
              Comentários
            </h2>

            <div className="flex flex-col items-start gap-8">
              <Comment
                name="Társio Gomes"
                date="23, Abril"
                image={team4}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur hic libero maxime, laboriosam dicta natus
                  dolores. Temporibus neque vel"
              />
              <Comment
                name="Társio Gomes"
                date="23, Abril"
                image={team4}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur hic libero maxime, laboriosam dicta natus
                  dolores. Temporibus neque vel"
              />
              <Comment
                name="Társio Gomes"
                date="23, Abril"
                image={team4}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur hic libero maxime, laboriosam dicta natus
                  dolores. Temporibus neque vel"
              />
            </div>

            <div className="w-full flex mt-4 flex-col gap-3 items-start p-6 rounded-lg shadow-lg ">
              <h2 className="text-xl font-poppinsSemiBold text-gray-800">
                Comentar
              </h2>

              <span className="text-sm text-gray-500">
                Your email address will not be published. Required fields are
                marked *
              </span>

              <form
                className="w-full items-start flex flex-col gap-3"
                action=""
              >
                <div className="flex xs:flex-wrap md:flex-nowrap w-full mt-3 items-center gap-3">
                  <input
                    type="text"
                    className="w-full p-3 rounded-md border-[1px] text-sm"
                    placeholder="Digite seu nome"
                  />
                  <input
                    type="email"
                    className="w-full p-3 rounded-md border-[1px] text-sm"
                    placeholder="Digite seu email"
                  />
                </div>

                <textarea
                  name=""
                  placeholder="Digite seu comentário"
                  className="w-full p-3 max-h-[160px] min-h-[47px] rounded-md border-[1px] text-sm"
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>

                <button className="text-sm mt-4 xs:w-full md:w-auto text-white bg-gray-700 px-14 py-3 rounded-md">
                  Comentar
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="md:flex-1 lg:flex-[0.5]">
          <div className="w-full flex flex-col items-start gap-6 bg-white rounded-lg shadow-lg p-6">
            <div className="flex w-full flex-col items-start gap-4">
              <h3 className="text-lg font-poppinsSemiBold text-gray-700">
                Procurar Artigo
              </h3>
              <form className="w-full" action="">
                <div className="flex border-2 border-r-0 rounded-md items-center">
                  <input type="text" className="w-full p-3 text-sm" />
                  <button className="bg-primary-color p-3 text-white text-sm rounded-r-md">
                    Procurar
                  </button>
                </div>
              </form>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-lg font-poppinsSemiBold text-gray-700">
                Categories
              </h3>

              <ul className="flex flex-col items-start gap-4">
                <li className="flex items-center gap-3">
                  <span className="text-sm">Geral</span>{" "}
                  <span className="text-sm text-gray-300">(25)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sm">Estilo de vida</span>{" "}
                  <span className="text-sm text-gray-300">(25)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sm">Viagens</span>{" "}
                  <span className="text-sm text-gray-300">(25)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sm">Negócios</span>{" "}
                  <span className="text-sm text-gray-300">(25)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sm">Criatividade</span>{" "}
                  <span className="text-sm text-gray-300">(25)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-sm">Educação</span>{" "}
                  <span className="text-sm text-gray-300">(25)</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-poppinsSemiBold text-gray-700">
                Postagens Recentes
              </h3>

              <div className="flex flex-col gap-3 items-start">
                <RecentArticle
                  title="Novo edifício tem sido construido para servir..."
                  date="Jan, 2023"
                  image={blog3}
                />
                <RecentArticle
                  title="Novo edifício tem sido construido para servir..."
                  date="Jan, 2023"
                  image={blog3}
                />
                <RecentArticle
                  title="Novo edifício tem sido construido para servir..."
                  date="Jan, 2023"
                  image={blog3}
                />
                <RecentArticle
                  title="Novo edifício tem sido construido para servir..."
                  date="Jan, 2023"
                  image={blog3}
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-poppinsSemiBold text-gray-700">
                Atalhos
              </h3>

              <div className="flex gap-3 items-center flex-wrap">
                <button className="py-2 px-4 border-[1px] text-xs text-gray-600 hover:brightness-75 transition duration-150">
                  App
                </button>
                <button className="py-2 px-4 border-[1px] text-xs text-gray-600 hover:brightness-75 transition duration-150">
                  IT
                </button>
                <button className="py-2 px-4 border-[1px] text-xs text-gray-600 hover:brightness-75 transition duration-150">
                  Negócios
                </button>
                <button className="py-2 px-4 border-[1px] text-xs text-gray-600 hover:brightness-75 transition duration-150">
                  Marketing
                </button>
                <button className="py-2 px-4 border-[1px] text-xs text-gray-600 hover:brightness-75 transition duration-150">
                  Petróleo
                </button>
                <button className="py-2 px-4 border-[1px] text-xs text-gray-600 hover:brightness-75 transition duration-150">
                  Gás
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
