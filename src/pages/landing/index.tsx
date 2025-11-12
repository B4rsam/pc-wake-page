import WakeButton from "./components/WakeButton";
import s from "./landing.module.css";

const LandingPage = () => {
    return (
        <main className={s.container}>
            <h1>BISMARCK is offline</h1>
            <section>
                <h2>Would you like to wake it?</h2>
                <WakeButton />
            </section>
        </main>
    );
};

export default LandingPage;
