import { Container } from "react-bootstrap";


export default function Widget({ children }: WidgetProps){
    return <Container className="w-50">
        {children}
    </Container>
}

type WidgetProps = {
    children: JSX.Element;
}