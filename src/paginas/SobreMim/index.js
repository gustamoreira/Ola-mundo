import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png"
import fotoSobreMim from "assets/foto_sobre_mim.jpg"

export default function SobreMim() {
    return (
        <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim" >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gustavo!
            </h3>
            <img src={fotoSobreMim} alt="Foto do Gustavo" className={styles.fotoSobreMim} />

            <p className={styles.paragrafo}>
                Tudo bem? Eu sou Estudante de desenvolvimento de software e estou feliz em te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha historia com programação comecou no inicio de 2022, quando por influência de minha irmâ comecei a assistir videos no youtube de programadores, e com isso me despertou mais ainda curiosidade sobre a área. Sendo que nunca imaginava trabalhar com isso.
            </p>
            <p className={styles.paragrafo}>
                Diante de toda essa empolgação fui me inscrevendo em cursos gratuitos como Imersões e Bootcamps. Ao passar do tempo fui me apaixonando pela área e ficando empolgado com cada projetinho que fazia.
            </p>
            <p className={styles.paragrafo}>
                No inicio de 2023 comecei a Faculdade em Ciência da Computação e sempre fazendo cursos complementares.
            </p>
        </PostModelo>

    )
}
