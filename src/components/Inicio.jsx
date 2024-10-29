import React, { useEffect } from 'react'

const Inicio = () => {

  useEffect(() => {

    const clickear = () => {
      console.log("Click");
    }

    window.addEventListener("click", clickear)

    return () => {
      window.removeEventListener("click", clickear)
    }

  }, [])

  return (
    <div className="container-home">
        <h1 className="main-title-home">COLECCION PRIMAVERA/VERANO</h1>
        <div className='card-home'>
        <img src="https://www.vesna.com.ar/9465-home_default/falda-heller-naranja.jpg" alt="zapatos verano" />
        <img src="https://www.vesna.com.ar/9160-home_default/vestido-jensen-naranja.jpg" alt="vestido primavera" />
        <img src="https://www.vesna.com.ar/9152-home_default/vestido-jensen-blanco.jpg" alt="camisa verano" />
        <img src="https://www.vesna.com.ar/9183-home_default/vestido-ashley-blanco.jpg" alt="vestido verano" />
        </div>
    </div>
  )
}

export default Inicio