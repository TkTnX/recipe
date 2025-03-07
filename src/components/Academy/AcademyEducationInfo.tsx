import Image from "next/image";

const AcademyEducationInfo = () => {
  return (
    <div className="flex items-center flex-col md:flex-row justify-center gap-6 mt-10">
      {/* VIDEO */}
      <div className="w-full sm:w-[600px] h-[300px] rounded-xl overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/wbQSA1ozH_E?autoplay=1&amp;showinfo=0"
          width="100%"
          height="100%"
          allow="autoplay"
          title="Промо"
        ></iframe>
      </div>
      <div className="md:max-w-[380px]">
        <h5 className="font-semibold text-2xl">С НАМИ ВЫ УЗНАЕТЕ</h5>
        <ul className="flex flex-col gap-3 mt-4 ">
          <li className="flex items-center gap-2">
            <Image
              src={"/images/academy/1.svg"}
              alt={"1"}
              width={60}
              height={60}
            />
            <p>Как правильно выбирать и легко сочетать продукты</p>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src={"/images/academy/2.svg"}
              alt={"2"}
              width={60}
              height={60}
            />
            <p>Секреты шеф-поваров, как вкусно готовить</p>
          </li>
          <li className="flex items-center gap-2">
            <Image
              src={"/images/academy/3.svg"}
              alt={"3"}
              width={60}
              height={60}
            />
            <p>Как оформлять блюда дома как в ресторане</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AcademyEducationInfo;
