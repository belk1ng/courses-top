import Button from "@/components/button";
import Heading from "@/components/heading";

export const metadata = {
  title: "Тайтл первой страницы",
  description: "Описание первой страницы",
};

const Home = () => {
  return (
    <main>
      <Heading as="h1">Hello world :)</Heading>
      <Button>Кнопка 1</Button>
      <Button variant="outlined">Кнопка 2</Button>
    </main>
  );
};

export default Home;
