
import { EpisodeNumberFormat } from "./utils/EpisodeNumberFormat";

export type PodcastEpisode = {
    title: string;
    episodeNumber: EpisodeNumberFormat;
    ytURL: string;
    description: string;
};

/*
const episode: PodcastEpisode = {
    title: "UNA NOVA DEMOCRÀCIA A LLÍRIA? | Casa Nostra 1x18",
    episodeNumber: "1x18",
    ytURL: "https://youtu.be/djtjpKQ2BSY",
    description: "🏠 Casa Nostra vos porta avui un capítol que no pot ser més filosòfic... 🤔 Ni més polític... 🗳️ Almenys no és (molt) revolucionari. ✊🏻✊🏻\n\n👩🏻‍💼 En companyia d'una convidada de luxe analitzarem un dels temes que vàrem comentar a l'últim capítol: És possible un nou tipus de democràcia a nivell municipal? Tenim alternatives? Pot Llíria ser una democràcia diferent?\n\n🌐 Tots aquestos temes els tractarem hui a Casa Nostra 1x18: Una nova democràcia a Llíria?\n\n🔗 https://linktr.ee/CasaNostraLliria"
};
*/