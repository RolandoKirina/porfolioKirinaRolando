import profileImage from '../assets/profile.png'

export default function HeroSection(){
    return(

    <>
     <section class="herosection">
            <div class="profile">
               <div class="divprofileimage">
                 <img src={profileImage} alt="profile image" class="profileImage"></img>
                </div> 
               
                <button class="readytowork">
                    <a href="https://www.linkedin.com/in/kirina-rolando-028715257/"  target="_blank" >Disponible para trabajar</a>
                </button>
            </div>
          
            <h1>Hola, soy Kirina Rolando</h1>
           
             <h2 class="titlesecondary">Desarrolladora backend
                </h2>
             <p><strong>+3 años de experiencia</strong> en la industria. A punto de graduarme en la <strong>Tecnicatura Universitaria de Desarrollo
                de Aplicaciones Informaticas</strong>.Desarrollo aplicaciones web creativas y únicas.
             </p>
     </section>
    </>
       
    );
}