export interface User {
  id: string;
  name: string;
  usn: string;
  email: string;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  semester: number;
  marks: number;
  fee: number;
}

export interface RevaluationRequest {
  id: string;
  userId: string;
  subjects: Subject[];
  status: 'pending' | 'processing' | 'completed';
  totalFee: number;
  paymentStatus: 'pending' | 'completed' | 'failed';
  createdAt: Date;
}