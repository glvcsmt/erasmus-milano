<script>
    import { Container } from "sveltestrap";
    export let summarizedTxt;
</script>

<main>
    <Container fluid>
        <h3 class="mt-5">Summary</h3>
        <p>
            {summarizedTxt}
        </p>
    </Container>
</main>