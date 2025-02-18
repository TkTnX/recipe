import { createAdminClient } from "./supabase/server";

export const newImage = async (bucket: string, file: File) => {
  try {
    const supabase = createAdminClient();

    const { data: uploadedFile, error: uploadedError } = await supabase.storage
      .from(bucket)
      .upload(`${new Date().getTime()}`, file);

    if (uploadedError) throw new Error(uploadedError.message);

    const publicUrl = supabase.storage
      .from(bucket)
      .getPublicUrl(uploadedFile.path);

    if (!publicUrl) return null;

    return publicUrl.data.publicUrl;
  } catch (error) {
    console.log(error);
    return null;
  }
};
