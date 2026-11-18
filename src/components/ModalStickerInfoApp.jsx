// import { useState } from "react";

const ModalStickerInfoApp = ({ sticker, hideModal }) => {
  const { nombre, detalle, url } = sticker;

  return (
    <article className="max-w-1/3 bg-slate-200 rounded-2xl shadow-2xl">
      <header className="flex justify-end bg-slate-500 px-2">
        <button className="cursor-pointer" onClick={hideModal}>
          X
        </button>
      </header>
      <section className="px-3">
        <h3 className="text-2xl font-semibold">{nombre}</h3>
        <p>{detalle}</p>
      </section>
      <div className="w-full flex justify-center pb-5 my-8">
        <img className="sticker-img" src={url} alt={nombre} />
      </div>
      <div className="grid p-3">
        <button className="bg-cyan-800 rounded-lg py-1 text-slate-200 hover:bg-cyan-900 transition-all ease-in-out delay-75">
          Añadir al carrito
        </button>
      </div>
    </article>
  );
};

export default ModalStickerInfoApp;
