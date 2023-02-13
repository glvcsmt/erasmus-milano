<script>
    import { onMount } from "svelte";
    import { Container, Row, Col, Spinner } from "sveltestrap";
    import Image from "./Image.svelte";
    import { OpenAIReq } from "../config/AxiosConfig";
    export let keywords;

    let images = [];
    let isFinished = false;
    const fn = async () => {
        isFinished = false;
        for (let i = 1; i < keywords.length; i++) {
            await OpenAIReq.post("/images/generations", {
                prompt: keywords[i],
                n: 1,
                size: "1024x1024",
            })
                .then((response) => {
                    images.push({
                        keyword: keywords[i],
                        url: response.data.data[0].url,
                    });
                })
                .catch((response) => {
                    console.log(response);
                });
        }
        isFinished = true;
    };

    onMount(() => {
        fn();
    });
</script>

<Container fluid>
    <Row>
        <h3>Photos</h3>
        {#if isFinished}
            {#each images as image, is}
                <Col md="4" lg="4">
                    <Image keyword={image.keyword} url={image.url} />
                </Col>
            {/each}
        {:else}
            <Spinner color="primary" />
        {/if}
    </Row>
</Container>
