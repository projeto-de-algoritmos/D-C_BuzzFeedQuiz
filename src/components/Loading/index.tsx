import { Spinner } from "react-bootstrap";
import CardComponent from "../Card";

export default function Loading() {
    return (
        <CardComponent>
            <div className='text-center'>
                <Spinner animation="border" />
            </div>
        </ CardComponent>
    );
}