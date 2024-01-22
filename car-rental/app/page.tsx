import { CustomFilter, Hero, Searchbar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden" >
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Sprawdz nasza oferte...</h1>
          <p>Sprawdz samochody ktore moga ci sie spodobac</p>
        </div>
        <div className="home__filters">
          <Searchbar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year"/>
          </div>
        </div>
      </div>
    </main>
  );
}
