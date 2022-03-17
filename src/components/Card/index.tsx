import { Card } from "react-bootstrap";


const CardComponent = (props: any) => {
    return (
        <Card className="mt-5">
            <Card.Header>Quiz {props.header}</Card.Header>
            <Card.Body>
                <Card.Img src={props.image} />
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.text}
                </Card.Text>
                {props.children}
            </Card.Body>
        </Card>
    );
}

export default CardComponent;