/*...........Home Page Script...........*/
var slideIndex = 0;
showSlides();

function showSlides() {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	slideIndex++;
	if (slideIndex > slides.length) {slideIndex = 1}    
	slides[slideIndex-1].style.display = "block";  
	setTimeout(showSlides, 2000); // Change image every 2 seconds
}

/*............AddBook Page Sript...........*/
function validateBookId(){  
	var id=document.getElementById("bookId").value.trim();
				
	var pattern = /^10/;
	var result = pattern.test(id);
  
	if (id==null || id==""){  
		alert("Book Id can't be blank");  
		return false;  
	} else if(!result){
		alert("Book Id must start with 10");  
		return false; 
	}
}  
		
function validateAuthorName(){  
	var name=document.getElementById("aname").value.trim();

	if (name==null || name==""){  
		alert("Author Name can't be blank");  
		return false;  
	}
}  
			
function validateBookName(){  
	var name=document.getElementById("bname").value.trim();

	if (name==null || name==""){  
		alert("Book Name can't be blank");  
		return false;  
	}
}  
			
function validateBookPrice(){  
	var price=document.getElementById("price").value;
  
	if (isNaN(price)){  
		alert("Entered value is not a number");  
		return false;  
	} else if(price < 1 || price > 1000){  
		alert("Price should be between 1 and 1000");  
		return false;  
	}
}  
			
function clearData(){
	console.log("clearing data");
	document.getElementById("bookId").value = null;
	document.getElementById("bname").value = null;
	document.getElementById("aname").value = null;
	document.getElementById("bookDesc").value = null;
	document.getElementById("price").value = null;
	document.getElementById("genres").value = "";		
}
						
function insRow() {
	console.log('inserting row');
	var x = document.getElementById('POITable');
	var new_row = x.rows[1].cloneNode(true);
	var len = x.rows.length;
	new_row.cells[0].innerHTML = (len-1);
	new_row.cells[1].innerHTML = document.getElementById("bookId").value.trim();
	new_row.cells[2].innerHTML = document.getElementById("bname").value.trim();
	new_row.cells[3].innerHTML = document.getElementById("price").value;
	new_row.style.display = "table-row";
	x.appendChild(new_row);
}
						
function deleteRow(row) {
	var i = row.parentNode.parentNode.rowIndex;
	document.getElementById('POITable').deleteRow(i);
	console.log(i + ' row deleted');
}

/*............Login Page Script.............*/
function validateform(){  
	var name=document.forms["loginForm"]["uname"].value.trim();  
	var password=document.forms["loginForm"]["password"].value;
  
	if (name==null || name==""){  
		alert("Name can't be blank");  
		return false;  
	}else if(password.length<6){  
		alert("Password must be at least 6 characters long.");  
		return false;  
	}
}  