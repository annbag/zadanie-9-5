

var withButtonClass = document.getElementsByClassName('button');

console.log(withButtonClass);

function showButtonText(withButtonClass) {

	for (var i = 0; i < withButtonClass.length; i++) {
		
		alert(withButtonClass[i].innerText);
		
	}
}

showButtonText(withButtonClass);
 
 //[i]  --> do zmiennej odwoływać się w nawiasach []