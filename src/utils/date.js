import moment from "moment";
import "moment/locale/fr";

moment.locale("fr");

export function changeDateFormat(date, inputFormat, outputFormat) {
	const dateWithInputFormat = moment(date, inputFormat);
	return dateWithInputFormat.format(outputFormat);
}