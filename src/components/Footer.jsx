function Footer() {
    return (
    <footer className="footer p-16 bg-linear-to-r from-dark-blue-3 to bg-dark-blue-1 text-light-grey-2 border-t border-dark-grey">
      <div className="footer-container mb-4 gap-16 grid grid-cols-3">
        <section className="footer-section">
          <h3 className="mb-4 text-lg font-bold text-white">Sobre o Overwatch Heroes</h3>

          <p>Aplicação web interativa para busca de heróis relacionados ao jogo online <strong>Overwatch</strong>. Projeto com fins educacionais, desenvolvido com o objetivo de cumprir o desafio proposto pelo <em>Workshop Front-end 2026.2</em> do projeto de extensão Fábrica de Software, vinculado ao <strong>Centro Universitário de João Pessoa (UNIPÊ)</strong>.</p>
        </section>

        <section className="footer-section flex flex-col">
          <h3 className="mb-4 text-lg font-bold text-white">Links úteis</h3>

          <a href="https://overfast-api.tekrop.fr/" className="mb-4 hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">Overfast API</a>
          <a href="https://overwatch.blizzard.com/" className="mb-4 hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">Overwatch 2</a>
          <a href="https://www.blizzard.com/" className="mb-4 hover:text-white hover:underline" target="_blank" rel="noopener noreferrer">Blizzard</a>
        </section>

        <section className="footer-section">
          <h3 className="mb-4 text-lg font-bold text-white">Contato</h3>

          <div className="social-icons flex flex-row gap-8">
            <a href="mailto:florentinocaze@gmail.com" className="social-links">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ionicon w-10 hover:text-white hover:scale-110 transition-transform duration-300"><rect width="416" height="320" x="48" y="96" rx="40" ry="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/><path d="m112 160 144 112 144-112" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32px"/></svg>
            </a>

            <a href="https://www.linkedin.com/in/florentinocaze" target="_blank" rel="noopener noreferrer" className="social-links">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ionicon w-10 hover:text-white hover:scale-110 transition-transform duration-300"><path fill="currentColor" d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32m-273.3 373.43h-64.18V205.88h64.18ZM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43m264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64Z"/></svg>
            </a>

            <a href="https://github.com/florentinocaze" target="_blank" rel="noopener noreferrer" className="social-links">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="ionicon w-10 hover:text-white hover:scale-110 transition-transform duration-300"><path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.6 17.6 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.6 18.6 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.2 208.2 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.6 18.6 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.4 19.4 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32"/></svg>
            </a>
          </div>
        </section>
      </div>
      
      <small className="font-bold text-white">© 2026 Overwatch Heroes. Todos os direitos reservados.</small>
    </footer>
  );
}

export default Footer;