import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { foundItems } from '../data/items';

@Component({
  selector: 'app-item-detail-page',
  imports: [CommonModule, RouterLink],
  template: `
    <ng-container *ngIf="item() as current">
      <section class="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <article
          class="min-h-[420px] overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)]"
        >
          <img [src]="current.image" [alt]="current.title" />
        </article>

        <article
          class="grid content-start gap-4 rounded-[2rem] border border-[rgba(247,239,229,0.12)] bg-[rgba(33,23,18,0.72)] p-[clamp(1.4rem,3vw,2rem)] shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur-[18px]"
        >
          <span
            class="inline-flex w-fit rounded-full border border-[rgba(247,239,229,0.1)] bg-[rgba(247,239,229,0.06)] px-[0.9rem] py-[0.55rem] text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#f7efe5]"
            >item em destaque</span
          >
          <h1 class="m-0 mt-[0.65rem] font-display text-[clamp(2.3rem,6vw,4.9rem)] leading-[0.95] tracking-[-0.04em] text-[#fff8f2]">
            {{ current.title }}
          </h1>
          <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">{{ current.description }}</p>

          <div class="flex flex-wrap gap-3">
            <span class="rounded-full bg-[rgba(247,239,229,0.08)] px-4 py-[0.8rem] text-[#fff8f2]">{{
              current.location
            }}</span>
            <span class="rounded-full bg-[rgba(247,239,229,0.08)] px-4 py-[0.8rem] text-[#fff8f2]">{{ current.date }}</span>
          </div>

          <div class="mt-6 flex flex-wrap gap-[0.85rem]">
            <a
              routerLink="/catalogo"
              class="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f4c95d] to-[#ef8f4b] px-[1.3rem] py-[0.85rem] font-bold text-[#201511] no-underline transition duration-200 hover:-translate-y-px"
              >Voltar ao catalogo</a
            >
            <a
              routerLink="/fluxo"
              class="inline-flex min-h-12 items-center justify-center rounded-full border border-[rgba(247,239,229,0.12)] bg-[rgba(247,239,229,0.04)] px-[1.3rem] py-[0.85rem] font-bold text-[#fff8f2] no-underline transition duration-200 hover:-translate-y-px"
              >Ver fluxo interno</a
            >
          </div>
        </article>
      </section>
    </ng-container>
  `,
})
export class ItemDetailPageComponent {
  private readonly route = inject(ActivatedRoute);

  protected readonly item = computed(() =>
    foundItems.find((entry) => entry.slug === this.route.snapshot.paramMap.get('slug')) ?? foundItems[0],
  );
}
