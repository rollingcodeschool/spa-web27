const FooterApp = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 p-8 gap-4">
      <div>
        <h3 className="text-2xl font-semibold">Stickers Nerds</h3>
        <p>Página web para ver stickers con diseños nerds</p>
      </div>
      <div className="w-full mx-auto">
        <h3 className="text-xl font-semibold text-left">Redes sociales</h3>
        <ul>
          <li>Instagram</li>
          <li>Linkedin</li>
          <li>Youtube</li>
        </ul>
      </div>
      <div>
        <h3 className="text-xl font-semibold">Legales</h3>
        <p>Política de privacidad</p>
        <p>Términos de servicios</p>
      </div>
    </section>
  );
};

export default FooterApp;
