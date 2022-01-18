window.addEventListener('DOMContentLoaded', () =>{
	let products = document.querySelectorAll('.product'),
		buttons  = document.querySelectorAll('button'),
		openBtn = document.querySelector('.open');

	function createCard(){
		let cart     = document.createElement('div'),
			file     = document.createElement('div'),
			heading  = document.createElement('h2')
			closeBtn = document.createElement('button');

		cart.classList.add('cart')
		file.classList.add('cart-field')
		closeBtn.classList.add('close')

		heading.textContent  = 'В нашей корзинее'
		closeBtn.textContent = 'Закрыть'

		document.body.appendChild(cart)
		cart.appendChild(heading)
		cart.appendChild(file)
		cart.appendChild(closeBtn)
	}
	createCard()

	let cart = document.querySelector('.cart'),
		closeB = document.querySelector('.close'),
		file = document.querySelector('.cart-field')

	openBtn.addEventListener('click', () =>{
		cart.style.display = 'block'
	})
	closeB.addEventListener('click', () =>{
		cart.style.display = 'none'
	})

	buttons.forEach((item, i) => {
		item.addEventListener('click', () =>{
			let cloneItem = products[i].cloneNode(true),
				btn = cloneItem.querySelector('button');

			btn.remove()
			file.appendChild(cloneItem)
			products[i].remove()

		})

	
	})

})

