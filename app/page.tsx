import Button from "@/components/button";
import Heading from "@/components/heading";
import Typography from "@/components/typography";

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
      <Typography size={14}>Текст 14</Typography>
      <Typography size={16}>Текст 16</Typography>
      <Typography size={18}>Текст 18</Typography>
    </main>
  );
};

export default Home;
