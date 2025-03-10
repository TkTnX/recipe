"use client";
import { updateUser } from "@/actions/user-actions";
import FormInput from "../ui/FormInput";
import { Textarea } from "../ui/textarea";
import SignOutButton from "./SignOutButton";
import { UserType } from "@/types";

const ProfileForm = ({ user }: { user: UserType }) => {
  const updateUserWithUser = updateUser.bind(null, user);

  return (
    <form
      action={updateUserWithUser}
      className="w-full flex flex-col gap-4 mt-5"
    >
      <FormInput
        type="file"
        placeholder="Ваш аватар"
        label="Аватар"
        className="cursor-pointer"
        name="avatarUrl"
      />
      <FormInput
        type="text"
        placeholder="Ваше имя..."
        name="username"
        label="Имя"
        defaultValue={user.username}
      />
      <FormInput
        type="email"
        placeholder="Ваша почта..."
        name="email"
        label="Почта"
        defaultValue={user.email}
      />
      <label className="font-light text-[#aaa]">
        Описание
        <Textarea
          name="bio"
          className="w-full p-2 rounded text-black"
          defaultValue={user.bio || ""}
        />
      </label>
      <div className="flex sm:items-center justify-between flex-col sm:flex-row gap-4">
        <button className="text-center py-2 px-4 rounded bg-primary hover:opacity-80 transition text-sm tracking-wider sm:w-fit">
          СОХРАНИТЬ
        </button>
        <SignOutButton />
      </div>
    </form>
  );
};

export default ProfileForm;
