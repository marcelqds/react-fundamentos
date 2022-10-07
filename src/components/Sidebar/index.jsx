import { PencilLine } from 'phosphor-react';
import styles from './styles.module.css';

export const Sidebar = () => {
    return(
        <aside className={styles.sidebar}>
           <img 
                className={styles.cover} 
                src="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/estados-do-brasil.jpg" 
            />

            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/marcelqds.png" alt="foto do usuário logado" />
                <strong>Marcelo Queiroz</strong>
                <span>Web Developer</span>
            </div>
            <footer className={styles.footer}>
                <a href="#">
                    <PencilLine size={20}/>
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    );
}
