import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <main className="">
            <Alert variant="danger" className="mt-2 text-center">ERROR 404 NOT FOUND.<br/> Volte para a página inicial através do botão abaixo</Alert>
            <div className="d-flex justify-content-center">
            <Button variant="danger" className="p-2"><Link className="nav-link" to="/">Home</Link></Button>
            </div>
        </main>
    );
}

export default NotFound;