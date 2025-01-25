import React from "react";
import '../../styles/LivingSection.css';
import FamilyLiving from '../../assets/images/FamilyLiving.jpg';
import EntertainmentLiving from '../../assets/images/EntertainmentLiving.webp';
import ReadingNook from '../../assets/images/ReadingNook.jpg';
import OpenConcept from '../../assets/images/OpenConcept.jpg';
import SmallSpace from '../../assets/images/SmallSpace.jpg';
import NatureInspired from '../../assets/images/NatureInspired.jpg';
import Vintage from '../../assets/images/Vintage.jpg';
import Eclectic from '../../assets/images/Eclectic.jpg';
import CoastalCottage from '../../assets/images/CoastalCottage.jpg';
import LivingSpaceIdeas from '../../assets/images/LivingSpaceIdeas.png'

function LivingSection(){
    return(
        <div>
            <div className="living-wrapper">
                <div className="living-heading">
                    <img src ={LivingSpaceIdeas} alt="Living Space Ideas"/>
                    <div className="living-description">
                    <h1>Living Spaces Ideas</h1>
                    <p>
                    Living spaces are the heart of the home, where memories are made. <br/>
                    Whether it’s family movie nights, entertaining guests, or relaxing with a book, these rooms should be cozy, functional, and inspiring. <br/>
                    From practical furniture to a warm fireplace, create a space you'll love spending time in.</p>
                    </div>
                </div>


                <div className="living-section">
                    <div className="living-box">
                        <div className="living-content">
                            <h2>Family Living Room</h2>
                            <div className="living-image">
                            <img src={FamilyLiving} alt="Family Living Room" />
                            </div>
                            <p>Kid-friendly, durable furniture, and playful touches for family activities.</p>
                        </div>
                    </div>

                    <div className="living-box">
                        <div className="living-content">
                            <h2>Entertainment Living Room</h2>
                            <div className="living-image">
                            <img src={EntertainmentLiving} alt="Entertainment Living Room" />
                            </div>
                            <p>A media-centric setup with a big-screen TV, sound systems, and cozy seating.</p>
                        </div>
                    </div>

                    <div className="living-box">
                        <div className="living-content">
                            <h2>Reading Nook Living Room</h2>
                            <div className="living-image">
                            <img src={ReadingNook} alt="ReadingNook Living Room" />
                            </div>
                            <p>A peaceful corner with bookshelves, soft lighting, and a comfy chair.</p>
                        </div>
                    </div>

                    <div className="living-box">
                        <div className="living-content">
                            <h2>Open-Concept Living Room</h2>
                            <div className="living-image">
                            <img src={OpenConcept} alt="OpenConcept Living Room" />
                            </div>
                            <p> Spacious, airy, and seamlessly connected.</p>
                        </div>
                    </div>

                    <div className="living-box">
                        <div className="living-content">
                            <h2>Eclectic Living Room</h2>
                            <div className="living-image">
                            <img src={Eclectic} alt="Eclectic Living Room" />
                            </div>
                            <p>A mix of diverse styles and colors.</p>
                        </div>
                    </div>

                    <div className="living-box">
                        <div className="living-content">
                            <h2>Coastal Cottage Living Room</h2>
                            <div className="living-image">
                            <img src={CoastalCottage } alt="Family Living Room" />
                            </div>
                            <p>A light, airy space with soft blues, and natural textures.</p>
                        </div>
                    </div>

                    <div className="living-box">
                        <div className="living-content">
                            <h2>Small Space Living Room</h2>
                            <div className="living-image">
                            <img src={SmallSpace} alt="SmallSpace Living Room" />
                            </div>
                            <p> Compact designs that maximize functionality and style in limited space.</p>
                        </div>
                    </div>

                    <div className="living-box">
                        <div className="living-content">
                            <h2>Nature-Inspired Living Room</h2>
                            <div className="living-image">
                            <img src={NatureInspired} alt="NatureInspired Living Room" />
                            </div>
                            <p> A calming space with natural elements and plants</p>
                        </div>
                    </div>

                    <div className="living-box">
                        <div className="living-content">
                            <h2>Vintage Chic Living Room</h2>
                            <div className="living-image">
                            <img src={Vintage} alt="Family Living Room" />
                            </div>
                            <p>A nostalgic space with retro furniture and antique decor.</p>
                        </div>
                    </div>

                </div>

           </div>
        </div>
    )
}
export default LivingSection;