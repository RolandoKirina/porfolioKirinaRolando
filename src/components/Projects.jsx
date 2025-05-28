import spideyimage  from "../assets/spidey.png"

export default function Projects(){
    return(

       <section>
            <h2>Proyectos</h2>
            
                <div class="card">
                    
                    <img src={spideyimage} alt="spidey y sus increibles amigos" class="imagecard"></img>
                    <div class="carddescription">
                        <h3 class="titlecard">Spidey y sus amigos</h3>
                        <p>
                            SPA gratuita acerca de "Spidey y sus sorprendentes amigos", que presenta información sobre Spider-Man y sus aliados, como Ghost-Spider (Gwen Stacy) y Miles Morales. Además, incluye secciones que destacan la participación de los Vengadores, detalles sobre misiones y escenas, y la posibilidad de suscribirse para recibir novedades.
                        </p>
                    </div> 
                    
                </div>

                <div class="card">
                    
                    <img src={spideyimage} alt="spidey y sus increibles amigos" class="imagecard"></img>
                    <div class="carddescription">
                        <h3>Spidey y sus amigos</h3>
                        <p>
                            SPA gratuita acerca de "Spidey y sus sorprendentes amigos", que presenta información sobre Spider-Man y sus aliados, como Ghost-Spider (Gwen Stacy) y Miles Morales. Además, incluye secciones que destacan la participación de los Vengadores, detalles sobre misiones y escenas, y la posibilidad de suscribirse para recibir novedades.
                        </p>
                    </div> 
                </div>
            
        </section> 
    );
}