import { supabase } from "../config/supabase.js";

export const getAllProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) throw new Error(error.message);
  return data;
};