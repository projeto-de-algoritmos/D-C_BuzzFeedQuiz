import ButtonComponent from "../Button";
import CardComponent from "../Card";

export default function Result(props: any) {
    return (
        <CardComponent
            image={props.character.imageUri}
            title={props.character.name}
            text={props.character.description}>
            <ButtonComponent onClick={() => console.log("Ok")} text="Reiniciar o QUIZ" />
        </ CardComponent>
    );
}