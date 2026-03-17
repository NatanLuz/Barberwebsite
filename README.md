## Bem vindo a Barbearia Luxo — Site Premium

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)]()
[![Google Fonts](https://img.shields.io/badge/Google_Fonts-4285F4?style=flat&logo=google&logoColor=white)]()

![Barbearia Luxo](https://i.imgur.com/UirkYbC.png)

Site moderno, leve e totalmente responsivo para uma barbearia premium. Construído com HTML acessível, CSS moderno e JavaScript puro, focando em conversão, SEO, PWA e uma experiência de usuário refinada limpa

### O que o projeto entrega

- Arquitetura de página única (SPA) em `index.html` com:
  - Hero de destaque com CTA para agendamento
  - Seções de destaques, serviços, preços, depoimentos, FAQ, dicas (blog) e contato
- Navegação mobile com menu hambúrguer acessível
- Formulário de agendamento com validação e salvamento local (localStorage)
- SEO configurado (Open Graph, Twitter Cards, canonical, meta description)
- Dados estruturados JSON‑LD (`HairSalon` + `AggregateRating` + `FAQPage`)
- PWA básico: `manifest.json` + `sw.js` + `offline.html` para navegação offline

### Principais destaques

- Tema escuro profissional com cor de destaque dourada
- Layout responsivo mobile‑first usando grid moderno
- Acessibilidade: skip link, foco visível, ARIA em navegação e formulário
- Microinterações suaves em cards, botões e scroll (Intersection Observer)
- Botão flutuante de agendamento em telas menores

### Stack utilizada

- HTML5 semântico
- CSS3 com variáveis (`:root`), grid responsivo e componentes reutilizáveis
- JavaScript puro para navegação, animações e formulário
- Google Fonts (Inter, Playfair Display)

### Como rodar o projeto

1. Clone o repositório
2. Abra o arquivo `index.html` em qualquer navegador moderno

Recomendado usar um servidor local (para testar melhor o PWA):

```bash
# VS Code com extensão Live Server
code .

# Ou com Python 3
python -m http.server 8080
```

Depois acesse: `http://localhost:8080/index.html`

### Estrutura do projeto

```
Barberwebsite/
  index.html      # Página única com todas as seções
  style.css       # Estilos globais e componentes
  Main.js         # Navegação mobile, animações e formulário
  manifest.json   # Manifesto PWA
  sw.js           # Service Worker (cache estático + offline)
  offline.html    # Tela mostrada quando o usuário está offline
  img/            # Imagens do site
  README.md
```

### Como personalizar

- **Marca**: altere o texto do logo e as cores em `:root` no `style.css`
- **Conteúdo**: edite textos das seções diretamente em `index.html`
- **Serviços e preços**: ajuste os cards na seção "Serviços" e "Serviços e preços" em `index.html`
- **Contato**: atualize telefone, e‑mail, endereço e horários no bloco de contato em `index.html`
- **Imagens**: substitua os arquivos em `img/` (ideal usar formatos otimizados como WebP/AVIF)

### Notas de SEO & PWA

- Hospede o projeto em HTTPS para o Service Worker funcionar corretamente
- Atualize o título, descrição e imagem de compartilhamento em `index.html` para sua marca
- Substitua os ícones do `manifest.json` por ícones próprios da barbearia (512×512, 192×192, etc.)

### Créditos

Design e desenvolvimento por **Natan Da Luz**.

- LinkedIn: https://www.linkedin.com/in/natan-da-luz-3156582a2/
- E‑mail: natandaluz01@gmail.com
