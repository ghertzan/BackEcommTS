export const roles = {
	USER: "user",
	ADMIN: "admin",
	GUEST: "guest",
} as const;

export type Roles = (typeof roles)[keyof typeof roles];
