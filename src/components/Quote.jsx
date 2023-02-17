import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { TwitterShareButton } from 'react-share';
import { getQuote } from "../features/quoteSlice";
import Axios from 'axios'

const Quote = () => {
	const url = "https://type.fit/api/quotes"
	const dispatch = useDispatch();
	const [quote, setQuote] = useState()
	const [author, setAuthor] = useState()
	const quoteValue = useSelector(state => state.quotes.value)
	useEffect(() => {
		Axios.get(url).then((res) => {
			let random = Math.floor(Math.random() * res.data.length)
			setQuote(res.data[random].text)
			setAuthor(res.data[random].author)
		})
	}, [])
	const handleRandomQuotes = () => {
		Axios.get(url).then((res) => {
			let random = Math.floor(Math.random() * res.data.length)
			setQuote(res.data[random].text)
			setAuthor(res.data[random].author)
		})
	}
	return (
		<div className="quote-container">
			<div className="quote-box" id="quote-box">
				<span className="quote-box-icon">
					<i className="bi bi-quote"></i>
				</span>
				<section className="quote-box-text">
					<p id="text">{quote}</p>
					<cite className="quote-box-author">
						<p className="quote-box-author-hyphen">-</p>
						<p className="quote-box-author-name" id="author">{author}</p>
					</cite>
				</section>
				<div className="quote-box-buttons">
					<section className="social-section">
						<OverlayTrigger
							key={1}
							placement="top"
							overlay={
								<Tooltip id={`tooltip`}>
									Share Quote On <strong>Twitter</strong>.
								</Tooltip>
							}
						>
							<Button variant="dark" style={{ margin: "2px" }} >
								<a href="https://twitter.com/intent/tweet" id="tweet-quote">
									<i className="fa-brands fa-twitter"></i>
								</a>
							</Button>
						</OverlayTrigger>
						<OverlayTrigger
							key={2}
							placement="top"
							overlay={
								<Tooltip id={`tooltip`}>
									Share Quote On <strong>Tumblr</strong>.
								</Tooltip>
							}
						>
							<Button variant="light" style={{ margin: "2px" }}>
								<a href="#">
									<i className="fa-brands fa-tumblr"></i>
								</a>
							</Button>
						</OverlayTrigger>
					</section>
					<OverlayTrigger
						key={3}
						placement="top"
						overlay={
							<Tooltip id={`tooltip`}>
								Get A New <strong>Quote</strong>.
							</Tooltip>
						}
					>
						<Button variant="outline-success" id="new-quote" onClick={handleRandomQuotes}>New Quote</Button>
					</OverlayTrigger>
					
				</div>
			</div>
		</div>
	)
}
export default Quote;