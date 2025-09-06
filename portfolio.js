// portfolio.js
(() => {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => Array.from(document.querySelectorAll(s));

  const t = {
    es: {
      htmlLang: "es",
      title: "Renata Gatica — Portfolio",
      nav: { home: "Inicio", about: "Sobre mí", edu: "Educación", exp: "Experiencia", skills: "Habilidades", contact: "Contacto" },
      hero: { subtitle: "Estudiante de Licenciatura en Sistemas", born: "Nacimiento:", btnContact: "Contacto", cvEs: "CV Español", cvEn: "CV English" },
      about: {
        h2: "Sobre mí",
        text: "Soy desarrolladora con interés en aplicaciones web, arquitectura limpia, diseño estético y productos centrados en el usuario. Además trabajo como Community Manager de cuentas de Instagram generando contenido multimedia y respondiendo mensajes.",
      },
      edu: {
        h2: "Educación",
        uadeTitle: "Licenciatura en Gestión de Tecnología de la Información",
        uadeMeta: "UADE · 2024 — Hoy",
        uadeDesc: "Combina conocimientos técnicos en programación, bases de datos, redes y seguridad informática con herramientas de gestión, liderazgo y administración de proyectos.",
        hsTitle: "Estudios secundarios completos",
        hsMeta: "Colegio Logosófico González Pecotche · 2023",
        hsDesc: "Con foco en la educación holística, integrando formación académica con autoconocimiento y valores éticos.",
      },
      exp: {
        h2: "Experiencia",
        supportTitle: "Soporte al cliente",
        supportTime: "2025 – Actualidad",
        supportDesc: "Atención al cliente ante reclamos o consultas de los productos vendidos por @winkshop.ar tanto en Mercado Libre como en su Tienda Online e Instagram.",
        cmTitle: "Community Manager",
        cmTime: "2024 – Actualidad",
        cmIntro: "Manejo de redes, diseño gráfico, marketing digital y atención al cliente.",
        sandraSub: "— Neuróloga Infantil",
        sandraDesc: "Producción integral (edición foto/video) y community care con derivación al consultorio.",
        tdpSub: "— Clases de padel",
        tdpDesc: "Gestión de contenido sobre viajes, torneos, indumentaria y clases; cobertura de eventos y atención de consultas.",
        depaSub: "— Emprendimiento de moda sostenible",
        depaDesc: "Identidad de marca, dirección/edición fotográfica y planificación de grilla; gestión de DM/consultas.",
        bandastSub: "— Indumentaria de padel",
        bandastDesc: "Plan de lanzamientos, estética y tono de marca; activación de contenidos para reconocimiento y primeras ventas.",
        view: "Ver",
        store: "Tienda Online",
      },
      skills: {
        h2: "Habilidades",
        tech: "Técnicas",
        soft: "Blandas",
        langs: "Idiomas",
        softList: ["Disciplina","Trabajo","Resolución","Comunicación","Adaptabilidad","Creatividad","Flexibilidad","Gestión"],
        esLabel: "Español (Nativo)",
        enLabel: "Inglés C1 (Advanced)",
        cambridge: "Certificado Cambridge"
      },
      contact: { h2: "Contacto", email: "Email", phone: "Teléfono", linkedin: "LinkedIn", ig: "Instagram", follow: "Seguime" },
    },

    en: {
      htmlLang: "en",
      title: "Renata Gatica — Portfolio",
      nav: { home: "Home", about: "About", edu: "Education", exp: "Experience", skills: "Skills", contact: "Contact" },
      hero: { subtitle: "Information Systems student", born: "Born:", btnContact: "Contact", cvEs: "CV Spanish", cvEn: "CV English" },
      about: {
        h2: "About me",
        text: "I’m a developer focused on web apps, clean architecture, aesthetics and user-centered products. I also manage Instagram communities, creating multimedia content and handling messages.",
      },
      edu: {
        h2: "Education",
        uadeTitle: "B.Sc. in IT Management",
        uadeMeta: "UADE · 2024 — Present",
        uadeDesc: "Combines programming, databases, networks and security with management, leadership and project tools.",
        hsTitle: "High school diploma",
        hsMeta: "Colegio Logosófico González Pecotche · 2023",
        hsDesc: "Holistic education with emphasis on academics, self-knowledge and ethical values.",
      },
      exp: {
        h2: "Experience",
        supportTitle: "Customer Support",
        supportTime: "2025 – Present",
        supportDesc: "Customer care for @winkshop.ar across Mercado Libre, Online Store and Instagram (claims, inquiries and follow-ups).",
        cmTitle: "Community Manager",
        cmTime: "2024 – Present",
        cmIntro: "Social media management, graphic design, digital marketing and customer care.",
        sandraSub: "— Pediatric Neurologist",
        sandraDesc: "End-to-end photo/video editing, content calendar and message triage to clinic.",
        tdpSub: "— Padel classes",
        tdpDesc: "Content on trips, tournaments, apparel and classes; event coverage and inquiry handling.",
        depaSub: "— Sustainable fashion venture",
        depaDesc: "Brand identity, photo direction/editing and editorial planning; DM/helpdesk.",
        bandastSub: "— Padel apparel",
        bandastDesc: "Launch roadmap, cohesive visual identity and content activation to drive awareness and early sales.",
        view: "View",
        store: "Online Store",
      },
      skills: {
        h2: "Skills",
        tech: "Technical",
        soft: "Soft Skills",
        langs: "Languages",
        softList: ["Discipline","Teamwork","Problem-solving","Communication","Adaptability","Creativity","Flexibility","Management"],
        esLabel: "Spanish (Native)",
        enLabel: "English C1 (Advanced)",
        cambridge: "Cambridge Certificate"
      },
      contact: { h2: "Contact", email: "Email", phone: "Phone", linkedin: "LinkedIn", ig: "Instagram", follow: "Follow" },
    },
  };

  const setText = (sel, text) => {
    const el = document.querySelector(sel);
    if (el && typeof text === "string") el.textContent = text;
  };
  const setHTML = (sel, html) => {
    const el = document.querySelector(sel);
    if (el && typeof html === "string") el.innerHTML = html;
  };

  function applyLang(lang) {
    const L = t[lang];
    if (!L) return;

    document.documentElement.lang = L.htmlLang;
    document.title = L.title;

    setText('#menu a[href="#inicio"]', L.nav.home);
    setText('#menu a[href="#sobre-mi"]', L.nav.about);
    setText('#menu a[href="#educacion"]', L.nav.edu);
    setText('#menu a[href="#experiencia"]', L.nav.exp);
    setText('#menu a[href="#habilidades"]', L.nav.skills);
    setText('#menu a[href="#contacto"]', L.nav.contact);

    const heroSubs = Array.from(document.querySelectorAll('.hero-col-left .subtitle'));
    if (heroSubs[0]) heroSubs[0].textContent = L.hero.subtitle;
    if (heroSubs[1]) {
      const spans = heroSubs[1].querySelectorAll("span");
      if (spans[0]) spans[0].textContent = L.hero.born;
    }
    const ctas = Array.from(document.querySelectorAll('.cta .btn'));
    if (ctas[0]) ctas[0].textContent = L.hero.btnContact;
    if (ctas[1]) ctas[1].textContent = L.hero.cvEs;
    if (ctas[2]) ctas[2].textContent = L.hero.cvEn;

    setText("#sobre-mi .about-title", L.about.h2);
    setText("#sobre-mi .about-text", L.about.text);

    setText("#educacion h2", L.edu.h2);
    setText('#educacion .timeline-item:nth-of-type(1) .edu-title', L.edu.uadeTitle);
    setText('#educacion .timeline-item:nth-of-type(1) .edu-meta-right', L.edu.uadeMeta);
    setText('#educacion .timeline-item:nth-of-type(1) .edu-desc', L.edu.uadeDesc);
    setText('#educacion .timeline-item:nth-of-type(2) .edu-title', L.edu.hsTitle);
    setText('#educacion .timeline-item:nth-of-type(2) .edu-meta-right', L.edu.hsMeta);
    setText('#educacion .timeline-item:nth-of-type(2) .edu-desc', L.edu.hsDesc);

    setText("#experiencia h2", L.exp.h2);
    setText('#experiencia .card--bubble header h3', L.exp.supportTitle);
    setText('#experiencia .card--bubble header .muted', L.exp.supportTime);
    setText('#experiencia .card--bubble .card-body p', L.exp.supportDesc);

    document.querySelectorAll('#experiencia .card--bubble .support-links a span').forEach((span) => {
      const txt = span.textContent.trim().toLowerCase();
      if (txt.includes("tienda")) span.textContent = L.exp.store;
      if (txt === "mercado libre") span.textContent = "Mercado Libre";
      if (txt === "instagram") span.textContent = "Instagram";
    });

    setText('#experiencia .card--cm .cm-header h3', L.exp.cmTitle);
    setText('#experiencia .card--cm .cm-header .muted', L.exp.cmTime);
    setText('#experiencia .card--cm .cm-intro', L.exp.cmIntro);

    const cmItems = Array.from(document.querySelectorAll('#experiencia .card--cm .cm-item'));
    if (cmItems[0]) {
      setHTML('.cm-item:nth-of-type(1) .cm-handle', `<strong>@dra.sandra.piemonte</strong> <span class="muted">${L.exp.sandraSub}</span>`);
      setText('.cm-item:nth-of-type(1) .cm-desc', L.exp.sandraDesc);
    }
    if (cmItems[1]) {
      setHTML('.cm-item:nth-of-type(2) .cm-handle', `<strong>@tierradepadel</strong> <span class="muted">${L.exp.tdpSub}</span>`);
      setText('.cm-item:nth-of-type(2) .cm-desc', L.exp.tdpDesc);
    }
    if (cmItems[2]) {
      setHTML('.cm-item:nth-of-type(3) .cm-handle', `<strong>@depasansi</strong> <span class="muted">${L.exp.depaSub}</span>`);
      setText('.cm-item:nth-of-type(3) .cm-desc', L.exp.depaDesc);
    }
    if (cmItems[3]) {
      setHTML('.cm-item:nth-of-type(4) .cm-handle', `<strong>@bandast.ok</strong> <span class="muted">${L.exp.bandastSub}</span>`);
      setText('.cm-item:nth-of-type(4) .cm-desc', L.exp.bandastDesc);
    }
    document.querySelectorAll('.cm-action .btn').forEach((b) => (b.textContent = L.exp.view));

    setText("#habilidades h2", L.skills.h2);
    setText('#habilidades .skills-col:nth-of-type(1) .skill-head', L.skills.tech);
    setText('#habilidades .skills-col:nth-of-type(2) .skill-head', L.skills.soft);

    const softList = document.querySelector('#habilidades .soft-list');
    if (softList) {
      softList.innerHTML = L.skills.softList.map((s) => `<li>${s}</li>`).join("");
      softList.classList.add("two-cols");
    }

    setText('#habilidades .langs .skill-head', L.skills.langs);
    const langMeters = Array.from(document.querySelectorAll('#habilidades .langs .meters .meter-item .meter-label'));
    if (langMeters[0]) langMeters[0].childNodes[0].nodeValue = L.skills.esLabel;
    if (langMeters[1]) {
      // label text (first text node) + Cambridge button text
      const lbl = langMeters[1];
      // ensure first text node is replaced
      const textNode = Array.from(lbl.childNodes).find(n => n.nodeType === Node.TEXT_NODE);
      if (textNode) textNode.nodeValue = L.skills.enLabel + " ";
      setText('#cambridge-link', L.skills.cambridge);
    }

    setText("#contacto h2", L.contact.h2);
    setText('#contacto .contact-item:nth-of-type(1) .contact-label', L.contact.email);
    setText('#contacto .contact-item:nth-of-type(2) .contact-label', L.contact.phone);
    setText('#contacto .contact-item:nth-of-type(3) .contact-label', L.contact.linkedin);
    setText('#contacto .insta-sub', L.contact.ig);
    setText('#contacto .insta-follow', L.contact.follow);

    document.querySelectorAll('.lang-btn').forEach((btn) =>
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang))
    );

    try { localStorage.setItem('lang', lang); } catch {}
  }

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('#menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('#menu a').forEach((a) =>
      a.addEventListener('click', () => {
        if (menu.classList.contains('open')) {
          menu.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        }
      })
    );
  }

  const header = document.querySelector('.site-header');
  const onScroll = () =>
    header && header.setAttribute('data-scrolled', String(window.scrollY > 6));
  window.addEventListener('scroll', onScroll);
  onScroll();

  const yearEl = document.querySelector('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  document.querySelectorAll('.lang-btn').forEach((btn) =>
    btn.addEventListener('click', () => applyLang(btn.dataset.lang))
  );

  const initial =
    (typeof localStorage !== 'undefined' && localStorage.getItem('lang')) ||
    (navigator.language || navigator.userLanguage || 'es').toLowerCase().startsWith('es')
      ? 'es'
      : 'en';
  applyLang(initial);
})();
// :contentReference[oaicite:3]{index=3}
