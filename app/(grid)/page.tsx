import { getGamesByIds, searchGames } from "@/app/api/api";
import Hero from "../components/Hero";
import GamesSlider from "../components/GamesSlider";
import connect from "../actions/connet";

export default async function Home() {
  await connect();
  const data = await searchGames("", 2, [], 9);
  const ps5 = await searchGames(
    "",
    1,
    [
      { filterName: "platforms", option: "187" },
      {
        filterName: "ordering",
        option: "-metacritic",
      },
    ],
    10
  );
  const pc = await searchGames(
    "",
    1,
    [{ filterName: "platforms", option: "4" }],
    10
  );
  const { results } = data.data;
  const customGames = await getGamesByIds([
    "799265",
    "58550",
    "2462",
    "494384",
    "452642",
    "452634",
  ]);

  return (
    <section className="">
      <Hero />
      <GamesSlider title="Top Games for PS5" games={ps5.data.results} />

      <GamesSlider title="Top Games" games={results} />
      <GamesSlider
        big
        slidesPerView={2}
        title="PLAYSTATION EXCLUSIVES"
        games={customGames.map((game) => game.data)}
      />
      <GamesSlider title="Top PC Games" games={pc.data.results} />
    </section>
  );
}
