import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { foundItems } from '../data/items';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, RouterLink],
  template: `
    <section class="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
      <div
        class="rounded-[2rem] border border-[rgba(247,239,229,0.12)] bg-[rgba(33,23,18,0.72)] p-[clamp(1.4rem,3vw,2rem)] shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur-[18px]"
      >
        <span
          class="inline-flex w-fit rounded-full border border-[rgba(244,201,93,0.18)] bg-[rgba(244,201,93,0.1)] px-[0.9rem] py-[0.55rem] text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#ffd98f]"
          >visual copiado das referencias</span
        >
        <h1
          class="mt-[0.65rem] font-display text-[clamp(2.3rem,6vw,4.9rem)] leading-[0.95] font-extrabold tracking-[-0.04em] text-[#fff8f2]"
        >
          Prototipo estatico para apresentar o sistema de achados e perdidos.
        </h1>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          A proposta usa as proprias fotos da pasta <code>examples</code> para construir uma vitrine com cara
          institucional, foco no objeto e leitura simples para mobile.
        </p>
        <div class="mt-6 flex flex-wrap gap-[0.85rem]">
          <a
            routerLink="/catalogo"
            class="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f4c95d] to-[#ef8f4b] px-[1.3rem] py-[0.85rem] font-bold text-[#201511] no-underline transition duration-200 hover:-translate-y-px"
            >Abrir catalogo</a
          >
          <a
            routerLink="/fluxo"
            class="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(247,239,229,0.12)] bg-[rgba(247,239,229,0.04)] px-[1.3rem] py-[0.85rem] font-bold text-[#fff8f2] no-underline transition duration-200 hover:-translate-y-px"
            >Ver fluxo</a
          >
        </div>
      </div>

      <div class="grid gap-4 [grid-template-columns:1fr] sm:[grid-template-columns:1fr_1fr] md:[grid-template-columns:1fr_1fr]">
        <article
          class="relative min-h-[280px] overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)] sm:row-auto md:row-span-2 md:min-h-[420px]"
        >
          <img [src]="items[0].image" [alt]="items[0].title" />
          <div
            class="absolute right-4 bottom-4 left-4 grid gap-1 rounded-[1.35rem] bg-[rgba(19,15,13,0.62)] p-4 backdrop-blur-[16px]"
          >
            <strong class="text-[#fff8f2]">{{ items[0].title }}</strong>
            <span class="text-[rgba(247,239,229,0.68)]">{{ items[0].location }}</span>
          </div>
        </article>
        <article class="min-h-[200px] overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)]">
          <img [src]="items[4].image" [alt]="items[4].title" />
        </article>
        <article class="min-h-[200px] overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)]">
          <img [src]="items[3].image" [alt]="items[3].title" />
        </article>
      </div>
    </section>

    <section class="mt-5 grid gap-4 md:grid-cols-3">
      <article class="overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)] p-[1.35rem]">
        <span class="mb-4 inline-flex font-extrabold text-[#f4c95d]">01</span>
        <h2 class="m-0 font-display text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.04em] text-[#fff8f2]">
          Foto em primeiro plano
        </h2>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          O item vira protagonista e a interface quase desaparece para valorizar o reconhecimento visual.
        </p>
      </article>
      <article class="overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)] p-[1.35rem]">
        <span class="mb-4 inline-flex font-extrabold text-[#f4c95d]">02</span>
        <h2 class="m-0 font-display text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.04em] text-[#fff8f2]">
          Cards enxutos
        </h2>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          Titulo, local e um trecho curto. A leitura e rapida e o layout respira melhor em telas pequenas.
        </p>
      </article>
      <article class="overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)] p-[1.35rem]">
        <span class="mb-4 inline-flex font-extrabold text-[#f4c95d]">03</span>
        <h2 class="m-0 font-display text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.04em] text-[#fff8f2]">
          Pronto para GH Pages
        </h2>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          Rotas com hash e build estatico, o que deixa o deploy mais simples para demonstracao.
        </p>
      </article>
    </section>

    <section class="mt-8">
      <div class="mb-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <span
            class="inline-flex w-fit rounded-full border border-[rgba(247,239,229,0.1)] bg-[rgba(247,239,229,0.06)] px-[0.9rem] py-[0.55rem] text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#f7efe5]"
            >amostra do acervo</span
          >
          <h2 class="m-0 mt-[0.65rem] font-display text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.04em] text-[#fff8f2]">
            Alguns itens das referencias
          </h2>
        </div>
        <a routerLink="/catalogo" class="font-bold text-[#ffd98f] no-underline">Ver todos</a>
      </div>

      <div class="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(180px,1fr))]">
        <a
          *ngFor="let item of items"
          class="overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)] text-inherit no-underline"
          [routerLink]="['/item', item.slug]"
        >
          <img [src]="item.image" [alt]="item.title" />
          <div class="grid gap-1 p-4">
            <strong class="text-[#fff8f2]">{{ item.title }}</strong>
            <small class="text-[rgba(247,239,229,0.68)]">{{ item.location }}</small>
          </div>
        </a>
      </div>
    </section>
  `,
})
export class HomePageComponent {
  protected readonly items = foundItems;
}
