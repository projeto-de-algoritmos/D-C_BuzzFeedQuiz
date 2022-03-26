import { Container, Spinner } from "react-bootstrap";

export default function Loading() {
    return (
        <Container className='d-flex justify-content-center align-items-center p-5'>
            <Spinner animation="border" />
        </Container>
    );
}