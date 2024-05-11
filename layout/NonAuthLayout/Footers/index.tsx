import Image from "next/image";
import Container from "../Container";
import Link from "next/link";
import Typography from "../../../components/constants/Typorgraphy";
import classNames from "classnames";
import { navigation, socials } from "@/components/constants/arrays";
import logoGreen from "../../../public/assets/oxtra logo-8.png";

const headingClasses = classNames("text-brandGray-500 mb-4");

const Footer = () => {
  return (
    <footer className="pb-3">
      <Container>
        <div className="flex gap-y-8 lg:gap-y-0 md:gap-x-8 lg:gap-x-28 flex-col md:flex-row">
          <div className="w-full md:max-w-[300px] lg:max-w-[400px]">
            <Image
              src={logoGreen}
              alt="logo"
              height={120}
              width={150}
              className="mb-4 h-auto"
            />

            <div className="text-brandGray-100 text-sm font-gordita-regular leading-normal">
              We&apos;re a team with a vision to transform the transportation
              industry in Lagos and Nigeria. We&apos;re dedicated to making
              meaningful progress one step at a time.
            </div>
          </div>
          <div className="flex-1 grid grid-cols-2 lg:grid-cols-4 gap-y-6 lg:gap-y-0 lg:gap-x-10">
            <div>
              <div className={headingClasses}>
                <Typography
                  as="h6"
                  font="font-gordita-bold"
                  className="!text-sm"
                >
                  Company
                </Typography>
              </div>
              <ul>
                {navigation.company.map((item) => {
                  return (
                    <li key={item.name} className="mb-3 text-brandGray-100">
                      <Typography
                        as="p"
                        font="font-gordita-regular"
                        className="!text-sm"
                      >
                        <Link href={item.href}> {item.name}</Link>
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className={headingClasses}>
                <Typography
                  as="h6"
                  font="font-gordita-bold"
                  className="!text-sm"
                >
                  Products
                </Typography>
              </div>
              <ul>
                {navigation.products.map((item) => {
                  return (
                    <li key={item.name} className="mb-3 text-brandGray-100">
                      <Typography
                        as="p"
                        font="font-gordita-regular"
                        className="!text-sm"
                      >
                        <Link href={item.href}> {item.name}</Link>
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className={headingClasses}>
                <Typography
                  as="h6"
                  font="font-gordita-bold"
                  className="!text-sm"
                >
                  Business
                </Typography>
              </div>
              <ul>
                {navigation.business.map((item) => {
                  return (
                    <li key={item.name} className="mb-3 text-brandGray-100">
                      <Typography
                        as="p"
                        font="font-gordita-regular"
                        className="!text-sm"
                      >
                        <Link href={item.href}> {item.name}</Link>
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className={headingClasses}>
                <Typography
                  as="h6"
                  font="font-gordita-bold"
                  className="!text-sm"
                >
                  Contact us
                </Typography>
              </div>
              <ul>
                {navigation.contact.map((item) => {
                  return (
                    <li key={item.name} className="mb-3 text-brandGray-100">
                      <Typography
                        as="p"
                        font="font-gordita-regular"
                        className="!text-sm"
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </Typography>
                    </li>
                  );
                })}
              </ul>
              <ul className="flex gap-x-2">
                {socials.map((item) => {
                  return (
                    <li key={item.name} className="mb-3 text-brandGreen-300">
                      {item.icon}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
