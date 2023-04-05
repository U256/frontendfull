import { cleanEnv, str, port } from 'envalid'

export const validateEnv = () => {
	cleanEnv(process.env, {
		NODE_ENV: str({ choices: ['development', 'production'] }),
		PORT: port({ default: 3000 }),
		MONGO_PATH: str(),
		MONGO_USR: str(),
		MONGO_PSW: str(),
	})
}
