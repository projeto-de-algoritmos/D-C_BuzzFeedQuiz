import ButtonComponent from "../Button";

export default function Result(props: any) {
    return (
        <ButtonComponent onClick={() => console.log("Ok")} text="Reiniciar o QUIZ" />
    );
}