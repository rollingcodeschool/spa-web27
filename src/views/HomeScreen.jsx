import { useState, useEffect } from "react";
import { stickersNerd } from "../data/stickers";
import ImgStickerApp from "../components/ImgStickerApp";
import ModalStickerInfoApp from "../components/ModalStickerInfoApp";

const HomeScreen = () => {
  const [stickers, setStickers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sticker, setSticker] = useState(null);

  useEffect(() => {
    cargaInicial();
  }, []);

  function cargaInicial() {
    if (!JSON.parse(localStorage.getItem("stickers"))) {
      localStorage.setItem("stickers", JSON.stringify(stickersNerd));
      setStickers(stickersNerd);
    } else {
      setStickers(JSON.parse(localStorage.getItem("stickers")));
    }
  }

  //buscador

  const stickersIsFind = stickers.filter((sticker) =>
    sticker.nombre.toLowerCase().includes(inputValue.toLowerCase()),
  );

  //Obtener un sticker por su id
  //find *
  //map
  //filter
  //forEach
  const getStickerById = (id) => {
    const resultado = stickers.find((item) => item.id === id);
    setSticker(resultado);
  };

  // console.log(getStickerById(6));

  //método para setear el valor de el estado sticker y así cerrar el modal
  const hideModal = () => setSticker(null);

  return (
    <>
      <div className="mx-auto md:w-1/2 px-2  pt-8 text-center">
        <h1 className="text-4xl font-bold">Stickers Nerds</h1>
        <section className="mt-5">
          {/* buscador funcional  */}
          <form>
            <input
              type="text"
              placeholder="Busca tu sticker..."
              className="border-2 rounded-2xl p-2 w-full"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </form>
        </section>
        <section className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {stickersIsFind.map((sticker) => (
              <ImgStickerApp
                key={sticker.id}
                sticker={sticker}
                getStickerById={getStickerById}
              />
            ))}
          </div>
        </section>
        {/* código para el modal  */}
        {sticker && (
          <section className="fixed inset-0 z-50  flex items-center justify-center bg-gray-500/60">
            <ModalStickerInfoApp sticker={sticker} hideModal={hideModal} />
          </section>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
