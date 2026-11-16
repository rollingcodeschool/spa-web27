const ImgStickerApp = (props) => {
  const { sticker } = props;
  return (
    <picture className="flex justify-center">
      <img className="sticker-img" src={sticker.url} alt={sticker.nombre} />
    </picture>
  );
};

export default ImgStickerApp;
