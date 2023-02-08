<script>
  import { Container } from "sveltestrap";
  import SearchBar from "./components/SearchBar.svelte";
  import Content from "./components/Content.svelte";
  import Images from "./components/Images.svelte";
</script>

<main>
  <Container>
    <SearchBar />
    <Content />
    <Images />
  </Container>
</main>
