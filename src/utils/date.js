import moment from 'moment';

export function changeDateFormat(date, inputFormat, outputFormat) {
	const dateWithInputFormat = moment(date, inputFormat);
	dateWithInputFormat.locale('fr');
	return dateWithInputFormat.format(outputFormat);
}