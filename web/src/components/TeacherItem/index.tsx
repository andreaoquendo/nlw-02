import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
                <header>
                    <img src="https://i.pinimg.com/736x/1f/96/85/1f96858f82fba63d1179e82476a36d9d.jpg" alt="Menina Rosa" />
                    <div>
                        <strong>Menina Rosa</strong>
                        <span>Idiomas</span>
                    </div>
                </header>

                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                    <br /><br />
                    Apaixonado por explodir coisas em laboratórios por mudar a vida das pessoas através de experiências. Mais 200000 pessoas já passaram por uma das minhas explosões
                </p>

                <footer>
                    <p>
                        Preço/hora 
                        <strong>R$ 80,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp" />
                        Entrar em contato.
                    </button>
                </footer>
            </article>
    );
};

export default TeacherItem;