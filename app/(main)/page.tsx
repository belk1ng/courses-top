import Button from "@/components/button";
import Heading from "@/components/heading";
import Input from "@/components/input";
import Rating from "@/components/rating";
import Tag from "@/components/tag";
import Textarea from "@/components/textarea";
import Typography from "@/components/typography";

export const metadata = {
  title: "Тайтл первой страницы",
  description: "Описание первой страницы",
};

const Home = () => {
  return (
    <section>
      <Heading as="h1">Hello world :)</Heading>
      <Button>Кнопка 1</Button>
      <Button variant="outlined">Кнопка 2</Button>
      <Typography size={14}>Текст 14</Typography>
      <Typography size={16}>Текст 16</Typography>
      <Typography size={18}>Текст 18</Typography>
      <section>
        <Tag>Тег</Tag>
        <Tag size="medium">Тег</Tag>
        <Tag size="medium" variant="link">
          Тег
        </Tag>
        <Tag color="success">Тег</Tag>
        <Tag color="success" size="medium">
          Тег
        </Tag>
        <Tag color="success" size="medium" variant="link">
          Тег
        </Tag>
        <Tag color="error">Тег</Tag>
        <Tag color="error" size="medium">
          Тег
        </Tag>
        <Tag color="error" size="medium" variant="link">
          Тег
        </Tag>
        <Tag color="primary">Тег</Tag>
        <Tag color="primary" size="medium">
          Тег
        </Tag>
        <Tag color="primary" size="medium" variant="link">
          Тег
        </Tag>
      </section>
      <Rating />
      <Input placeholder="Введите имя" />
      <Textarea placeholder="Введите отзыв" />
    </section>
  );
};

export default Home;
