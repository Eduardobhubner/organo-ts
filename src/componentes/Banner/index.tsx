import './Banner.css'

interface BannerProps {

    imagemBanner : string,
    textoAltBanner : string
}

function Banner( {imagemBanner,textoAltBanner}: BannerProps){
    // TSX
    return (
        <header className="banner">
            <img src={imagemBanner} alt={textoAltBanner}/>
        </header>
    )
}

export default Banner