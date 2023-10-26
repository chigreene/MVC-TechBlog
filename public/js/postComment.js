async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const response = await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert('failed to post comment.')
    }
}

document
    .querySelector()