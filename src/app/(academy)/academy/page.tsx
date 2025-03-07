import AcademyEducationInfo from "@/components/Academy/AcademyEducationInfo";
import AcademyHero from "@/components/Academy/AcademyHero";

const AcademyPage = () => {
  return (
    <div className="w-full">
      <AcademyHero />
      <div className="max-w-[1150px] flex flex-col w-full mx-auto h-fit">
        <AcademyEducationInfo />
        <h3 className="text-xl vsm:text-2xl sm:text-4xl md:max-w-[72%] mx-auto text-center mt-10">
          <b>Курсы и мастер-классы от шеф-поваров</b> — для новичков и опытных
          кулинаров, которые прокачивают навыки
        </h3>
      </div>
    </div>
  );
};

export default AcademyPage;
