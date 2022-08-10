import './css/home.css';
import bg from './img/bg.jpg';
import felipe from './img/felipe.jpg';
import familia from './img/familia.jpg';

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GitHubButton from 'react-github-btn'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

export default function Home() {
  
  const [skills, setSkills] = useState([]);
  useEffect(() => {
      axios.get("/data/skills.json")
          .then(res => {setSkills(res.data)});      
  }, [])  

  return (
    <>
      <section style={{ backgroundImage: `url(${bg})` }}>
        <h1></h1>
      </section>
      <section>
        <article>
          <h2>Sobre mim</h2>
          <img src={felipe} alt="Felipe" style={{ backgroundImage: `url(${familia})` }}/>
          <p>Olá, meu nome é <strong>Felipe Gaspar<small>por favor, nada de gasparzinho ou fantasminha camarada</small></strong>, tenho 25 anos e sou Técnico em Informática e estudante do curso de Bacharelado em Sistemas de Informação, ambos pelo <strong><a href="https://cachoeiro.ifes.edu.br/" target="_blank" rel="noreferer">Instituto Federal de Educação Ciência e Tecnologia do Espírito Santo campus Cachoeiro de Itapemirim</a></strong>.</p>
          <p>Atuo profissionalmente há 2 anos como Web Developer Full Stack na empresa <strong><a href="https://arcoinformatica.com.br/" target="_blank" rel="noreferer">Arco Websites e Mobile Apps</a></strong>. Sou apaixonado por programação e novas técnologias, principalmente quando o assunto é <strong>programação hardcore<small>aquela que separa os homens dos meninos</small></strong>.</p>
          <p><strong>Capixaba<small>a verdadeira moqueca é a nossa</small></strong>, "casado" com a Jéssica, padrasto do Tonho e tutor do Marighella. Nas minhas horas vagas gosto de tocar violão, cozinhar, jogar bola e assistir séries e animes.</p>
        </article>
        <aside>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="PHP" dataKey="A" stroke="#6b1bab" fill="#6b1bab" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
          <GitHubButton href="https://github.com/felipesouzalimagaspar" data-size="large" data-show-count="true" aria-label="Follow @felipesouzalimagaspar on GitHub">Follow @felipesouzalimagaspar</GitHubButton>
        </aside>
      </section>
    </>
  );
}