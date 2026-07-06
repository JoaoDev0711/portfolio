<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Projetos desenvolvidos por João Rodrigues em HTML, CSS, JavaScript e sistemas digitais." />
  <title>Projetos | João Rodrigues</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700;900&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="styles.css" />
</head>
<body class="is-loading">
  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="index.html" aria-label="Ir para a página inicial">
        <span class="dot"></span>João<span class="dev">.dev</span>
      </a>

      <button class="menu-toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav class="site-nav" aria-label="Navegação principal">
        <a href="index.html">Início</a>
        <a href="projetos.html" class="active">Projetos</a>
        <a href="sobre.html">Sobre</a>
        <a href="contato.html">Contato</a>
      </nav>
    </div>
  </header>

  <main class="container">
    <section class="section reveal">
      <div class="section-heading">
        <p class="section-label">Projetos</p>
        <h1>Projetos desenvolvidos</h1>
        <p class="section-copy">Alguns trabalhos criados durante minha evolução em desenvolvimento de software e front-end.</p>
      </div>

      <div class="project-list">
        <article class="project reveal">
          <div class="project-photo">
            <img src="assets/portfolio.png" alt="Captura do projeto de portfólio pessoal" />
          </div>
          <div class="project-desc">
            <h2>Meu Portfólio</h2>
            <p>Projeto desenvolvido com HTML, CSS e JavaScript para apresentar minhas habilidades, projetos e formas de contato de maneira moderna e responsiva.</p>
          </div>
        </article>

        <article class="project reveal alt">
          <div class="project-photo">
            <img src="assets/ticketmedio.png" alt="Captura do projeto Ticket Médio" />
          </div>
          <div class="project-desc blue">
            <h2>Projeto Ticket Médio</h2>
            <p>Sistema criado para calcular o ticket médio de atendimentos em caixas, auxiliando na análise de vendas e desempenho operacional.</p>
          </div>
        </article>

        <article class="project reveal">
          <div class="project-photo">
            <img src="assets/biblioteca.png" alt="Captura do sistema para biblioteca" />
          </div>
          <div class="project-desc">
            <h2>Sistema para Biblioteca</h2>
            <p>Projeto desenvolvido para apoiar a organização de livros e recursos em uma biblioteca, melhorando a experiência do usuário e a gestão de informações.</p>
          </div>
        </article>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <p>© 2026 João Rodrigues. Todos os direitos reservados.</p>
    </div>
  </footer>

  <div class="page-transition" aria-hidden="true">
    <div class="loading-dots"><span></span><span></span><span></span></div>
  </div>

  <script src="script.js"></script>
</body>
</html>
