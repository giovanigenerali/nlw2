import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/41435?s=400&u=77d656c60446ae28b4a65657cd2714812fa38e13&v=4" alt="Giovani Generali"/>
        <div>
          <strong>Giovani Generali</strong>
          <span>Eletrônica</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de eletrônica avançada.
        <br /><br />
        Apaixonado por desmontar coisas em laboratório e por mudar a vida das pessoas através de experiências tomando choque.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 65,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;