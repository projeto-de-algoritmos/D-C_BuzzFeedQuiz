import ButtonComponent from "../Button";
import CardComponent from "../Card";
import { useRouter } from "next/router";
import selectBestCharacter from '../../utils/selectBestCharacter';
import Character from '../../models/Character';

export default function Result({ result, characters }: ResultProps) {
    const router = useRouter();
    const character = selectBestCharacter(result, characters);

    return (
        <CardComponent
            header={character.name}>
            <CardComponent.Image uri={character.imageUri} />
            <CardComponent.Description>{character.description}</CardComponent.Description>
            <ButtonComponent onClick={() => router.push('/')} text="Pagina Inicial" />
        </ CardComponent>
    );
}

interface ResultProps {
    result: number[];
    characters: Character[];
}