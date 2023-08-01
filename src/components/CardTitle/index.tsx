type Props = {
    title: string;
}

export default function CardTitle({title} : Props) {

    return (
        <div className="card">
            <h2>{title}</h2>
        </div>
    );
}