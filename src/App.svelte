<script>
  import "./lib/style.css";
  import { Container } from "sveltestrap";
  import PostText from "./components/PostText.svelte";
  import Content from "./components/Content.svelte";
  import Images from "./components/Images.svelte";
  import { OpenAIReq } from "./config/AxiosConfig";
  let summarizedTxt = "No content";
  let keywords = [];

  const send = async (e) => {
    await OpenAIReq.post("/completions", {
      model: "text-davinci-003",
      prompt: `Summarize this:\n\n${e.detail.text}`,
      temperature: 0.7,
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
      .then((response) => {
        summarizedTxt = response.data.choices[0].text;
      })
      .catch((response) => {
        console.log(response);
      });

    let keywordsString = "";

    await OpenAIReq.post("/completions", {
      model: "text-davinci-003",
      prompt: `Extract the top four keywords from this text:\n\n${e.detail.text} \n\n Separeted by comma`,
      temperature: 0.5,
      max_tokens: 60,
      top_p: 1,
      best_of: 3,
      frequency_penalty: 0.8,
      presence_penalty: 0,
    })
      .then((response) => {
        keywordsString = response.data.choices[0].text;
      })
      .catch((response) => {
        console.log(response);
      });
    keywords = keywordsString.split(",");
  };
</script>

<main>
  <Container
    class="p-5 d-flex flex-column justify-content-center align-content-center"
    fluid={true}
  >
    <PostText on:send={send} />
    <Content {summarizedTxt} />
    {#key keywords}
      {#if keywords.length > 0}
        <Images {keywords} />
      {/if}
    {/key}
  </Container>
</main>
