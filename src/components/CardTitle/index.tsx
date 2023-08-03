type Props = {
    title : string;
}

export default function CardTitle({title} : Props) {

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}