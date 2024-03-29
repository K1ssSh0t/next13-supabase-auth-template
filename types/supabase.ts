export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      images: {
        Row: {
          id: number;
          created_at: string | null;
          name: string | null;
          href: string | null;
          username: string | null;
          imagesrc: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          name?: string | null;
          href?: string | null;
          username?: string | null;
          imagesrc?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          name?: string | null;
          href?: string | null;
          username?: string | null;
          imagesrc?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
