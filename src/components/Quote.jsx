import { useEffect } from "react";

const Quote = () => {
	let url = "https://type.fit/api/quotes"
	let quotes = fetch(url)
			.then(function (response) {
				return response.json();
			})
			.then(function (data) {
				return data;
			});
			console.log(quotes)
	return (
		<div className="quote-container">
			<div className="quote-box">
				<span className="quote-box-icon">
					<i className="bi bi-quote"></i>
				</span>
				<section className="quote-box-text">
					<p>
						Nodality 3D-printed hacker A.I. 
						digital warehouse spook office 
						order-flow augmented reality 
						ablative render-farm computer. 
						Boat market lights crypto-vehicle 
						cardboard sensory sprawl chrome 
						singularity advert urban carbon. Stimulate cyber-lights 
						network carbon man engine uplink math-nano-claymore mine 
						free-market pre-soul-delay bicycle. Nodal point decay bicycle 
						girl military-grade Tokyo post. 
					</p>
					<cite className="quote-box-author">
					<p className="quote-box-author-hyphen">-</p>
					<p className="quote-box-author-name">Author</p>
					</cite>
				</section>
			</div>
		</div>
	)
}
export default Quote;