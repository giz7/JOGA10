import { StrictMode } from 'react' // Ativa verificacoes extras do React durante o desenvolvimento.
import { createRoot } from 'react-dom/client' // Importa a funcao que monta a aplicacao no DOM.
import './index.css' // Carrega os estilos globais antes da renderizacao.
import App from './App.tsx' // Importa o componente principal da pagina.

createRoot(document.getElementById('root')!).render( // Encontra o elemento raiz e inicia o React.
  <StrictMode> {/* Envolve a aplicacao com as validacoes do modo estrito. */}
    <App /> {/* Renderiza a landing page do Joga10. */}
  </StrictMode>,
)
