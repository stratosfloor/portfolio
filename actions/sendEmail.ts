'use server';

import ContactFormEmail from '@/email/contact-form-email';
import { getErrorMessage, validateString } from '@/lib/utils';
import React from 'react';
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

	let data;
	try {
		data = await resend.emails.send({
			from: 'Contact Form <onboarding@resend.dev>',
			to: 'stratosfloor@hotmail.com',
			subject: 'Message from contact form',
			reply_to: sender as string,
			react: React.createElement(ContactFormEmail, {
				message: message as string,
				senderEmail: sender as string,
			}),
		});
	} catch (error: unknown) {
		return {
			error: getErrorMessage(error),
		};
	}

	return {
		data,
	};
};
