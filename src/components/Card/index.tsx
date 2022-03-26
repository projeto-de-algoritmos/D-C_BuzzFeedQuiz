import { Card, Row, Col } from "react-bootstrap";
import { DefaultProps } from "../../utils/types";
import { BsArrowLeftCircle } from 'react-icons/bs';
import ButtonComponent from "../Button";

const Image = ({ uri }: ImageProps) => {
    return <Card.Img src={uri} className="mb-3" />
}

const Title = ({ children }: DefaultProps) => {
    return <Card.Title className="text-center">{children}</Card.Title>
}

const Description = ({ children }: DefaultProps) => {
    return <Card.Text className="text-center">{children}</Card.Text>
}

const GoBack = ({ onGoBack }: GoBackProps) => {
    return <ButtonComponent className="ma-3" variant="light" onClick={() => onGoBack()} text={<><BsArrowLeftCircle /> Voltar</>} />;
}

const Header = ({ header, onGoBack }: CardProps) => {
    return (
        <Card.Header>
            <Row>
                <Col xs="2" md="4">{onGoBack && <GoBack onGoBack={onGoBack} />}</Col>
                <Col xs="8" md="4" className="d-flex text-center justify-content-center align-items-center">{header}</Col>
            </Row>
        </Card.Header>
    );
}

const CardComponent = ({ header, onGoBack, children }: CardProps) => {
    return (
        <Card className="mt-3 d-flex shadow-lg bg-white rounded">
            <Header header={header} onGoBack={onGoBack} />
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
    onGoBack?: Function;
}

type ImageProps = {
    uri: string;
}

interface GoBackProps {
    onGoBack: Function;
}