"use server";

import { createClient as createServiceClient } from "@supabase/supabase-js";
import { sendWelcomeEmail } from "@/lib/email/welcome";

function getServiceSupabase() {
  return createServiceClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

type SignupResult =
  | { success: true }
  | { success: false; error: string };

export async function joinWaitlist(formData: {
  email: string;
  role?: string;
  zipCode?: string;
  referralSource?: string;
}): Promise<SignupResult> {
  const { email, role, zipCode, referralSource } = formData;

  if (!email || !email.includes("@")) {
    return { success: false, error: "Please enter a valid email." };
  }

  const supabase = getServiceSupabase();

  const mappedRole =
    role === "quest-giver"
      ? "quest_giver"
      : role === "both"
      ? "both"
      : "adventurer";

  const { data, error } = await supabase
    .from("waitlist_signups")
    .insert({
      email: email.toLowerCase().trim(),
      role: mappedRole,
      zip_code: zipCode?.trim() || null,
      referral_source: referralSource || null,
    })
    .select("unsubscribe_token")
    .single();

  if (error) {
    if (error.code === "23505") {
      // Unique constraint violation — already signed up
      return { success: false, error: "You're already on the waitlist!" };
    }
    console.error("Waitlist signup error:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }

  // Send welcome email (fire-and-forget — don't block signup on email delivery)
  sendWelcomeEmail(
    email.toLowerCase().trim(),
    mappedRole,
    data.unsubscribe_token
  ).catch((err) => console.error("Welcome email failed:", err));

  return { success: true };
}
