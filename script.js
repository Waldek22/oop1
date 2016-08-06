var iPhone6  = new Phone('Apple', 'Iphone 6', 'biały');
var galaxyS6  = new Phone('Samsung', 'Galaxy s6', 'czarny');
var nexus6  = new Phone('Motorola', 'Nexus 6', 'srebrny');
var p8Lite  = new Phone('Huawei', 'P8 Lite', 'złoty');
var htc820  = new Phone('HTC', '820', 'niebieski');
function Phone(brand, model, color){
	this.brand = brand,
	this.model = model,
	this.color = color
}
Phone.prototype.showPhoneInfo = function() {
	console.log('Marka telefonu to ' + this.brand + ', jego model to ' + this.model + ', a jego kolor to ' + this.color + '.');
	var info = '<h3>Marka telefonu to ' + this.brand + ', jego model to ' + this.model + ', a jego kolor to ' + this.color + '.</h3>';
	$('body').append(info);
}