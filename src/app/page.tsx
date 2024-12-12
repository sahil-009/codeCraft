import { SignUpButton, SignedOut, SignedIn, SignOutButton,  } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignUpButton>
           <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
            sign up</button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <SignOutButton>
          <button className="bg-red-500 text-white font-bold py-2 px-4 rounded">
            signout</button>
        </SignOutButton>
      </SignedIn>


    </div>
  );
}
