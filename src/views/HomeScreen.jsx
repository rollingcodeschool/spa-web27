const HomeScreen = () => {
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
        <section className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <picture className="hover:transition-transform hover:rotate-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
                alt="img 1"
              />
            </picture>
            <picture className="hover:transition-transform hover:rotate-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
                alt="img 1"
              />
            </picture>
            <picture className="hover:transition-transform hover:rotate-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
                alt="img 1"
              />
            </picture>
            <picture className="hover:transition-transform hover:rotate-2">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"
                alt="img 1"
              />
            </picture>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeScreen;
