async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="content"]').value;
  console.log(title, content)
    if (title && content) {
    const response = await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
        //not sure about this part?
      document.location.replace('/user-page');
    } else {
      alert(response.statusText);
    }
  }
  }