<template lang="pug">
  nav.flex.w-full.justify-between.items-center
    .flex.items-center.space-x-2
      a(href="https://www.linkedin.com/in/jess-fernandes" target="_blank")
        img(src="~/static/icon-linkedin.png" srcset="~/static/icon-linkedin@2x.png 2x")

      a(href="mailto:jessfernandes.pp@gmail.com" target="_blank")
        img(src="~/static/icon-email.png" srcset="~/static/icon-email@2x.png 2x")

    .flex.flex-col.text-center
      nuxt-link(to="/")
        img(src="~/static/jess-logo.png" srcset="~/static/jess-logo@2x.png 2x")

      small.text-base.uppercase.mt-1.cursor-default Copywriter

    .menu.flex.flex-col.text-right
      a(href="#") about
      a(href="#") free time
</template>

<style>
nav {
  font-family: 'Courier Prime', sans-serif;
}

nav a {
  color: #494949;
  position: relative;
}

nav .menu a:hover {
  color: black;
}

nav .menu a:hover::before {
  background: black;
}

nav .menu a::before {
  content: '';
  height: 2px;
  width: 14px;
  background: #6a6a6a;
  position: absolute;
  display: block;
  right: 0;
  bottom: 3px;
}
</style>
