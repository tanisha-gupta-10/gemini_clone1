import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyCiVAtV_QUbP3WYL6nJZTSm76FKE07am5Y";  // Use environment variables for security
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const model2 = genAI.getGenerativeModel({ model: 'models/gemini-1.5-pro' });

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function processImageAndCaption(image) {
    try {
        // Fetch the image as a Blob
        const imageResp = await fetch(
            image
        ).then((response) => response.blob());

        // Convert the Blob to Base64
        const imageBase64 = await new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(",")[1]);
            reader.onerror = reject;
            reader.readAsDataURL(imageResp);
        });

        // Generate a caption for the image
        const result = await model.generateContent([
            {
                inlineData: {
                    data: imageBase64,
                    mimeType: "image/jpeg",
                },
            },
            "Caption this image.",
        ]);

        console.log("Image Caption:", result.response.text());
        solveMathProblem(`solve the equation ${result.response.text()} and give the result only and nothing else`)
    } catch (error) {
        console.error("Error processing image:", error);
    }
}


async function solveMathProblem(prompt) {
    try {
        const chatSession = model.startChat({
            generationConfig,
            history: [],
        });

        // Send the math problem as the prompt
        const result = await chatSession.sendMessage(prompt);

        if (result && result.response) {
            console.log(result.response.text());  // Return the solution as text

            return await result.response.text();
        } else {
            console.error("No response received.");
        }
    } catch (error) {
        console.error("Error with Google Generative AI:", error);
    }
}
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

export { run, processImageAndCaption, solveMathProblem };  // Ensure both are exported
