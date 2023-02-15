<script>
    import { Container, Card, CardBody } from "sveltestrap";
    export let summarizedTxt;
</script>

<main>
    <Container fluid>
        <h3 class="mt-5">Summary</h3>
        <Card id="sum">
            <CardBody>{summarizedTxt}</CardBody>
        </Card>
    </Container>
</main>
