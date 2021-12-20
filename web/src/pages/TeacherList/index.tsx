import React from "react";
import PageHeader from "../../components/PageHeader";

import './styles.css';

function TeacherList () {
    return (
        <div id="page-teacher-list" className="container">
           <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">
                    <div className="input-block">
                        <label htmlFor="subject">Matéria</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Hora</label>
                        <input type="text" id="time" />
                    </div>
                </form>
           </PageHeader>

           <main>
               <article className="teacher-item">
                   <header>
                       <img src="https://i.pinimg.com/736x/1f/96/85/1f96858f82fba63d1179e82476a36d9d.jpg" alt="Menina Rosa" />
                       <div>
                           <strong>Menina Rosa</strong>
                           <span>Idiomas</span>
                       </div>
                   </header>

                   <p>
                       Entusiasta da smelhores tecnologias de química avançada.
                       <br /><br />
                       Apaixonado por explodir coisas em laboratórios por mudar a vida das pessoas através de experiências. Mais 200000 pessoas já passaram por uma das minhas explosões
                   </p>
               </article>
           </main>
        </div>
    );
}

export default TeacherList;