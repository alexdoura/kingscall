import { SignUp } from '@clerk/nextjs';

export default function SignUpPage() {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" unsafeMetadata={{ skipCaptcha: true }} />
    </main>
  );
}
