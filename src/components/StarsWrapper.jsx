const StarsWrapper = ({ rating }) => {
	const arrayListComponents = [];

	for (let i = 0; i < 5; i++) {
		arrayListComponents.push(
			<span key={i}>
				<img
					className="w-[31px] h-[31px]"
					src={`/icons/${i + 1 <= rating ? 'star.svg' : 'star-empty.svg'}`}
					alt={i + 1 <= rating ? 'Filled star icon' : 'Empty star icon'}
				/>
			</span>
		);
	}

	return arrayListComponents;
};

export default StarsWrapper;