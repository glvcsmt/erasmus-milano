<script>
    import { createEventDispatcher } from "svelte";
    import {
        Button,
        Input,
        Container,
        Row,
        FormGroup,
        Label,
    } from "sveltestrap";
    let inputValue = "";
    const dispatch = createEventDispatcher();
    function search() {
        dispatch("send", { text: inputValue });
    }
</script>

<Container fluid>
    <Row class="d-flex justify-content-center">
        <FormGroup>
            <h3>Blog Post</h3>
            <Input
                type="textarea"
                bind:value={inputValue}
                name="text"
                id="postText"
                rows={5}
            />
        </FormGroup>
        <Button size="sm" on:click={search}>Generate</Button>
    </Row>
</Container>
