
export enum IELTSModule {
  LISTENING = 'Listening',
  READING = 'Reading',
  WRITING = 'Writing',
  SPEAKING = 'Speaking'
}

export interface UserProgress {
  currentBand: number;
  targetBand: number;
  completedModules: string[];
}

export interface Feedback {
  score: number;
  criteria: {
    taskResponse: string;
    coherence: string;
    lexical: string;
    grammar: string;
  };
  suggestions: string[];
  sampleModelAnswer?: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
