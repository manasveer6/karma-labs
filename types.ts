export interface User {
  image_profile?: string;
  jwt: string;
  userId: number;
  username: string;
}

export interface JWTInterface {
  token: string;
  userId: string;
  username: string;
}

export interface AvidiaUser {
  nbspid: number;
  git_id: string;
  avc_balance: number;
  xp: number;
}

export interface AvidiaCohort {
  id: string;
  slug: string;
  metadata: {
    name: string;
    description: string;
    start_date: Date;
    end_date: Date;
    location: string;
    instructors: string[];
  };
  skills: string[];
  prerequisites: string[];
  syllabus_id: string;
  offer_price: number;
  thumbnail: string[];
  catch_phrase: string;
}

export interface AvidiaSyllabus {
  id: string;
  modules: {
    id: string;
    metadata: {
      name: string;
      description: string;
      skills?: string[];
      prerequisites?: string[];
      instructors?: string[];
      start_date: Date;
      end_date: Date;
    };
    lessons: {
      id: string;
      metadata: {
        name: string;
        description: string;
        skills?: string[];
        prerequisites?: string[];
        instructors?: string[];
        start_date: Date;
        end_date: Date;
      };
      content: string;
    }[];
  }[];
}

export interface AvidiaComments {
  id: string;
  for: string;
  comment: string;
  by: number;
  reply_to?: string;
  timestamp: Date;
}

export interface AvidiaQuizzes {
  id: string;
  name: string;
  description: string;
  skills: string[];
  creator: string;
  cohort_id: string;
  total_duration: number; //in seconds
  prerequisites?: string[];
  start_date: Date;
  end_date: Date;
  questionIDS: string[];
}

export interface AvidiaQuizQuestions {
  id: string;
  question: string;
  description: string;
  score: number;
  negative_score: number; //0 if no negative score
  options: {
    id: string;
    option: string;
    correct: boolean;
  }[];
}

export interface AvidiaQuizResponses {
  id: string;
  quiz_id: string;
  user_id: string;
  responses: {
    question_id: string;
    response: string;
  }[];
  score: number;
  negative_score: number;
  total_score: number;
  timestamp: Date;
  time_taken: number; //in seconds
  ai_analysis: {
    weakness: string;
    strength: string;
    overall_feedback: string;
    xp: number;
  };
}

export interface userLab {
  id: string;
  name: string;
  lab_id: string;
  status: string;
  autokill: boolean;
  balance: number;
}

export interface AvidiaLabs {
  id: string;
  name: string;
  thumbnail: string;
  screenshots: string[];
  description: string;
  skills: string[];
  rate: number;
  image: string;
}

export interface AvidiaLabsInternal {
  id: string;
  lab_id: string;
  image: string;
  port: string;
  ram: string;
  cpu: string;
  image_secret: boolean;
  use_default_resources: boolean;
}

export interface AvidiaUserLabs {
  id: string;
  user_id: number;
  name: string;
  lab_id: string;
  status: string;
  timestamp: Date;
  autokill: boolean;
  balance: number;
}
