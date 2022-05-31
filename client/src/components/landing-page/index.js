import dog from '../../assets/images/dog-cartoon.png'
import css from './landing.css'

function LandingPage() {
    return (
        <>
            <section id="dog-container">
                <img style={{ height: "400px" }} src={dog} alt="cute dog with glasses" />
            </section>
        </>
    )
}



export default LandingPage;