<script>
    import { createEventDispatcher } from "svelte";
    import { Button, Input, Container, Row, Col } from "sveltestrap";
    import dilium from "../../public/dilium.svg";
    import ntszki from "../../public/ntszki.svg";
    let inputValue = "";
    const dispatch = createEventDispatcher();
    function search() {
        dispatch("send", { text: inputValue });
    }
</script>

<Container fluid>
    <Row class="d-flex justify-content-center flex-wrap">
        <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            class="order-0 order-sm-0 order-md-0 order-lg-0 d-flex justify-content-center justify-content-sm-center justify-content-md-start justify-content-lg-start"
        >
            <a href="https://ntszki.hu/" target="_blank" rel="noreferrer"
                ><img src={ntszki} height="60" width="60" alt="NTSZKI" id="ntszki" /></a
            >
        </Col>
        <Col
            xs="12"
            sm="12"
            md="12"
            lg="4"
            class="mt-2 order-2 order-sm-2 order-md-2 order-lg-1 d-flex justify-content-center"
        >
            <h3 id="blog">Blog Post</h3>
        </Col>
        <Col
            xs="12"
            sm="12"
            md="6"
            lg="4"
            class="mt-2 order-0 order-sm-1 order-md-1 order-lg-2 d-flex justify-content-center justify-content-sm-center justify-content-md-end justify-content-lg-end"
        >
            <a href="https://dilium.com" target="_blank" rel="noreferrer"
                ><img src={dilium} height="50" width="175" alt="Dilium" id="dilium" /></a
            >
        </Col>
    </Row>
    <Row class="">
        <Input
            type="textarea"
            placeholder="Blog Text"
            bind:value={inputValue}
            name="text"
            id="postText"
            rows={5}
        />
    </Row>
    <Row>
        <Button size="sm" on:click={search} id="generate">Generate</Button>
    </Row>
</Container>
