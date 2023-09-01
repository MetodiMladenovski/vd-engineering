const copyContentNumberOne = async () => {
    let text = document.getElementById('contactNumberOne').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

const copyEmail = async () => {
    let text = document.getElementById('contactEmail').innerHTML;
    try {
        await navigator.clipboard.writeText(text);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}
