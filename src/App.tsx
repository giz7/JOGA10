import { ArrowRight, CalendarDays, MapPin, Users } from "lucide-react"; // Importa os icones usados na interface.
import playerImage from "./assets/joga10-1.png"; // Importa a imagem principal do jogador.
import "./App.css"; // Carrega os estilos especificos da pagina.

function App() { // Declara o componente principal da landing page.
  return ( // Retorna a estrutura visual exibida pelo React.
    <main className="min-h-screen h-auto overflow-x-clip overflow-y-auto bg-[#06152b] text-white md:h-svh md:overflow-hidden"> {/* Define o fundo e a rolagem geral. */}
      <div className="relative isolate mx-auto flex min-h-screen h-auto w-full max-w-360 flex-col overflow-hidden px-6 sm:px-10 lg:px-16 md:h-full md:min-h-0"> {/* Limita a largura e organiza as secoes. */}
        <div className="field-lines" aria-hidden="true" /> {/* Exibe a decoracao do campo. */}
        <header className="relative z-10 flex shrink-0 items-center justify-between border-b border-white/10 py-4 sm:py-5"> {/* Renderiza o cabecalho. */}
          <a href="#inicio" className="brand-mark" aria-label="Joga10 - início">
            JOGA<span>10</span>
          </a>
          <nav
            className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex"
            aria-label="Navegação principal"
          > {/* Agrupa a navegacao para telas maiores. */}
            <a
              className="transition-colors hover:text-white"
              href="#como-funciona"
            >
              Como funciona a comunidade
            </a>
          </nav>
          <a
            href="#entrar"
            className="hidden items-center gap-2 text-sm font-bold text-[#c7f542] transition-colors hover:text-white sm:flex"
          > {/* Link para a acao principal da pagina. */}
            Entrar na lista <ArrowRight size={16} strokeWidth={2.5} />
          </a>
          <button
            className="rounded-full border border-white/15 p-2 text-white sm:hidden"
            aria-label="Abrir menu"
          > {/* Controle de menu para telas pequenas. */}
            <span className="block h-0.5 w-5 bg-current" />
            <span className="mt-1.5 block h-0.5 w-5 bg-current" />
          </button>
        </header>
        <section
          id="inicio"
          className="relative z-10 grid min-h-140 min-w-0 flex-none items-center justify-items-center gap-2 py-4 text-center md:min-h-0 md:flex-1 md:grid-cols-[0.9fr_1.1fr] md:justify-items-stretch md:gap-0 md:py-0 md:text-left"
        >
          <div className="mx-auto max-w-xl pb-2 pt-2 md:mx-0 md:pb-0 lg:pb-0">
            <p className="eyebrow justify-center md:justify-start">
              <span /> A pelada começa aqui
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.04em] sm:mt-5 sm:text-7xl lg:text-[7.3rem]">
              Seu jogo.
              <br />
              <em>sua galera.</em>
              <br />
              Sua rede.
            </h1>
            <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:mt-5 sm:text-base lg:text-lg">
              Encontre jogadores perto de você, complete seu time e marque
              aquela pelada que estava faltando.
            </p>
            <div
              className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-7 sm:gap-4 md:justify-start"
              id="entrar"
            >
              <a
                href="mailto:oi@joga10.com.br?subject=Quero%20jogar"
                className="group inline-flex items-center gap-3 bg-[#c7f542] px-6 py-4 text-sm font-black uppercase tracking-wide text-[#06152b] transition-transform hover:-translate-y-1"
              >
                Quero jogar{" "}
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#06152b] text-[#c7f542] transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </a>
              <span className="text-sm text-slate-400">
                É grátis para começar
              </span>
            </div>
            <p className="mx-auto mt-4 max-w-72 border-l-2 border-[#c7f542] pl-4 text-left text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-slate-300 sm:mt-5 sm:text-xs sm:leading-5 md:mx-0">
              A próxima partida está mais perto do que você imagina.
            </p>
          </div>
          <div className="player-stage relative flex min-h-0 min-w-0 items-end justify-center md:items-start md:self-stretch md:pt-8">
            <div className="player-ring" aria-hidden="true" />
            <div className="player-glow" aria-hidden="true" />
            <img
              className="player-art relative z-1 h-auto max-h-[34vh] w-[min(100%,440px)] max-w-full object-contain object-bottom drop-shadow-[0_25px_30px_rgba(0,0,0,0.4)] sm:max-h-[48vh] md:max-h-[calc(100svh-150px)] lg:max-h-[calc(100svh-150px)]"
              src={playerImage}
              alt="Jogador do Joga10 comemorando com a bola"
            />
          </div>
        </section>
        <section
          id="como-funciona"
          className="relative z-10 grid shrink-0 border-t border-white/10 py-3 sm:grid-cols-3 sm:py-5"
        >
          <div className="feature border-white/10 sm:border-r">
            <MapPin size={22} />
            <div>
              <h2>Jogue perto</h2>
              <p>Partidas na sua região</p>
            </div>
          </div>
          <div className="feature border-white/10 sm:border-r">
            <Users size={22} />
            <div>
              <h2>Conecte a galera</h2>
              <p>Conheça quem também joga</p>
            </div>
          </div>
          <div className="feature">
            <CalendarDays size={22} />
            <div>
              <h2>Marque a pelada</h2>
              <p>Seu time completo, sem sufoco</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
