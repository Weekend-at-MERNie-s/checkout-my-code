import dog from '../../assets/images/dog-cartoon.png'
import css from './landing.css'
import Footer from '../footer';

function LandingPage() {
    return (
        <>
            <section id="dog-container">
                <div class="text-container">

                    <h1 class="text">Codespect</h1>


                    <h3 class="text">Have a working app but want to make < br />
                        your code better?
                    </h3>


                    <h4 class="text">Sign up and connect with other <br />
                        developers that can help!</h4>
                </div>
                <img style={{ height: "400px" }} src={dog} alt="cute dog with glasses" />
            </section>
            <div>
                < Footer />
            </div>
        </>
    )
}

export default LandingPage;