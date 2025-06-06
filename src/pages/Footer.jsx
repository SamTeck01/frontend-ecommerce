import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";

// eslint-disable-next-line react/prop-types
function FooterColumn({ title, children, className }) {
  return (
    <div className="flex flex-col gap-2">
      <h4 className="font-semibold text-lg text-white whitespace-nowrap">{title}</h4>
      <div className={className}>{children}</div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="px-4 py-12">
      <div className="container mx-auto px-4 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
          <Link to="/" className="mb-6 md:mb-0 text-2xl font-extrabold text-white tracking-wide">
            Bee Energy
          </Link>
          <div className="flex flex-wrap gap-10 md:flex-1 md:justify-between">
            {FOOTER_LINKS.map((col, colIndex) => (
              <FooterColumn
                key={colIndex}
                title={col.title}
                className="flex flex-col gap-2 text-ash"
              >
                <ul>
                  {col.links.map((link, linkIndex) => (
                    <li key={`${col.title}-${linkIndex}`}>
                      <Link to="/" className="hover:text-white transition-colors">
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <FooterColumn
              title={FOOTER_CONTACT_INFO.title}
              className="flex flex-col gap-2"
            >
              {FOOTER_CONTACT_INFO.links.map((link, index) => (
                <div key={index}>
                  <p className="text-ash font-semibold">{link.label}:</p>
                  <p className="text-ash">{link.value}</p>
                </div>
              ))}
            </FooterColumn>
            <FooterColumn title={SOCIALS.title} className="flex gap-4 mt-4 md:mt-0">
              <ul className="flex gap-4">
                {SOCIALS.links.map((link, index) => (
                  <li key={index}>
                    <Link to="/" aria-label="Social Link">
                      <img src={link} alt="social icon" height={28} width={28} className="hover:scale-110 transition-transform" />
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>
        <div className="border-t border-ash"></div>
        <p className="text-center text-ash text-sm">2025 Bee Energy | All rights reserved</p>
      </div>
    </footer>
  );
}
