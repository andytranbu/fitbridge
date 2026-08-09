import PageShell from "../components/layout/PageShell";
import Reveal from "../components/ui/Reveal";
import { useI18n } from "../i18n/LanguageContext";

/* Terms of use + privacy policy on one real page (linked from registration). */
export default function TermsPage() {
  const { t } = useI18n();

  const sections = [
    { id: "terms", title: t("legal.termsTitle"), items: ["t1", "t2", "t3", "t4"] },
    { id: "privacy", title: t("legal.privacyTitle"), items: ["p1", "p2", "p3", "p4"] },
  ];

  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 pb-20">
        <Reveal>
          <h1 className="font-display text-3xl font-extrabold sm:text-4xl">{t("legal.title")}</h1>
          <p className="mt-2 text-ink-2">{t("legal.subtitle")}</p>
        </Reveal>
        {sections.map((s) => (
          <Reveal key={s.id}>
            <section id={s.id} className="mt-10 scroll-mt-28">
              <h2 className="font-display text-2xl font-extrabold">{s.title}</h2>
              <ul className="mt-4 space-y-3">
                {s.items.map((k) => (
                  <li key={k} className="rounded-2xl border border-line bg-surface p-4 leading-relaxed text-ink-2">
                    {t(`legal.${k}`)}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </PageShell>
  );
}
