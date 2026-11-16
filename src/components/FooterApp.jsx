const FooterApp = () => {
  return (
    <section className="mx-auto grid w-full  grid-cols-1 gap-4 px-8 py-8 md:grid-cols-3  bg-indigo-600 text-white">
      <div>
        <h3 className="text-2xl font-semibold">Stickers Nerds</h3>
        <p>Página web para ver stickers con diseños nerds</p>
      </div>
      <div className="w-full mx-auto">
        <h3 className="text-xl font-semibold text-left">Redes sociales</h3>
        <ul className="md:flex md:gap-2">
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Youtube</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Legales</h3>
        <div className="md:flex md:gap-2">
          <p>Política de privacidad</p>
          <p>Términos de servicios</p>
        </div>
      </div>
    </section>
  );
};

export default FooterApp;
