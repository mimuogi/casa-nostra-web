import { DateFormat } from "./utils/DateFormat";
import { UUIDFormat } from "./utils/UUIDFormat";

export interface Article {
	title: string;
	caption: string;
	date: DateFormat;
	author: string;
	articleUID: UUIDFormat;
	type: string;
	image: string;
	mainText: string;
	src: string;
}
