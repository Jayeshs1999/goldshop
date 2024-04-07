import {Spinner} from 'react-bootstrap';

const Loader = () => {
    return (
        // <Spinner 
        // animation='border'
        // role='status'
        // style={{
        //     width: "100px",
        //     height: "100px",
        //     margin: "auto",
        //     display: "block"
        // }}
        // />
        <Spinner role='status' style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            display: "block"
        }} animation="grow" variant="warning" />
    );
}

export default Loader;