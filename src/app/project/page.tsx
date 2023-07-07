import Image from "next/image";

export default function Project() {
    return (
        <>
            <div className="flex justify-center flex-wrap lg:flex-nowrap xl:flex-nowrap 2xl:flex-nowrap">
                <div className="flex items-center mt-[60px] lg:h-[650px] xl:h-[650px] 2xl:h-[650px]">
                    <Image src="/images/project_iroun_farm.png" width={1000} height={740} alt="project_iroun_farm" className="w-[850px]" />
                </div>
                <div className="min-w-[480px] max-w-[480px]  mx-[5%] mt-[50px] lg:mt-[140px] xl:mt-[140px] 2xl:mt-[140px]">
                    <p className="font-bold text-[54px] text-right mb-[10px]">이로운농장</p>
                    <p className="text-right mb-[20px]">재배사 기후 데이터 분석, 모니터링, 경보 시스템</p>
                    <p className="text-right">
                        이로운 농장은 녹각영지버섯을 인공재배 하는데 있어 센서를 통해 기후 데이터 수집, 실시간 기후 상태를 모니터링하고
                        임계값에 따라 알림을 보내주는 시스템이다.
                    </p>
                    <p className="text-right mt-[30px]">#Next.js #NestJs #MongoDB #tailwind #Figma #Git #AWS</p>
                    <div className="relative">
                        <Image
                            src="/images/circle.png"
                            width={233}
                            height={70}
                            alt="circle"
                            className="mt-[40px] lg:mt-[150px] xl:mt-[150px] 2xl:mt-[150px] ml-[250px] absolute"
                        />
                        <p className="mt-[60px] lg:mt-[170px] xl:mt-[170px] 2xl:mt-[170px] ml-[330px] text-[20px] absolute">view</p>
                    </div>
                </div>
            </div>
        </>
    );
}
