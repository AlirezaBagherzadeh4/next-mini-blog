import {
  ProfileUpdateInput,
  profileUpdateSchema,
} from "@/app/validators/profile";
import type { IUserProfile } from "@/app/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

export const fetchProfile = async (): Promise<IUserProfile> => {
  const res = await fetch(`${BASE_URL}/profile`, { next: { revalidate: 0 } });
  if (!res.ok) throw new Error("Failed to fetch profile");
  return res.json();
};

export const updateProfile = async (data: ProfileUpdateInput) => {
  const parsed = profileUpdateSchema.safeParse(data);

  if (!parsed.success) {
    throw new Error(parsed.error.issues?.[0]?.message ?? "Invalid input");
  }

  const res = await fetch(`${BASE_URL}/profile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(parsed?.data),
  });
  if (!res.ok) throw new Error("Failed to update profile");
  return res.json();
};
