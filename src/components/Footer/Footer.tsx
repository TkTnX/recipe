import { CONST_SOCIALS } from "@/constants";
import { Mail } from "lucide-react";
import Image from "next/image";
import ButtonLink from "../ui/buttons/buttonLink";

const Footer = () => {
  return (
    <footer className="max-w-[600px]  mx-auto px-3 mt-20 ">
      <p className="text-xs text-gray-500 lg:pl-24">
        Recipe.ru — сайт обо всем, что связано с едой. Здесь есть статьи о
        любимых блюдах, кулинарные новости, кухонные лайфхаки и инструкции от
        лучших шеф-поваров. Но главное — на Recipe.ru вы найдете тысячи
        пошаговых рецептов популярных и уникальных блюд любой кухни мира. В
        каждом рецепте подробно указаны ингредиенты, рассказан процесс
        приготовления любимой еды в домашних условиях, все рецепты
        сопровождаются пошаговыми фото. Есть быстрые и простые рецепты — и
        рецепты для настоящих экспертов. А кроме рецептов, есть сотни
        материалов, связанных с историей еды, правильным питанием, пищевыми
        привычками, домашним столом и детским питанием.
      </p>
      <div className="text-center w-full mt-4">
        <p>Подпишитесь на нас в социальных сетях:</p>
        <ul className="flex items-center gap-6 mt-3 justify-center flex-wrap">
          {CONST_SOCIALS.map((social, index) => (
            <li key={index}>
              <a href={social.link} className="hover:opacity-80 transition">
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={44}
                  height={44}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <ButtonLink
        href="mailto:WlBkG@example.com"
        className="flex items-center gap-2 justify-center sm:w-fit mx-auto mt-5"
      >
        <div className="flex items-center gap-2">
          <Mail strokeWidth={1} size={20} /> Написать нам
        </div>
      </ButtonLink>
      <Image
        src={"/images/icons/age.svg"}
        width={44}
        height={44}
        alt="16+"
        className="mx-auto mt-5"
      />
      <p className="text-xs text-gray-500 text-center mt-5">©2025, Recipe.ru</p>
      <p className="text-xs text-gray-500 text-center">
        Любое использование контента без письменного разрешения Recipe.ru
        запрещено.
      </p>
    </footer>
  );
};

export default Footer;
