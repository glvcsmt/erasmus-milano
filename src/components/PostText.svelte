<script>
    import { createEventDispatcher } from "svelte";
    import {
        Button,
        Input,
        Container,
        Row,
        FormGroup,
        Label,
        Col,
    } from "sveltestrap";
    let inputValue = "";
    const dispatch = createEventDispatcher();
    function search() {
        dispatch("send", { text: inputValue });
    }
</script>

<Container fluid>
    <Row class="d-flex justify-content-center">
        <Col sm="4">
            <a href="https://ntszki.hu/" target="_blank" rel="noreferrer"
                ><img src="Nadasdy.jpg" alt="NTSZKI" id="ntszki" /></a
            >
        </Col>
        <Col sm="4" class="d-flex justify-content-center">
            <h3 id="blog">Blog Post</h3>
        </Col>
        <Col sm="4">
            <a href="https://dilium.com" target="_blank" rel="noreferrer"
                ><img src="dilium.png" alt="Dilium" id="dilium" /></a
            >
        </Col>
        <Input
            type="textarea"
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
