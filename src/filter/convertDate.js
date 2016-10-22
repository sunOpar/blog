export default (value)=>{
	var arr = value.split('-');
	arr[2] = convertDay(arr[2])+' ';
	arr[1] = convertMonth(arr[1])+' ';
	var newArr = arr[1].concat(arr[2],arr[0]);
	return newArr;
} 
var convertDay = (value)=>{
	switch(value){
		case '01':
			return '1st';
		case'02':
			return '2nd';
		case 'o3':
			return '3rd';
		default:
			return value+'th';
	}
}
var convertMonth = (value)=>{
	switch(value){
		case '01':
			return 'January';
		case '02':
			return 'February';
		case '03':
			return 'March';
		case '04':
			return 'April';
		case '05':
			return 'May';
		case '06':
			return 'June';
		case '07':
			return 'July';
		case '08':
			return 'August';
		case '09':
			return 'September';
		case '10':
			return 'October';
		case '11':
			return 'Novermber';
		case '12':
			return 'December';
	}
}