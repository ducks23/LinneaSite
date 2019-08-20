import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './tStyle.css';
import './style.css';

const content = [
	{
		title: 'My Experience',
		description:"Linnea is an incredible yoga teacher and person. She is patient, thoughtful, genuine and inspiring. Her classes are well considered and seamlessly tie storytelling, body awareness, meditation, and exercise together. I have taken yoga classes for over 10 years but did not embrace or understand yoga as part of my daily life until taking classes with her. Linnea's attentiveness to body awareness, anatomy, and enthusiasm for learning has had a profound effect on me. I try to take classes with her every chance I get. Her positivity, understanding of movement and love of teaching make her a joy to work with and learn from.",
		image: 'https://i.imgur.com/ZXBtVw7.jpg',
		user: 'Emily Nachison',
		userProfile: 'https://i.imgur.com/JSW6mEk.png'
	},
	{
		title: 'Consitent',
		description:
		'Despite taking many classes over the years, a consistent yoga practice eluded me until I took my first class with Linnea. The dedication, intention, and joy that she brings to her classes is the foundation for my daily practice. Linnea brings authenticity, a love of movement, and personal insight to her classes. Although I know she prepares extensively for her classes, they do not feel rote, repetitive, or that boxes are being ticked. It feels as though she is along with us, excited and curious, as we discover the next movement. And that excitement is infectious.',
		image: 'https://i.imgur.com/DCdBXcq.jpg',
		user: 'Michael Endo',
		userProfile: 'https://i.imgur.com/0Clfnu7.png'
	},
	{
		title: 'Wonderful :)',
		description:
		'Linnea’s love for this practice is contagious, which makes it a delight to attend her classes. Her teaching style is a playfully choreographed dance of traditional and non-traditional postures assisted with a detailed anatomy lesson exploring our felt senses. I truly appreciate any class that prompts me to muse over my body’s cells, organs and/or muscles to better understand my internal systems. Linnea offers a holistic approach to moving, strengthening and perceiving the body that fills me with just the right balance of physical and cerebral education.',
		image: 'https://i.imgur.com/DvmN8Hx.jpg',
		user: 'Adrian E.',
		userProfile: 'https://i.imgur.com/4KeKvtH.png'
	}
];

const Testimonials = () => (
	<div>
		<div className="wrapper">
			<h1>Testimonials</h1>
		</div>
		<Slider className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
					
					</div>
					<section>
						<img src={item.userProfile} alt={item.user} />
						<span>
							Posted by <strong>{item.user}</strong>
						</span>
					</section>
				</div>
			))}
		</Slider>
	</div>
);
export default Testimonials
