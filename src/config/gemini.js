import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCiVAtV_QUbP3WYL6nJZTSm76FKE07am5Y";  // Use environment variables for security
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};


async function run(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        const result = await chatSession.sendMessage(prompt);
        if (result && result.response) {
            return await result.response.text();  // Ensure this returns the text
        } else {
            console.error("No response received.");
        }
    } catch (error) {
        console.error("Error with Google Generative AI:", error);
    }
}

export { run };  // Ensure both are exported
