'use client';

import React from 'react';
import SectionHeading from './section-heading';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useInView } from 'react-intersection-observer';
import { useSectionInView } from '@/lib/hooks';

export default function Experience() {
	const { ref } = useSectionInView('Experience', 0.5);

	return (
		<section ref={ref} id="experience" className="mb-20 scroll-mt-28">
			<SectionHeading>My experience</SectionHeading>
			<VerticalTimeline lineColor="" animate={true}>
				{experiencesData.map((item, index) => {
					const { ref, inView } = useInView({
						triggerOnce: true,
						threshold: 0.8,
					});
					return (
						<div key={index} ref={ref} className="vertical-timeline-element">
							<VerticalTimelineElement
								visible={inView}
								contentStyle={{
									background: '#F3F4F6',
									boxShadow: 'none',
									border: '1px solid rgba(0, 0, 0, 0.05)',
									textAlign: 'left',
									padding: '1.3rem 2rem',
								}}
								contentArrowStyle={{
									borderRight: '0.4rem solid #9CA3AF',
								}}
								date={item.date}
								icon={item.icon}
								iconStyle={{
									background: 'white',
									fontSize: '1.5rem',
								}}
							>
								<h3 className="font-semibold capitalize">{item.title}</h3>
								<p className="font-normal !mt-0 ">{item.location}</p>
								<p className="!mt-1 !font-normal text-gray-700">
									{item.description}
								</p>
							</VerticalTimelineElement>
						</div>
					);
				})}
			</VerticalTimeline>
		</section>
	);
}
