<script>
    export let imageProp, styleName;
</script>

<style>
    .button.style_button {
        position: relative;
        display: flex;
        width: auto;
        height: auto;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        cursor: pointer;
        border-radius: 10%;
        border: 0.5rem solid #5c5c51;
        background-color: #d5d8d1;
        transition: transform 0.3s;
    }

    .button.style_button:hover {
        transform: scale(1.02);
    }

    .button.style_button img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .button.style_button div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        opacity: 0;
        transition: opacity 0.3s;
    }
</style>

<div class="button style_button">
    <img src="{imageProp}" alt="{styleName}">
    <div>{styleName}</div>
</div>