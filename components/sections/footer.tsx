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

export function Footer({ name, navigation, contact }: FooterProps) {
  const socials = [
    { label: "GitHub", href: contact.githubHref },
    { label: "LinkedIn", href: contact.linkedinHref },
  ].filter((item) => item.href);

  return (
    <footer className="pt-10 pb-10">
      <div className="mb-10 h-px w-screen bg-border/90 shadow-[0_1px_0_rgba(255,255,255,0.45)] dark:shadow-[0_1px_0_rgba(255,255,255,0.08)]" />
      <div className="section-shell">
        <div className="px-2 text-sm text-muted-foreground md:flex md:items-center md:justify-between">
          <p>
            Copyright {new Date().getFullYear()}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-4 md:mt-0">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground"
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
                className="transition-colors hover:text-foreground"
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
