import moment from 'moment';

export function changeDateFormat(date, inputFormat, outputFormat) {
	moment.locale('fr');
	const dateWithInputFormat = moment(date, inputFormat);
	return dateWithInputFormat.format(outputFormat);
}