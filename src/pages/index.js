import Banner from "@/component/home/banner";
import CarType from "@/component/home/cartype";
import Howworks from "@/component/home/howworks";
import Pickup from "@/component/home/pickup&return";
import PopularCar from "@/component/home/popularCar";
import RecommendedCar from "@/component/home/recommendedCar";
import Thenumber from "@/component/home/thenumber";

export default function Home() {
  return (
    <>
      <Banner />
      <Pickup />
      <Howworks />
      <PopularCar />
      <CarType />
      <Thenumber />
      <RecommendedCar/>
    </>
  );
}
