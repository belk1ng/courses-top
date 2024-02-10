import Heading from "@/components/heading";

export const metadata = {
  title: "Тайтл первой страницы",
  description: "Описание первой страницы",
};

const Home = () => {
  return (
    <main>
      <Heading as="h1">Hello world :)</Heading>
    </main>
  );
};

export default Home;
