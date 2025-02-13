import ProfileForm from "@/components/Profile/ProfileForm";
import { getUser } from "@/lib/supabase/get-user";
import Image from "next/image";
import { redirect } from "next/navigation";

const ProfilePage = async () => {
  const { user } = await getUser();
  if (!user) return redirect("/");
  return (
    <div className="flex  gap-2 justify-center flex-1 mt-8">
      <div className="w-full flex flex-col ">
        <Image
          src={user.avatarUrl || "/images/icons/avatar.webp"}
          className="rounded-full object-cover justify-center items-center mx-auto "
          width={70}
          height={70}
          alt={user.username}
        />
        <ProfileForm user={user} />
      </div>
    </div>
  );
};

export default ProfilePage;
