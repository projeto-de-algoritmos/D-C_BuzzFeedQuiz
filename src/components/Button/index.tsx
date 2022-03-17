import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Button } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

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