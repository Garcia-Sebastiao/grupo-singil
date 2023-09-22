import {
  blog1,
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  closeIcon,
  feature1,
  goalIcon,
  logo,
  maritimImage,
  medicineImage,
  menuIcon,
  singilImage,
  techImage,
  upIcon,
  valuesIcon,
  video1,
  video2,
  video3,
  visionIcon,
} from "../assets";
import { useEffect, useState } from "react";
import Text from "../components/common/Text";
import Title from "../components/common/Title";
import Footer from "../components/layout/Footer";
import Service from "../components/common/Service";
import Project from "../components/common/Project";
import Article from "../components/common/Article";
import Container from "../components/layout/Container";
import SignModal from "../components/layout/SignModal";
import Testimonal from "../components/common/Testimonal";
import Carrousel from "../components/layout/Carrousel/Carrousel";
import { SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import {
  fromBottom,
  fromLeft,
  fromRight,
  fromTop,
} from "../hooks/useAnimations";
import { FreeMode, Pagination, Navigation } from "swiper";
import { clients } from "../utils/clients";

export default function Home() {
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

  const [menu, setMenu] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-full relative overflow-x-hidden">
      <SignModal onClose={() => setOpenModal(false)} isOpen={openModal} />
      <a
        href="#home"
        className="bg-primary-color z-40 rounded-md p-3 fixed bottom-4 right-4"
      >
        <img src={upIcon} className="w-4" alt="" />
      </a>
      <section className="relative w-full xs:h-screen lg:h-screen md:h-[70vh]">
        <div className="w-full h-full bg-[#00000090] absolute top-0 left-0 z-10"></div>
        <Carrousel modules={[Navigation, FreeMode]}>
          <SwiperSlide>
            <video
              src={video1}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={video2}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
          </SwiperSlide>
          <SwiperSlide>
            <video
              src={video3}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
            />
          </SwiperSlide>
        </Carrousel>

        <div
          id="home"
          className="absolute xs:px-8 lg:px-24 top-0 left-0 w-full z-20"
        >
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
                    className="text-white active ransition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="#home"
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
                    href="#services"
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
                    className="text-white transition duration-150 brightness-75 hover:brightness-100 text-sm"
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
                    className={`absolute w-56 top-8 left-0 flex-col gap-4 bg-white p-4 rounded-md ${
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
                    href="#contacts"
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

          <div className="w-full flex items-center justify-center gap-8 xs:py-8 md:py-36 flex-col">
            <motion.h1
              initial={fromTop.initial}
              whileInView={fromTop.animate}
              transition={fromTop.transition}
              className="text-white xs:text-4xl lg:text-5xl font-poppinsBold text-center "
            >
              Bem-vindo ao{" "}
              <span className="text-primary-color font-poppinsBold">
                Grupo Singil
              </span>
            </motion.h1>

            <motion.p
              initial={fromBottom.initial}
              whileInView={fromBottom.animate}
              transition={fromBottom.transition}
              className="text-white max-w-4xl leading-loose brightness-90 text-center"
            >
              Seja você uma empresa do setor marítimo, uma instituição de saúde
              ou uma entidade tecnológica, o Grupo Singil está aqui para atender
              às suas necessidades com um amplo espectro de serviços
              especializados. Desde a nossa fundação, temos nos dedicado a
              oferecer soluções de excelência, com profissionalismo e
              comprometimento, sempre buscando superar as expectativas dos
              nossos clientes.
            </motion.p>

            <a
              href=""
              className="text-sm text-white border-2 border-primary-color px-6 py-3 rounded-2xl transition duration-150 hover:bg-[#004a9f50]"
            >
              Conheça-nos
            </a>
          </div>
        </div>
      </section>

      <Container className="bg-[#F5F6F7] py-24 flex justify-center xs:flex-wrap lg:flex-nowrap gap-12">
        <motion.div
          initial={fromLeft.initial}
          whileInView={fromLeft.animate}
          transition={fromLeft.transition}
          className="flex flex-col gap-6 items-start"
        >
          <Title className="text-primary-text xs:text-left text-3xl">
            Solicite um orçamento
          </Title>

          <div className="flex flex-col gap-2">
            <Text className="text-sm">
              No Grupo Singil, acreditamos que o sucesso dos nossos clientes é a
              base do nosso próprio sucesso. Por isso, buscamos constantemente
              aprimorar nossos serviços e expandir nossas soluções para atender
              às crescentes demandas do mercado.
            </Text>

            <Text className="text-sm">
              Conte conosco para ser seu parceiro confiável em todas as suas
              necessidades marítimas, de saúde e tecnológicas. Estamos aqui para
              tornar sua experiência conosco uma jornada de sucesso.
            </Text>
          </div>
        </motion.div>

        <motion.div
          initial={fromBottom.initial}
          whileInView={fromBottom.animate}
          transition={fromBottom.transition}
          className="bg-white p-6 shadow-sm rounded-md w-full flex flex-col gap-4 xs:max-w-fit lg:max-w-md items-start"
        >
          <h3 className="text-primary-text text-md font-poppinsSemiBold">
            SOLICITE UM ORÇAMENTO
          </h3>

          <Text className="text-xs text-gray-500">
            Entre em contato conosco para saber mais sobre como o Grupo Singil
            pode agregar valor ao seu negócio e tornar suas operações mais
            eficientes e seguras. Estamos ansiosos para trabalhar ao seu lado e
            construir um futuro próspero juntos.
          </Text>

          <button
            onClick={() => setOpenModal(true)}
            className="px-16 py-3 bg-primary-color text-sm rounded-md text-white transition duration hover:brightness-90"
          >
            Solicitar
          </button>
        </motion.div>
      </Container>

      <Container className="flex-col pt-32 items-center gap-4">
        <motion.div
          initial={fromBottom.initial}
          whileInView={fromBottom.animate}
          transition={fromBottom.transition}
          className="flex items-center gap-5"
        >
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Valores da Empresa</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </motion.div>

        <Text className="text-center max-w-2xl text-sm">
          O GRUPO SINGIL, é uma empresa angolana que nasce da necessidade de
          responder às solicitações de fornecimento de serviço dos clientes.
          Para tal foi criada uma marca específica para prestar este tipo de
          serviço.
        </Text>

        <div className="flex gap-16 justify-center flex-wrap w-full mt-10">
          <motion.div
            initial={fromLeft.initial}
            whileInView={fromLeft.animate}
            transition={fromLeft.transition}
            className="w-96 h-96"
          >
            <img
              src={singilImage}
              className="w-full h-full rounded-lg object-cover object-center"
              alt=""
            />
          </motion.div>

          <div className="flex flex-col items-start gap-6">
            <motion.div
              initial={fromRight.initial}
              whileInView={fromRight.animate}
              transition={fromRight.transition}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <img src={visionIcon} className="w-10" alt="" />
                <h2 className="text-wxl text-primary-text font-poppinsMedium">
                  Nossa Visão
                </h2>
              </div>

              <div>
                <Text className="max-w-sm leading-relaxed text-justify">
                  Os nossos clientes a tornarem-se organizações de grande
                  desempenho.
                </Text>
              </div>
            </motion.div>

            <motion.div
              initial={fromRight.initial}
              whileInView={fromRight.animate}
              transition={fromRight.transition}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <img src={goalIcon} className="w-10" alt="" />
                <h2 className="text-wxl text-primary-text font-poppinsMedium">
                  Nossa Missão
                </h2>
              </div>

              <div>
                <Text className="max-w-sm leading-relaxed text-justify">
                  A parceria partilha com o sseus clientes uma experiente equipa
                  de especialistas e proporciona aos clientes, serviços de
                  elevada qualidade e tendo prestado a empresas.
                </Text>
              </div>
            </motion.div>

            <motion.div
              initial={fromRight.initial}
              whileInView={fromRight.animate}
              transition={fromRight.transition}
              className="flex flex-col gap-2"
            >
              <div className="flex items-center gap-4">
                <img src={valuesIcon} className="w-10" alt="" />
                <h2 className="text-wxl text-primary-text font-poppinsMedium">
                  Nossos Valores
                </h2>
              </div>

              <div>
                <Text className="max-w-sm leading-relaxed text-justify">
                  O grupo não s+o garante qualidade certificada dos seus
                  serviços, mas também o cumprimento rigor dos prazos acordados.
                </Text>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>

      <Container id="services" className="flex-col items-center pt-32 gap-4">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Nossos Serviços</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-gray-500">
          Este são os nossos principais serviços
        </Text>

        <div className="flex items-start gap-8 mt-6 justify-center flex-wrap">
          <Service image={maritimImage}>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-gray-500">Bunkering</li>
              <li className="text-sm text-gray-500">
                Abastecimento de água potável
              </li>
              <li className="text-sm text-gray-500">Shipchandler</li>
              <li className="text-sm text-gray-500">
                Remoção de resíduos sólidos e líquidos (slop, sludge, blidge,
                garbage, etc)
              </li>

              <li className="text-sm text-gray-500">
                Mergulho (Limpeza de casco entre outros)
              </li>
            </ul>
          </Service>
          <Service image={medicineImage}>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-gray-500">
                Fornecimento de Medicamentos
              </li>
              <li className="text-sm text-gray-500">
                Equipamentos de Laboratório
              </li>
              <li className="text-sm text-gray-500">
                Odontologia, Oftalmologia, Imagiologia , Inceneradora Hospitalar
              </li>
              <li className="text-sm text-gray-500">
                Manutenção preventiva e corretiva dos equipamentos
              </li>

              <li className="text-sm text-gray-500">Reparação</li>
              <li className="text-sm text-gray-500">Formação pós venda</li>
            </ul>
          </Service>
          <Service image={techImage}>
            <ul className="flex flex-col gap-3">
              <li className="text-sm text-gray-500">Cameras Térmicas</li>
              <li className="text-sm text-gray-500">VHF</li>
              <li className="text-sm text-gray-500">AIS</li>
              <li className="text-sm text-gray-500">Radares marítimos</li>
              <li className="text-sm text-gray-500">VTS</li>
              <li className="text-sm text-gray-500">
                AIRMAR Estação metereológica 220WX
              </li>
              <li className="text-sm text-gray-500">Internet via satélite</li>
            </ul>
          </Service>
        </div>
      </Container>

      <Container className="flex-col pt-32 items-center gap-4">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Nosso Portfólio</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-center max-w-2xl text-sm">
          Nosso portfólio constituídos por alguns trabalhos feitos por nós.
        </Text>

        <div className="flex items-center  flex-wrap justify-center gap-2 ">
          <button className="border-2 focus:border-primary-color border-gray-300 text-sm rounded-md px-4 py-3 font-poppinsMedium text-gray-400 hover:text-primary-color flex-none focus:text-primary-color transition duration-150">
            Tudo
          </button>
          <button className="border-2 focus:border-primary-color border-gray-300 text-sm rounded-md px-4 py-3 font-poppinsMedium text-gray-400 hover:text-primary-color flex-none focus:text-primary-color transition duration-150">
            Setor Maritimo
          </button>
          <button className="border-2 focus:border-primary-color border-gray-300 text-sm rounded-md px-4 py-3 font-poppinsMedium text-gray-400 hover:text-primary-color flex-none focus:text-primary-color transition duration-150">
            Medicina
          </button>
          <button className="border-2 focus:border-primary-color border-gray-300 text-sm rounded-md px-4 py-3 font-poppinsMedium text-gray-400 hover:text-primary-color flex-none focus:text-primary-color transition duration-150">
            Tecnologia
          </button>
        </div>

        <div className="flex items-center w-full justify-center gap-6 mt-10 flex-wrap">
          <Project
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae quam..."
            title="Levantamento de cargas"
            image={medicineImage}
          />
          <Project
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae quam..."
            title="Escoamento oceânico"
            image={medicineImage}
          />
          <Project
            detail="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis recusandae quam..."
            title="Manutenção Preventiva"
            image={medicineImage}
          />
        </div>
      </Container>

      <Container className="flex-col py-20 mt-32 items-center gap-4 bg-[#F5F6F7]">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Porque Escolher-nos?</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-center max-w-2xl text-sm">
          Como nossos serviços podem beneficiar sua empresa
        </Text>

        <div className="flex items-start mt-8 gap-14 xs:flex-wrap lg:flex-nowrap">
          <div className="flex flex-1 flex-col gap-4 items-start">
            <div className="flex w-full items-center gap-2">
              <button className="outline-none text-primary-text w-full border-b-4 pb-1 border-gray-300 transition duration-150 hover:text-primary-color focus:text-primary-color focus:border-primary-color font-poppinsSemiBold text-xl">
                Eficiência
              </button>
              <button className="outline-none text-primary-text w-full border-b-4 pb-1 border-gray-300 transition duration-150 hover:text-primary-color focus:text-primary-color focus:border-primary-color font-poppinsSemiBold text-xl">
                Preços
              </button>
            </div>

            <div className="mt-16 flex gap-8 flex-col items-start">
              <div className="relative">
                <h2 className="text-3xl font-poppinsBold text-primary-text">
                  EFICIÊNCIA
                </h2>
                <div className="absolute -bottom-4 bg-primary-color w-12 h-1 rounded-md"></div>
              </div>

              <Text className="italic">
                Acreditamos que nossa parceria pode beneficiar a sua empresa
                para facilitar o seu actividades marítimas em Angola. O nosso
                grupo não só garante a qualidade certificada dos seus serviços,
                mas também o estrito cumprimento do acordado prazos. Atuando há
                mais de 10 anos no mercado setor marítimo. Podemos ajudar a
                aumentar a produtividade de suas operações em Angola. Tanto em
                Luanda como em Cabinda
              </Text>
            </div>
          </div>

          <div className="flex-1 min-w-fit h-96">
            <img
              src={feature1}
              className="w-full rounded-2xl h-full object-cover object-center"
              alt=""
            />
          </div>
        </div>
      </Container>

      <Container className="flex-col pt-32 items-center gap-4">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Nossos Clientes</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-center max-w-2xl text-sm">
          Nossos clientes escolheram-nos pela a excelência.
        </Text>

        <div className="flex justify-center pt-10 w-full">
          <Carrousel
            style={{ paddingBottom: "70px" }}
            settings={{
              pagination: {
                clickable: true,
              },
              spaceBetween: 0,
              grabCursor: true,
              loop: true,
              breakpoints: {
                360: {
                  slidesPerView: 2,
                  slidesPerGroup: 1,
                },
                640: {
                  slidesPerView: 5,
                  slidesPerGroup: 2,
                },
                1200: {
                  slidesPerView: 6,
                  slidesPerGroup: 2,
                },
              },
            }}
            modules={[Pagination, FreeMode]}
          >
            {clients.map((client) => (
              <SwiperSlide>
                <div>
                  <img src={client} className="w-32" alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Carrousel>
        </div>
      </Container>

      <Container className="flex-col py-20 mt-32 items-center gap-8 bg-[#F5F6F7]">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Testemunhos</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-center max-w-2xl text-sm">
          Estes são os testemunhos de algumas empresas que tivemos a honra de
          prestar serviços
        </Text>

        <Carrousel
          style={{
            paddingBottom: "70px",
          }}
          settings={{
            pagination: {
              clickable: true,
            },
            spaceBetween: 20,
            grabCursor: true,
            loop: true,
            breakpoints: {
              360: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              640: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
              1200: {
                slidesPerView: 2,
                slidesPerGroup: 2,
              },
            },
          }}
          modules={[Pagination, FreeMode]}
        >
          <SwiperSlide>
            <Testimonal description="Recomendo vivamente o Grupo Singil a todas as empresas marítimas que buscam um parceiro completo e confiável. Eles superaram nossas expectativas em todas as áreas, e sua expertise em equipamentos marítimos, como câmeras térmicas, VHF, AIS, radares marítimos, VTS e a estação meteorológica 220WX da AIRMAR, juntamente com a conexão de internet via satélite, são fundamentais para o sucesso contínuo de nossas operações em todo o mundo." />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonal description="Recomendo vivamente o Grupo Singil a todas as empresas marítimas que buscam um parceiro completo e confiável. Eles superaram nossas expectativas em todas as áreas, e sua expertise em equipamentos marítimos, como câmeras térmicas, VHF, AIS, radares marítimos, VTS e a estação meteorológica 220WX da AIRMAR, juntamente com a conexão de internet via satélite, são fundamentais para o sucesso contínuo de nossas operações em todo o mundo." />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonal description="Recomendo vivamente o Grupo Singil a todas as empresas marítimas que buscam um parceiro completo e confiável. Eles superaram nossas expectativas em todas as áreas, e sua expertise em equipamentos marítimos, como câmeras térmicas, VHF, AIS, radares marítimos, VTS e a estação meteorológica 220WX da AIRMAR, juntamente com a conexão de internet via satélite, são fundamentais para o sucesso contínuo de nossas operações em todo o mundo." />
          </SwiperSlide>
          <SwiperSlide>
            <Testimonal description="Recomendo vivamente o Grupo Singil a todas as empresas marítimas que buscam um parceiro completo e confiável. Eles superaram nossas expectativas em todas as áreas, e sua expertise em equipamentos marítimos, como câmeras térmicas, VHF, AIS, radares marítimos, VTS e a estação meteorológica 220WX da AIRMAR, juntamente com a conexão de internet via satélite, são fundamentais para o sucesso contínuo de nossas operações em todo o mundo." />
          </SwiperSlide>
        </Carrousel>
      </Container>

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
        </div>
      </Container>

      <Footer />
    </div>
  );
}
