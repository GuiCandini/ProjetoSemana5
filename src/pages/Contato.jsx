import { Accordion, Container, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

function Contato() {

    const {register, handleSubmit, formState: {errors}} = useForm();

    function cadastrar(data) {
        console.log(data);
    }

    return (
        <main className="mt-2">
            <Container fluid>
                <h1>Contatos</h1>
                <hr />
                <Alert variant="primary" className="mt-2">Formas de contato</Alert>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Email
                        </Accordion.Header>
                        <Accordion.Body>
                            contato@acaimadruga.com
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Telefones
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>WhatsApp: (62)9 9999-8888</p>
                            <p>Fixo: (62)3222-2222</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Horário de Funcionamento
                        </Accordion.Header>
                        <Accordion.Body>
                            <p>Todos os dias: 10h às 21:45h</p>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
            <form className="form-section" onSubmit={handleSubmit(cadastrar)}>
                <h3>Entre em contato</h3>
                <hr />
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input 
                        type="text"
                        id="nome"
                        className="form-control"
                        placeholder="Insira seu nome"
                        {...register("nome", {required: true, maxLength:150})}
                    />
                    {errors.nome && <small className="invalid">O nome é inválido!</small>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="Insira seu email"
                        {...register("email", {required: true})}
                    />
                    {errors.email && <small className="invalid">O email é inválido!</small>}
                </div>
                <div>
                    <label htmlFor="feedback">Feedback</label>
                    <textarea 
                        id="feedback"
                        className="form-control mb-2"
                        placeholder="Dê sua opinião"></textarea>
                    {errors.senha && <small className="invalid">A senha é inválida!</small>}
                </div>
                <Button variant="secondary" className="mt-1 w-100" type="submit">
                    Enviar feedback
                </Button>
            </form>
        </main>
    );
}

export default Contato;