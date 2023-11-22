export default function FadeRateSelect({ duration, setDuration }) {

	const fadeRates = [2, 3, 5, 10, 30, 60];

	const handleRateSelect = (e) => {
		setDuration(e.target.value);
	}

	return (

		<div className="border-red-500 text-red-500 border-t-4 mt-10">

			<h3
				className="text-center mt-6"
			>
				Fade Rate Selection
			</h3>

			<div className="flex flex-col">

				<div className="flex justify-center mb-6">
					<h3 className="mr-2">
						Current Fade Rate (Duration):
					</h3>

					<h3 className="">
						{duration} seconds
					</h3>
				</div>

				<div className="grid grid-cols-3 place-items-center gap-6 text-red-500">

					{fadeRates.map((element, index) => (
						<button
							key={element}
							type="radio"
							id={index}
							className="
								appearance-none
								text-red-500
								text-center 
								border-red-500
								border-2
								rounded-xl
								focus:bg-red-300
								w-24
								p-1
							"
							name={element}
							value={element}
							onClick={(e) => setDuration(e.target.value)}
						>
							{element} Sec
						</button>
					))}
				</div>

			</div>

		</div>

	)

};
