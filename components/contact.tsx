'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail';
import SubmitBtn from './submit-btn';

export default function Contact() {
	const { ref } = useSectionInView('Contact', 0.5);

	return (
		<motion.section
			ref={ref}
			id="contact"
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
			initial={{
				opacity: 0,
			}}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact me</SectionHeading>
			<p className="text-gray-700 -mt-5">
				Please contact me directly att{' '}
				<a className="underline " href="mailto:example@gmail.com">
					example@gmail.com
				</a>
				or through this form.
			</p>
			<form
				className="flex flex-col mt-6"
				action={async (formdata) => {
					await sendEmail(formdata);
				}}
			>
				<input
					className="h-14 rounded-lg borderBlack px-4"
					name="senderEmail"
					type="email"
					required
					maxLength={500}
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4"
					name="message"
					placeholder="Your message"
					required
					maxLength={5000}
				/>
				<SubmitBtn />
			</form>
		</motion.section>
	);
}
