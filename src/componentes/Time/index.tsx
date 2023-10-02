import Colaborador from '../Colaborador'
import './Time.css'


interface TimePros{
    
    corSecundaria: string,
    corPrimaria:string,
    nome:string,
    colaboradores:{nome:string,cargo:string,imagem:string}[]

}

function Time ({corSecundaria, corPrimaria, nome,colaboradores}:TimePros){
    const css = { backgroundColor: corSecundaria }

    return (
        (colaboradores.length > 0) ? <section className='time' style={css}>
            <h3 style={{ borderColor: corPrimaria }}>{nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map( colaborador => <Colaborador corDeFundo={corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section> 
        : <></>
    )
}

export default Time