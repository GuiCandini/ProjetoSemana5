import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";

function Home() {
    const [key, setKey] = useState('home');
    return (
        <main>
            <h1 className="text-center mt-2"><img src="https://acaimadruga.com.br/wp-content/uploads/2023/12/logo-tpv-1.png" width="85"/></h1>
            <h3 className="text-center">Monte do seu jeito!!</h3>
            <div className="">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 d-flex justify-content-center"
                >
                <Tab eventKey="0" title="Açaí com Banana" className="d-flex justify-content-center">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://acaimadruga.com.br/wp-content/uploads/elementor/thumbs/WhatsApp-Image-2023-12-08-at-09.47.26-qgid95pg4tig8enq1hl5xtnngrhvkdejb6xwelpsk0.jpeg" />
                        <Card.Body>
                            <Card.Title className="text-center">Açaí com Banana</Card.Title>
                            <Card.Text>
                               Uma combinação popular que une a cremosidade do açaí com o sabor adocicado da banana.
                            </Card.Text>
                            <Button variant="outline-primary">Saiba mais</Button>
                        </Card.Body> 
                    </Card>
                </Tab>
                <Tab eventKey="1" title="Açaí com Morango" className="">
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://acaimadruga.com.br/wp-content/uploads/elementor/thumbs/acai-500-morango2-qgidbz80mxdf2ak9kpgvf41fmdlinoljp5ec8hj9w0.png" />
                    <Card.Body>
                        <Card.Title>Açaí com Morango</Card.Title>
                        <Card.Text>
                            Outra opção deliciosa que combina açaí com a doçura dos morangos.
                        </Card.Text>
                        <Button variant="outline-primary">Saiba mais</Button>
                    </Card.Body> 
                </Card>
                </Tab>
                <Tab eventKey="2" title="Açaí Diet">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://acaimadruga.com.br/wp-content/uploads/elementor/thumbs/acai-500-qgidd7efk51w7ys3eqkc6aw3jhjrpggxj825shprrk.png" />
                        <Card.Body>
                            <Card.Title className="text-center">Açaí Diet</Card.Title>
                            <Card.Text>
                                Disponível em diferentes variações, como puro, adoçado com stevia, sucralose e xarope diet.
                            </Card.Text>
                            <Button variant="outline-primary">Saiba mais</Button>
                        </Card.Body> 
                    </Card>
                </Tab>
                <Tab eventKey="3" title="Cremes e Sucos">
                        <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="https://acaimadruga.com.br/wp-content/uploads/elementor/thumbs/grupo-de-creme-qgfdz65g5yqqdketc4flcdsac6qpttkwc4ms6zx9lc.png" />
                        <Card.Body>
                            <Card.Title className="text-center">Cremes e Sucos</Card.Title>
                            <Card.Text>
                                Cremes e sucos frescos são opçôes refrescante.
                            </Card.Text>
                            <Button variant="outline-primary">Saiba mais</Button>
                        </Card.Body> 
                    </Card>
                </Tab>
            </Tabs>
            </div>
        </main>
    );
}

export default Home;