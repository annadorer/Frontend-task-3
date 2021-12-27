import { useState } from "react";
import { TourItems, Tour } from "./tours__item";

const allTours: TourItems[] = [
	{
		class: "tours-item",
		title: "Название",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.",
		price: "10 000"
	},
	{
		class: "tours-item",
		title: "Название",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.",
		price: "10 000"
	},
	{
		class: "tours-item--hidden",
		title: "Название",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.",
		price: "10 000"
	},
	{
		class: "tours-item--hidden",
		title: "Название",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.",
		price: "10 000"
	},
	{
		class: "tours-item--hidden",
		title: "Название",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.",
		price: "10 000"
	},
	{
		class: "tours-item--hidden",
		title: "Название",
		description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, perspiciatis.",
		price: "10 000"
	},

]

export function Tours() {
	var tours
	const [visible, setVisible] = useState(true)
	const [buttonName, setButtonName] = useState("Больше")
	const Clicktours = () => {
		tours = document.getElementsByClassName("tours-item--hidden");
		if (visible) {
			for (let i = 0; i < tours.length; i++) {
				tours[i].className = "tours-item--hidden visible";
				setButtonName("Меньше")
				setVisible(false)
			}
		} else {
			for (let i = 0; i < tours.length; i++) {
				tours[i].className = "tours-item--hidden";
				setButtonName("Больше")
				setVisible(true)
			}
		}
	}
	return (
		<section className="tours" id="tours">
			<h2 className="tours__title">Туры</h2>
			<div className="tours__list">
				<div className="tours__container">
					{
						allTours.map((item: TourItems, index: number) =>
							<Tour item={item} key={`tours_${index}`} />
						)
					}
					<button className="tours__showmore" onClick={Clicktours}>{buttonName} туров</button>
				</div>
			</div>
		</section>

	)
}