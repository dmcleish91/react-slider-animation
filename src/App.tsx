import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from './data/images';
function App() {
	const [width, setWidth] = useState(0);
	const carousel = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth);
	}, []);
	return (
		<div className='App'>
			<motion.div
				className='carousel'
				whileTap={{ cursor: 'grabbing' }}
				ref={carousel}>
				<motion.div
					drag='x'
					dragConstraints={{ right: 0, left: -width }}
					className='inner-carousel'>
					{images.map((image) => {
						return (
							<motion.div
								className='item'
								key={image}>
								<img src={image} />
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</div>
	);
}

export default App;
