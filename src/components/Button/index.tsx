import { Button } from 'react-bootstrap'

const ButtonComponent = (props: any) => {
    return (
        <Button
            className="m-2"
            variant={props.variant ? props.variant : "primary"}
            onClick={props.onClick}
            disabled={props.disabled}>
            {props.text}
        </Button>
    );
}

export default ButtonComponent;