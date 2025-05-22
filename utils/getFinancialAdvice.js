// utils/getFinancialAdvice.js
// import OpenAI from "openai";
import { GoogleGenAI } from "@google/genai";


// Initialize the OpenAI client
// const openai = new OpenAI({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
//   dangerouslyAllowBrowser: true,
// });
const ai = new GoogleGenAI({ apiKey: "AIzaSyDTBeoL7-_vUywCF7k0QnuiTjpj-GO7034" });


// Function to fetch user-specific data (mocked for this example)

// Function to generate personalized financial advice
const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  console.log(totalBudget, totalIncome, totalSpend);
  try {
    const userPrompt = `
      Based on the following financial data:
      - Total Budget: ${totalBudget} USD 
      - Expenses: ${totalSpend} USD 
      - Incomes: ${totalIncome} USD
      Provide detailed financial advice in 2 sentence to help the user manage their finances more effectively.
    `;

    // Send the prompt to the OpenAI API
    const response = await ai.models.generateContent({
model: "gemini-2.0-flash",
contents: userPrompt ,
});
    // const chatCompletion = await openai.chat.completions.create({
    //   model: "gpt-4",
    //   messages: [{ role: "user", content: userPrompt }],
    // });

    // Process and return the response
    // const advice =  response.text      //chatCompletion.choices[0].message.content;

    console.log(response.text);
    return response.text;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Sorry, I couldn't fetch the financial advice at this moment. Please try again later.";
  }
};

export default getFinancialAdvice;
