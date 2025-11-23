import { GoogleGenAI, Type } from "@google/genai";
import { CountryInfo } from "../types";

// Helper to ensure API key exists, though system prompt implies it's injected.
const getApiKey = (): string => {
  const key = process.env.API_KEY;
  if (!key) {
    console.warn("API_KEY is not set. Gemini features will fail.");
    return "";
  }
  return key;
};

export const getCountryComplianceInfo = async (country: string): Promise<CountryInfo> => {
  const apiKey = getApiKey();
  if (!apiKey) throw new Error("API Key missing");

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `Provide a structured summary of Employer of Record (EOR) compliance data for hiring full-time employees in ${country}. 
  Focus on employer tax costs (percentage estimate), standard probation periods, mandatory statutory benefits, termination notice periods, and local currency.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            countryName: { type: Type.STRING },
            employerTaxRange: { type: Type.STRING, description: "Estimated employer social security/tax cost as a percentage or range" },
            probationPeriod: { type: Type.STRING, description: "Standard statutory probation period" },
            mandatoryBenefits: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "List of top 3-5 mandatory statutory benefits"
            },
            terminationNotice: { type: Type.STRING, description: "Standard notice period requirement" },
            currency: { type: Type.STRING, description: "Local currency code (e.g., EUR, USD)" }
          },
          required: ["countryName", "employerTaxRange", "probationPeriod", "mandatoryBenefits", "terminationNotice", "currency"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from Gemini");
    
    return JSON.parse(text) as CountryInfo;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};