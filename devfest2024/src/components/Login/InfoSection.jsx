import ui from "../../assets/ui.svg";
import cisco from "../../assets/cisco.svg";
import huawei from "../../assets/huawei.svg";
import hawlette from "../../assets/hawlette.svg";
import palo from "../../assets/palo.svg";

const InfoSection = () => {
  return (
    <div className="w-full text-white p-4 md:p-8 rounded-[20px]">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">
        Effortlessly optimize your network performance and control bandwidth
        with ease
      </h2>
      <p className="text-base md:text-lg font-light mb-6">
        Step in and unlock your personalized experience!
      </p>
      <div className="flex flex-col space-y-4">
        <img src={ui} alt="Dashboard" className="w-full rounded-md mb-4" />
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <img src={cisco} alt="Cisco" className="h-4 md:h-6" />
          <img src={palo} alt="Palo Alto" className="h-3 md:h-5" />
          <img src={huawei} alt="Huawei" className="h-4 md:h-6" />
          <img src={hawlette} alt="Hawlette" className="h-4 md:h-6" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
