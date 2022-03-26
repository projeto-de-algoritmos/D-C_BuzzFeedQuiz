import { Card } from "react-bootstrap";
import { DefaultProps } from "../../utils/types";

const Image = ({ uri }: ImageProps) => {
    return <Card.Img src={uri} className="mb-3"/>
}

const Title = ({ children }: DefaultProps) => {
    return <Card.Title className="text-center">{children}</Card.Title>
}

const Description = ({ children }: DefaultProps) => {
    return <Card.Text className="text-center">{children}</Card.Text>
}

const CardComponent = ({ header, children }: CardProps) => {
    return (
        <Card className="mt-3 d-flex shadow-lg bg-white rounded">
            <Card.Header className="text-center">{header}</Card.Header>
            <Card.Body className="d-flex flex-column">
                {children}
            </Card.Body>
        </Card>
    );
}

CardComponent.Image = Image;
CardComponent.Title = Title;
CardComponent.Description = Description;
export default CardComponent;

interface CardProps extends DefaultProps {
    header?: string;
}

type ImageProps = {
    uri: string;
}