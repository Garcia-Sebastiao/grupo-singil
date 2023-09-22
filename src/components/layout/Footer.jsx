import React from "react";
import {
  facebookIcon,
  footerImage,
  instagramIcon,
  linkedinIcon,
  logo,
  phoneIcon,
} from "../../assets";

export default function Footer() {
  return (
    <footer id="contacts" className="w-full flex flex-col gap-16 xs:px-8 lg:px-24 py-24 relative">
      <img
        src={footerImage}
        className="w-full brightness-[20%] h-full absolute top-0 left-0 -z-10 object-center object-cover "
        alt=""
      />

      <div className="flex items-start gap-16 xs:flex-wrap lg:flex-nowrap lg:justify-center">
        <div className="flex flex-col gap-6 items-start">
          <a href="">
            <img src={logo} className="w-24" alt="" />
          </a>

          <span className="text-white text-sm">
            AV.Mortala Mohamed Ilha de Luanda - Município da Ingombota Angola
          </span>

          <div className="flex flex-col gap-1 items-start">
            <span className="text-white text-sm">
              <span className="font-poppinsMedium">Telefone:</span> 222 914 326
              232/ 931 176 000
            </span>
            <span className="text-white text-sm">
              <span className="font-poppinsMedium">Email:</span>{" "}
              geral@gruposingil.com
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href=""
              className="p-3 rounded-md hover:bg-primary-color transition duration-150 bg-[#ffffff20] flex items-center justify-center"
            >
              <img src={phoneIcon} className="w-5" alt="" />
            </a>
            <a
              href=""
              className="p-3 rounded-md hover:bg-primary-color transition duration-150 bg-[#ffffff20] flex items-center justify-center"
            >
              <img src={facebookIcon} className="w-5" alt="" />
            </a>
            <a
              href=""
              className="p-3 rounded-md hover:bg-primary-color transition duration-150 bg-[#ffffff20] flex items-center justify-center"
            >
              <img src={linkedinIcon} className="w-5" alt="" />
            </a>
            <a
              href=""
              className="p-3 rounded-md hover:bg-primary-color transition duration-150 bg-[#ffffff20] flex items-center justify-center"
            >
              <img src={instagramIcon} className="w-5" alt="" />
            </a>
          </div>
        </div>

        <div className="flex flex-col max-w-fit items-start gap-6">
          <h2 className="text-white text-xl font-poppinsSemiBold">
            Links Uteis
          </h2>

          <ul className="flex flex-col gap-4">
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start gap-6">
          <h2 className="text-white text-xl font-poppinsSemiBold">
            Setor Marítimo
          </h2>

          <ul className="flex flex-col gap-6">
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Bunkering
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Abastecimento de água potável;
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Shipchandler;
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Remoção de resíduos sólidos e líquidos (slop, sludge, blidge,
                garbage, etc).
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
              >
                Mergulho (Limpeza de casco entre outros);
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col max-w-fit items-start gap-6">
          <h2 className="text-white text-xl font-poppinsSemiBold">Medicina</h2>

          <ul className="flex flex-col gap-6">
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Fornecimento de Medicamentos;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Equipamentos de Laboratório, Odontologia, Oftalmologia,
                Imagiologia , Inceneradora Hospitalar;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Manutenção preventiva e corretiva dos equipamentos;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Reparação;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Formação pós venda;
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col max-w-fit items-start gap-6">
          <h2 className="text-white text-xl font-poppinsSemiBold">
            Tecnologia
          </h2>

          <ul>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Cameras Térmicas;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                VHF;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                AIS;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Radares marítimos;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                VTS;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                AIRMAR Estação metereológica 220WX;
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Internete via satélite (Starlink);
              </a>
            </li>
            <li>
              <a
                className="text-xs text-gray-400 transition duration-150 hover:text-white"
                href="#"
              >
                Cartas de navegação;
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gray-800"></div>

      <div className="w-full flex justify-center items-center">
        <span className="text-white text-center text-sm">
          © Copyright <span className="font-poppinsMedium">Grupo Singil</span>.
          Todos os Direitos Reservados <br /> Desenvolvido por{" "}
          <span className="text-primary-color">NjilaBrand</span>
        </span>
      </div>
    </footer>
  );
}
