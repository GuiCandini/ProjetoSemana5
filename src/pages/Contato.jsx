import { Accordion, Container, Alert } from "react-bootstrap"

function Contato() {
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
        </main>
    );
}

export default Contato;