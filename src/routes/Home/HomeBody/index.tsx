import '../../../index.css';
import CardTitle from "../../../components/CardTitle";

export default function HomeBody() {

    return (
        <main>
            <section>
                <div className="container">
                    <div className="card-title">
                        <CardTitle title="Bem-vindos!" />
                    </div>
                </div>
            </section>
        </main>
    );
}