'use server';

import { getErrorMessage, validateString } from '@/lib/utils';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	const sender = formData.get('senderEmail');
	const message = formData.get('message');

	if (!validateString(sender, 500)) {
		return {
			error: 'Invalid email',
		};
	}

	if (!validateString(message, 5000)) {
		return {
			error: 'Invalid message',
		};
	}

	try {
		await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: 'stratosfloor@hotmail.com',
			subject: 'Message from contact form',
			reply_to: sender as string,
			text: message as string,
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}
};
