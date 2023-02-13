<script>
    import { Container, Col, Row } from "sveltestrap";
    export let url;
    export let keyword;
</script>

<Container>
    <Col>
        <Row>
            <img
                class="image"
                src={url}
                title={keyword}
                alt={keyword}
                loading="lazy"
            />
        </Row>
        <Row class="mt-2 text-center">
            <div>{keyword}</div>
        </Row>
    </Col>
</Container>
