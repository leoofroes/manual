
const favorites = [
  {
    category: "YOUTUBE",
    title: "Esse nunca sai da minha cabeça",
    note: "Desde a época em que eu jogava Minecraft em call no Skype.",
    url: "https://www.youtube.com/watch?v=CR9_M7-I4JI",
    image: "https://img.youtube.com/vi/CR9_M7-I4JI/hqdefault.jpg",
    type: "video",
  },
  {
    category: "YOUTUBE",
    title: "Que saudade do Jô",
    note: "Saudade de acordar de madrugada e assistir o Jô entrevistando algum biólogo antes do Corujão.",
    url: "https://www.youtube.com/watch?v=BW-lREWNbeM",
    image: "https://img.youtube.com/vi/BW-lREWNbeM/hqdefault.jpg",
    type: "video",
  },
  {
    category: "WHATSAPP",
    title: "Kkkkkkk",
    note: "Minha figurinha preferida, mesmo sendo contra usar figurinhas no WhatsApp. Sim, eu sei.",
    url: "https://media1.tenor.com/m/E4LiHdFw4hcAAAAd/pensa-num-bicho-ansioso-bicho.gif",
    image: "https://media1.tenor.com/m/E4LiHdFw4hcAAAAd/pensa-num-bicho-ansioso-bicho.gif",
    type: "image",
  },
  {
    category: "YOUTUBE",
    title: "Não tenho nem o que dizer",
    note: "Esse é o nosso gênio.",
    url: "https://youtu.be/nOx8GIupcD4",
    image: "https://img.youtube.com/vi/nOx8GIupcD4/hqdefault.jpg",
    type: "video",
  },
  {
    category: "SITE · QUADRINHOS",
    title: "Guia dos Quadrinhos",
    note: "Provavelmente o site em que passo mais tempo. Um arquivo gigantesco para quem gosta de se perder e catalogar.",
    url: "https://www.guiadosquadrinhos.com/",
    image: "",
    type: "site",
  },
  {
    category: "SITE · MÚSICA",
    title: "Genius",
    note: "Talvez o segundo site em que mais passo tempo. Porque ouvir música com a letra é outra experiência.",
    url: "https://genius.com/",
    image: "",
    type: "site",
  },
  {
    category: "YOUTUBE",
    title: "Esse me pega muito",
    note: "Essa versão de Thinkin Bout You do Flea é sacanagem.",
    url: "https://youtu.be/NJY70vpe8Eg",
    image: "https://img.youtube.com/vi/NJY70vpe8Eg/hqdefault.jpg",
    type: "video",
  },
  {
    category: "YOUTUBE",
    title: "Esse eu descobri na Vida do Livro",
    note: "A aula da Aline foi, para mim, a melhor entre as gravadas.",
    url: "https://youtu.be/gtl9JyE-fAo",
    image: "https://img.youtube.com/vi/gtl9JyE-fAo/hqdefault.jpg",
    type: "video",
  },
  {
    category: "POESIA",
    title: "Meu poema favorito",
    note: "Simplesmente Ana C..",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJO6DKr7jizu-FdDWv-VjjhCrXLTt1efmZyuq2d4LsQko2xfF0kAC2j3s-&s=10",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJO6DKr7jizu-FdDWv-VjjhCrXLTt1efmZyuq2d4LsQko2xfF0kAC2j3s-&s=10",
    type: "image",
  },
];

const platforms = [
  {
    number: "01",
    name: "Instagram",
    label: "ONDE TODO MUNDO ESTÁ",
    intro: "O novo Facebook. Até as tias já chegaram.",
    text: "É uma das plataformas mais populares e, gostando ou não, precisamos estar onde as pessoas estão. Eu apostaria em uma mistura de vídeos, carrosséis e conversas que mantenham a comunidade ativa. Quinze stories por dia marcando o horário e a bandeira do país? Acho que não precisa.",
    tags: ["Reels", "Carrosséis", "Comunidade"],
  },
  {
    number: "02",
    name: "YouTube",
    label: "TRÊS VEZES SIM",
    intro: "Canal de editora? Três vezes sim. Sim, sim, sim.",
    text: "Tem espaço para conversas com autores, bastidores, indicações, entrevistas e vídeos que continuem relevantes depois da semana de lançamento. E não adianta produzir um bom vídeo e abandonar o resto: thumbnail, título e tags também fazem parte do trabalho.",
    tags: ["Vídeo", "Descoberta", "Conteúdo duradouro"],
  },
  {
    number: "03",
    name: "E-mail marketing",
    label: "PRECISAMOS CONVERSAR",
    intro: "Ok, precisamos de e-mail marketing. Mas e se também fizéssemos uma newsletter diária?",
    text: "Aqui eu nem preciso falar nada, a Seiva já é referência e inspiração.",
    tags: ["Newsletter", "Relacionamento", "Recorrência"],
  },
  {
    number: "04",
    name: "X / Twitter",
    label: "E AÍ, TEM CORAGEM?",
    intro: "Eu acredito que ainda existe espaço para fazer algo fora da casinha.",
    text: "É um ambiente rápido, movido a conversa, humor e timing. Uma editora pode experimentar uma voz menos institucional e participar de assuntos que já estão acontecendo. Mas é preciso ter um sangue frio na maioria das vezes.",
    tags: ["Agilidade", "Voz própria", "Experimentação"],
  },
  {
    number: "05",
    name: "Facebook",
    label: "EU AINDA ACREDITO",
    intro: "Grupos, vídeos e o lugar certo pra vender seu carro.",
    text: "Não dá para ignorar uma plataforma só porque deixou de ser a queridinha de quem trabalha com comunicação. Grupos podem reunir comunidades de nichos e vídeos podem performar muito bem",
    tags: ["Grupos", "Vídeos", "Marketplace"],
  },
  {
    number: "06",
    name: "Pinterest",
    label: "ANTES QUE VIRE TUDO IA",
    intro: "Um lugar para descobrir, salvar e organizar referências visuais.",
    text: "Imagens, ilustrações, capas, citações e referências visuais podem performar muit bem. Vejo espaço para conteúdo pesquisável e duradouro, além de tráfego para páginas e artigos.",
    tags: ["Tráfego", "Referência visual"],
  },
  {
    number: "07",
    name: "Discord",
    label: "ONDE ENTRA MESMO?",
    intro: "Criar o servidor é fácil. Fazer as pessoas quererem voltar é outra história.",
    text: "O potencial está em construir um espaço de comunidade de verdade: conversas, encontros, clubes de leitura e troca entre pessoas com interesses em comum.",
    tags: ["Comunidade", "Interação", "Proximidade"],
  },
  {
    number: "08",
    name: "WhatsApp",
    label: "EXPLODAM",
    intro: "E se a gente fizesse um exércit... Ah, já tem.",
    text: "Então vamos pensar além do grupo: um canal para compartilhar novidades, lançamentos, recomendações e conteúdos que as pessoas realmente queiram receber. Um formato simples, direto e fácil.",
    tags: ["Canal", "Distribuição", "Proximidade"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a href="#" className="brand">
          MANUAL<span></span>
        </a>
        <span className="topbar-note">
          ERA PRA SER SÓ UMA CARTA DE APRESENTAÇÃO
        </span>
        <span className="issue">EDIÇÃO Nº 001 — 2026</span>
      </header>

      <section className="cover">
        <div className="cover-meta">
          <span>UM GUIA NÃO OFICIAL</span>
          <span>PARA QUEM É CRONICAMENTE ONLINE</span>
        </div>

        <div className="cover-title">
          <span className="title-small">MANUAL DE</span>
          <h1>
            SOBREVIVÊNCIA
            <br />
            <span className="title-second">NA INTERNET</span>
          </h1>
        </div>

        <div className="cover-middle">
          <div className="cover-sticker">
            <span>100%</span>
            <span>ONLINE</span>
            <span className="sticker-star">✳</span>
          </div>
          <p className="cover-description">
            Entre scrolls infinitos, posts salvos que nunca mais
            vou ver e 37 abas abertas, algumas coisas a internet
            acaba ensinando.
          </p>
        </div>

        <div className="cover-bottom">
          <div className="cover-author">
            <span>UM PROJETO DE</span>
            <strong>LEONARDO FRÓES</strong>
          </div>
          <a href="#sobre" className="scroll-link">
            ARRASTA PRA CIMA <span>↓</span>
          </a>
          <div className="cover-classification">
            <span>COMUNICAÇÃO</span>
            <span>CULTURA DIGITAL</span>
            <span>REPERTÓRIO</span>
          </div>
        </div>

        <span className="side-note">
          CONTEÚDO PARA CONSUMO CONSCIENTE DE INTERNET
        </span>
      </section>

      <section id="sobre" className="intro">
        <div className="section-label">
          <span>00 / ANTES DE COMEÇAR</span>
          <span>UMA BREVE APRESENTAÇÃO</span>
        </div>
        <h2>
          Olá, mundo.
          <br />
          <span>Oi, Seiva.</span>
        </h2>
        <p>
          Se você chegou até aqui, provavelmente está procurando
          alguém que entenda de comunicação. Eu resolvi começar
          mostrando um pouco de como eu enxergo esse universo.
        </p>
        <a href="#meu-internet" className="text-link">
          CONTINUA NA PRÓXIMA PÁGINA <span>↓</span>
        </a>
      </section>

      <section id="meu-internet" className="editorial-section">
        <div className="section-label">
          <span>01 / MEU CANTO DA INTERNET</span>
          <span>CURADORIA PESSOAL</span>
        </div>
        <div className="section-heading">
          <p className="eyebrow">UM ARQUIVO NÃO OFICIAL DE FAVORITOS</p>
          <h2>
            A internet tem
            <br />
            <span>muita coisa boa.</span>
          </h2>
          <p className="section-lead">
            Coisas que ficam na minha cabeça, sites onde perco a noção
            do tempo e conteúdos que não precisam de uma justificativa
            muito elaborada para merecer estar aqui.
          </p>
        </div>

        <div className="favorites-grid">
          {favorites.map((item, index) => (
            <a
              className={`favorite-card favorite-card-${item.type}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              key={item.url}
            >
              {item.image ? (
                <div className="favorite-image-wrap">
                  <img
                    className="favorite-image"
                    src={item.image}
                    alt=""
                    loading="lazy"
                  />
                  {item.type === "video" && (
                    <span className="play-mark">▶</span>
                  )}
                </div>
              ) : (
                <div className="favorite-placeholder">
                  <span>{item.title}</span>
                  <span className="placeholder-arrow">↗</span>
                </div>
              )}
              <div className="favorite-copy">
                <span className="eyebrow">{item.category}</span>
                <h3>{item.title}</h3>
                <p>{item.note}</p>
                <span className="card-link">
                  {item.type === "video"
                    ? "ASSISTIR NO YOUTUBE"
                    : item.type === "site"
                      ? "EXPLORAR O SITE"
                      : "VER ORIGINAL"}{" "}
                  ↗
                </span>
              </div>
              <span className="favorite-number">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
        </div>

        <p className="editorial-note">
          Uma seleção pessoal, rápida, sem algoritmo e sem a
          pretensão de representar a internet inteira.
        </p>
        <a href="#plataformas" className="text-link">
          AGORA, VAMOS FALAR DE COMUNICAÇÃO <span>↓</span>
        </a>
      </section>

      <section id="plataformas" className="platforms-section">
        <div className="section-label">
          <span>02 / A INTERNET COMO TRABALHO</span>
          <span>IDEIAS EM CONSTRUÇÃO</span>
        </div>
        <div className="section-heading">
          <p className="eyebrow">DO REPERTÓRIO À PRÁTICA</p>
          <h2>
            Tá. E o que
            <br />
            <span>a gente faz com isso?</span>
          </h2>
          <p className="section-lead">
            Se tem uma coisa que aprendi na comunicação é que cada plataforma tem seu próprio jeito de funcionar.
            E sempre vai surgi uma nova. A questão é
            entender o que podemos construir em cada uma.
          </p>
        </div>

        <div className="platform-list">
          {platforms.map((platform) => (
            <article className="platform-row" key={platform.number}>
              <div className="platform-number">{platform.number}</div>
              <div className="platform-main">
                <span className="eyebrow">{platform.label}</span>
                <h3>{platform.name}</h3>
                <p className="platform-intro">{platform.intro}</p>
              </div>
              <div className="platform-details">
                <p>{platform.text}</p>
                <div className="platform-tags">
                  {platform.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer className="manual-footer">
        <span className="eyebrow">FIM DO MANUAL. INÍCIO DE UMA OPORTUNIDADE.</span>
        <h2>
          Espero que tenha passado um pouco do que se passa nessa cabeça.
          <br />
          <span>Até mais!</span>
        </h2>
        <p>
          Leonardo Fróes · Comunicação, conteúdo e cultura digital.
        </p>
               <div className="footer-links">
          <a href="#">VOLTAR AO COMEÇO ↑</a>
          <a
            href="https://www.linkedin.com/in/leofroes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LINKEDIN ↗
          </a>
          <a
            href="https://www.instagram.com/leoo.froes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM ↗
          </a>
          <a href="mailto:leo.cunha.la@gmail.com">E-MAIL ↗</a>
        </div>
      </footer>
    </main>
  );
}
