$(document).ready(function () {

  $("#editor").html(preText);
  
  $("#preview").html(marked(preText));

  $("#editor").keyup(function () {
    
    var text = $(this).val();
    $("#preview").html(marked(text));

  });
});


var preText = 
`
# HELLO!
## Welcome to my FCC Markdown Parser

>Feel free to use the box on the left to test some **markdown** kung-fu.

For example, you can use lists:
* Oranges
* Lemons
* Plutonium
* Bananas

Or make links...
[FreeCodeCamp](http://www.freecodecamp.org)

Even some \`<code>\`!
\`\`\`javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
\`\`\`

![Thanks for coming by!](assets/images/logo.png)

Thanks for coming by!
`