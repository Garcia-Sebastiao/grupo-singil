import {
  companyIcon,
  directorImage,
  goalIcon,
  happyIcon,
  logo,
  singilImage,
  team1,
  team2,
  timeIcon,
  valuesIcon,
  video1,
  visionIcon,
  menuIcon,
  closeIcon,
} from "../assets";
import { useEffect, useState } from "react";
import Container from "../components/layout/Container";
import Title from "../components/common/Title";
import Text from "../components/common/Text";
import Testimonal from "../components/common/Testimonal";
import Footer from "../components/layout/Footer";
import Member from "../components/common/Member";

export default function About() {
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
              className={`lg:relative lg:flex lg:bg-transparent lg:translate-x-0 transition duration-150 lg:h-auto ${
                menu
                  ? "xs:fixed top-0 right-0 flex xs:bg-[#00000099] xs:transition z-10 w-[70%] xs:h-screen"
                  : "xs:hidden  relative"
              }`}
            >
              <ul className="flex xs:w-full lg:w-auto relative xs:flex-col xs:p-6 lg:p-0 lg:flex-row xs:items-start lg:items-center gap-8">
                <li>
                  <a
                    className="text-white  ransition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-white active transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="aboutUS"
                  >
                    Sobre
                  </a>
                </li>

                <li>
                  <a
                    className="text-white transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="#"
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

                <li>
                  <a
                    className="text-white transition duration-150 brightness-75 hover:brightness-100 text-sm"
                    href="#"
                  >
                    Documentos
                  </a>
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
              Sobre
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
                href="aboutUS"
              >
                Sobre
              </a>
            </span>
          </div>
        </div>
      </section>

      <Container className="py-32">
        <div className="flex items-start gap-12">
          <div className="flex-1">
            <div>
              <h2 className="text-primary-color font-semibold text-xl">
                Conheça-nos
              </h2>
              <h2 className="text-3xl font-poppinsBold text-primary-text">
                Saiba mais sobre o Grupo Singil
              </h2>
            </div>

            <div className="mt-8 flex-col flex gap-4 px-12">
              <div className="flex flex-col items-start">
                <span className="text-md text-gray-400">Desde 2012</span>
                <h2 className="text-2xl text-gray-500 font-poppinsSemiBold">
                  Nossa História
                </h2>
              </div>

              <Text className="min-w-[200px]">
                Grupo Singil que foi iniciado em 2012. Somos empresa de renome
                na prestação de serviços marítimos em Angola. Tendo servido mais
                de 2000 navios em Luanda e Cabinda. Desejo aproveitar esta
                oportunidade para informá-lo sobre nossos serviços e como eles
                podem ser úteis para sua empresa.
              </Text>

              <Text className="min-w-[200px]">
                A nossa visão é continuar a ser uma dos 10 empresas de
                referência em Angola, prestando serviços logísticos a navios e
                transportes sólidos e líquidos serviços de coleta de lixo
                urbano. Na província de Cabinda, recentemente recebeu a
                autorização privilegiada de ser o única empresa a fornecer os
                itens acima mencionados serviços e por estar localizado no porto
                de Cabinda.
              </Text>
            </div>
          </div>

          <div className="lg:flex-1 xs:hidden lg:flex">
            <img
              src={singilImage}
              className="w-full h-full object-cover object-center rounded-xl"
              alt="Grupo Singil"
            />
          </div>
        </div>
      </Container>

      <Container className="bg-[#F5F6F7] items-center gap-6 py-20 flex-wrap justify-center">
        <div className="flex flex-1 py-8 px-8 items-center rounded-md shadow-lg bg-white gap-4">
          <div>
            <img src={happyIcon} className="w-12" alt="" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-primary-text text-3xl font-poppinsMedium">
              232
            </h2>
            <span className="text-gray-600 text-sm">Clientes felizes</span>
          </div>
        </div>
        <div className="flex flex-1 py-8 px-8 items-center rounded-md shadow-lg bg-white gap-4">
          <div>
            <img src={companyIcon} className="w-12" alt="" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-primary-text text-3xl font-poppinsMedium">
              17
            </h2>
            <span className="text-gray-600 text-sm">Empresas</span>
          </div>
        </div>
        <div className="flex flex-1 py-8 px-8 items-center rounded-md shadow-lg bg-white gap-4">
          <div>
            <img src={timeIcon} className="w-12" alt="" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-primary-text text-3xl font-poppinsMedium">
              1463
            </h2>
            <span className="text-gray-600 text-sm">Horas de Trabalho</span>
          </div>
        </div>
        <div className="flex flex-1 py-8 px-8 items-center rounded-md shadow-lg bg-white gap-4">
          <div>
            <img src={happyIcon} className="w-12" alt="" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h2 className="text-primary-text text-3xl font-poppinsMedium">
              30
            </h2>
            <span className="text-gray-600 text-sm">Colaboradores</span>
          </div>
        </div>
      </Container>

      <Container className="flex-col pt-32 items-center gap-4">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Valores da Empresa</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-center max-w-2xl text-sm">
          O GRUPO SINGIL, é uma empresa angolana que nasce da necessidade de
          responder às solicitações de fornecimento de serviço dos clientes.
          Para tal foi criada uma marca específica para prestar este tipo de
          serviço.
        </Text>

        <div className="flex gap-16 justify-center flex-wrap w-full mt-10">
          <div className="w-96 h-96">
            <img
              src={singilImage}
              className="w-full h-full rounded-lg object-cover object-center"
              alt=""
            />
          </div>

          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col gap-2">
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
            </div>

            <div className="flex flex-col gap-2">
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
            </div>

            <div className="flex flex-col gap-2">
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
            </div>
          </div>
        </div>
      </Container>

      <Container className="flex items-start my-32 py-20 gap-14 flex-wrap bg-[#F5F6F7]">
        <div className="flex flex-col gap-6 items-start">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-primary-text text-2xl font-poppinsSemiBold pb-2">
                Sinclesio Dário Guedes Zazarias
              </h2>
              <div className="w-10 h-1 bg-primary-color rounded-md"></div>
            </div>

            <h3 className="text-xl text-gray-500">Diretor Geral</h3>
          </div>

          <Text className="max-w-lg">
            Sinclesio Zacarias formou-se Bachelar of Arts In Business and
            International Languages na East London na cidade de Londes 9 anos
            com extensa experiência na coordenação de pilotagem da barra do
            Porto de Luanda 9 anos como CEO do Grupo Singil especializando-se na
            venda de petróleo e os seus derivados. Liderando um vasto time na
            logística de todo o tipo de navios a fornecer todo o tipo de
            equipamento, ship chandler, limpeza de caso etc, remoção de residuos
            sólidos e líquidos sendo representante com a 3ª maior empresa do
            mercado internacional de diamante. Gestor na área medicinal como
            farmácia representante de uma fábrica fornecedora de diversos
            equipamentos como teste rápido para Covid-19 e outros. Professor
            didático por alguns anos Entendedor na área de comunicação e
            satélite.
          </Text>
        </div>

        <div className="flex-1 max-w-fit">
          <img
            src={directorImage}
            className="object-cover rounded-xl w-full h-full"
            alt=""
          />
        </div>
      </Container>

      <Container className="flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Nossa Equipa</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-center max-w-2xl text-sm">
          A nossa equipa é composta por profissionais competentes e apaixonados
          pelo o que fazem.
        </Text>

        <div className="w-full flex mt-10 justify-center gap-20 flex-wrap">
          <Member
            image={team1}
            name="Sinclésio Zacarias"
            role="Diretor Geral"
          />
          <Member
            image={team2}
            name="Tomás Lenda"
            role="Administrador em Cabinda"
          />
          <Member
            image={team1}
            name="Sinclésio Zacarias"
            role="Diretor Geral"
          />
          <Member
            image={team1}
            name="Sinclésio Zacarias"
            role="Diretor Geral"
          />
        </div>
      </Container>

      <Container className="flex-col py-20 mt-32 items-center gap-4 bg-[#F5F6F7]">
        <div className="flex items-center gap-5">
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
          <Title className="text-3xl">Testemunhos</Title>
          <div className="w-10 h-1 bg-primary-color rounded-full"></div>
        </div>

        <Text className="text-center max-w-2xl text-sm">
          Estes são os testemunhos de algumas empresas que tivemos a honra de
          prestar serviços
        </Text>

        <div className="flex items-center justify-center xs:flex-wrap lg:flex-nowrap gap-8 mt-6">
          <Testimonal description="Recomendo vivamente o Grupo Singil a todas as empresas marítimas que buscam um parceiro completo e confiável. Eles superaram nossas expectativas em todas as áreas, e sua expertise em equipamentos marítimos, como câmeras térmicas, VHF, AIS, radares marítimos, VTS e a estação meteorológica 220WX da AIRMAR, juntamente com a conexão de internet via satélite, são fundamentais para o sucesso contínuo de nossas operações em todo o mundo." />

          <Testimonal description="Recomendo vivamente o Grupo Singil a todas as empresas marítimas que buscam um parceiro completo e confiável. Eles superaram nossas expectativas em todas as áreas, e sua expertise em equipamentos marítimos, como câmeras térmicas, VHF, AIS, radares marítimos, VTS e a estação meteorológica 220WX da AIRMAR, juntamente com a conexão de internet via satélite, são fundamentais para o sucesso contínuo de nossas operações em todo o mundo." />
        </div>
      </Container>

      <Footer />
    </div>
  );
}
