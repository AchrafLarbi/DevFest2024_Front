import ui from "../../assets/ui.svg";
import cisco from "../../assets/cisco.svg";
import huawei from "../../assets/huawei.svg";
import hawlette from "../../assets/hawlette.svg";
import palo from "../../assets/palo.svg";

const InfoSection = () => {
  return (
    <div className="w-full text-white p-8 m-10 rounded-[20px]">
      <h2 className="text-2xl font-semibold mb-6">
        Effortlessly optimize your network performance and control bandwidth
        with ease
      </h2>
      <p className="text-lg font-light mb-12">
        Step in and unlock your personalized experience!
      </p>

      <div className="flex flex-col space-y-4  ">
        <img src={ui} alt="Dashboard" className="rounded-md mb-6" />
        <div className="flex w-full p-8 items-center space-x-20">
          <img src={cisco} alt="Cisco" className="h-6" />
          <img src={palo} alt="Palo Alto" className="h-5" />
          <img src={huawei} alt="Huawei" className="h-6" />
          <img src={hawlette} alt="Hawlette" className="h-6" />
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
