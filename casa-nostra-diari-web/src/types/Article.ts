import { DateFormat } from "./utils/DateFormat";
import { UIDFormat } from "./utils/UIDFormat";

export interface Article {
  title: string;
  caption: string;
  date: DateFormat;
  author: string;
  articleUID: UIDFormat;
  type: string;
  image: string;
  mainText: string;
  src: string;
}

/* const article: Article = {
  title: "Presentació",
  caption: "Descripció",
  date: "30-01-2024",
  author: "Sibalino",
  articleUID: "aaaa-bbbb-cccc-dddd",
  type: "article",
  image: "",
  mainText: `Benvinguts a Casa Nostra! \n Casa Nostra és un pòdcast fet per gent de Llíria per queixar-se de Llíria, presentat per dos edetans de tota la vida que tenen ganes de contribuir a fer de la nostra llar el lloc que pot aplegar a ser. \n Un capítol nou cada dues setmanes. \n Esperem que disfruteu moltíssim de Casa Nostra, una abraçada molt forta... i 'sed felices'`,
  src: "https://linktr.ee/CasaNostraLliria"
};
*/