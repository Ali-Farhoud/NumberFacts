let output = document.getElementById('output')
let outputText = document.getElementById('output-text')
let numInput = document.getElementById('num-input')

// function getFactAjax(e){
//     let number =numInput.value;
//     let xhr=new XMLHttpRequest();
//     xhr.open('GET','http://numbersapi.com/'+number);

//     xhr.onload=function(){
//         if(this.status===200 && number!=''){
//             output.style.display='block';
//             outputText.innerText=this.responseText;
//         }
//     }
//     xhr.send();
// }

//numInput.addEventListener('input',getFactAjax);

numInput.addEventListener('input', getFactFetch)

function getFactFetch() {
	let number = numInput.value

	fetch('http://numbersapi.com/' + number)
		.then((res) => res.text())
		.then((data) => {
			if (number != '') {
				output.style.display = 'block'
				outputText.innerText = data
			} else {
				output.style.display = 'none'
			}
		})
		.catch((err) => console.log(err))
}
