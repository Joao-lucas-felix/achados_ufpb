import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { foundItems } from '../data/items';

@Component({
  selector: 'app-catalog-page',
  imports: [CommonModule, RouterLink],
  template: `
    <section class="mt-8 mb-4 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
      <div>
        <span
          class="inline-flex w-fit rounded-full border border-[rgba(247,239,229,0.1)] bg-[rgba(247,239,229,0.06)] px-[0.9rem] py-[0.55rem] text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#f7efe5]"
          >catalogo</span
        >
        <h1 class="m-0 mt-[0.65rem] font-display text-[clamp(2.3rem,6vw,4.9rem)] leading-[0.95] tracking-[-0.04em] text-[#fff8f2]">
          Cards estaticos para a apresentacao
        </h1>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          Cada card mantem a imagem dominante e o texto reduzido. A descricao entra como apoio, nunca como centro.
        </p>
      </div>
    </section>

    <section class="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
      <article
        *ngFor="let item of items"
        class="overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)]"
      >
        <a [routerLink]="['/item', item.slug]" class="block aspect-[4/3]">
          <img [src]="item.image" [alt]="item.title" />
        </a>
        <div class="grid gap-[0.85rem] p-4">
          <div class="flex justify-between gap-4 text-[0.82rem] text-[rgba(247,239,229,0.68)]">
            <span>{{ item.location }}</span>
            <small>{{ item.date }}</small>
          </div>
          <h2 class="m-0 text-[1.2rem] text-[#fff8f2]">{{ item.title }}</h2>
          <p class="m-0 text-[0.94rem] leading-[1.8] text-[rgba(247,239,229,0.72)]">{{ item.description }}</p>
          <a [routerLink]="['/item', item.slug]" class="font-bold text-[#ffd98f] no-underline">Abrir detalhe</a>
        </div>
      </article>
    </section>
  `,
})
export class CatalogPageComponent {
  protected readonly items = foundItems;
}
