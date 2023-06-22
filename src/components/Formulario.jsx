import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from '../data/monedas'


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    margin-top: 30px;
    padding: 10px;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    border-radius: 5px;
    transition: background-color .3 ease;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`


const Formulario = () => {

    const [state, SelectMonedas] = useSelectMonedas('Elige tu Moneda', monedas)


    return (
        <form action="">
            <SelectMonedas />
            {state}

            <InputSubmit
                type="submit" value='Cotizar' />
        </form>

    )
}

export default Formulario



