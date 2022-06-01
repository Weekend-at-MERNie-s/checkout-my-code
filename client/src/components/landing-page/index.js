import dog from '../../assets/images/dog-cartoon.png'
import css from './landing.css'
import Footer from '../footer';
import Header from '../header';

function LandingPage() {
    return (
        <>
        
            <section id="dog-container">
                <div class="text-container">
                    <h3 id="working-app" class="text">Have a working app but want to make < br />
                        your code better?
                    </h3>
                    <h4 class="text">Sign up and connect with other <br />
                        developers that can help!</h4>
                </div>
                <img id="dog" style={{ height: "400px" ,width:"500px"}} src={dog} alt="cute dog with glasses" />
            </section>
            <div>
                < Footer />
            </div>
        </>
    )
}

export default LandingPage;