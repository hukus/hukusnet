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
    margin: 2em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<script>
  import successKid from 'images/successkid.jpg';
  import { Auth, API, graphqlOperation } from 'aws-amplify';
  import { getPosts, listPostss } from './../graphql/queries';

  $: posts = [];

  async function checkUser() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      console.log('user:', user);
    } catch (error) {
      console.log('error getting user:', error);
    }
  }

  async function pingGraphql() {
    try {
      const response = await API.graphql(graphqlOperation(listPostss));
      posts = response.data.listPostss;
      console.log('post:', posts);
    } catch (error) {
      console.log('error getting post:', error);
    }
  }

  const formatDate = (datestring) => {
    const date = new Date(datestring);
    return date.toLocaleDateString();
  };
</script>

<svelte:head>
  <title>hukusnet</title>
</svelte:head>

<h1>hukusnet lives again!</h1>

<figure><img alt="Success Kid" src="{successKid}" /></figure>

<p>And now let's add AWS Amplify support...</p>

<p>
  <button on:click="{() => Auth.federatedSignIn({ provider: 'Facebook' })}">Facebook Sign in</button>
  <button on:click="{() => Auth.federatedSignIn()}">Sign in</button>
  <button on:click="{checkUser}">Check user</button>
  <button on:click="{pingGraphql}">Get Posts from GQL</button>
</p>

<p>
  {#each posts as post}
    <p>{post.content} - {formatDate(post.postDate)}</p>
  {/each}
</p>
