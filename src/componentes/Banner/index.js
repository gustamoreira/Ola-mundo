import styles from './Banner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/minha_foto.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>Olá, mundo!</h1>
                <p className={styles.paragrafo}>Boas vindas ao meu espaço pessoal! Eu sou Gustavo Moreira. Estudante de Desenvolvimento de software. Aqui compartihlo vários conhecimentos, espero que goste :)</p>
            </div>
            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Gustavo Moreira"
                />
            </div>
        </div>
    )
}
