import { useLayoutEffect, type RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function useEntryAnimations(root: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const element = root.current;
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const isDownloadPage = element.classList.contains('downloadpage');
    const context = gsap.context(() => {
      if (isDownloadPage) {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .from('.downloadpage .top', { y: -24, autoAlpha: 0, duration: 0.6 })
          .from('.dlhead .eyebrow', { y: 18, autoAlpha: 0, duration: 0.4 }, '-=.2')
          .from('.dlhead h1', { y: 35, autoAlpha: 0, duration: 0.7 }, '-=.15')
          .from('.dlhead p', { y: 18, autoAlpha: 0, duration: 0.45 }, '-=.35')
          .from('.warning', { y: 20, autoAlpha: 0, duration: 0.5 }, '-=.2')
          .from('.downloadcard', { y: 28, scale: 0.98, autoAlpha: 0, duration: 0.65 }, '-=.2')
          .from('.repo', { autoAlpha: 0, duration: 0.35 }, '-=.15');
      } else {
        gsap.timeline({ defaults: { ease: 'power3.out' } })
          .from('.top', { y: -24, autoAlpha: 0, duration: 0.65 })
          .from('.hero .eyebrow', { y: 18, autoAlpha: 0, duration: 0.45 }, '-=.2')
          .from('.hero h1', { y: 38, autoAlpha: 0, duration: 0.8 }, '-=.18')
          .from('.hero p', { y: 22, autoAlpha: 0, duration: 0.6 }, '-=.48')
          .from('.hero .actions .button', { y: 20, autoAlpha: 0, stagger: 0.12, duration: 0.48 }, '-=.35')
          .from('.hero>div:first-child>small', { autoAlpha: 0, duration: 0.35 }, '-=.2')
          .from('.phone', { x: 90, y: 24, rotate: 9, scale: 0.88, autoAlpha: 0, duration: 1.05, ease: 'back.out(1.25)' }, '-=.75')
          .from('.float-card', { x: 35, y: 18, scale: 0.88, autoAlpha: 0, duration: 0.55 }, '-=.35');

        gsap.to('.orb', { y: -28, x: 18, scale: 1.08, repeat: -1, yoyo: true, duration: 4, ease: 'sine.inOut' });
        gsap.to('.phone', { y: -10, rotate: 1, repeat: -1, yoyo: true, duration: 3.5, ease: 'sine.inOut', delay: 1.3 });

        const revealHeadings = (selector: string) => gsap.from(`${selector} .eyebrow, ${selector} h2`, {
          y: 30, autoAlpha: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out',
          scrollTrigger: { trigger: selector, start: 'top 86%', once: true },
        });
        ['.steps', '.section#features', '.org', '.fone', '.about', '.timeline', '.faq', '.cta'].forEach(revealHeadings);

        gsap.utils.toArray<HTMLElement>('.step').forEach((item, index) => gsap.from(item, {
          y: 42, rotateX: 8, autoAlpha: 0, duration: 0.65, delay: index * 0.07, ease: 'power2.out',
          scrollTrigger: { trigger: item, start: 'top 91%', once: true },
        }));
        gsap.utils.toArray<HTMLElement>('.feature').forEach((item, index) => gsap.from(item, {
          y: 50, scale: 0.94, autoAlpha: 0, duration: 0.62, delay: (index % 4) * 0.08, ease: 'back.out(1.15)',
          scrollTrigger: { trigger: item, start: 'top 91%', once: true },
        }));
        gsap.utils.toArray<HTMLElement>('.timeline-item').forEach((item, index) => gsap.from(item, {
          x: 30, y: 14, autoAlpha: 0, duration: 0.58, delay: index * 0.11, ease: 'power2.out',
          scrollTrigger: { trigger: item, start: 'top 90%', once: true },
        }));
        gsap.utils.toArray<HTMLElement>('.orgbox, .trophy, .fonebadge, .faq details').forEach((item, index) => gsap.from(item, {
          y: 28, scale: 0.97, autoAlpha: 0, duration: 0.58, delay: item.matches('details') ? (index % 2) * 0.08 : 0,
          ease: 'power2.out', scrollTrigger: { trigger: item, start: 'top 91%', once: true },
        }));
      }
    }, element);
    return () => context.revert();
  }, [root]);
}
