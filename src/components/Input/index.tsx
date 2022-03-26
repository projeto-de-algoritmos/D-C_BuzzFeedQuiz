import { Form } from 'react-bootstrap'

const InputComponent = (props: any) => {
    return (
        <Form.Group className='text-center'>
            <Form.Label>{props.label}</Form.Label>
            <Form.Control type="text"
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange} />
        </Form.Group>
    );
}

export default InputComponent;