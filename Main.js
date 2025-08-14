document.addEventListener('DOMContentLoaded', () => {
  // Seleciona botão do menu e links de navegação
  const menuBtn = document.querySelector('.menu-btn');
  const nav = document.querySelector('.nav-links');
  if (menuBtn && nav) {
    // Alterna menu aberto ou fechado
    menuBtn.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', String(isOpen));
      // Evita rolagem ao abrir menu em mobile
      document.body.classList.toggle('no-scroll', isOpen);
    });

    // Fecha com ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });

    // Fecha ao clicar em link
    nav.addEventListener('click', (e) => {
      const target = e.target;
      if (target && target.matches('a')) {
        nav.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('no-scroll');
      }
    });
  }

  // Animação simples ao rolar utilizando Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target); // Para de observar após animar
      }
    });
  }, { rootMargin: '0px 0px -10% 0px', threshold: 0.1 });
  document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

  // Manipulação do formulário de contato
  const form = document.getElementById('contactForm');
  if (form) {
    // Pré-preenche o campo "serviço" com base na query string
    const params = new URLSearchParams(location.search);
    const service = params.get('servico');
    if (service) {
      const serviceSelect = form.querySelector('#service');
      if (serviceSelect) serviceSelect.value = service;
    }

    // Exibe mensagem de erro no campo que falhou na validação
    const showError = (name, message) => {
      const small = form.querySelector(`[data-error-for="${name}"]`);
      if (small) small.textContent = message || '';
    };

    // Validações dos campos do formulário
    const validators = {
      name: (v) => v.trim().length >= 2 || 'Informe seu nome',
      phone: (v) => /\d{10,11}/.test(v.replace(/\D/g, '')) || 'Informe um telefone válido',
      email: (v) => /.+@.+\..+/.test(v) || 'Informe um e-mail válido',
      service: (v) => v !== '' || 'Selecione um serviço',
      date: (v) => Boolean(v) || 'Selecione a data',
      time: (v) => Boolean(v) || 'Selecione o horário'
    };

    // Seta min da data como hoje
    const dateInput = form.querySelector('#date');
    if (dateInput) {
      const today = new Date();
      const yyyy = today.getFullYear();
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const dd = String(today.getDate()).padStart(2, '0');
      dateInput.min = `${yyyy}-${mm}-${dd}`;
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      let valid = true;

      // Valida cada campo
      for (const [name, value] of formData.entries()) {
        if (validators[name]) {
          const res = validators[name](String(value));
          if (res !== true) { 
            valid = false; 
            showError(name, res);
            const input = form.querySelector(`[name="${name}"]`);
            if (input) input.setAttribute('aria-invalid', 'true');
          } else { 
            showError(name, ''); 
            const input = form.querySelector(`[name="${name}"]`);
            if (input) input.removeAttribute('aria-invalid');
          }
        }
      }
      if (!valid) return;

      // Salva agendamento no local Storage
      const appointment = Object.fromEntries(formData.entries());
      try {
        const key = 'luxo_appointments';
        const list = JSON.parse(localStorage.getItem(key) || '[]');
        list.push({ ...appointment, createdAt: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(list));

        // Mostra mensagem de sucesso e reseta formulário
        const success = document.getElementById('formSuccess');
        if (success) {
          success.hidden = false;
          form.reset();
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } catch (err) {
        alert('Não foi possível salvar seu agendamento offline. Tente novamente.');
      }
    });
  }
});



