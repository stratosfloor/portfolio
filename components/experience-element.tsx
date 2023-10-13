import { useTheme } from '@/context/theme-context';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { experiencesData } from '@/lib/data';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

type ExperienceElementProps = {
	item: (typeof experiencesData)[number];
	index: number;
};

export default function ExperienceElement({
	item,
	index,
}: ExperienceElementProps) {
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.8,
	});
	const { theme } = useTheme();

	return (
		<div key={index} ref={ref} className="vertical-timeline-element">
			<VerticalTimelineElement
				visible={inView}
				contentStyle={{
					background:
						theme === 'light' ? '#F3F4F6' : 'rgba(255, 255, 255, 0.05)',
					boxShadow: 'none',
					border: '1px solid rgba(0, 0, 0, 0.05)',
					textAlign: 'left',
					padding: '1.3rem 2rem',
				}}
				contentArrowStyle={{
					borderRight:
						theme === 'light'
							? '0.4rem solid #9CA3AF'
							: '0.4rem solid rgba(255, 255, 255, 0.5)',
				}}
				date={item.date}
				dateClassName="min-[1170px]:mx-5"
				icon={item.icon}
				iconStyle={{
					background: theme === 'light' ? 'white' : 'rgba(255, 255, 255, 0.15)',
					fontSize: '1.5rem',
				}}
			>
				<h3 className="font-semibold capitalize">{item.title}</h3>
				<p className="font-normal !mt-0 ">{item.location}</p>
				<p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
					{item.description}
				</p>
			</VerticalTimelineElement>
		</div>
	);
}
