var iPhone6  = new Phone('Apple', 'Iphone 6', 'biały'),
    galaxyS6  = new Phone('Samsung', 'Galaxy s6', 'czarny'),
    nexus6  = new Phone('Motorola', 'Nexus 6', 'srebrny'),
    p8Lite  = new Phone('Huawei', 'P8 Lite', 'złoty'),
    htc820  = new Phone('HTC', '820', 'niebieski');
function Phone(brand, model, color){
	this.brand = brand,
	this.model = model,
	this.color = color
}
Phone.prototype.showPhoneInfo = function() {
	var info = '<h3>Marka telefonu to ' + this.brand + ', jego model to ' + this.model + ', a jego kolor to ' + this.color + '.</h3>';
	$('body').append(info);
}
