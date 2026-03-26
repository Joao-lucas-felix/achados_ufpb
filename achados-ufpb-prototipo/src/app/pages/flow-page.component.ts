import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flow-page',
  imports: [RouterLink],
  template: `
    <section
      class="rounded-[2rem] border border-[rgba(247,239,229,0.12)] bg-[rgba(33,23,18,0.72)] p-[clamp(1.4rem,3vw,2rem)] shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur-[18px]"
    >
      <div>
        <span
          class="inline-flex w-fit rounded-full border border-[rgba(244,201,93,0.18)] bg-[rgba(244,201,93,0.1)] px-[0.9rem] py-[0.55rem] text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#ffd98f]"
          >roteiro da secretaria</span
        >
        <h1 class="m-0 mt-[0.65rem] font-display text-[clamp(2.3rem,6vw,4.9rem)] leading-[0.95] tracking-[-0.04em] text-[#fff8f2]">
          Fluxo pensado para o atendimento rapido.
        </h1>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          Esta pagina fecha a apresentacao explicando como o visual pode se desdobrar em um produto real:
          foto forte, poucos campos e listagem limpa.
        </p>
      </div>
    </section>

    <section class="mt-5 grid gap-4 md:grid-cols-3">
      <article class="overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)] p-[1.35rem]">
        <strong class="text-[#fff8f2]">1. Receber</strong>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          O objeto chega ao setor e ganha uma foto frontal com enquadramento simples.
        </p>
      </article>
      <article class="overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)] p-[1.35rem]">
        <strong class="text-[#fff8f2]">2. Registrar</strong>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          O cadastro usa poucos campos: item, local e uma observacao curta.
        </p>
      </article>
      <article class="overflow-hidden rounded-[1.8rem] border border-[rgba(247,239,229,0.1)] bg-[rgba(33,23,18,0.68)] p-[1.35rem]">
        <strong class="text-[#fff8f2]">3. Publicar</strong>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          O acervo vira uma vitrine mobile-first para consulta imediata.
        </p>
      </article>
    </section>

    <section
      class="mt-[1.4rem] flex flex-col items-start justify-between gap-6 rounded-[2rem] border border-[rgba(247,239,229,0.12)] bg-[rgba(33,23,18,0.72)] p-[clamp(1.4rem,3vw,2rem)] shadow-[0_22px_60px_rgba(0,0,0,0.18)] backdrop-blur-[18px] md:flex-row md:items-end"
    >
      <div>
        <span
          class="inline-flex w-fit rounded-full border border-[rgba(247,239,229,0.1)] bg-[rgba(247,239,229,0.06)] px-[0.9rem] py-[0.55rem] text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#f7efe5]"
          >para github pages</span
        >
        <h2 class="m-0 mt-[0.65rem] font-display text-[clamp(1.8rem,3vw,2.6rem)] tracking-[-0.04em] text-[#fff8f2]">
          Entrega pronta para demo
        </h2>
        <p class="text-[rgba(247,239,229,0.72)] leading-[1.8]">
          O prototipo foi montado como SPA estatico, com rotas em hash e imagens locais, ideal para publicar sem backend.
        </p>
      </div>
      <a
        routerLink="/catalogo"
        class="inline-flex min-h-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f4c95d] to-[#ef8f4b] px-[1.3rem] py-[0.85rem] font-bold text-[#201511] no-underline transition duration-200 hover:-translate-y-px"
        >Abrir apresentacao</a
      >
    </section>
  `,
})
export class FlowPageComponent {}
