'use client';
import { motion } from 'framer-motion';
import React from 'react';

type SectionDividerProps = {
	my?: string;
};

export default function SectionDivider({ my = '10' }: SectionDividerProps) {
	return (
		<motion.div
			className={`bg-gray-200 my-${my} h-16 w-1 rounded-full hidden sm:block`}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.15 }}
		></motion.div>
	);
}
