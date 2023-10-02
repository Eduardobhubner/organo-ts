import './CampoTexto.css'
import React from 'react'

interface CampotextoProps {
    aoAlterado: (valor: string) => void,
    placeholder: string
    label: string,
    valor: string,
    obrigatorio?: boolean
}

function CampoTexto({aoAlterado,placeholder,label,valor,obrigatorio = false}: CampotextoProps) {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto