import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
    return(
        <article className="teacher-item">
            <header>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5VpBP3kZ3EjPJxAMKTXP2bs2uuA_7PCKs6g&usqp=CAU" alt="foto exemplo 1"/>
                <div>
                    <strong>Professor 1</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim sodales ut. 
                <br /><br />
                Eget duis at tellus at urna condimentum mattis pellentesque id. Est velit egestas dui id ornare. Et malesuada fames ac turpis egestas sed tempus urna et. 
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="whatsapp"/>
                    Entrar em contato
                </button>
            </footer>

        </article>
    );
}

export default TeacherItem;