import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import { api } from "../../services/api"
import { Modal } from "../Modals/Modal"
import { ModalDadoRolado } from "../ModalDadoRolado"
import { Container, Top, Bot, Mid, Img } from "./styles"
import { useDisabled } from "../../hooks/useDisabled"
import AtributosImg from '../../assets/img/AtributosImg.png'

export function Atributos({ agi, int, vig, pre, forca, ...rest }) {

    return (
        <Container>

            <Top>
                <button disabled={true}>{agi}</button>
            </Top>

            <Mid>
                <button disabled={true}>{forca}</button>

                <button disabled={true}>{int}</button>
            </Mid>

            <Bot>
                <button disabled={true}>{pre}</button>

                <button disabled={true}>{vig}</button>
            </Bot>

            <Img {...rest} src={AtributosImg} />

        </Container>
    )
}