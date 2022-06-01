const id = document.querySelector('input[name="post-id"]').value;

async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="post-title"]').value;
    const content = document.querySelector('textarea[name="post-content"]').value;

    // if (title && content) {
    // const response =
     await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title, content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    // if (response.ok) {
      document.location.replace('/dashboard');
      // console.log('save btn')
    // } else {
      // alert(response.statusText);
    }
  // }
// }
  document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
  // document.querySelector('.save-post-btn').addEventListener('submit', editFormHandler);
  