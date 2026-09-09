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
    <footer className="pb-10 pt-6">
      <div className="section-shell">
        <div className="border-t border-white/15 pt-7 font-mono text-xs text-[#777870] md:flex md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-0">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors duration-300 hover:text-primary"
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
                className="transition-colors duration-300 hover:text-primary"
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
