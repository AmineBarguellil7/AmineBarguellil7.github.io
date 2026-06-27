type NavigationItem = {
  label: string;
  href: string;
};

type ContactData = {
  githubHref?: string;
  linkedinHref?: string;
};

type FooterProps = {
  name: string;
  navigation: readonly NavigationItem[];
  contact: ContactData;
};

export function Footer({ navigation, contact }: FooterProps) {
  const socials = [
    { label: "GitHub", href: contact.githubHref },
    { label: "LinkedIn", href: contact.linkedinHref },
  ].filter((item) => item.href);

  return (
    <footer className="pt-10 pb-10">
      <div className="mb-10 h-px w-screen bg-gradient-to-r from-transparent via-white/10 to-transparent shadow-[0_0_28px_rgba(99,102,241,0.22)]" />
      <div className="section-shell">
        <div className="px-2 text-sm font-light text-slate-400 md:flex md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-0">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]"
              >
                {item.label}
              </a>
            ))}
            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="transition-colors duration-300 hover:text-white hover:drop-shadow-[0_0_10px_rgba(6,182,212,0.75)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
