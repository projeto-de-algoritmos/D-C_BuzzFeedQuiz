import ButtonComponent from "../Button";
import CardComponent from "../Card";

export default function Result(props: any) {
    return (
        <CardComponent
            header={props.character.name}>
            <CardComponent.Image uri={props.character.imageUri} />
            <CardComponent.Description>{props.character.description}</CardComponent.Description>
            <ButtonComponent onClick={() => console.log("Ok")} text="Reiniciar o QUIZ" />
        </ CardComponent>
    );
}