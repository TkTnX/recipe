"use client";
import { useActionState, useState } from "react";
import { NewCover } from "../New";
import Button from "../ui/buttons/button";
import FormInput from "../ui/FormInput";
import { Textarea } from "../ui/textarea";
import { createArticle } from "@/actions/article-actions";
import { useRouter } from "next/navigation";
import { createArticleInputs } from "@/types";
import { formActionInitialState } from "@/constants";

// TODO: При создании статьи перевод на другую страницу


const NewArticleForm = () => {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(
    createArticle,
    formActionInitialState
  );
  const [data, setData] = useState<createArticleInputs>({
    title: null,
    text: null,
  });
  const onSubmit = async (formData: FormData) => {
    try {
      await formAction(formData);
      if (state.success && state.id) {
        router.push(`/articles/${state.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mt-10 flex flex-col gap-4" action={onSubmit}>
      <NewCover type="ARTICLE" />
      <FormInput
        onChange={(e) => setData({ ...data, title: e.target.value })}
        disabled={pending}
        className="disabled:opacity-50 disabled:cursor-not-allowed text-black"
        label="Заголовок"
        name="title"
        type="text"
        placeholder="Название статьи..."
      />
      <label>
        <span className="font-light text-[#aaa]">Текст статьи</span>
        <Textarea
          onChange={(e) => setData({ ...data, text: e.target.value })}
          disabled={pending}
          placeholder="Текст статьи..."
          name="text"
          className="mt-3 font-light text-black flex flex-col gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        />
      </label>
      <Button
        disabled={pending || !data.title || !data.text}
        className="rounded-xl mx-auto"
      >
        Создать статью
      </Button>
      {state.error && <p className="text-red-500">{state.error}</p>}
    </form>
  );
};

export default NewArticleForm;
