import React from 'react';

export default function Footer() {
	return (
		<footer className="mb-4 px-4 text-center text-gray-500 ">
			<small className="block mb-2 text-xs">
				&copy; 20203 Emil Norén. All right reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website: </span> built with
				React & Next.js (App router & Server Actions), TypeScript, Tailwind CSS,
				Framer Motion, React Email & Resend, Vercel hosting.
			</p>
		</footer>
	);
}
