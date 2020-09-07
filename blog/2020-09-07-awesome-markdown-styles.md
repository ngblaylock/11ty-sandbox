---
title: Awesome Markdown Styles
---

Hey, so this is a cool blog article, but really, it is just a good time to write down some thoughts about 11ty. I really, really like it. I like it for its simplicity in creating simple static websites. I have used Nuxt in the past, and really like that, however I have had to use Bootstrap Vue since I didn't want to use both Vue and jQuery. Some static websites didn't even require using any Vue, so I wish I could have made it real simple and just used jQuery instead. 11ty solved that, and as well, it made writing blogs and including things really easy. 

One disadvantage that I have found is that you can't write valid, page specific css. Or at least to my knowledge. Once I figure that out, I think I will be pretty happy. Also, I like the Vue syntax more than I like Liquid, but it isn't as big of a deal. 

Lets try markdown syntax. *This is italic*. This is **bold**. This is a ~~stikethrough~~. This is ***bold and italic***. If you want to use `code` text, that is cool too. I guess there isn't any markdown underlines, but you can use <u>HTML Syntax</u> to get it to work. Let's put in an image:

![Nathan Blaylock](https://nathanblaylock.com/img/blaylock-nathan-1-square.png)

What a handsome guy.

Here is a table:

| Awesome      | Cool               | Table                       |
| ------------ | ------------------ | --------------------------- |
| Here         | Is                 | Table Data in our big table |
| I had to add | Some jQuery to get | the table to format well    |

Here is a code block:

```
<script>
  $(document).ready(function(){
    $('table').addClass("table table-sm table-striped");
    $('.table.table-sm thead').addClass("bg-dark text-white")
  });
</script>
```