import { create } from "zustand";
import axios from "axios";
import { Article } from "@/prisma/generated/client";

interface ArticlesStore {
  loading: boolean;
  error: boolean;
  articles: Article[];

  fetchArticles: (value: string, page: number | null) => Promise<Article[]>;
}

export const articlesStore = create<ArticlesStore>((set, get) => ({
  loading: false,
  error: false,
  articles: [],

  fetchArticles: async (value, page) => {
    set({ loading: true });
    try {
      
      const QPage = page ? `&page=${page}` : "";
      const articles = await axios.get(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/articles?value=${value}${QPage}`
      );

      if (!articles) throw new Error("Articles not found");

      set({ articles: articles.data });
      return articles.data;
    } catch (error) {
      console.log(error);
      set({ error: true });
    } finally {
      set({ loading: false });
    }
  },
}));
