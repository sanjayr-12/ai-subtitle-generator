import model from "../gemini/gemini.config.js";
import { configDotenv } from "dotenv";
configDotenv();

export async function getContent(file) {
  try {
    const result = await model.generateContent([
      {
        fileData: {
          mimeType: file.mimeType,
          fileUri: file.uri,
        },
      },
      {
        text: process.env.UTIL_TEXT,
      },
    ]);
    return result.response.text();
  } catch (error) {
    throw error;
  }
}
