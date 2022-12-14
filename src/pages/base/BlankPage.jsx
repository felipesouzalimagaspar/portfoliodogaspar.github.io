//import { Link } from "react-router-dom";
import HTMLComment from 'react-html-comment';
import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
  Envelope,
  PhoneOutgoing,
  List,
  X,
  HandFist,
  Article,
  House,
  Browsers,
  ChatTeardropDots
} from "phosphor-react";

import Loader from "./../../components/animations/Loader.jsx";
import Home from "./../home/Home.jsx";

import './css/variables.css';
import './css/reset.css';
import './css/normalize.css';
import './css/all-pages.css';

export default function BlankPage() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://www.facebook.com/felipegasparsouza"><FacebookLogo size={24} weight="bold" /></a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/felipegaspar13/"><InstagramLogo size={24} weight="bold" /></a></li>
            <li><a target="_blank" rel="noreferrer" 
              href="https://api.whatsapp.com/send/?phone=5528999502008&text=Olá, te encontrei através do seu site."
            ><WhatsappLogo size={24} weight="bold" /></a></li>
            <li><a target="_blank" rel="noreferrer" href="tel:+5528999502008"><PhoneOutgoing size={24} weight="bold" /></a></li>
            <li><a target="_blank" rel="noreferrer" href="mailto:felipesouzalimagaspar@gmail.com?subject=Contato&body=Olá, te encontrei através do seu site."><Envelope size={24} weight="bold" /></a></li>
          </ul>
        </nav>
        <input type="checkbox" name="toggleMenu" id="toggleMenu" />
        <label htmlFor="toggleMenu"><List size={32} weight="bold" /><X size={32} weight="bold" /></label>
        <menu>
            <ul>
              <li><a href="/"><House size={24} weight="bold" />Home</a></li>
                <li><a href="#about"><HandFist size={24} weight="bold" />Sobre mim</a></li>
                <li><a href="#sketches"><Browsers size={24} weight="bold" />Meu portfólio</a></li>
                <li><a href="#posts"><Article size={24} weight="bold" />Meus artigos</a></li>
                <li><a href="#contact"><ChatTeardropDots size={24} weight="bold" />Fale comigo</a></li>
            </ul>
        </menu>
      </header>
      <main>
        <Home />
      </main>
      <footer>
        <div id="copyright">
          © {currentYear} - Felipe Gaspar - Todos os Direitos Reservados
        </div>
      </footer>
      <Loader />
      <HTMLComment text="Fora Bolsonaro!"/>
    </>    
  );
}