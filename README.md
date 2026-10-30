# EcoVerify — landing page

Site estático com Vite, React e TypeScript.

## Desenvolvimento

- `npm ci`
- `npm run dev`
- `npm run build`

GSAP + ScrollTrigger animam a entrada do hero, os cards e as seções ao rolar. A preferência `prefers-reduced-motion` desativa esses movimentos para acessibilidade.

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` publica o `dist/` para o endereço `https://dg-senac.github.io/LandingPage-EcoVerify/`. Em Settings → Pages, selecione GitHub Actions como origem. `SITE_URL` fica em `src/config.ts`.

## Conteúdo

- O site começa em inglês; o botão EN | PT alterna para português brasileiro. Traduções ficam nos componentes `src/site.tsx` e `src/download.tsx`; idioma, título e descrição são controlados em `src/language.tsx`.
- Atualize os marcos da linha do tempo em `src/site.tsx` conforme o projeto evoluir.
- Contato: `douglasgabriel9628@gmail.com`.
- O APK está anunciado como lançamento futuro fora da Play Store, pelo GitHub oficial do projeto. O botão mostra um aviso animado; não há formulário de notificação.
- O QR code e a URL do site usam a constante `SITE_URL` em `src/config.ts`.

A página não afirma que o banco de dados está pronto ou que o produto já foi lançado; a linha do tempo mostra o banco em andamento e o lançamento como data a anunciar.
