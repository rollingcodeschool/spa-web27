const ImgStickerApp = (props) => {
  const { sticker, getStickerById } = props;
  return (
    <picture
      className="flex justify-center"
      style={{ cursor: "pointer" }}
      onClick={() => getStickerById(sticker.id)}
    >
      <img className="sticker-img" src={sticker.url} alt={sticker.nombre} />
    </picture>
  );
};

export default ImgStickerApp;
