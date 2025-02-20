<script lang="ts">
    // Set text used in <p> element below, empty before any requests
    let text = "";
    
    // function run when button pressed
    async function buttonClick() {
        // fetch request to backend
        const response = await fetch('http://0.0.0.0:3000/examplepost', {
        // this is a POST request //
        method: 'POST',
        // we are sending JSON //
        headers: {
            'Content-Type': 'application/json',            
        },
        // this is the JSON we are sending //
        body: JSON.stringify({ name: 'THIS IS TEXT SENT TO THE BACKEND' })
        });
        // get the JSON that the backend responds to the frontend JSON with
        const data = await response.json();
        // set the text variable used above to the value in the replied JSON associated with "textJsonKey"
        text = data.textJsonKey;
    };


</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<!-- button that sets text from post request -->
<button on:click={() => buttonClick()}>Click me</button>
<!-- text that is set by the text variable, which is changed by the buttonClick function-->
<p>{text}</p>