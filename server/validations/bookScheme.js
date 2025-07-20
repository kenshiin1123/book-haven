import z from "zod";

const currentYear = new Date().getUTCFullYear();
const maxDate = currentYear + 1;

const Title = z.string().min(1).max(200);
const Author = z.string().min(1).max(100);
const Description = z.string().min(10).max(2000);
const Price = z.number().positive().max(10000);
const Discount = z.number().min(0).max(100).default(0);
const Year = z.number().int().min(1450).max(maxDate);
const Image = z.string();

const bookSchema = {
  title: Title,
  author: Author,
  description: Description,
  price: Price,
  discount: Discount,
  year: Year,
  image: Image,
};

export default bookSchema;
