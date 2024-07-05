import ButtonComponent from "./partials/Button";
import StarsWrapper from "./StarsWrapper";

const Card = (props) => {
	return (
		<div className="w-full flex flex-col md:gap-y-[25px] md:flex-row md:flex-wrap p-4 shadow-card-shadow rounded">
			<div
				className="w-full flex md:flex-1 md:mr-[37px] xl:mr-[25px] justify-center items-center h-[133px] md:h-[162px] xl:h-[103px] xl:max-w-[225px]"
				style={{
					backgroundColor: props.bgColor
				}}
			>
				<div
					className="flex justify-center items-center w-full max-w-[133px] xl:max-w-[103px] h-[133px] xl:h-[103px]"
					role="img"
					aria-label={`${props.title} logo`}
				>
					<img
						width="133"
						height="133"
						className="w-full"
						aria-hidden="true"
						src={`${process.env.PUBLIC_URL}/logos/${props.image}`}
						alt={`${props.title} logo`}
					/>
				</div>
			</div>

			<div className="w-full flex flex-1 flex-col md:w-1/2 xl:flex-row xl:justify-center 2xl:gap-x-[60px] 2xl:items-center xl:mr-[25px]">
				<div className="w-full flex-1 xl:max-w-[210px]">
					<h2 className="text-black text-xl md:text-left font-montserrat font-normal underline text-center mt-5 md:mt-0">
						{props.title}
					</h2>
					<div className="w-full flex justify-center md:justify-start my-5 xl:my-0 xl:mt-5">
						<span className="flex gap-x-[5px]" role="img" aria-label={`Rating: ${props.rating} out of 5 stars`}>
							<StarsWrapper rating={props.rating} />
						</span>
					</div>
				</div>
				
				{props.bonus && <div className="w-full mb-5 md:mb-0 flex-1 xl:max-w-[149px]" aria-label={`Bonus offer: ${props.bonus}`} >
					<p area-disabled="true" className="font-semibold font-montserrat md:text-left xl:text-center text-xl leading-6 text-black text-center">Bonus</p>
					<p area-disabled="true" className="font-normal font-montserrat md:text-left xl:text-center text-[28px] leading-[34px] text-black text-center px-14 md:px-0">{props.bonus}</p>
				</div>}
			</div>

			<div className="w-full flex xl:flex-1 items-center min-w-[190px] xl:max-w-[190px] 2xl:max-w-[306px] xl:w-auto">
				<ButtonComponent label="Bet Now" />
			</div>
		</div>
	)
};

export default Card;