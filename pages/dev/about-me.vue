<template lang="pug">
  .flex.flex-col.items-center.w-full
    main-header

    horizontal-line

    page-detail(title="About me")

    .flex.flex-row
      img.w-32.h-32.rounded-full.mr-6(
        alt="Jéssica Fernandes"
        width="384"
        height="512"
        src="~/static/jess.png"
      )

      .flex.flex-col.items-strech.max-w-xl.ml-3
        strong Sou uma fazedora de coisas profissional. E Redatora Publicit&aacute;ria. Prazer! :)
        p Descobri a publicidade com 4 anos sentada na sala da minha m&atilde;e, l&aacute; em S&atilde;o Jos&eacute; do Rio Preto, enquanto assistia um comercial do governo.
        p Dei um pulo em Minas Gerais para fazer facu, depois um pulo r&aacute;pido na terra de los hermanos, onde aprendi falar argentino, agora c&aacute; estou em SP.
        p Misturando Uai com meu.
        br
        p Projeto pessoal: acervo de filmes publicit&aacute;rio
          br
          a(href='https://www.instagram.com/playpublicitario/') @playpublicit&aacute;rio

        p Aprendendo a ilustrar e juntando com uns textos em
          br
          a(href='https://www.instagram.com/falandopelasmaos/') @falandopelasmaos
        br
        p
          strong Casa atual:
          br
          | 2020 HAVAS+ (SP)
        br
        p
          strong Papo e Cafezin? :)
          br
          | jessfernandes.pp@gmail.com
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component
export default class AboutMePage extends Vue {}
</script>
