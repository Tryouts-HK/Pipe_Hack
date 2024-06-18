export interface Group {
    id: string;
    name: string;
    description: string;
    pollingUnit?: string;
    lga?: string;
    state?: string;
  }
  
  export interface Post {
    id: string;
    groupId: string;
    author: string;
    content: string;
    timestamp: string;
  }
  