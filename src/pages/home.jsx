import { useEffect, useState } from "react";
import Card from "../components/Card";

const HomePage = () => {
	const [casinos] = useState([
		{
			id: 1,
			title: 'Grosvenor Casinos',
			image: 'grosvenor.png',
			rating: 5,
			bonus: 'Bet £10 Get £400',
			bgColor: '#03252B'
		},
		{
			id: 2,
			title: 'Happy Spins',
			image: 'happy-spins.png',
			rating: 5,
			bonus: 'Bet £10 Get £400',
			bgColor: '#43082F'
		},
		{
			id: 3,
			title: 'Hajper',
			image: 'hajper.png',
			rating: 3,
			bonus: 'Bet £10 Get £400',
			bgColor: '#123156',
		}
	])

	useEffect(() => {
    document.title = 'Best Casinos 2024';
		document.documentElement.lang = 'en';
  }, []);

	return (
		<>
			<div className="flex flex-col justify-center items-center w-full pt-[60px]">
				<h1 className="w-full max-w-[900px] 2xl:max-w-[1220px] block text-[#939393] text-2xl font-bold font-montserrat text-left mb-3">
					Best Casinos 2024
				</h1>

				<div className="w-full max-w-[900px] 2xl:max-w-[1220px] flex flex-col gap-y-5">
					{ casinos.map(casino => {
						return (
							<Card
								{...casino}
								key={casino.id} 
							/> 
						)
					}) }
				</div>
			</div>
		</>
	)
};

export default HomePage;