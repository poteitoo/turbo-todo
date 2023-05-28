import { SvelteKitAuth } from '@auth/sveltekit';
import {
	EMAIL_FROM,
	EMAIL_SERVER_HOST,
	EMAIL_SERVER_PASSWORD,
	EMAIL_SERVER_PORT,
	EMAIL_SERVER_USER,
	GITHUB_ID,
	GITHUB_SECRET
} from '$env/static/private';
import GitHub from '@auth/core/providers/github';
import EmailProvider from '@auth/core/providers/email';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handle = SvelteKitAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore-next-line
		GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET }),
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore-next-line
		EmailProvider({
			server: {
				host: EMAIL_SERVER_HOST,
				port: EMAIL_SERVER_PORT,
				auth: {
					user: EMAIL_SERVER_USER,
					pass: EMAIL_SERVER_PASSWORD
				}
			},
			from: EMAIL_FROM
		})
	],
	callbacks: {
		async signIn({ user, account, profile, email }) {
			if (!user.email) return '/';

			return '/dashboard';
		},
		async redirect({ url, baseUrl }) {
			return baseUrl;
		}
	}
});
