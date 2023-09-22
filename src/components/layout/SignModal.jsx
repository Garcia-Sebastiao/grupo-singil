import React from "react";
import { blueCloseIcon } from "../../assets";
export default function SignModal({ isOpen, onClose }) {
  return (
    <div
      className={`fixed w-full h-screen top-0 left-0 z-40 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="relative w-full h-full bg-[#00000099]">
        <div className="absolute top-[50%] left-[50%] z-50 -translate-x-[50%] -translate-y-[50%] bg-white rounded-xl">
          <div className="relative flex flex-col items-center gap-3 w-full h-full p-8">
            <button
              onClick={onClose}
              className="border-2 absolute right-6 top-6 border-primary-color rounded-full p-1"
            >
              <img src={blueCloseIcon} className="w-3" alt="" />
            </button>
            <h2 className="text-2xl font-poppinsSemiBold text-primary-color">
              Solicitar Orçamento.
            </h2>

            <span className="text-sm text-gray-600">
              Preencha o formulário para solicitar um orçamento.
            </span>

            <form
              className="flex mt-2 w-full flex-col gap-3 items-center"
              action=""
            >
              <input
                type="text"
                placeholder="Digite seu nome"
                className="border-2 rounded-md text-sm w-full p-3"
              />
              <input
                type="email"
                placeholder="Digite seu email"
                className="border-2 rounded-md text-sm w-full p-3"
              />
              <input
                type="number"
                placeholder="Digite seu nº de telefone"
                className="border-2 rounded-md text-sm w-full p-3"
              />
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className="border-2 rounded-md text-sm w-full p-3 max-h-[120px] min-h-[120px]"
                placeholder="Digite sua mensagem"
              ></textarea>

              <button className="text-white text-sm bg-primary-color rounded-md hover:brightness-90 transition duration-150 py-3 w-full mt-2">
                Solicitar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
