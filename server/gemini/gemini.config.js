import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleAIFileManager } from "@google/generative-ai/server"
import { configDotenv } from "dotenv";
configDotenv()

export const genAI = new GoogleGenerativeAI(process.env.API_KEY)

export const fileManager = new GoogleAIFileManager(process.env.API_KEY)


