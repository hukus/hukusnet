<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<script>
  import successkid from "images/successkid.jpg";
</script>

<svelte:head>
  <title>hukusnet</title>
</svelte:head>

<h1>hukusnet lives again!</h1>

<figure><img alt="Success Kid" src={successkid} /></figure>

<p>And now let's add AWS Amplify support...</p>
