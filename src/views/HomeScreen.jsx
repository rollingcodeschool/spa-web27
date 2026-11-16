import { useState, useEffect } from "react";
import { stickersNerd } from "../data/stickers";
import ImgStickerApp from "../components/ImgStickerApp";

const HomeScreen = () => {
  const [stickers, setStickers] = useState([]);

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
  return (
    <>
      <div className="mx-auto md:w-1/2 px-2  pt-8 text-center">
        <h1 className="text-4xl font-bold">Stickers Nerds</h1>
        <section className="mt-5">
          <form>
            <input
              type="text"
              placeholder="Busca tu sticker..."
              className="border-2 rounded-2xl p-2 w-full"
            />
          </form>
        </section>
        <section className="my-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {stickers.map((sticker) => (
              <ImgStickerApp key={sticker.id} sticker={sticker} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeScreen;
