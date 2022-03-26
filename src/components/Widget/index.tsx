import { Container, Row, Col } from "react-bootstrap";


export default function Widget({ children }: WidgetProps) {
    return (
        <Row className='m-1'>
            <Col xs={{ span: 12, offset: 0 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} lg={{ span: 4, offset: 4 }}>
                {children}
            </Col>
        </Row>
    );
}

type WidgetProps = {
    children: JSX.Element;
}