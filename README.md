# EcoVerify — landing page

Landing page oficial do EcoVerify, em português do Brasil. Projeto estático com Vite, React e TypeScript; publicado na Vercel.

## Desenvolvimento

- `npm install`
- `npm run dev` — servidor local
- `npm run build` — valida os tipos e gera `dist/`
- `npm run preview` — prévia do build

## Links e publicação

- Repositório do app, demo web, termos e privacidade: altere os links nos componentes `src/site.tsx` e `src/download.tsx`.
- URL pública do site: ajuste a constante exportada `SITE_URL` em `src/config.ts` e os domínios em `robots.txt` e `sitemap.xml` depois do deploy. O valor atual (`https://ecoverify.vercel.app`) é provisório, não foi confirmado. A Vercel detecta Vite automaticamente; `vercel.json` reescreve `/baixar` para a SPA, permitindo recarregar a rota.
- Contato de organizações: substitua `SEU-EMAIL-AQUI` em `src/site.tsx` por um e-mail de contato.
- Marca Fone Protocol: o selo tipográfico atual é apenas um link textual para https://fone.dev. Os arquivos oficiais de logo devem ser usados sem recolorir nem distorcer, com a versão escura sobre fundo claro ou a branca sobre fundo escuro. **Uso de marca/logo depende de autorização da Fone Protocol; não há alegação de parceria ou endosso.**

## Busca automática do APK

A configuração editável `CONFIG` em `src/download.tsx` guarda proprietário (`owner`), repositório (`repo`) e nome do asset (`asset`). No navegador, consulta `GET https://api.github.com/repos/{owner}/{repo}/releases?per_page=10`, seleciona o primeiro release não-draft com o asset `app-debug.apk`, e usa `browser_download_url`. Tag, data brasileira e tamanho são apresentados. A resposta fica no `sessionStorage` por 10 minutos; erros ou ausência do APK oferecem o link geral para Releases. O botão nunca fica sem caminho de download.

O APK atual é demonstração offline com dados simulados; não há servidor nem banco. FONE é simulado. O site não usa analytics, cookies de rastreamento ou anúncios.

## Acessibilidade e SEO

Idioma `pt-BR`, metadados Open Graph/Twitter, ícones locais, sitemap, robots, navegação responsiva, foco visível e respeito a `prefers-reduced-motion`. Revisar os domínios de sitemap/robots quando a URL final da Vercel estiver definida.
