
// This javascript feature is linked to the blog page. It it for the comment form. When the user submits their comment, an alert shows up to thank them for submitting their comment 

const blogComment = document.querySelector('.blogForm');

console.log(blogComment);

blogComment.addEventListener('submit', function(){
  alert('Thank you for leaving a comment.');
});




