async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const comment = document.querySelector('#body').value;
    const postId = window.location.pathname.split("/")[window.location.pathname.split('/').length -1];

    console.log(title),
    console.log(comment)


    const response = await fetch(`/api/post/${postId}/comment`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            comment,
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
    .querySelector('.comment-form')
    .addEventListener('submit', newFormHandler)