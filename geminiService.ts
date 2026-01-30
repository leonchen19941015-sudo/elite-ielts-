
import { GoogleGenAI, Type } from "@google/genai";
import { IELTSModule, Feedback } from "./types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getModuleCoaching = async (module: IELTSModule, userPrompt: string) => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: userPrompt,
    config: {
      systemInstruction: `You are a world-class IELTS Coach with 20 years of experience. 
      Your student is currently at Band 6.5 and needs to reach Band 8.0.
      Module: ${module}. 
      Provide specific, high-level strategies, advanced vocabulary, and complex grammatical structures. 
      Be encouraging but academically rigorous. Focus on what makes a Band 8 answer distinct from a Band 7.`,
      temperature: 0.7,
    },
  });
  return response.text;
};

export const evaluateEssay = async (essay: string, task: string): Promise<Feedback> => {
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: `Task: ${task}\n\nEssay: ${essay}`,
    config: {
      responseMimeType: "application/json",
      systemInstruction: "You are an official IELTS Examiner. Evaluate the following essay based on Band 8 criteria. Be precise and strict.",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          score: { type: Type.NUMBER, description: "Predicted overall band score" },
          criteria: {
            type: Type.OBJECT,
            properties: {
              taskResponse: { type: Type.STRING },
              coherence: { type: Type.STRING },
              lexical: { type: Type.STRING },
              grammar: { type: Type.STRING }
            },
            required: ["taskResponse", "coherence", "lexical", "grammar"]
          },
          suggestions: {
            type: Type.ARRAY,
            items: { type: Type.STRING }
          },
          sampleModelAnswer: { type: Type.STRING, description: "A Band 9 version of a paragraph from this essay" }
        },
        required: ["score", "criteria", "suggestions"]
      }
    }
  });

  return JSON.parse(response.text || '{}');
};
