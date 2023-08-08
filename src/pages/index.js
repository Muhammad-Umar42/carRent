import Banner from "@/component/home/banner";
import CarType from "@/component/home/cartype";
import Howworks from "@/component/home/howworks";
import Pickup from "@/component/home/pickup&return";
import PopularCar from "@/component/home/popularCar";

export default function Home() {
  return (
    <>
      <Banner />
      <Pickup />
      <Howworks />
      <PopularCar />
      <CarType/>
    </>
  );
}
