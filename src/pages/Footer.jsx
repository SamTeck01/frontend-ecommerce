import { Link } from "react-router-dom";
import FOOTER_LINKS from '../assets/footer_links';
import FOOTER_CONTACT_INFO from '../assets/footer_contact';
import SOCIALS from '../assets/socials';

// eslint-disable-next-line react/prop-types
function FooterColumn ({title, children, className}){
  return(
    <div className="flex flex-col gap-2">
      <h4 className="bold-18 whitespace-nowrap text-white" >{title} </h4>
      <div className={className} >{children}</div>
    </div>
  )
}

export default function Footer() {
  return (
    <div>
      <footer className="flexCenter pb-20 pt-20" >
        <div className="max_padd_container flex w-full flex-col gap-14" >
          <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row " >
            <Link to='/' className="mb-10 bold-20 text-white">Shoppee</Link>

            <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1" >
              {FOOTER_LINKS.map((col, colIndex) => (
                <FooterColumn
                  key={colIndex}
                  title={col.title}
                  className="flex flex-col gap-4 regular-14 text-ash"
                >
                  <ul>
                    {col.links.map((link, linkIndex) => (
                      <li key={`${col.title}-${linkIndex}`}>
                        <Link to="/" className="">
                          {link}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
              <div className="flex flex-col gap-5" >
                <FooterColumn
                  title={FOOTER_CONTACT_INFO.title}
                  className="flex gap-4 md:flex-col lg:flex-row"
                >
                  {FOOTER_CONTACT_INFO.links.map((link, index) => (
                    <div key={index}>
                      <p className="mb-2 text-white">{link.label}:</p>
                      <p className="medium-14 text-ash">{link.value}</p>
                    </div>
                  ))}
                </FooterColumn>

              </div>
              <div className="flex" >
                <FooterColumn title={SOCIALS.title} className="flex gap-4">
                  <ul>
                    {SOCIALS.links.map((link, index) => (
                      <li key={index}>
                        <Link to="/">
                          <img src={link} alt="social icon" height={22} width={22} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>

              </div>
            </div>
          </div>
          <div className="border bg-ash"></div>
          <p className="text-center regular-14 text-ash">2024 Shoppee | All right reserved</p>
        </div>
      </footer>
    </div>
  )
}