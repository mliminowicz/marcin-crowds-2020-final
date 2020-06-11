window.addEventListener('DOMContentLoaded', ()=>{
	document.querySelectorAll('article').forEach((article)=>{
		

		article.addEventListener('mouseenter', ()=>{
			article.classList.toggle('hovered');
		});
		article.addEventListener('mouseleave', ()=>{
			article.classList.toggle('hovered');
		});


	});


	document.querySelectorAll('.image-container').forEach((imageContainer)=>{
		imageContainer.addEventListener('click', ()=>{
			imageContainer.classList.toggle('text-visible');
		});
		const image = imageContainer.querySelector('img');
		image.addEventListener('mouseenter', ()=>{
			image.classList.toggle('hovered');
			let newSrc = image.src.replace('NG', 'G');
			image.src = newSrc;
		});
		image.addEventListener('mouseleave', ()=>{
			image.classList.toggle('hovered');
			let newSrc = image.src.replace('G', 'NG');
			image.src = newSrc;
		});		
	});
});

